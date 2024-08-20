import { Post, allPosts } from '.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

export default function PostDetail({ params }) {
  const path = params.post.join('/');
  const post = allPosts.find((post) => {
    return post._raw.flattenedPath === path;
  });
  const MDXContent = useMDXComponent(post.body.code);
  console.log('post.thumbnail', post.thumbnail);
  return (
    <>
      <article className="mx-auto prose">
        <div className="mb-8 text-center">
          {post.thumbnail ? (
            <div className="relative w-auto h-32">
              <Image
                src={post.thumbnail}
                alt=""
                fill
                className="object-cover object-top"
              />
            </div>
          ) : (
            <></>
          )}

          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            {new Intl.DateTimeFormat('en-US').format(new Date(post.date))}
          </time>
          <h1 className="text-3xl font-bold">{post.title}</h1>
        </div>
        <MDXContent className="max-w-xl" />
      </article>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { params } = context;
  return {
    props: {
      params,
    },
  };
};
