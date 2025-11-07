"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import {  Brain, Users, MessageCircleHeart } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function HomePage() {
  const { isSignedIn } = useUser();
  if (isSignedIn) {
    redirect('/home');
  }
  return (
    <main className="min-h-screen bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-gray-100 font-titillium">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800 backdrop-blur-md sticky top-0 z-50 bg-black/60">
        <Image src="/logo.png" alt="UwU Logo" width={60} height={20} />
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          <Link href="#home" className="hover:text-pink-400 transition">Home</Link>
          <Link href="#features" className="hover:text-pink-400 transition">Features</Link>
          <Link href="#characters" className="hover:text-pink-400 transition">Characters</Link>
          <Link href="#howitworks" className="hover:text-pink-400 transition">How It Works</Link>
        </div>
        <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-pink-800 hover:bg-pink-600 rounded-full px-6 py-2 text-white font-semibold cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-24 gap-10"
      >
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white"
          >
            Chat with your <span className="text-pink-400">Favorite Anime Characters</span>
          </motion.h1>
          <p className="text-gray-400 mb-8">
             Chat with Gojo, Levi, Luffy, Jotaro <br />or any of your favorite anime character - all powered by AI.
          </p>
          <div className="flex space-x-4 ">
            <SignUpButton>
              <button className="bg-pink-800 hover:bg-pink-600 rounded-full px-6 py-2 text-white font-semibold cursor-pointer">
                Start Chatting
              </button>
            </SignUpButton>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative w-full max-w-sm"
        >
          <div className="w-full h-80 bg-[url('../../public/character-preview.jpg')] bg-center bg-cover rounded-3xl shadow-inner flex items-center justify-center border border-gray-700">
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-8 lg:px-20 py-24 bg-black/40 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-400">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Brain className="w-8 h-8 text-pink-400" />, title: "AI Personality Engine", desc: "Realistic AI responses trained with anime character data." },
            { icon: <MessageCircleHeart className="w-8 h-8 text-pink-400" />, title: "Emotive Conversations", desc: "Get replies that match tone, humor, and emotion of your favorite characters." },
            { icon: <Users className="w-8 h-8 text-pink-400" />, title: "Community Mode", desc: "Chatrooms where multiple users talk with characters together." },
          ].map((f, i) => (
            <Card
              key={i}
              className="bg-linear-to-br from-gray-900 to-gray-800 border-gray-700 hover:shadow-pink-500/30 hover:scale-105 transition-all"
            >
              <CardContent className="flex flex-col items-center text-center py-8 px-6 space-y-4">
                {f.icon}
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="px-8 lg:px-20 py-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-400">
          Popular Characters
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {["gojo", "levi", "luffy", "mikasa", "naruto", "rem", "zoro", "makima"].map(
            (name, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden bg-gray-900/70 border border-gray-800 hover:border-pink-500/50 cursor-pointer shadow-inner"
              >
                <div className="w-[300px] h-[300px] relative mx-auto">
                  <Image
                    src={`/${name}.jpg`}
                    alt={name}
                    fill
                    className="object-cover object-center rounded-xl"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-white">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                  <p className="text-gray-400 text-xs">Click to chat</p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* How It Works */}
      <section id="howitworks" className="px-8 lg:px-20 py-24 bg-black/40 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-400">How It Works</h2>
        <div className="max-w-6xl grid lg:grid-cols-2 text-gray-400 space-y-6 mx-auto text-lg">
          <p>1️⃣ Choose your favorite anime character.</p>
          <p>2️⃣ Our AI loads their personality, tone, and backstory using AniList data.</p>
          <p>3️⃣ Start chatting naturally — every reply feels like the real character!</p>
          <p>4️⃣ Save chats, get quotes, or generate custom roleplay scenes.</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-6 border-t border-gray-800 text-center bg-black/60 flex justify-center gap-4 items-center">
        <p className="text-gray-500">© {new Date().getFullYear()} UwU All rights reserved.</p>
        <div className="flex justify-center space-x-2 text-pink-400 cursor-pointer">
          <FaGithub size={20} />
        </div>
      </footer>
    </main>
  );
}
