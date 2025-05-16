"use client";

import { useRouter } from "next/navigation";
import { SignupForm } from "./components/signupForm";
import Link from "next/link";

export default function Signup() {
    const router = useRouter();
    
    const handleSignup = (userData: { id: string, nickname: string, password: string }) => {
        // 로컬 스토리지에 사용자 정보 저장
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log("회원가입 완료:", userData);
        
        // 회원가입 완료 후 로그인 페이지로 이동
        router.push("/login");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="mt-6 text-8xl font-black text-gray-900 text-center">
                        회원가입
                    </h1>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        당장 계정 생성하고 서비스 이용 하실게요
                    </p>
                </div>
                <SignupForm onSignup={handleSignup} />
            </div>        
            <div className="flex items-center justify-center mt-4">
                <Link href="/login" className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    <svg className="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    로그인 페이지로
                </Link>
            </div>
        </div>
    );
}