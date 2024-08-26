import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { Post, allPosts } from '.contentlayer/generated';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function Home() {
  const posts = allPosts
    .filter((post) => post.category !== 'informations')
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  const contentPerCategory = Object.fromEntries(
    Object.entries(
      posts.reduce((acc, post) => {
        const category = post.category;
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {})
    ).sort(([, a], [, b]) => b - a)
  );
  const [categorySelectMode, setCategorySelectMode] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(
    Object.keys(contentPerCategory)
  );

  const onClickCategory = (e) => {
    if (
      selectedCategories.length === Object.keys(contentPerCategory).length &&
      !categorySelectMode
    ) {
      setCategorySelectMode(true);
      setSelectedCategories([e.target.dataset.id]);
    } else if (categorySelectMode) {
      if (selectedCategories.includes(e.target.dataset.id)) {
        setSelectedCategories(
          selectedCategories.filter((c) => c !== e.target.dataset.id)
        );
      } else {
        setSelectedCategories([...selectedCategories, e.target.dataset.id]);
      }
    }
  };

  function PostCard(post) {
    return (
      <div className="mb-8 max-w-[350px] min-w-[300px]">
        <h2 className="mb-1 text-xl text-wrap">
          <Link
            href={post.url}
            className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
          >
            {post.title}
          </Link>
        </h2>
        <button
          className="text-gray-700 px-2 py-1 rounded-full bg-slate-200 text-xs w-fit"
          data-id={post.category}
          onClick={onClickCategory}
        >
          {post.category}
        </button>
        <time dateTime={post.date} className="m-2 block text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
    );
  }

  useEffect(() => {
    console.log(selectedCategories);
  }, [selectedCategories]);

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {Object.keys(contentPerCategory).map((category) => {
          return (
            <Button
              variant="outline"
              key={category}
              data-id={category}
              className={
                selectedCategories.includes(category)
                  ? 'bg-cyan-200 dark:bg-cyan-700'
                  : ''
              }
              onClick={onClickCategory}
            >
              {category}({contentPerCategory[category]})
            </Button>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-between px-4">
        {posts
          .filter((post) => selectedCategories.includes(post.category))
          .map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        {posts.filter((post) => selectedCategories.includes(post.category))
          .length === 0 && (
          <p className="text-center text-gray-600">No posts found.</p>
        )}
      </div>
    </div>
  );
}
