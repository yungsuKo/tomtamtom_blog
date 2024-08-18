import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { Post, allPosts } from '.contentlayer/generated';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

function PostCard(post) {
  return (
    <div className="mb-8 hi">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <button className="text-gray-700 px-2 py-1 rounded-full bg-slate-200 text-xs w-fit	">
        {post.category}
      </button>
      <time dateTime={post.date} className="m-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const contentPerCategory = allPosts.reduce((acc, post) => {
    const category = post.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
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

  useEffect(() => {
    console.log(selectedCategories);
  }, [selectedCategories]);

  return (
    <div>
      <h1 className="mb-8 text-center text-2xl font-black">
        TomTamTom 개인 연구소
      </h1>
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.keys(contentPerCategory).map((category) => {
          return (
            <Button
              variant="outline"
              key={category}
              data-id={category}
              className={
                selectedCategories.includes(category) ? 'bg-cyan-700' : ''
              }
              onClick={onClickCategory}
            >
              {category}({contentPerCategory[category]})
            </Button>
          );
        })}
      </div>
      <div className="">
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
