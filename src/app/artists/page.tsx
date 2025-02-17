// src/app/artists/page.tsx
import Image from 'next/image';

export default function Artists() {
    const artists = [
        //{ src: '/images/gakko.png', alt: 'Atarashii Gakko!', name: 'Atarashii Gakko!', link: 'https://atarashiigakko.com' },
        { src: '/images/chappell.jpg', alt: 'Chappell Roan', name: 'Chappell Roan', link: 'https://www.iamchappellroan.com/' },
        { src: '/images/doechii.jpg', alt: 'Doechii', name: 'Doechii', link: 'https://www.iamdoechii.com/#home' },
        { src: '/images/ikuta.png', alt: 'Ikuta', name: 'Ikuta', link: 'https://www.yoasobi-music.jp/' },
        { src: '/images/kenji.png', alt: 'Kenji', name: 'Kenji', link: 'https://www.yoasobi-music.jp/' },
        { src: '/images/njz.png', alt: 'NewJeans', name: 'NJZ', link: 'https://newjeans.kr' },
        { src: '/images/steve.webp', alt: 'Steve Lacy', name: 'Steve Lacy', link: 'https://www.stevelacys.com/' },
        { src: '/images/yoasobi.jpg', alt: 'YOASOBI', name: 'YOASOBI', link: 'https://yoasobi-music.jp' },
        { src: '/images/zu.png', alt: 'Zuki', name: 'ZUKI', link: 'https://zukimusic.com' }

    ];

    return (
        <section className="p-8">
            <h2 className="text-8xl font-bold text-center">Artists</h2>

            {/* Artist Grid Wrapper with Centering for Last Row */}
            <div className="mt-6 flex flex-wrap justify-center gap-8">
                {artists.map((artist) => (
                    <div key={artist.name} className="p-4 border rounded-lg shadow-lg w-75 flex flex-col items-center">
                        <div className="w-72 h-72 relative">
                            <Image
                                src={artist.src}
                                alt={artist.alt}
                                layout="fill"
                                className="object-cover rounded-md"
                            />
                        </div>
                        <h3 className="mt-2 text-2xl font-semibold text-center">
                            <a
                                href={artist.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-matcha hover:underline"
                            >
                                {artist.name}
                            </a>
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}



