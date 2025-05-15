/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [/* 생략 */],
    theme: {
        extend: {
            fontFamily: {
                notoSansKR: ['var(--font-noto-sans-kr)', 'sans-serif'],
                poppins: ['var(--font-poppins)', 'sans-serif'],
            },
            button: {
                cursor: ['cursor-pointer'],
            },
        },
    },
    plugins: [],
}