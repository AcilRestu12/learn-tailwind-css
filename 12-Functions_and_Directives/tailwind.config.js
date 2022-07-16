/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./12-Functions_and_Directives/index.html"],
    darkMode: 'class',
    theme: {
        extend: {                   // Agar default setting dan custom setting jalan semua
            spacing: {              // Membuat spacing sendiri
                13: '3.25rem',      
            },
            fontFamily: {           // Menambahkan font sendiri
                inter: ['Inter'],   
            },
            colors: {               // Menambahkan warna sendiri
                rest: '#bada55',
                kopi: '#c0ffee',
            },
            animation: {
                'spin-slow' : 'spin 3s linear infinite',        // Mengedit animation spin
                goyang: 'goyang 1s ease-in-out infinite',       // Membuat animation sendiridari keyframe yg telah dibuat
            },
            keyframes: {
                goyang: {           // Membuat keyframe animation sendiri
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
        },
    },
    plugins: [],
}
