"use client";

import { useState, useCallback, useEffect } from "react";
import { BotMessageSquare, X } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function DevChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={toggleChat}
          aria-hidden="true"
        />
      )}

      {/* Chat Window */}
      <div
        className={`fixed transition-all  duration-300 ease-in-out z-50 
          ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          ${isMobile 
            ? 'inset-4 max-h-[calc(100vh-32px)]' 
            : 'bottom-20 right-4 w-[800px] h-[600px]'
          }`}
      >
        <Card className="w-full h-full overflow-hidden rounded-lg shadow-xl border-2">
          <div className="relative w-full h-full bg-white">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gray-50 border-b flex items-center justify-between px-4 z-10">
              <span className="font-medium text-gray-700 flex items-center gap-2">
                <BotMessageSquare className="w-5 h-5" />
                DevChat Assistant
              </span>
              <button
                onClick={toggleChat}
                className="p-1.5 hover:bg-gray-200 rounded-md transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            {/* Chat iframe Container */}
            <div className="w-full h-full pt-12">
              <iframe
                src="https://ai-devchat.vercel.app/chatbot/677c2fea82ae819c81b77440/677fced8e9ee0511b453a98b"
                className="w-full h-full"
                title="DevChat Interface"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-4 right-4 p-4 bg-white text-black rounded-full shadow-lg 
          hover:bg-gray-200 active:scale-95 transition-all duration-200 z-50
          focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        <BotMessageSquare className="w-6 h-6" />
      </button>
    </>
  );
}
