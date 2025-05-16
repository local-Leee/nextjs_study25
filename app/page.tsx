"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {  
  const router = useRouter();
  const [nickname, setNickname] = useState<string | null>(null);

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    const nickname = localStorage.getItem("nickname");
    if (isLogin !== "true") {
      router.push("/login");
    } else {
      setNickname(nickname);
    }
  }, [router]);

  // 로그아웃 함수
  const handleLogout = () => {
    localStorage.removeItem("nickname");
    localStorage.removeItem("isLogin");
    console.log(localStorage.getItem("isLogin"));
    localStorage.removeItem("isAdmin");
    router.push("/login");
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="sticky top-0 p-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/profile-light.png" alt="logo" width={40} height={40} />
          <p className="text-2xl font-bold">로고없음</p>
        </div>
        <ul className="flex gap-4 justify-end">
          <li>{nickname}님</li>
          <li>
            <button 
              onClick={handleLogout} 
              className="text-blue-500 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
              로그아웃
            </button>
          </li>
        </ul>
      </header>
      <main className="flex flex-col items-center justify-center h-screen text-center">
        <p className="text-9xl font-bold">환영</p>
        <p className="text-3xl font-bold">아무것도 없지만</p>
      </main>
    </div>
  );
}
