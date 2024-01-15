import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-slate-200 mt-0 mb-4">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
          Uh-oh!
        </p>

        <p className="mt-0 text-gray-500">We can't find that page.</p>

        <a
          href="/"
          className="mt-0 inline-block rounded bg-slate-600 px-5 py-3 text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
