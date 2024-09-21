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
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-base-content">
        <div className="px-5 py-10">
          <h1 className="text-center mb-6">
            <span className="block text-3xl mb-2 font-serif italic">Welcome to</span>
            <span className="block text-6xl font-extrabold font-sans tracking-tight">
              StakeStep
              <span role="img" aria-label="shoe">
                👟
              </span>
            </span>
          </h1>
          <div className="relative overflow-hidden h-12 w-full mb-4 px-4">
            <p className="absolute whitespace-nowrap animate-marquee text-center text-base font-light leading-tight text-white">
              Build Better Habits, Stake Your Steps, Transform Your Life!
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="bg-base-100 text-base-content p-4 rounded-lg shadow-lg max-w-sm w-full">
              <div className="flex items-center">
                <p className="font-medium mr-2">Connected Address:</p>
                <Address address={connectedAddress} />
              </div>
            </div>

            <div className="relative w-64 h-64 mx-auto">
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
                  // "/lifestyle.png",
                ];

                // Get the image source based on the index
                const imageSrc = imageSources[i % imageSources.length];

                return (
                  <div
                    key={i}
                    className="absolute transform"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${i * 40}deg) translate(140px) rotate(-${i * 40}deg)`,
                    }}
                  >
                    <Image src={imageSrc} alt="Description" width={50} height={50} className="rounded-full" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

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
