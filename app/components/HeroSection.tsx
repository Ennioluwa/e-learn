"use client";

import Image from "next/image";
import Container from "./Container";
import Navbar from "./Navbar";
import { AiOutlineSearch, AiFillHeart, AiFillStar } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className=" mb-80">
      <Navbar />
      <Container>
        <div className="-z-10 p-10 md:p-20 text-white bg-green-700 min-h-[700px] rounded-[2rem] flex gap-10 justify-between flex-col md:flex-row items-center relative">
          <div className="md:w-[50%] w-full flex flex-col gap-10">
            <p className=" text-6xl">
              Let's Grow Your Education Level up With E-Learn
            </p>
            <p className=" text-lg">Learn anytime anywhere with experts.</p>
            <div className="relative w-full lg:w-[80%]">
              <input
                className="px-4 py-5 bg-white border-none outline-none rounded-md w-full"
                type="text"
                placeholder="Type Your Course"
              />
              <button className=" grid place-items-center absolute right-2 top-[50%] transform translate-y-[-50%] h-12 w-12 rounded bg-orange-400">
                <AiOutlineSearch className=" h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="md:w-[50%] w-full h-auto absolute -top-20 right-20 bottom-0 z-10 ">
            <div className="relative w-full h-full ">
              <Image
                src="/e-learn-home.png"
                alt="home image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 px-20 gap-10 mt-20 items-start">
          <div className="flex gap-32 items-center">
            <div className=" flex flex-col gap-3">
              <h2 className=" text-6xl font-bold">10k</h2>
              <div className="flex gap-1">
                <AiFillHeart className="h-4 w-4 text-red-500" />
                <AiFillHeart className="h-4 w-4 text-red-500" />
                <AiFillHeart className="h-4 w-4 text-red-500" />
                <AiFillHeart className="h-4 w-4 text-red-500" />
                <AiFillHeart className="h-4 w-4 text-red-500" />
              </div>
              <p>Active Students</p>
              <p className=" text-orange-500">On Websites</p>
            </div>
            <div className=" flex flex-col gap-3">
              <h2 className=" text-6xl font-bold">4.7</h2>
              <div className="flex gap-1">
                <AiFillStar className="h-4 w-4 text-yellow-500" />
                <AiFillStar className="h-4 w-4 text-yellow-500" />
                <AiFillStar className="h-4 w-4 text-yellow-500" />
                <AiFillStar className="h-4 w-4 text-yellow-500" />
                <AiFillStar className="h-4 w-4 text-yellow-500" />
              </div>
              <p>1,938 Rating</p>
              <p className=" text-orange-500">User Community</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className=" text-4xl font-semibold">
              Trusted by 25,000+ happy students who are joining us to achieve
              their goals.
            </p>
            <p>Also featured in:</p>
            <div className=" flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image src="/slack.png" alt="slack" height={30} width={30} />
                <span className=" text-2xl font-bold">slack</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/microsoft.png"
                  alt="microsoft"
                  height={30}
                  width={30}
                />
                <span className=" text-2xl font-medium text-gray-400">
                  Microsoft
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/facebook.png"
                  alt="facebook"
                  height={30}
                  width={30}
                />
                <span className=" text-2xl font-bold text-blue-500">
                  facebook
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Benefits */}
        <div className=" mt-32">
          <h2 className=" text-center text-5xl leading-[60px] font-bold">
            Working Process to
            <br />
            Get Full Benefits
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
