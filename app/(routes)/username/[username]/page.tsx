import { getDuolingo } from "@/app/helpers/get-duolingo";

export default async function UsernamePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const username = (await params).username;

  const data = await getDuolingo({
    username,
  });

  if (!data) return <div>User not found</div>;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-2">
        <strong className="text-4xl">Duolingo Worth</strong>
        <span>
          {username} has {data.streak} consecutive days
        </span>
      </div>
    </div>
  );
}
