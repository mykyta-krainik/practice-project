import { Link, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <header
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>
      </header>

      <main>
        <h1>My App</h1>

        <Outlet />
      </main>
    </>
  );
}