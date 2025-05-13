"use client";

import { useState } from "react";
import LoginForm from "./loginForm";

const sampleData = {
    id: "localee",
    password: "1234",
}

export default function Login() {
    // 로그인 메세지
    const [loginMessage, setLoginMessage] = useState<string>("");

    // 입력받은 아이디와 비밀번호가 맞는지 확인
    const handleLogin = (id: string, password: string) => {
        if (id === sampleData.id && password === sampleData.password) {
            setLoginMessage("로그인 성공");
        } else if (id !== sampleData.id || password !== sampleData.password) {
            setLoginMessage("아이디 또는 비밀번호가 틀렸습니다.");
        } else {
            setLoginMessage("로그인 실패");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
                <div className="text-center">
                    <h2 className="mt-6 text-6xl font-bold text-gray-900">
                    로그인
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                    계정이 없으신가요?{' '}
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                        회원가입
                    </a>
                    </p>
                </div>
                <LoginForm onLogin={handleLogin} loginMessage={loginMessage} />
            </div>
        </div>
    );
} 