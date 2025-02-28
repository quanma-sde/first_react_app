export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="text-4xl font-bold">Login</h1>
            <form className="flex flex-col gap-2">
                <label className="flex items-center gap-1">
                    Email <span className="text-red-500">*</span>
                </label>
                <input type="email" placeholder="Email" className="border p-2 rounded text-black" required />
                <label className="flex items-center gap-1">
                    Password <span className="text-red-500">*</span>
                </label>
                <input type="password" placeholder="Password" className="border p-2 rounded text-black" required />
                <button type="submit" className="button">Login</button>
            </form>
        </div>
    );
}
