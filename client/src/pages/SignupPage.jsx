import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div class="m-auto mx-auto w-full max-w-sm rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <form class="mt-6">
        <div>
          <label
            for="username"
            class="block text-sm text-gray-800 dark:text-gray-200"
          >
            Username
          </label>
          <input
            type="text"
            class="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>

        <div class="mt-4">
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm text-gray-800 dark:text-gray-200"
            >
              Password
            </label>
          </div>

          <input
            type="password"
            class="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <label
              for="confirmPassword"
              class="block text-sm text-gray-800 dark:text-gray-200"
            >
              Confirm Password
            </label>
          </div>

          <input
            type="password"
            class="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>

        <div class="mt-6">
          <button class="w-full transform rounded-lg bg-gray-800 px-6 py-2.5 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign Up
          </button>
        </div>
      </form>

      <p class="mt-8 text-center text-xs font-light text-gray-400">
        Already have an account?
        <Link
          to="/login"
          class="font-medium text-gray-700 hover:underline dark:text-gray-200"
        >
          Create One
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
