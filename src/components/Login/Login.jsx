import React from "react";
import { Link } from "react-router-dom";
import bg2 from "./bg2.jpg";

const Login = () => {
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-5/12 flex flex-col">
        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
          <Link to="/">
            <button className="p-0 w-12 h-12 bg-black rounded-full hover:bg-gray-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
              <svg
                className="w-8 h-8 mx-auto text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
            </button>
          </Link>
        </div>

        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Bienvenido</p>
          <form
            className="flex flex-col pt-3 md:pt-8"
            onsubmit="event.preventDefault();"
          >
            <div className="flex flex-col pt-4">
              <label for="email" className="text-lg">
                Correo
              </label>
              <input
                type="email"
                id="email"
                placeholder="tucorreo@email.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label for="password" className="text-lg">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
            >
              Ingresar
            </button>
          </form>
          <div className="text-center pt-12 pb-12">
            <p>
              ¿No tienes cuenta?{" "}
              <a href="/register" className="underline font-semibold">
                Registrate aquí.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="w-7/12 shadow-2xl">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src={bg2}
          alt="background"
        />
      </div>
    </div>
  );
};

export default Login;
