"use client"

import { motion } from "motion/react"
import { Heart, Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"

export default function FirstScreen({ onNext }) {
    const audioRef = useRef(null)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch(() => {
                console.log("Autoplay blocked, user interaction needed")
            })
        }
    }, [])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">

            {/* Background Music */}
            <audio ref={audioRef} src="/music/birthday.mp3" loop autoPlay />

            {/* Main heart container with premium effects */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    duration: 1.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    bounce: 0.4,
                }}
                className="mb-12 relative z-10"
            >
                <div className="relative w-48 h-48 md:w-52 md:h-52">
                    {/* Premium glow layers */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                    <div className="absolute inset-2 bg-gradient-to-r from-rose-300 via-pink-400 to-purple-400 rounded-full blur-xl opacity-40"></div>

                    {/* container */}
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 p-1.5 shadow-2xl">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-white/95 via-pink-50/95 to-purple-50/95 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                            {/* Inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 via-purple-200/50 to-blue-200/50 rounded-full"></div>

                            {/* Center gif with animation */}
                            <motion.div
                                animate={{
                                    filter: [
                                        "drop-shadow(0 0 20px rgba(236, 72, 153, 0.6))",
                                        "drop-shadow(0 0 40px rgba(236, 72, 153, 0.9))",
                                        "drop-shadow(0 0 20px rgba(236, 72, 153, 0.6))",
                                    ],
                                }}
                                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                                className="text-pink-500 relative z-10"
                            >
                                <img src="/gifs/hello.gif" className="w-36 md:w-40 -mb-7 relative z-10" alt="hello" />
                            </motion.div>

                            {/* Orbiting sparkles */}
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute text-purple-400"
                                    style={{
                                        left: "50%",
                                        top: "50%",
                                    }}
                                    animate={{
                                        rotate: [0, 360],
                                        x: Math.cos((i * 60 * Math.PI) / 180) * 90,
                                        y: Math.sin((i * 60 * Math.PI) / 180) * 90,
                                        scale: [1, 1.4, 1],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "linear",
                                        delay: i * 0.3,
                                    }}
                                >
                                    <Sparkles size={12} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mb-16 space-y-4 relative z-10"
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight"
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                    style={{ backgroundSize: "200% 200%" }}
                >
                    Happy Birthday, Ananya 🎉
                </motion.h1>
                <motion.p
                    className="text-2xl md:text-3xl font-bold text-gray-700 flex flex-col items-center justify-center gap-2"
                    animate={{
                        textShadow: [
                            "0 0 20px rgba(236, 72, 153, 0.4)",
                            "0 0 40px rgba(236, 72, 153, 0.7)",
                            "0 0 20px rgba(236, 72, 153, 0.4)",
                        ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                    A day as special as you 🌸  
                    Wishing you endless joy & love 💖  
                    <span className="text-pink-600 text-lg mt-3 italic">
                        (Song on special demand 🎶)
                    </span>
                </motion.p>
            </motion.div>

            {/* Premium button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8, type: "spring", bounce: 0.5 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                className="relative px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white text-xl font-semibold rounded-full shadow-2xl overflow-hidden group border border-white/70"
            >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <span className="relative z-10 flex gap-2">
                    👉 Your Birthday Surprise ❤️
                    <Heart size={20} fill="currentColor" className="mt-0.5" />
                </span>
            </motion.button>

        </div>
    )
}
