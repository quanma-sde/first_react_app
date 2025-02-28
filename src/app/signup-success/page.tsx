export default function SignUpSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">Sign Up Successful</h1>
      <p className="text-lg">You have successfully signed up!</p>
      <a href="/login" className="text-blue-500 hover:underline">Go to Login</a>
    </div>
  );
}
