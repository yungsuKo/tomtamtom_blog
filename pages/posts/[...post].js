import { Post, allPosts } from '.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';

const mdxComponents = {
  a: ({ href, children }) => <Link href={href}>{children}</Link>,
};

export default function PostDetail({ params }) {
  console.log(params);
  const path = params.post.join('/');

  const post = allPosts.find((post) => {
    return post._raw.flattenedPath === path;
  });
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="mx-auto prose">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {new Intl.DateTimeFormat('en-US').format(new Date(post.date))}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <MDXContent className="max-w-xl" components={mdxComponents} />
    </article>
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
