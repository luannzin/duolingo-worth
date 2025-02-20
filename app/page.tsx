// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

export default function Home() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="flex flex-col items-center gap-2">
				<strong className="text-4xl">Duolingo Worth</strong>
				<span className="text-zinc-400">
					know your duolingo account worth in seconds
				</span>
				{/* <div className="flex flex-col items-center gap-2 w-full">
					<Input type="text" placeholder="Enter your duolingo username" />
					<Button type="button">let me know</Button>
				</div> */}
			</div>
		</div>
	);
}
