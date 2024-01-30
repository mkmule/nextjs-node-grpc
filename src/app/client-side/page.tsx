'use client';
import { useState } from 'react';
import { sendMessage } from '@/utils/messages';

const ServerSidePage = () => {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSendMessage = async (msg: string) => {
    console.log(`Sending: ${msg}`);

    const responseMessage = await sendMessage(msg);
    setAnswer('Here is your answer: ' + responseMessage);
  };

  return (
    <main className="p-2">
      <h5 className="text-sm opacity-70">(this is client side rendering page)</h5>
      <h2 className="text-xl">Please provide your message: </h2>

      <div className="p-2">
        <input className="outline-amber-200 outline outline-1 p-1" value={message}
               onChange={e => setMessage(e.target.value)} />
        <br />
        <button className="bg-amber-200 p-1 mt-2" type="submit" onClick={() => handleSendMessage(message)}>Send</button>
      </div>

      <div className="w-full border-t m-2" />

      {answer && <div className="">
        <h2 className="text-m">{answer}</h2>
      </div>}
    </main>
  );
};

export default ServerSidePage;
