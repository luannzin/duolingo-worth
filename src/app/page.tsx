"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Ban, Check, LoaderCircle } from "lucide-react";
import { useRouter } from "nextjs-toploader/app";
import { useEffect, useState } from "react";
import { getDuolingo } from "./helpers/get-duolingo";
import { cn } from "@/lib/utils";

export default function Home() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState<{
    [key: string]: boolean;
  }>({
    not_found: false,
    found: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${username}`);
  };

  const searchUsername = async (username: string) => {
    try {
      const data = await getDuolingo({
        username,
      });

      if (!data) {
        setErrors({
          not_found: true,
        });

        throw new Error("User not found");
      }

      setErrors({
        found: true,
        not_found: false,
      });

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!username) {
      setErrors({
        not_found: false,
        found: false,
      });

      return;
    }

    setIsLoading(true);

    const timer = setTimeout(() => {
      searchUsername(username);
    }, 1000);

    return () => clearTimeout(timer);
  }, [username]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col gap-2 items-center">
          <strong className="text-4xl">Duolingo Worth</strong>
          <span className="text-zinc-400">
            know your duolingo account worth in seconds
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-2 w-full"
        >
          <div
            className={cn(
              "w-full border rounded-md flex items-center pr-2",
              errors.not_found && "border-red-500 focus-visible:ring-0",
              errors.found && "border-green-500 focus-visible:ring-0"
            )}
          >
            <Input
              type="text"
              placeholder="Enter your duolingo username"
              value={username}
              onChange={(e) => setUsername(e.target.value.trim())}
              className={cn("border-none focus-visible:ring-0")}
            />
            {errors.found && <Check className="text-green-500" size={16} />}
            {errors.not_found && <Ban className="text-red-500" size={16} />}
          </div>
          <Button
            type="submit"
            className="w-full disabled:cursor-not-allowed"
            disabled={!username || isLoading || errors.not_found}
          >
            {isLoading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Let me know"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
