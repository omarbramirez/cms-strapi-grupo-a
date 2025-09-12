import React from "react";

const Newsletter = () => {
  return (
    <div className="h-1/2 w-full bg-gray-100 mt-20 py-16 px-4">
      <div className="max-w-[600px] mx-auto text-center">
        <h1 className="text-2xl text-center font-bold mb-4 uppercase">
          Suscríbete
        </h1>
        <p className="mb-6">
          Recibe las últimas noticias, artículos y actualizaciones directamente
          en tu correo.
        </p>
        <form className=" flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Ingresa tu correo"
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-primary opacity-90  text-white font-semibold hover:opacity-100 transition-all duration-300 ease-in-out"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
