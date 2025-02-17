// src/app/zensho/page.tsx
export default function ZenSho() {
    return (
        <section className="p-8">
            <h2 className="text-4xl font-bold text-center bg-black text-cream p-4 rounded-md">
                ZenSho - Film & Media
            </h2>
            <p className="mt-4 text-lg text-center">
                Home to <strong>ZenTalks podcasts, Women’s Tails film series, and ZenReads book discussions.</strong>
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 border rounded-lg shadow-lg bg-white text-black">
                    <h3 className="text-xl font-semibold">ZenTalks</h3>
                    <p className="text-gray-600">Podcasts featuring in-depth conversations with artists and creatives.</p>
                </div>
                <div className="p-4 border rounded-lg shadow-lg bg-white text-black">
                    <h3 className="text-xl font-semibold">Women’s Tails</h3>
                    <p className="text-gray-600">A short film series featuring female directors.</p>
                </div>
                <div className="p-4 border rounded-lg shadow-lg bg-white text-black">
                    <h3 className="text-xl font-semibold">ZenReads</h3>
                    <p className="text-gray-600">Book club discussions on literature recommended by Zuki.</p>
                </div>
            </div>
        </section>
    );
}
