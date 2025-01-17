'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function DevChat() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {isOpen && (
        <iframe
          src="https://ai-devchat.vercel.app/chatbot/677c2fea82ae819c81b77440/677fced8e9ee0511b453a98b"
          className="fixed bottom-20 right-4 w-96 h-[600px] rounded-lg shadow-lg z-50"
        />
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 p-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </>
  );
}

