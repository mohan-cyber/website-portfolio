import React from "react";
import FadeInAnimation from "./FadeInAnimation";

const Contact = () => {
  return (
    <section
      id="contact"
      class="bg-white bg-gradient-to-b from-black via-black  to-gray-800"
    >
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
        <div className="pb-8">
          <FadeInAnimation>
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-center  text-white border-b-4 inline border-gray-500 ">
              Contact{" "}
            </h2>
          </FadeInAnimation>
        </div>
        <form
          action="https://getform.io/f/5d86c3f4-d5be-4845-b05e-b6dda19dd993"
          method="POST"
          class="space-y-8"
        >
          <div>
            <FadeInAnimation>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-white "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class=" md:w-1/2 w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 "
              />
            </FadeInAnimation>
          </div>
          <div>
            <FadeInAnimation>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-white dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                class="block p-3 md:w-1/2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              />
            </FadeInAnimation>
          </div>
          <div class="sm:col-span-2">
            <FadeInAnimation>
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-white dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                class="block p-2.5  md:w-1/2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              ></textarea>
            </FadeInAnimation>
          </div>
          <FadeInAnimation>
            <button className=" text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 space-x-1 ">
              <span>Let's talk</span>
            </button>
          </FadeInAnimation>
        </form>
      </div>
    </section>
  );
};

export default Contact;
