import { useState, useEffect } from "react";
import axios from "axios";
import { notification } from "antd";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  const handleKeydown = (event: any) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    const data = { email, password };
    if (!email || !password) {
      notification.error({
        message: "Missing Input !",
      });
      return;
    } else {
      try {
        const res: any = await axios.post(
          "http://localhost:3001/api/user/login",
          JSON.stringify(data),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (res && res.status === 200) {
          localStorage.setItem("token", res.data.accessToken);
          notification.success({
            message: "Login success",
          });
          navigate("/");
        }
        console.log(">>check res : ", res);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="min-h-screen bg-cover object-cover pr-56 bg-[url('https://images.unsplash.com/photo-1549905314-a716f4556858?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="flex items-center justify-center pt-[100px]">
        <div className="w-full max-w-xs">
          <a
            href="#"
            className="flex items-center ml-40  mb-5 text-6xl font-serif text-yellow-400 dark:text-white"
          >
            LOGIN
          </a>
          <form className="w-[500px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                form="username"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(event) => handleKeydown(event)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                form="password"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(event) => handleKeydown(event)}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="**********"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account?
                <Link
                  to={"/register"}
                  style={{ marginLeft: "5px", color: "blue" }}
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
