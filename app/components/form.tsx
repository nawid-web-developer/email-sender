"use client";
import { FormEvent, useState } from "react";

interface FormValues {
  name: string;
  message: string;
}

export default function Form() {
  const initValues: FormValues = {
    name: "",
    message: "",
  };

  const [values, setValues] = useState<FormValues>(initValues);

  const handleChange = ({ target }: any) => {
    setValues((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("/api/", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="pb-4">
          <h2 className="text-base/7 font-semibold text-white">Contact Me</h2>
          <p className="mt-1 text-sm/6 text-gray-400">
            Please write your message for me below.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
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
                    placeholder="nawid.web.developer"
                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                  />
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
                  onChange={handleChange}
                  rows={4}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
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
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer hover:translate-y-0.5 duration-150">
          Submit
        </button>
      </div>
    </form>
  );
}
