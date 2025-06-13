'use client';

interface LoginFormProps {
    // onLogin : 로그인 처리
    onLogin: (id: string, password: string) => void;
    // loginMessage : 로그인 메세지
    loginMessage: string;
}

export function LoginForm({ onLogin, loginMessage }: LoginFormProps) {

    const handleSubmit = (e: React.FormEvent) => {
        // 새로고침 방지
        e.preventDefault();
        // FormData : 자바스크립트 내장 객체. 
        const formData = new FormData(e.target as HTMLFormElement);
        // onLogin 콜백 함수 호출
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
                <div className="flex items-center relative group">
                    <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    로그인 상태 유지는
                    </label>
                    <div className="absolute right-0 text-center bottom-full mb-2 w-40 bg-gray-800 text-white text-sm py-2 px-3 rounded shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <p>지금 안돼요</p>
                        <div className="absolute bottom-0 right-3 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                    </div>
                </div>

                <div className="text-sm">
                    {/* 마우스 오버시 말풍선 나옴 */}
                    <div className="relative group">
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                            비밀번호를 잊어?
                        </a>
                        <div className="absolute right-0 text-center bottom-full mb-2 w-40 bg-gray-800 text-white text-sm py-2 px-3 rounded shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <p>기억나게 도와줄께요</p>
                            <div className="absolute bottom-0 right-3 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-poppins"
                >
                    로그인
                </button>
            </div>
        </form>
    );
} 