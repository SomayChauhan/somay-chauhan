'use client';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';

export default function About() {
  const whileHover = {
    position: 'relative',
    zIndex: 10,
    background: 'red',
    scale: [1, 1.4, 1.2],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 0.2,
    },
  };

  const text = "Let's Work Together";
  return (
    <MainLayout>
      <div className="flex flex-col items-between md:flex-row md:justify-between ">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Let&apos;s Work Together</h1>
            <h4 className="text-sm font-light">Have a project in mind? Contact me!</h4>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Phone</h4>
            <p className="text-sm font-light">+91-7307406611</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Email</h4>
            <p className="text-sm font-light">somaychauhan98@gmail.com</p>
          </div>
        </div>
        <form className="w-full max-w-lg mt-6">
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                className="block mb-2 text-sm font-medium tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block text-sm w-full border border-gray-200 bg-gray-200 text-gray-700 border rounded py-2 px-2 leading-tight focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                className="block mb-2 text-sm font-medium tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block text-sm w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:bg-white focus:ring-blue-500 focus:border-blue-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                className="block mb-2 text-sm font-medium tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight  focus:bg-white focus:ring-blue-500 focus:border-blue-500"
                id="grid-email"
                type="text"
                placeholder="Doe@gamil.com"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                className="block mb-2 text-sm font-medium tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                htmlFor="grid-subject"
              >
                Subject
              </label>
              <input
                className="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
                id="grid-subject"
                type="text"
                placeholder="subject"
              />
            </div>
            <div className="w-full md:w-2/3 px-3 mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                className="border border-gray-200 block p-2.5 w-full text-sm rounded-lg text-gray-700 border bg-gray-200 focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="w-full px-3 md:w-1/3 flex items-center justify-center mb-6">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
