// src/app/maizen/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function MaiZen() {
    return (
        <section className="p-8">
            <h2 className="text-4xl font-bold text-center bg-black text-cream p-4 rounded-md">
                MaiZen - Dance & Arts Initiative
            </h2>
            <p className="mt-4 text-lg text-center">
                Supporting scholarships, dance lessons, and fan-submitted performances.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg shadow-lg bg-white text-black">
                    <h3 className="text-xl font-semibold">Scholarships</h3>
                    <p className="text-gray-600">Providing opportunities for young dancers worldwide.</p>
                </div>
                <div className="p-4 border rounded-lg shadow-lg bg-white text-black">
                    <h3 className="text-xl font-semibold">Dance Tutorials</h3>
                    <p className="text-gray-600">Learn choreography from industry professionals.</p>
                </div>
            </div>


            <div className="mt-12">
                <h3 className="text-5xl font-bold mb-6 text-matcha">Artists</h3>

                <div className="flex overflow-x-auto scroll-smooth space-x-6 p-4">
                    {[
                        {src: "/images/gakko.png", name: "Atarashii Gakko!"},
                        {src: "/images/chappell.jpg", name: "Chappell Roan"},
                        {src: "/images/doechii.jpg", name: "Doechii"},
                        {src: "/images/ikuta.png", name: "Ikuta"},
                        {src: "/images/njz.png", name: "NJZ"},
                        {src: "/images/yoasobi.jpg", name: "Yoasobi"},
                        {src: "/images/zu.png", name: "Zuki"}

                    ].map((artist, index) => (
                        <Link key={index} href="/artists">
                            <div
                                className="w-70 h-70 border rounded-lg shadow-lg bg-black text-green flex flex-col items-center p-4 cursor-pointer hover:scale-105 transition">
                                <div className="w-60 h-60 relative">
                                    <Image
                                        src={artist.src}
                                        alt={artist.name}
                                        layout="fill"
                                        className="rounded-md object-cover"
                                    />
                                </div>
                                <h4 className="text-lg font-semibold mt-3">{artist.name}</h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </section>


    );
}

