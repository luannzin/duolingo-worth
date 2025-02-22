import { worth } from "@/app/config/worth";
import type { User } from "@/app/types/user";

const getWorth = (user: User) => {
  let value = 0;
  const { streak, xp } = worth;

  value += user.streak * streak;
  value += user.totalXp * xp;

  return value;
};

export { getWorth };
