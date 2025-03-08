"use client";

import CodedBy from "@/components/CodedBy";
import Image from "next/image";

interface ProfileCardProps {
  name: string;
  age: number;
  location: string;
  avatar: string;
  background: string;
  stats: {
    followers: number;
    likes: number;
    photos: number;
  };
}

const formatNumber = (num: number): string => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num.toString();
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  age,
  location,
  avatar,
  background,
  stats,
}) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-PC-dark-cyan font-PC-kumbh p-6 relative overflow-hidden">
      <div className="absolute bg-gradient-to-bl from-[#20b9c7] from-30% via-transparent via-70% to-transparent w-[1200px] aspect-square rounded-full -translate-x-[550px] -translate-y-[550px]"></div>
      <div className="absolute bg-gradient-to-br from-[#20b9c7] via-transparent to-transparent w-[1200px] aspect-square rounded-full translate-x-[550px] translate-y-[550px]"></div>
      <div className="max-w-xs w-full rounded-xl overflow-hidden z-[1]">
        <div className="w-full h-32">
          <Image
            width={320}
            height={250}
            src={background}
            alt="background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center bg-white relative">
          <Image
            width={100}
            height={100}
            src={avatar}
            alt={`${name}'s profile`}
            className="aspect-square rounded-full border-4 border-white -translate-y-1/2"
          />
          <div className="w-full flex flex-col items-center justify-center -mt-10">
            <h1 className="font-bold text-lg mt-3">
              {name} <span className="font-normal text-PC-grayish-blue">{age}</span>
            </h1>
            <p className="text-sm text-PC-grayish-blue mt-2">{location}</p>
            <hr className="w-full border-gray-200 mt-4" />
            <div className="flex items-center justify-evenly w-full text-center my-4">
              <div>
                <h2 className="font-semibold">{formatNumber(stats.followers)}</h2>
                <p className="text-xs font-light text-PC-grayish-blue">Followers</p>
              </div>
              <div>
                <h2 className="font-semibold">{formatNumber(stats.likes)}</h2>
                <p className="text-xs font-light text-PC-grayish-blue">Likes</p>
              </div>
              <div>
                <h2 className="font-semibold">{formatNumber(stats.photos)}</h2>
                <p className="text-xs font-light text-PC-grayish-blue">Photos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex py-4 text-center text-xs text-gray-300 z-[1]">
        <CodedBy />
      </div>
    </div>
  );
};

export default ProfileCard;
