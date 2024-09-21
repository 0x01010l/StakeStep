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
              <span className="block text-4xl mb-2 font-serif italic text-[#FF6F61] transform -rotate-2 shadow-text">Welcome to</span>
              <span className="block text-8xl font-extrabold font-sans tracking-tight text-[#008080] transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-text">
                StakeStep
              </span>
            </h1>
            <div className="relative overflow-hidden h-auto w-full mb-4 px-4">
              <p className="text-[#333333] leading-relaxed">
                <span className="block text-3xl font-bold text-[#D62828] transform hover:translate-y-[-5px] transition-transform duration-200 shadow-text">Build Better Habits</span>
                <span className="block text-2xl font-medium text-[#1D3557] my-2 transform hover:translate-y-[-5px] transition-transform duration-200 shadow-text">Stake Your Steps</span>
                <span className="block text-3xl font-extrabold text-[#2A2A2A] transform hover:translate-y-[-5px] transition-transform duration-200 shadow-text">Transform Your Life!</span>
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

        <div className="bg-[#FFD700] mt-10 flex items-center overflow-hidden" style={{ width: '100%', height: '30px', margin: '0 auto' }}>
          <div className="animate-marquee flex whitespace-nowrap font-extrabold text-lg text-[#333333]">
            <p className="silkscreen-bold inline-block mr-4">
              READ ❖ SWIM ❖ JUMP ❖ WRITE ❖ TRAVEL ❖ TALK ❖ COOK ❖  PLAY &nbsp;&nbsp;&nbsp;
            </p>
          </div>
        </div>

        <style jsx>{`
          .animate-marquee {
            display: flex;
            animation: marquee 15s linear infinite; /* Adjust speed (15s) as needed */
          }

          @keyframes marquee {
            0% { transform: translateX(100%); } /* Start off to the right */
            100% { transform: translateX(-100%); } /* End off to the left */
          }

          .silkscreen-bold {
            display: inline-block;
            font-weight: 900;
            font-size: 1.5rem; /* Adjust this value to decrease the size */
          }
        `}</style>

        <Link href="/challenge" passHref className="link">
          <button className="button bg-[#008080] text-[#F7F7F7] mt-5">
            <div className="outline border border-[#FF6F61]"></div>
            <div className="state state--default">
              <div className="icon fill-[#FFD700]">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g style={{ filter: 'url(#shadow)' }}>
                    <path
                      d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <filter id="shadow">
                      <feDropShadow
                        dx="0"
                        dy="1"
                        stdDeviation="0.6"
                        floodOpacity="0.5"
                      ></feDropShadow>
                    </filter>
                  </defs>
                </svg>
              </div>
              <p>
                {['T', 'a', 'k', 'e', ' ', 'C', 'h', 'a', 'l', 'l', 'e', 'n', 'g', 'e'].map((char, index) => (
                  <span
                    key={index}
                    className={`inline-block hover:text-[#FF6F61] delay-${index * 75}`}
                  >
                    {char}
                  </span>
                ))}
              </p>
            </div>
          </button>
        </Link>

        {connectedAddress && (
          <div className="flex items-center justify-center space-x-2 text-lg mt-5 text-[#333333]">
            <BugAntIcon className="h-6 w-6 mr-1" />
            <span>
              Logged in as: <Address address={connectedAddress} />
            </span>
          </div>
        )}

        <div className="flex items-center justify-center space-x-2 text-lg mt-2 text-[#333333]">
          <MagnifyingGlassIcon className="h-6 w-6" />
          <Link href="/admin" passHref>
            <span className="cursor-pointer hover:text-[#FF6F61]">Go to Admin</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
