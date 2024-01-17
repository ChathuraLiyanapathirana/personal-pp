import React from "react";
import ProfileImage from "../ProfileImage";

const HelloSection = () => {
  return (
    <div
      className="md:container md:mx-auto min-h-screen bg-white flex justify-center items-center"
      id="hello"
    >
      <section className="text-white">
        <div className="mx-auto max-w-screen-xl px-4 lg:py-16 xs:pt-8 xs:pb-16 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl flex justify-center items-center flex-col text-center">
            <ProfileImage />
            <h1 className="md:text-7xl font-extrabold xs:text-5xl text-slate-900 mt-6">
              <span className="text-lime-300">I'm Chathura.</span>
              <span className="md:text-5xl font-extrabold xs:text-4xl sm:block mt-2">
                {" "}
                Senior Software Engineer
              </span>
            </h1>

            <p className="mx-auto xs:mt-0 sm:mt-4 max-w-xl sm:text-xl/relaxed text-slate-500">
              Passionate about crafting innovative software solutions that drive
              efficiency and elevate user experiences. With over 5 years of
              hands-on experience in the software development industry, I bring
              a wealth of expertise to deliver cutting-edge solutions that
              seamlessly blend technology and user needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelloSection;
