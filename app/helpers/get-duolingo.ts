type getDuolingoProps = {
  username: string;
};

const getDuolingo = async ({ username }: getDuolingoProps) => {
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
