'use client';

// import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, Search, Home, BookOpen, Clock, Star, Download, LogOut, TrendingUp, MessageCircle, User } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { SignedIn } from '@clerk/nextjs';
import { UserButton } from '@clerk/clerk-react';
import { useState } from 'react';
import Image from 'next/image';

export default function HomeLayout() {
 
  const [searchQuery, setSearchQuery] = useState('');

  const navigationItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: BookOpen, label: 'Explore Characters', href: '/explore' },
    { icon: Clock, label: 'Recently Viewed', href: '/recent' },
    { icon: Star, label: 'Saved Chats', href: '/saved' },
    { icon: Download, label: 'Downloads', href: '/downloads' },
  ];

  const trendingCharacters = [
    { name: 'Epic Battles', duration: '2 min' },
    { name: 'Fan Favorites', duration: '5 min' },
    { name: 'Legendary Heroes', duration: '8 min' },
    { name: 'Villain Vibes', duration: '3 min' },
    { name: 'Plot Twists', duration: '6 min' },
  ];

  const characterInteractions = [
    { name: 'Lisa from Genshin', time: '2 min ago', avatar: 'L' },
    { name: 'Sakura Haruno', time: '5 min ago', avatar: 'S' },
    { name: 'A disney quote', time: '8 min ago', avatar: 'D' },
    { name: 'Lisa Shore Ban', time: '10 min ago', avatar: 'L' },
    { name: 'Musa Redman Tier', time: '12 min ago', avatar: 'M' },
    { name: 'Naruto Uzumaki', time: '15 min ago', avatar: 'N' },
    { name: 'Yuno Gasai', time: '18 min ago', avatar: 'Y' },
    { name: 'Sasuke Uchiha', time: '20 min ago', avatar: 'S' },
    { name: 'Hearing Friend', time: '22 min ago', avatar: 'H' },
  ];

  const updateCards = [
    { title: 'Anime Update 1', subtitle: 'New episode alert' },
    { title: 'Character Spotlight', subtitle: 'Behind the scenes' },
    { title: 'Fan Art Drop', subtitle: 'Community creations' },
    { title: 'Voice Actor News', subtitle: 'Interviews & more' },
  ];

  const personalityCards = [
    { title: 'Anime Chat Bot', subtitle: 'AI companion' },
    { title: 'Top Anime Characters', subtitle: 'Rankings & polls' },
    { title: 'Famous Quotes', subtitle: 'Iconic lines' },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Sidebar */}
      <aside className="w-64 bg-gray-800 p-4 flex flex-col space-y-4">
        <Image src="/logo.png" alt="UwU Logo" width={60} height={20} className='ml-3' />
        <Separator className="mb-4 mt-1 bg-gray-600" />
        <nav className="space-y-2">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start text-white hover:bg-gray-700 hover:text-white"
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
        {/* <Separator className="my-4 bg-gray-600" /> */}
        {/* <Button  className="w-full justify-start text-white hover:bg-gray-700">
          <TrendingUp className="mr-1 h-4 w-2" />
          Upgrade 
        </Button> */}
        {/* <Separator className="my-4 bg-gray-600" /> */}
        {/* <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-700">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button> */}
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex justify-between items-center p-4 bg-gray-800 border-b border-gray-700">
          <Input
            placeholder="Search characters or quotes"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
          <div className="flex items-center space-x-4">
            {/* <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
              <Bell className="h-4 w-4" />
            </Button> */}
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto space-y-8">
          {/* Continue Chatting Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Continue chatting</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="bg-gray-800 border-gray-700 col-span-1">
                <CardContent className="p-4">
                  <div className="w-full h-20 bg-linear-to-br from-green-500 to-teal-600 rounded-lg mb-2"></div>
                  <h3 className="font-medium">Current chat with Naruto</h3>
                  <p className="text-sm text-gray-400">Last message 30 sec ago</p>
                </CardContent>
              </Card>
              {/* Skipped overlay/upgrade button as per request */}
            </div>
          </section>
          {/* Trending Characters */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Trending Characters</h2>
            <div className="grid grid-cols-4 gap-4">
              {updateCards.map((card, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                  <CardContent className="p-4">
                    <div className="w-full h-32 bg-linear-to-br from-purple-500 to-blue-600 rounded-lg mb-2"></div>
                    <h3 className="font-medium">{card.title}</h3>
                    <p className="text-sm text-gray-400">{card.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Right Sidebar */}
      <aside className="w-80 bg-gray-800 p-4 flex flex-col space-y-4 border-l border-gray-700">
        <h2 className="text-lg font-semibold">Character Interactions</h2>
        <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
          {characterInteractions.map((interaction, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-3 flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-linear-to-r from-purple-500 to-pink-500 text-white text-xs">
                    {interaction.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{interaction.name}</p>
                  <p className="text-xs text-gray-400">{interaction.time}</p>
                </div>
                <MessageCircle className="h-4 w-4 text-gray-400" />
              </CardContent>
            </Card>
          ))}
        </div>
      </aside>
    </div>
  );
}