'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Send, User, Bot } from 'lucide-react';
import Image from 'next/image';
import { MdArrowBackIosNew } from "react-icons/md";

// import { useParams } from 'next/navigation';

export default function Chat() {
  // const { id } = useParams();
  const [messages, setMessages] = useState([
    { role: 'user', content: 'Hey how are you doing today?' },
    { role: 'assistant', content: 'Makima: I\'m great thanks for asking what\'s up?' },
    { role: 'user', content: 'Just trying to relax with some anime chats.' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [persona, setPersona] = useState('friendly');

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { role: 'user', content: inputValue }]);
      setInputValue('');
      // Simulate response
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Thanks for sharing! What anime are you into lately?' }]);
      }, 1000);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Sidebar - Character Info */}
      
      <aside className="w-80 bg-gray-800 border-r border-gray-700 p-6 flex flex-col space-y-6">
        <button className='flex text-white items-center gap-2'>
          <MdArrowBackIosNew className="h-6 w-6 hover:scale-110 transition-transform cursor-pointer" />
          <span>Back To Home</span>
        </button>
        <Card className="bg-gray-500 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-400"></CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="w-[200px] h-[180px] relative mx-auto">
             <Image
                src={`/makima.jpg`}
                alt="Makima"
                fill
                className="object-cover object-center rounded-xl"
              />
            </div>
            <p className="text-sm text-gray-300">
              Makima is a central character in the manga and anime series <b>Chainsaw Man</b> created by Tatsuki Fujimoto.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-500 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Persona Tuning</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={persona} onValueChange={setPersona} className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="friendly" id="friendly"  defaultChecked/>
                <Label htmlFor="friendly" className="text-sm">Friendly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sarcastic" id="sarcastic"  />
                <Label htmlFor="sarcastic" className="text-sm">Sarcastic</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="serious" id="serious" />
                <Label htmlFor="serious" className="text-sm">Serious</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col bg-gray-900">
        <ScrollArea className="flex-1 p-6 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-white'
              }`}>
                <div className="flex items-center space-x-2 mb-1">
                  <div className={`h-2 w-2 rounded-full ${
                    message.role === 'user' ? 'bg-white' : 'bg-gray-400'
                  }`}></div>
                  <span className="text-xs font-medium flex items-center gap-1">
                    {message.role === 'user' ? <User className="h-3 w-3 inline" /> : <Bot className="h-3 w-3 inline" />}
                    {message.role === 'user' ? 'You' : 'Character'}
                  </span>
                </div>
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </ScrollArea>

        <Separator className="bg-gray-700" />

        <div className="p-6 bg-gray-800">
          <div className="flex space-x-2 items-center">
            <Textarea
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), sendMessage())}
              className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 resize-none"
              rows={1}
            />
            <Button onClick={sendMessage} disabled={!inputValue.trim()} className="bg-purple-600 hover:bg-purple-700">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}