"use client";

import { useState } from "react";

// 회원가입 폼 컴포넌트 속성 타입 정의
interface SignupFormProps {
    onSignup: (userData: { id: string, nickname: string, password: string }) => void;
}

// 회원가입 폼 컴포넌트
export function SignupForm({ onSignup }: SignupFormProps) {
    // 폼 데이터 상태 관리
    const [formData, setFormData] = useState({
        id: "",
        nickname: "",
        password: "",
        confirmPassword: ""
    });
    // 메시지 상태 관리
    const [message, setMessage] = useState("");

    // type: React.ChangeEvent<HTMLInputElement> 은 입력 요소의 변경 이벤트를 나타내는 타입
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // e.target : 이벤트가 발생한 요소
        // name : 이벤트가 발생한 요소의 이름
        // value : 이벤트가 발생한 요소의 값
        const { name, value } = e.target;
        setFormData(prev => ({
            // 이전 상태를 스프레드 연산자로 복사
            ...prev,
            // 이벤트가 발생한 요소의 이름을 키로 사용해 해당 필드만 새로운 값으로 업데이트, 나머지 필드들은 그대로 유지
            [name]: value
        }));
    };

    // React.FormEvent 란 폼 제출 이벤트를 나타내는 타입
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // 비밀번호 일치 여부 확인
        if (formData.password !== formData.confirmPassword) {
            setMessage("비밀번호가 일치하지 않습니다.");
            return;
        }
        
        // 회원가입 처리
        onSignup({
            id: formData.id,
            nickname: formData.nickname,
            password: formData.password
        });
    };

    // 비밀번호 일치 여부 확인
    const passwordsMatch = formData.password !== "" && formData.password === formData.confirmPassword;

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div>
                    <label htmlFor="id" className="block text-sm font-medium text-gray-700">아이디</label>
                    <input
                        id="id"
                        name="id"
                        type="text"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="아이디를 입력하세요"
                        value={formData.id}
                        onChange={handleChange}
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="nickname" className="block text-sm font-medium text-gray-700">닉네임</label>
                    <input
                        id="nickname"
                        name="nickname"
                        type="text"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="닉네임을 입력하세요"
                        value={formData.nickname}
                        onChange={handleChange}
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">비밀번호</label>
                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="비밀번호를 입력하세요"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {/* 조건부 렌더링 : 비밀번호가 일치하면 오른쪽 조건을 평가 */}
                        {passwordsMatch && (
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 mt-1 pointer-events-none">
                                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        )}
                    </div>
                    {/* 조건부 렌더링 : 비밀번호가 일치하지 않으면 오른쪽 조건을 평가 */}
                    {passwordsMatch || (
                        <p className="text-red-500 text-sm mt-1.5">
                            {message}
                        </p>
                    )}
                </div>

                <div className="mt-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">비밀번호 확인</label>
                    <div className="relative">
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="비밀번호를 다시 입력하세요"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {/* 조건부 렌더링 : 비밀번호가 일치하면 오른쪽 조건을 평가 */}
                        {passwordsMatch && (
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 mt-1 pointer-events-none">
                                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        )}
                    </div>
                    {/* 조건부 렌더링 : 비밀번호가 일치하지 않으면 오른쪽 조건을 평가 */}
                    {passwordsMatch || (
                        <p className="text-red-500 text-sm mt-1.5">
                            {message}
                        </p>
                    )}
                </div>
            </div>

            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    가입하기
                </button>
            </div>
        </form>
    );
}