import Footer from './Footer';
import Header from './Header';
import { ThemeProvider } from 'next-themes';

export default function Layout({ children }) {
  return (
    <ThemeProvider attribute="class">
      <div className="">
        <Header />
        <div className="mx-auto max-w-3xl py-8 px-4 md:px-0">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
