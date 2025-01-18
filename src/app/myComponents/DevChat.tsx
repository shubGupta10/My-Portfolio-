'use client';

import { useState, useEffect } from 'react';
import { X, Maximize2, Minimize2, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DevChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {isOpen && (
        <Card className={`
          fixed bottom-20 right-4 bg-background/95 backdrop-blur-sm
          w-[95vw] sm:w-[600px] 
          ${isMinimized ? 'h-14' : 'h-[600px]'}
          rounded-lg shadow-2xl z-50 border border-primary/10
          transition-all duration-300 ease-in-out
          ${isAnimating ? 'animate-in zoom-in-90 slide-in-from-bottom-8' : ''}
        `}>
          <div className="absolute top-0 left-0 right-0 h-14 px-4 flex items-center justify-between border-b border-primary/10 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/50 rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bot className="w-5 h-5 text-primary animate-pulse" />
                <div className="absolute inset-0 blur-sm bg-primary/20 rounded-full animate-pulse" />
              </div>
              <span className="font-semibold text-primary">AI Assistant</span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-primary/10 transition-colors"
                onClick={toggleMinimize}
              >
                {isMinimized ? (
                  <Maximize2 className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                ) : (
                  <Minimize2 className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-destructive/10 transition-colors"
                onClick={toggleChat}
              >
                <X className="h-4 w-4 text-muted-foreground hover:text-destructive transition-colors" />
              </Button>
            </div>
          </div>
          <div className={`w-full ${isMinimized ? 'h-0' : 'h-[calc(100%-3.5rem)]'} transition-all duration-300`}>
            <iframe
              src="https://ai-devchat.vercel.app/chatbot/677c2fea82ae819c81b77440/677fced8e9ee0511b453a98b"
              className="w-full h-full rounded-b-lg"
            />
          </div>
        </Card>
      )}
      <Button
        onClick={toggleChat}
        size="icon"
        className={`
    fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg
    bg-primary hover:bg-primary/90
    transition-all duration-300 ease-in-out
    hover:scale-110 hover:shadow-xl hover:shadow-primary/20
    active:scale-95
    z-50
  `}
      >
        <div className="relative">
          <Bot className="h-16 w-16" /> 
          {!isOpen && (
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary-foreground rounded-full animate-ping" />
          )}
        </div>
      </Button>
    </>
  );
}