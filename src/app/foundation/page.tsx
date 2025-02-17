export default function Foundation() {
    return (
        <section className="p-8">
            {/* Page Title */}
            <h2 className="text-4xl font-bold text-center bg-black text-cream p-4 rounded-md">
                Zenko Foundation
            </h2>

            {/* 🔗 Link to External Foundation Website */}
            <p className="text-center mt-4">
                Visit our foundation website:{" "}
                <a
                    href="http://localhost:3001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline"
                >
                    Visit Zenko Foundation
                </a>
            </p>

            {/* 🔹 Foundation Navigation Tabs */}
            <div className="flex justify-center space-x-6 mt-8">
                <a href="#about" className="text-lg font-semibold text-green-500 hover:underline">About</a>
                <a href="#impact" className="text-lg font-semibold text-green-500 hover:underline">Impact</a>
                <a href="#get-involved" className="text-lg font-semibold text-green-500 hover:underline">Get Involved</a>
            </div>

            {/* 📝 About Section */}
            <div id="about" className="mt-8 p-6 border rounded-lg shadow-lg bg-white text-black">
                <h3 className="text-2xl font-semibold">About the Zenko Foundation</h3>
                <p className="text-gray-600">
                    The Zenko Foundation is committed to global humanitarian and environmental causes,
                    providing aid to disaster-affected areas, funding arts education, and promoting sustainability.
                </p>
            </div>

            {/* 🌍 Impact Section */}
            <div id="impact" className="mt-8 p-6 border rounded-lg shadow-lg bg-white text-black">
                <h3 className="text-2xl font-semibold">Our Impact</h3>
                <p className="text-gray-600">
                    - **MyFuture:** Supports disaster relief, education, and global humanitarian efforts.
                    - **Zenkokoro:** Leads climate activism, environmental projects, and sustainability initiatives.
                </p>
            </div>

            {/* 🤝 Get Involved Section */}
            <div id="get-involved" className="mt-8 p-6 border rounded-lg shadow-lg bg-white text-black text-center">
                <h3 className="text-2xl font-semibold">Get Involved</h3>
                <p className="text-gray-600">Make a difference by donating or signing up for updates.</p>

                {/* 💰 Donate Button */}
                <a
                    href="https://zenkofoundation.org/donate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
                >
                    Donate Now
                </a>

                {/* 📩 Newsletter Sign-Up */}
                <div className="mt-6">
                    <h4 className="text-lg font-semibold">Stay Updated</h4>
                    <form className="flex flex-col items-center gap-4 mt-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-3 rounded-md w-full max-w-md text-black"
                        />
                        <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

