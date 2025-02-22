type getDuolingoProps = {
  username: string;
};

type User = {
  streak: number;
  totalXp: number;
};

const getDuolingo: ({
  username,
}: getDuolingoProps) => Promise<User | null> = async ({
  username,
}: getDuolingoProps) => {
  try {
    const response = await fetch(
      `https://www.duolingo.com/2017-06-30/users?username=${username}`
    );
    const data = await response.json();

    if (!data?.users) {
      return null;
    }

    return data?.users[0];
  } catch (error) {
    return error;
  }
};

export { getDuolingo };
