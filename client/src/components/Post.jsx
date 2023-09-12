import React from "react";

const Post = () => {
  return (
    <div className="mx-4 my-2 max-w-4xl rounded-lg bg-white px-8 py-4 shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          Mar 10, 2019
        </span>
        <a
          className="transform cursor-pointer rounded bg-gray-600 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 hover:bg-gray-500"
          tabIndex="0"
          role="button"
        >
          Design
        </a>
      </div>

      <div className="mt-2">
        <a
          href="#"
          className="text-xl font-bold text-gray-700 hover:text-gray-600 hover:underline dark:text-white dark:hover:text-gray-200"
          tabIndex="0"
          role="link"
        >
          Accessibility tools for designers and developers
        </a>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
          enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
          ratione libero!
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <a
          href="#"
          className="text-blue-600 hover:underline dark:text-blue-400"
          tabIndex="0"
          role="link"
        >
          Read more
        </a>

        <div className="flex items-center">
          <img
            className="mx-4 hidden h-10 w-10 rounded-full object-cover sm:block"
            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
            alt="avatar"
          />
          <a
            className="cursor-pointer font-bold text-gray-700 dark:text-gray-200"
            tabIndex="0"
            role="link"
          >
            Khatab wedaa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
