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
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-base-content overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-5 py-10">
          <div className="flex-1">
            <h1 className="text-center md:text-left mb-6">
              <span className="block text-3xl mb-2 font-serif italic">Welcome to</span>
              <span className="block text-6xl font-extrabold font-sans tracking-tight">
                StakeStep
                <span role="img" aria-label="shoe">
                  👟
                </span>
              </span>
            </h1>
            <div className="relative overflow-hidden h-12 w-full mb-4 px-4">
              <p className="absolute whitespace-nowrap  text-center text-base font-light leading-tight text-white">
                Build Better Habits, Stake Your Steps, Transform Your Life!
              </p>
            </div>
          </div>
         


          <div className="relative w-64 h-64 mx-auto md:ml-10">
            {[...Array(9)].map((_, i) => {
              // Array of image paths
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

              // Get the image source based on the index
              const imageSrc = imageSources[i % imageSources.length];

              return (
                <div
                  key={i}
                  className="absolute transform"
                  style={{
                    top: "50%",
                    left: "10%",
                    transform: `rotate(${i * 40}deg) translate(140px) rotate(-${i * 40}deg)`,
                  }}
                >
                  <Image src={imageSrc} alt="Description" width={50} height={50} className="rounded-full" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white w-full mt-8">
  <div className="animate-marquee font-extrabold text-3xl align-middle mt-10 text-black" style={{ left: '0' }}>
    <p className="silkscreen-bold">READ ⬤ SWIM ⬤ READ ⬤ WRITE ⬤ TRAVEL ⬤ TALK ⬤ COOK ⬤ PLAY </p>
</div>
</div>
<Link href="/challenge" passHref className="link" >
<button className="button">
      <div className="outline"></div>
      <div className="state state--default">
        <div className="icon">
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
            <span key={index} style={{ '--i': index }}>{char}</span>
          ))}
        </p>
      </div>
      <div className="state state--sent">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            strokeWidth="0.5px"
            stroke="black"
          >
            <g style={{ filter: 'url(#shadow)' }}>
              <path
                fill="currentColor"
                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
              ></path>
              <path
                fill="currentColor"
                d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
              ></path>
            </g>
          </svg>
        </div>
        <p>
          {['L', 'e', 't', 's', 'G', 'o'].map((char, index) => (
            <span key={index} style={{ '--i': index + 10 }}>{char}</span>
          ))}
        </p>
      </div>
    </button>
</Link>


        <div className="bg-base-300 text-base-content w-full py-12 mt-16 px-8">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 p-10 text-center items-center max-w-xs rounded-3xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <BugAntIcon className="h-8 w-8 fill-secondary mb-4" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 p-10 text-center items-center max-w-xs rounded-3xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary mb-4" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
