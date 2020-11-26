import React from "react";

const Login = () => {
  return (
    <div className="w-full flex">
      <div className="w-1/4">
        <form class="form-horizontal w-3/4 mx-auto" method="POST">
          <div class="flex flex-col mt-4">
            <input
              id="email"
              type="text"
              class="flex-grow h-8 px-2 border rounded border-grey-400"
              name="email"
              value=""
              placeholder="Email"
            />
          </div>
          <div class="flex flex-col mt-4">
            <input
              id="password"
              type="password"
              class="flex-grow h-8 px-2 rounded border border-grey-400"
              name="password"
              required
              placeholder="Password"
            />
          </div>
          <div class="flex items-center mt-4">
            <input type="checkbox" name="remember" id="remember" class="mr-2" />{" "}
            <label for="remember" class="text-sm text-grey-dark">
              Remember Me
            </label>
          </div>
          <div class="flex flex-col mt-8">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="w-3/4">
        <h1>IMG</h1>
      </div>
    </div>
  );
};

export default Login;
