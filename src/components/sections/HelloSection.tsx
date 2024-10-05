import React from "react";
import ProfileImage from "../ProfileImage";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

const HelloSection = () => {
  return (
    <div
      className="md:container md:mx-auto min-h-screen bg-white flex justify-center items-center"
      id="hello"
    >
      <BackgroundBeamsWithCollision className="md:absolute !h-auto mb-8 md:mb-0">
        <section className="text-white">
          <div className="mx-auto max-w-screen-xl px-4 lg:py-16 xs:pt-8 xs:pb-16 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl flex justify-center items-center flex-col text-center">
              <ProfileImage />
              <h1 className="md:text-7xl font-extrabold xs:text-5xl text-slate-900 mt-6">
                <div>
                <span className="text-slate-900">Hello, I'm </span>
                <span className="text-lime-300">Chathura.</span>
                </div>
                <span className="md:text-5xl font-extrabold xs:text-4xl sm:block mt-3">
                  {" "}
                  Welcome to my portfolio
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
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default HelloSection;
