'use client';
import chatBot from '@/utils/chatbot.png';
import Image from 'next/image';
import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import EmailForm from '@/components/EmailForm';

interface Message {
  user: string;
  text: string;
}

const Chatbot = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [input, setInput] = useState('');
  const [showCollections, setShowCollections] = useState(false);
  const [showSendEmail, setShowSendEmail] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
    if (!isChatbotOpen) {
      setShowCollections(false);
      setShowSendEmail(false);
    }
  };

  const handleSendEmailClick = () => {
    setShowSendEmail(true);
    setShowCollections(false); // Close collections if email form is opened
  };

  const handleCollectionsClick = () => {
    setShowCollections((prev) => !prev);
    setShowSendEmail(false); // Close email form if collections are opened
  };

  const greetMessage = "Hello! I am a Buddy. Please select the options what you want";

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div onClick={toggleChatbot} className='bg-orange-400 p-4 rounded-full shadow-md cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
        </svg>
      </div>

      {isChatbotOpen && (
        <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-md max-w-sm">
          <div className="flex justify-between items-center gap-3 px-3 bg-gray-600 py-2 rounded-tr-md rounded-tl-md">
            <div className="flex items-center gap-3">
              <Image src={chatBot} alt="chatbot image" className="w-9 h-9" />
              <h3 className="text-md text-white font-semibold">Buddy</h3>
            </div>
            <button onClick={toggleChatbot} aria-label="Close chat" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>

          {!showSendEmail && (
            <div className="flex gap-1 items-center">
              <Image src={chatBot} alt="chatbot Image" className="ml-2 w-9 h-9" />
              <p className="m-4 p-3 rounded bg-gray-300 text-black">{greetMessage}</p>
            </div>
          )}

          {!showSendEmail && (
            <ul className="grid grid-cols-2 ml-16 gap-3 mx-2 text-black">
              {!showCollections && (
                <>
                  <li className="bg-gray-300 rounded-full px-6 py-2 w-[146px] h-11 text-center hover:scale-105 cursor-pointer" onClick={handleCollectionsClick}>All collections</li>
                  {!session ? (
                    <li className="bg-gray-300 rounded-full px-6 py-2 w-[146px] h-11 text-center hover:scale-105 cursor-pointer" onClick={() => signIn()}>Login</li>
                  ) : (
                    <li className="bg-gray-300 rounded-full px-6 py-2 w-[146px] h-11 text-center hover:scale-105 cursor-pointer" onClick={() => signOut()}>Logout</li>
                  )}
                  <li className="bg-gray-300 rounded-full px-6 py-2 w-[146px] h-11 text-center hover:scale-105 cursor-pointer" onClick={() => router.push('/cart')}>Visit Cart</li>
                  <li className="bg-gray-300 rounded-full px-6 py-2 w-[146px] h-11 text-center hover:scale-105 cursor-pointer" onClick={handleSendEmailClick}>Send email</li>
                </>
              )}
            </ul>
          )}

          {showCollections && !showSendEmail && (
            <div className=' flex gap-4 mx-2'>
              <button className="text-black hover:scale-105 pl-2" onClick={() => setShowCollections(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </button>
            <div className="grid grid-cols-3 gap-3  my-4 mx-4">
              <div className="bg-gray-300 rounded-full px-6 py-2 text-center hover:scale-105"><Link href="/mens">Mens</Link></div>
              <div className="bg-gray-300 rounded-full px-4 py-2 text-center hover:scale-105"><Link href="/womens">Womens</Link></div>
              <div className="bg-gray-300 rounded-full px-6 py-2 text-center hover:scale-105"><Link href="/kids">Kids</Link></div>
            </div>
            </div>
          )}

          {showSendEmail && (
            <div className="flex  mt-4 justify-start items-start pl-4">
              <button className="text-black hover:scale-105" onClick={() => setShowSendEmail(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </button>
              <EmailForm />
            </div>
          )}

          <div className="flex border m-2 border-gray-300 rounded-b-md">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-2 bg-transparent outline-none rounded-bl-md"
              disabled
            />
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot
