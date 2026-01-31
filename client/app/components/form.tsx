"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  return (
    <form>
      <div>
        <div className="w-full pb-4">
          <h2 className="w-full text-4xl text-center font-bold text-white py-7">
            Contact Me
          </h2>
          <p className="mt-1 text-lg text-center text-gray-100">
            Please write your message for me below.
          </p>
          <div className="w-full mt-8 grid grid-cols-1 gap-x-6 gap-y-8">
            <div className="w-full flex items-center justify-between gap-x-3">
              <div className="w-full sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-white">
                  Your Name
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={handleChange}
                      placeholder="For example Ali Agha."
                      className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-white">
                  Your Email
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      onChange={handleChange}
                      placeholder="youremail@gmail.com"
                      className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm/6 font-medium text-white">
                Your Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  onChange={handleChange}
                  placeholder="Hello, I am Nawid 'Arefi'..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-start gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-6 py-2.5 font-semibold text-white text-[16px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer hover:translate-y-0.5 duration-150">
          Submit
        </button>
      </div>
    </form>
  );
}
