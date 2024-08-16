import Header from './Header';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-2xl py-8 px-4 md:px-0">{children}</div>
    </div>
  );
}
