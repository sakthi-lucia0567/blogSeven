import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const SignupPage = () => {
  const [loading, setLoading] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    console.log("data coming from form", { email, password });

    const data = {
      email,
      password,
    };
    setLoading(true);
    axios
      .post("http://localhost:8000/auth/register", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Signup Successfully", {
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        });
        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("User Already Exist", {
          variant: "error",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        });
        console.log(err);
      });
  };

  return (
    <div className="m-auto mx-auto w-full max-w-sm rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <form className="mt-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="Email"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Password
            </label>
          </div>

          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${
              error ? "border-red-500" || "dark: border-red-500" : "bg-white"
            } mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300`}
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Confirm Password
            </label>
          </div>
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`${
              error ? "border-red-500" || "dark: border-red-500" : "bg-white"
            } mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300`}
          />
        </div>

        <div className="mt-6">
          <button className="w-full transform rounded-lg bg-gray-800 px-6 py-2.5 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign Up
          </button>
        </div>
      </form>

      <p className="mt-8 text-center text-xs font-light text-gray-400">
        {" "}
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-gray-700 hover:underline dark:text-gray-200"
        >
          SignIn...!
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
