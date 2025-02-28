import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <Link href="/login">
        <span className="button">Login</span>
      </Link>
      <Link href="/signup">
        <span className="button">Sign Up</span>
      </Link>
    </div>
  );
}
