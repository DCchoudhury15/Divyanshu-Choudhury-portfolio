import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-10 relative">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            
            <a
              href="https://www.geeksforgeeks.org/user/divyanshuchfx84/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              < Image
              src="/GeeksForGeeks_logo.png"
                alt="GeeksForGeeks"
                width={24}
                height={24}
                className="object-contain"/>
              <span className="text-[15px] ml-[6px]">GeeksForGeeks</span>
            </a>

            <a
              href="https://github.com/DCchoudhury15"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>

            <a
              href="https://discord.com/channels/@me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>

            <a
              href="https://www.instagram.com/ch.divyanshu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>

            <a
              href="https://x.com/Dc_learns"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>

            <a
              href="https://www.linkedin.com/in/divyanshu-choudhury"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

            <a
              href="#sponsor"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </a>

            <a
              href="#about-me"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </a>

            <a
              href="divyanshuchoudhury51@gmail.com"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <span className="text-[15px] ml-[6px]">Gmail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;