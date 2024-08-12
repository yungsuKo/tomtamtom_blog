const fs = require('fs');
import matter from 'gray-matter';

const parsePost = async (postPath) => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = parsePostDetail(postPath);
  return { ...postAbstract, ...postDetail };
};

export const parsePostAbstract = (postPath) => {
  // category1/title1/content
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '');

  // category1, title1
  const [category, slug] = filePath.split('/');

  // /blog/category1/title1
  const url = `/blog/${categoryPath}/${slug}`;

  return { url, category, slug };
};

// MDX Detail
const parsePostDetail = async (postPath) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const dateString = dayjs(grayMatter.date)
    .locale('ko')
    .format('YYYY년 MM월 DD일');
  return { ...grayMatter, dateString, content, readingMinutes };
};
