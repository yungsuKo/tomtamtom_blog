'use client';

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const onClick = (mode) => () => {
    setTheme(mode);
    console.log(mode);
  };

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded">
      {currentTheme === 'dark' ? (
        <BsFillMoonFill onClick={onClick('light')} />
      ) : (
        <BsFillSunFill onClick={onClick('dark')} />
      )}
    </div>
  );
};

export default ThemeToggle;
