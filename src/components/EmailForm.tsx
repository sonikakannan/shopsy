import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const EmailForm: React.FC = () => {
  const [toName, setToName] = useState('');
  const [fromName, setFromName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Sending...');
    toast.loading('Sending...');

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("access_key", "86804bf6-6b1f-4101-a673-3ccd873d93a7");

      const object = Object.fromEntries(formData.entries());
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        setStatus("Message sent successfully!");
        toast.dismiss();
        toast.success("Message sent successfully!");
        console.log("Success", res);
      } else {
        setStatus("Failed to send message.");
        toast.dismiss();
        toast.error("Failed to send message.");
        console.error("Error", res);
      }
    } catch (error) {
      setStatus("An error occurred.");
      toast.dismiss();
      toast.error("An error occurred.");
      console.error("Error", error);
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit} className='mx-14'>
        <div className='flex border-b border-gray-300 mt-4'>
          <label htmlFor="toName" className='text-gray-700 text-lg pb-2'>To:</label>
          <input
            type="email"
            id="toName"
            className='outline-none text-sm font-normal pb-2 pl-2 flex-1'
            value={toName}
            onChange={(e) => setToName(e.target.value)}
            name="toName"
            required
          />
        </div>

        <div className='flex border-b border-gray-300 my-2 pb-2'>
          <label htmlFor="fromName" className='text-gray-700 text-lg'>Subject:</label>
          <input
            type="text"
            id="fromName"
            className='pb-2 pl-2 outline-none flex-1'
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            name="fromName"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className='text-gray-700 text-lg block'>Message:</label>
          <textarea
            id="message"
            placeholder='Write a message here...'
            className='my-2 border border-gray-300 w-full p-4 outline-none h-32 text-black'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            required
          />
        </div>

        <button type="submit" className='ml-16 bg-gray-500 text-white px-6 py-2 rounded-full hover:scale-105'>
          Send
        </button>
      </form>
    </>
  );
};

export default EmailForm;
