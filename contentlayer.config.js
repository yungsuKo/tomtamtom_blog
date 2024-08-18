import { defineDocumentType, makeSource } from 'contentlayer/source-files';
// import remarkGfm from 'remark-gfm';
// import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
// import rehypeHighlight from 'rehype-highlight';
// import rehypePrettyCode from 'rehype-pretty-code';
// import rehypeSlug from 'rehype-slug';
// import rehypeExternalLinks from 'rehype-external-links';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    desc: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    category: {
      type: 'string',
      resolve: (post) => {
        const [category, path] = post._raw.flattenedPath.split('/');

        return path === undefined ? '기타' : category;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
});
