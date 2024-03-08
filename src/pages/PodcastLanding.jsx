import React from "react";
import podcastheadphoneimg from "../assets/images/podcastheadphone.png";
import podcastgirl2 from "../assets/images/podcastgirl2.png";
import MobileSidebar from "../components/MobileSidebar";
import { Link } from "react-router-dom";
import audio from "../assets/gifs/audio.gif";

const PodcastLanding = () => {
  const podcastCount = 500;
  const subscriberCount = 27;
  const listenerCount = 398;
  const viewerCount = 909;
  return (
    <div className="flex flex-col h-full w-full pr-8 max-sm:px-4 ">
      <div className="flex w-full justify-between items-center font-extrabold pb-2">
        <div className="flex max-sm:text-2xl text-3xl gap-3 select-none">
          <MobileSidebar />
          Podcast
        </div>
        <p className="flex h-12 w-12  rounded-full border border-black text-black items-center justify-center">
          <i className="ri-user-line text-2xl"></i>
        </p>
      </div>
      <div className="flex flex-col-reverse gap-6  lg:flex-row overflow-y-auto h-full sm:pl-10 sm:pt-10 ">
        <div className="flex flex-col w-1/4 gap-5 max-lg:w-full lg:h-[90%]">
          <div className="flex justify-end sm:h-[80%] max-lg:pt-10">
            <div className=" bg-orange-300 w-[90%] max-lg:w-full">
              <img
                src={podcastheadphoneimg}
                className="w-full h-full object-cover"
              ></img>
            </div>
          </div>
          <div className="flex bg-[#b4e173] w-full sm:h-[15%] justify-evenly max-sm:p-4">
            <div className="flex flex-col justify-center items-center select-none">
              <p className="text-xl font-semibold">{subscriberCount}</p>
              <p className="text-xs">Subsriber</p>
            </div>
            <div className="flex flex-col justify-center items-center select-none">
              <p className="text-xl font-semibold">{listenerCount}</p>
              <p className="text-xs ">Listener</p>
            </div>
            <div className="flex flex-col justify-center items-center select-none">
              <p className="text-xl font-semibold">{viewerCount}</p>
              <p className="text-xs ">Viewer</p>
            </div>
          </div>
        </div>
        <div className="flex w-1/4 max-lg:w-full lg:h-[90%]">
          <div className="flex flex-col gap-5 w-[95%] max-lg:w-[80%]">
            <div className="flex gap-2 h-[12%] max-lg:h-[6%] max-md:h-[8%] max-sm:h-[10%] max-sm:p-4 rounded-full items-center justify-center">
              <div className="flex bg-red-500 rounded-full items-center justify-center">
                <i className="ri-play-fill text-white text-3xl max-sm:text-xl p-1 px-2 rounded-full"></i>
              </div>
              <img className="w-56 max-sm:w-48" src={audio}></img>
            </div>
            <div className="bg-purple-300 sm:h-[83%]">
              <img
                src={podcastgirl2}
                className="w-full h-full object-cover"
              ></img>
            </div>
          </div>
          <div className="flex bg-white h-[135px] w-[145px] max-sm:h-[90px] max-sm:w-[95px] items-center justify-center self-end mb-[-30px] max-sm:mb-[-30px] ml-[-100px] max-sm:ml-[-70px] rounded-full">
            <div className="flex flex-col bg-blue-600 h-[115px] w-[120px] max-sm:h-[80px] max-sm:w-[85px] rounded-full items-center justify-center select-none">
              <p className="text-3xl max-sm:text-xl text-white font-bold">
                {podcastCount}+
              </p>
              <p className="text-white font-bold max-sm:text-sm">Podcasts</p>
            </div>
          </div>
          <div className="self-end after:content-[''] mb-[-15px] ml-[-5px] after:block after:border-t-4 after:border-black after:w-8 after:h-9 after:transform after:rotate-30 after:transform-origin-bottom"></div>
          <div className="self-end after:content-[''] mb-[-45px] ml-[-60px] ml after:block after:border-t-4 after:border-black after:w-9 after:h-9 after:transform after:rotate-45 after:transform-origin-0"></div>
          <div className="self-end after:content-[''] mb-[-55px] ml-[-65px] ml after:block after:border-t-4 after:border-black after:w-7 after:h-9 after:transform after:rotate-[75deg] after:transform-origin-bottom"></div>
        </div>

        <div className="flex flex-col gap-10 w-1/2 lg:pl-10 max-lg:w-full sm:h-[90%] ">
          <div className="flex flex-col w-[80%] max-sm:w-full gap-3">
            <span className="monsterrat text-6xl max-sm:text-4xl max-md:text-5xl font-extrabold tracking-wide leading-tight text-zinc-900 ">
              A New Era of{" "}
              <span className=" text-orange-500 text-justify monsterrat ">
                Podcasting{" "}
              </span>
              for Enterpreneurs
            </span>
            <p className="text-zinc-400 monsterrat tracking-wide font-bold">
              The best podcast website communicate and make it easy for visitors
              to discover.
            </p>
          </div>
          <div>
            <Link
              to="/podcasts"
              className="bg-orange-500 rounded-full p-2 px-6 font-bold text-white hover:bg-orange-600"
            >
              Start Listening{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastLanding;
