/* eslint-disable @next/next/no-img-element */
import { ServerNumberFlow } from "@/app/components/server-number-flow";
import { getDuolingo } from "@/app/helpers/get-duolingo";
import { getWorth } from "@/app/helpers/get-worth";
import { redirect } from "next/navigation";

import ProfilePic from "./_components/profile-pic";

export default async function UsernamePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const username = (await params).username;

  const data = await getDuolingo({
    username,
  });

  if (!data) return redirect("/");

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <ProfilePic url={`https:${data?.picture}/large`} />
          </div>
          <ServerNumberFlow
            value={getWorth(data)}
            format={{
              style: "currency",
              currency: "BRL",
            }}
            className="text-7xl font-bold"
          />
          <span className="text-zinc-400">
            this is the estimated worth of {username}&apos;s duolingo account
          </span>
        </div>
        {/* <div className="flex gap-20 justify-center w-full items-center">
          <div className="flex flex-col items-center">
            <img
              src={
                "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Fire.webp"
              }
              alt="Fire"
              width={64}
            />
            <strong>
              <ServerNumberFlow value={data?.streak} />
            </strong>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Dizzy.webp"
              alt="Dizzy"
              width={64}
            />
            <strong>
              <ServerNumberFlow value={data?.totalXp} suffix=" xp" />
            </strong>
          </div>
        </div> */}
      </div>
    </div>
  );
}
