import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const Contact = () => {
  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40 ">
        <section className="min-h-screen">
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Razin Rangara
            </h2>
            <h4 className="text-2xl py-2 md:text-3xl ">
              rangararazin@outlook.com
            </h4>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-1 text-gray-600 ">
            <a href="https://www.linkedin.com/in/razin-rangara/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/rangararazin">
              <AiFillGithub />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
