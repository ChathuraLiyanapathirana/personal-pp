import React from "react";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="md:container md:mx-auto min-h-screen bg-white pt-4 lg:pr-0 lg:pl-0 xxs:pr-4 xxs:pl-4">
      <div className="flex flex-1 flex-col lg:items-start xs:items-end xs:justify-end">
        <h1 className="text-4xl font-extrabold sm:text-4xl text-slate-900 mt-0 mb-0">
          Full blog site
        </h1>
        <a
          href="https://appcitor.com"
          target="_blank"
          className="text-3xl font-extrabold sm:text-3xl mt-0 text-lime-300 underline mb-4"
        >
          appcitor.com
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 lg:gap-8">
        {Array.from(String(1234)).map((item, index) => {
          return (
            <div className="rounded-lg" key={index}>
              <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg h-full animate-pulse">
                <div>
                  <div className="h-56 w-full object-cover bg-slate-700" />
                </div>

                <div className="bg-white p-4 sm:p-6 h-full">
                  <span className="block bg-slate-700 h-3 space-y-6"> </span>

                  <a href="#">
                    <h3 className="mt-0.5 h-5 bg-slate-700" />
                  </a>

                  <p className="mt-2 h-10 bg-slate-700" />
                  <div className="group mt-4 inline-flex items-center gap-1 text-sm font-medium h-2 bg-slate-700" />
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Loader;
