"use client";

import { useState, useEffect } from "react";
import { LoginForm } from "./components/loginForm";
import { useRouter } from "next/navigation";
import type { User } from "@/src/types/user";
// 기본 관리자 계정
const adminData = {
    id: "locallee",
    password: "1234",
    nickname: "현지인",
};

export default function Login() {
    const router = useRouter();
    // 로그인 메세지
    const [loginMessage, setLoginMessage] = useState<string>("");
    // userData : 사용자 데이터
    // 초반엔 아무 값도 없을 수 있기 때문에 초기값은 null.
    // 타입스크립트에서 null 타입은 '| null>()' 형식으로 표현하고 괄호 안에 null 타입을 넣어준다.
    const [userData, setUserData] = useState<User | null>(null);

    // 컴포넌트 마운트 시 로컬 스토리지에서 사용자 데이터 가져오기
    useEffect(() => {
        try {
            const storedUserData = localStorage.getItem("userData");
            if (storedUserData) {
                const parsedData = JSON.parse(storedUserData);
                setUserData(parsedData);
                // console.log("저장된 사용자 정보 로드 완료:", parsedData);
            }
        } catch (error) {
            console.error("사용자 데이터 로드 실패:", error);
        }
    }, []);

    // 입력받은 아이디와 비밀번호가 맞는지 확인
    const handleLogin = (id: string, password: string) => {
        // 관리자 계정 확인
        if (id === adminData.id && password === adminData.password) {
            localStorage.setItem("isAdmin", "true");
            localStorage.setItem("isLogin", "true");
            localStorage.setItem("userData", JSON.stringify(adminData));
            //메인페이지로 이동
            router.push("/");
            return;
        }

        // 회원가입한 사용자 확인
        if (userData && id === userData.id && password === userData.password) {
            localStorage.setItem("isAdmin", "false");
            localStorage.setItem("isLogin", "true");
            localStorage.setItem("userData", JSON.stringify(userData));
            //메인페이지로 이동
            router.push("/");
            return;
        }

        // 로그인 실패
        setLoginMessage("아이디 또는 비밀번호가 틀렸습니다.");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
                <div className="text-center">
                    <h1 className="mt-6 text-8xl font-black text-gray-900">
                        로그인
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        계정 왜 없어요?{" "}
                        <a
                            href="/signup"
                            className="font-medium text-blue-600 hover:text-blue-500"
                        >
                            회원가입
                        </a>
                    </p>
                </div>
                <LoginForm onLogin={handleLogin} loginMessage={loginMessage} />
            </div>
        </div>
    );
}
