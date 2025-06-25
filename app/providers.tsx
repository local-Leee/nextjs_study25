"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


// Providers:
// 앱 전체에서 사용할 '공통 기능'이나 '전역 상태'를 한번에 설정해주는 컴포넌트ㄴ
export default function Providers({ children }: { children: React.ReactNode }) {

    // useState를 사용해 QueryClient의 상태를 관리한다.
    // 쿼리 클라이언트는 데이터 캐시, 데이터 조회, 데이터 업데이트 등을 담당한다.
    const [queryClient] = useState(
        () =>
            // 인스턴스 생성
            new QueryClient({
                defaultOptions: {
                    queries: {
                        // 데이터 캐시 시간 설정
                        // 60초 동안 데이터를 캐시에 저장하고 60초 이후에 데이터를 다시 조회한다.
                        staleTime: 60 * 1000,
                    },
                },
            })
    );

    return (
        // QueryClientProvider는 쿼리 클라이언트를 전역적으로 사용할 수 있도록 제공하는 컴포넌트
        <QueryClientProvider client={queryClient}>
            {children}            

            {/* ReactQueryDevtools:
                devTools 통해 쿼리 상태, 캐시 상태, 쿼리 히스토리 등을 확인할 수 있다. 
            */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>

    );
}
