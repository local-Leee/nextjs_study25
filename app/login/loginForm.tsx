"use client";

interface LoginFormProps {
    onLogin: (id: string, password: string) => void;
    loginMessage: string;
}

export default function LoginForm({ onLogin, loginMessage }: LoginFormProps) {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        onLogin(
            formData.get('id') as string,
            formData.get('password') as string,
        );
    };

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md space-y-4">
            <div>
                <label htmlFor="id" className="sr-only">
                아이디
                </label>
                <input
                id="id"
                name="id"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="아이디"
                />
            </div>
            <div>
                <label htmlFor="password" className="sr-only">
                비밀번호
                </label>
                <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="비밀번호"
                />
            </div>
                <p className="text-red-500 text-sm mt-1.5">
                    {loginMessage}
                </p>
            </div>

            <div className="flex items-center justify-between">
            <div className="flex items-center">
                <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                로그인 상태 유지
                </label>
            </div>

            <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                비밀번호를 잊으셨나요?
                </a>
            </div>
            </div>

            <div>
            <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                로그인
            </button>
            </div>
        </form>
    );
} 