"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#e9d8a6] text-[#333333] overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center w-full px-5 py-10 text-center">
          <div className="flex-1">
            <h1 className="mb-6">
              <span className="block text-4xl mb-2 font-serif italic text-[#FF6F61] transform -rotate-2 shadow-text">
                Welcome to
              </span>
              <span className="block text-8xl font-extrabold font-sans tracking-tight text-[#008080] transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-text">
                StakeStep
              </span>
            </h1>
            <div className="relative overflow-hidden h-auto w-full mb-4 px-4">
              <p className="text-[#333333] leading-relaxed">
                <span className="block text-3xl font-bold text-[#D62828] transform hover:translate-y-[-5px] transition-transform duration-200 shadow-text">
                  Build Better Habits
                </span>
                <span className="block text-2xl font-medium text-[#1D3557] my-2 transform hover:translate-y-[-5px] transition-transform duration-200 shadow-text">
                  Stake Your Steps
                </span>
                <span className="block text-3xl font-extrabold text-[#2A2A2A] transform hover:translate-y-[-5px] transition-transform duration-200 shadow-text">
                  Transform Your Life!
                </span>
              </p>
            </div>
          </div>
          <div className="relative w-64 h-64 mx-auto md:ml-10 mb-10">
            {[...Array(9)].map((_, i) => {
              const imageSources = [
                "/gym.png",
                "/dumbbell.png",
                "/fitness.png",
                "/yoga.png",
                "/open-book.png",
                "/swimming.png",
                "/bad-habits.png",
                "/golf-game.png",
                "/note.png",
              ];
              const imageSrc = imageSources[i % imageSources.length];

              return (
                <div
                  key={i}
                  className="absolute transform"
                  style={{
                    top: "50%",
                    left: "1%",
                    transform: `rotate(${i * 40}deg) translate(180px) rotate(-${i * 40}deg)`,
                  }}
                >
                  <Image src={imageSrc} alt="Description" width={60} height={60} className="rounded-full" />
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="bg-[#FFD700] mt-10 flex items-center overflow-hidden"
          style={{ width: "100%", height: "30px", margin: "0 auto" }}
        >
          <div className="animate-marquee flex whitespace-nowrap font-extrabold text-lg text-[#333333]">
            <p className="silkscreen-bold inline-block mr-4">
              READ ❖ SWIM ❖ JUMP ❖ WRITE ❖ TRAVEL ❖ TALK ❖ COOK ❖ PLAY &nbsp;&nbsp;&nbsp;
            </p>
          </div>
        </div>

        <style jsx>{`
          .animate-marquee {
            display: flex;
            animation: marquee 15s linear infinite; /* Adjust speed (15s) as needed */
          }

          @keyframes marquee {
            0% {
              transform: translateX(100%);
            } /* Start off to the right */
            100% {
              transform: translateX(-100%);
            } /* End off to the left */
          }

          .silkscreen-bold {
            display: inline-block;
            font-weight: 900;
            font-size: 1.5rem; /* Adjust this value to decrease the size */
          }
        `}</style>

        {connectedAddress ? (
          <div className="mt-5">
            {" "}
            <Link href="/challenge" passHref className="link">
              <button className="btn-chlng">
                <div className="bgContainer">
                  <span className="text-nowrap">Lets Challenge</span>
                  <span className="text-nowrap"> Lets Challenge</span>
                </div>
                <div className="arrowContainer">
                  <svg width="25" height="25" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>
            <div className="flex items-center justify-center space-x-2 text-xl mt-5 text-[#333333]">
              <span className="text-nowrap">
                Logged in as: <Address address={connectedAddress} />
              </span>
            </div>
          </div>
        ) : (
          <div className="text-2xl font-bold"> Connect Your Wallet </div>
        )}
      </div>
    </>
  );
};

export default Home;
