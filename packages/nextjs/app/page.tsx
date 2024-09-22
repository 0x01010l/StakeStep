"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#e9d8a6] text-white overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center w-full px-5 py-10 text-center">
          <div className="flex-1">
            <h1 className="mb-6">
            <span className="block text-9xl font-extrabold font-sans tracking-tight text-[#FFD700] transform hover:scale-105 transition-all duration-300 ease-in-out shadow-text drop-shadow-2xl">
              StakeStep
            </span>
            </h1>
            <div className="flex flex-col items-center">
            <div className="flex justify-start w-full mb-4 ml-20">
            <span className="block text-3xl text-border font-bold text-[#FFA500] transform hover:translate-y-[-5px] transition-transform duration-200 ">
  Build Better Habits
</span>

           </div>
           <div className="flex justify-center w-full mb-4">
    <span className="block text-border text-3xl font-bold text-[#FFFFFF] transform hover:translate-y-[-5px] transition-transform duration-200 ">
      Stake Your Steps
    </span>
  </div>
  <div className="flex justify-end w-full mb-4">
    <span className="block text-3xl text-border font-bold text-[#FFA500] transform hover:translate-y-[-5px] transition-transform duration-200 ">
      Transform Your Life!
    </span>   
    </div> 
    </div>
          </div>

          <div className="relative w-[500px] h-[500px] mx-auto md:ml-10 md:mr-4 mb-10 mt-9">
            <Image
              src="/photo.jpg"
              alt="Description"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              className="rounded-full "
            />
          </div>
        </div>

        <div
          className="bg-[#FFD700] mt-10 flex items-center overflow-hidden rounded-lg shadow-lg"
          style={{ width: "100%", height: "40px", margin: "0 auto" }}
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

          .shadow-text {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
          }
        `}</style>

        {connectedAddress ? (
          <div className="mt-5">
            <Link href="/challenge" passHref className="link">
              <button className="btn-chlng bg-[#FFD700] text-[#333333] px-6 py-3 rounded-lg shadow-lg hover:bg-[#ffcc00] transition-all duration-200">
                <div className="bgContainer">
                  <span className="text-nowrap">Lets Challenge</span>
                  <span className="text-nowrap"> Lets Challenge</span>
                </div>
                <div className="arrowContainer">
                  <svg width="25" height="25" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                      fill="#333333"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>

            <div className="flex items-center justify-center space-x-2 text-xl mt-5 text-[#333333] px-4 py-2 bg-[#FFD700] rounded-lg shadow-md transition-colors duration-300">
              <span className="font-bold flex items-center">
                <BugAntIcon className="h-6 w-6 mr-1 inline-block align-middle" />
                Logged in as: <Address address={connectedAddress} />
              </span>
            </div>
          </div>
        ) : (
          <div className="text-xl font-bold mt-5 bg-[#FFD700] px-4 py-2 rounded-md shadow-md text-[#333333]">
            Connect Your Wallet
          </div>
        )}
      </div>
      <div className="flex flex-col items-center w-full mt-10">
  <div className="flex space-x-6 mb-6">
    <div className="bg-[#FFB6C1] rounded-lg shadow-lg p-8 w-64 h-48 flex flex-col items-center justify-center transition-transform transform hover:scale-105">
      <h3 className="text-7xl font-bold text-[#333333] mb-2">SAY</h3>
    </div>

    <div className="bg-[#FFB6C1] rounded-lg shadow-lg p-8 w-64 h-48 flex flex-col items-center justify-center transition-transform transform hover:scale-105">
      <h3 className="text-7xl font-bold text-[#333333] mb-2">STAKE</h3>
    </div>
  </div>

  <div className="bg-[#FFB6C1] rounded-lg shadow-lg p-8 w-64 h-48 flex flex-col items-center justify-center transition-transform transform hover:scale-105">
    <h3 className="text-7xl font-bold text-[#333333] mb-2">STEP!</h3>
  </div>
</div>

    </>
  );
};

export default Home;
