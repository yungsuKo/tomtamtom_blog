import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-2xl py-8">
      <Header />
      {children}
    </div>
  );
}
