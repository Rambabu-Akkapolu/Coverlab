import React from 'react';
import logo from '../assets/icons/logo.png'
import { Link } from 'react-router-dom';
import cover1 from '../assets/images/cover1.webp'
import cover2 from '../assets/images/cover2.webp'
import cover3 from '../assets/images/cover3.webp'

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="text-xl flex p-4 md:w-10/12 mx-auto">
                    <div className="flex items-center">
                        <img src={logo} alt="Coverlab" className="w-8 h-8 mx-2" />
                        <h1 className="font-semibold md:text-xl text-lg font-Inter">Coverlab</h1>
                    </div>
                    <a href="https://github.com/Rambabu-Akkapolu/Coverlab" target="_blank" rel="noreferrer" className="hover:translate-x-2 flex items-center justify-center duration-300 bg-gray-700 group rounded-xl text-white ml-auto mr-4 font-Inter font-semibold">
                        <span className="md:text-sm text-xs px-2 md:px-4 py-1 md:py-2">⭐ Star on Github</span>
                    </a>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="mx-auto md:px-20 py-16 flex flex-col items-center">
                    <img src={logo} alt="Coverlab" className="w-12 h-12 mb-4 opacity-90" />
                    <h1 className="md:w-8/12 mx-6 my-4 text-center md:text-6xl text-4xl font-extrabold text-gray-900 tracking-tight">Design production‑ready blog covers</h1>
                    <p className="md:text-xl text-lg text-gray-600 text-center mb-8 max-w-2xl">Coverlab pairs beautiful themes with Unsplash search, live previews, and one‑click export.</p>
                    <div className="flex gap-3">
                        <Link to="/editor" className="hover:scale-[1.02] transition bg-gray-900 hover:bg-black rounded-full px-6 py-3 text-white text-base font-semibold">Open Editor</Link>
                    </div>
                    
                </div>
            </section>

            {/* Trusted Logos */}
            <section className="py-6">
                <div className="max-w-6xl mx-auto px-6 opacity-80">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
                        <img className="h-6 grayscale hover:grayscale-0 transition" src="https://cdn.simpleicons.org/github/000000" alt="GitHub" />
                        <img className="h-6 grayscale hover:grayscale-0 transition" src="https://cdn.simpleicons.org/react/61DAFB" alt="React" />
                        <img className="h-6 grayscale hover:grayscale-0 transition" src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" />
                        <img className="h-6 grayscale hover:grayscale-0 transition" src="https://cdn.simpleicons.org/unsplash/000000" alt="Unsplash" />
                        <img className="h-6 grayscale hover:grayscale-0 transition" src="https://cdn.simpleicons.org/vercel/000000" alt="Vercel" />
                        <img className="h-6 grayscale hover:grayscale-0 transition" src="https://cdn.simpleicons.org/netlify/00C7B7" alt="Netlify" />
                    </div>
                </div>
            </section>

            {/* Preview Images */}
            <div className="flex flex-row items-center justify-center mx-auto md:w-10/12 mb-16">
                <div className="m-4 transform -translate-y-20 border animate hover:scale-105 hover:-rotate-3 rotate-6 duration-100 bg-white p-2 shadow-lg shadow-gray-50 w-1/5 rounded-lg flex flex-col">
                    <img src={cover2} className="border border-gray-100 rounded mb-2" alt="cover1" />
                    <p className="animate animate-pulse bg-gray-50 md:h-5 h-2 rounded mb-2"></p>
                    <p className="animate animate-pulse w-8/12 bg-gray-50 md:h-5 h-2 rounded mb-2"></p>
                </div>

                <div className="m-4 transform hover:scale-105 hover:rotate-3 -rotate-2 duration-300 bg-white p-4 shadow-lg shadow-gray-50 w-1/3 rounded-lg flex flex-col">
                    <img src={cover1} className="rounded border border-gray-100 mb-2" alt="cover-2" />
                    <p className="animate animate-pulse bg-gray-50 md:h-6 h-3 rounded mb-2"></p>
                    <p className="animate animate-pulse w-8/12 bg-gray-50 md:h-6 h-3 rounded mb-2"></p>
                </div>

                <div className="m-4 transform -translate-y-20 border animate hover:scale-105 hover:rotate-3 -rotate-6 duration-100 bg-white p-2 shadow-lg shadow-gray-50 w-1/5 rounded-lg flex flex-col">
                    <img src={cover3} className="rounded border border-gray-100 mb-2" alt="cover3" />
                    <p className="animate animate-pulse bg-gray-50 md:h-5 h-2 rounded mb-2"></p>
                    <p className="animate animate-pulse w-8/12 bg-gray-50 md:h-5 h-2 rounded mb-2"></p>
                </div>
            </div>

            {/* Features Section */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Coverlab</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[{ title: 'Unsplash Search', desc: 'Find beautiful, free-to-use images instantly.' }, { title: 'Live Themes', desc: 'Preview 7+ themes with real-time updates.' }, { title: 'One-click Export', desc: 'Download high-quality covers instantly.' }].map((f) => (
                            <div key={f.title} className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition">
                                <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center mb-4 group-hover:scale-105 transition">★</div>
                                <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
                                <p className="text-gray-600 text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div className="bg-gray-900 text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold mb-4">Ready to design your next cover?</h2>
                    <p className="text-xl mb-8 text-gray-300">Open the editor and start customizing instantly.</p>
                    <Link to="/editor" className="inline-block bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-4 text-xl font-semibold transition-colors">Get Started Now</Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-gray-300">Built with React, Tailwind CSS, and Unsplash API by Rambabu</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;