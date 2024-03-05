import React, { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <form className="flex flex-col items-center">
        <input
          type="email"
          placeholder="email"
          className="w-[200px] h-[30px] m-[10px] border border-solid border-[black]"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          className="w-[200px] h-[30px] m-[10px] border border-solid border-[black]"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-[200px] h-[30px] border-none bg-[purple] text-white font-bold cursor-pointer"
          type="submit"
        >
          Login
        </button>
        {error && (
          <span className="text-[12px] text-[red] mt-[10px]">
            Wrong email or password!
          </span>
        )}
      </form>
    </div>
  );
};

export default Login;
