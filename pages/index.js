import path from 'path'; // 파일 경로 조작을 위한 Node.js 내장 모듈
import matter from 'gray-matter'; // Markdown 파일의 front matter(metadata)를 추출하는 라이브러리
const fs = require('fs'); // 파일 시스템 모듈

export default function PostListPage({ allPostsData }) {
  // const postList = getPostList();
  console.log(allPostsData);
  return (
    <section>
      <section>
        <ul></ul>
      </section>
    </section>
  );
}

export const getServerSideProps = () => {
  const postsDirectory = path.join(process.cwd(), 'posts/frontend'); // Markdown 파일들이 있는 디렉토리 경로
  const fileNames = fs.readdirSync(postsDirectory); // 해당 디렉토리 내 파일 목록을 동기적으로 읽어옵니다.
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, ''); // 파일 이름에서 확장자를 제거하여 id로 사용합니다.
    // Markdown 파일을 읽어옵니다.
    const fullPath = path.join(postsDirectory, fileName); // 전체 파일 경로
    const fileContents = fs.readFileSync(fullPath, 'utf8'); // 파일 내용을 UTF-8 형식으로 읽어옵니다.
    const matterResult = matter(fileContents); // gray-matter 라이브러리를 사용하여 front matter를 추출합니다.
    console.log({
      id,
      ...matterResult.data, // front matter 데이터를 반환합니다.
    });
    return {
      id,
      ...matterResult.data, // front matter 데이터를 반환합니다.
      date: matterResult.data.date.toString(), // convert date to string
    };
  });

  // 날짜를 기준으로 포스트 데이터를 정렬합니다.
  return { props: { allPostsData } };
};
