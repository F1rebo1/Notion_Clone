import TypewriterTitle from "@/components/ui/TypewriterTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PartyPopper } from "lucide-react";

export default function Home(){
  return(
    <div className="bg-gradient-to-r min-h-screen from-indigo-400 to-pink-400">
      <div className="text-7xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1>Your <span className="text-orange-600">AI powered</span> assistant awaits</h1>
        <div className="mt-4"></div>
        <h2 className="font-semibold text-3xl text-center text-slate-700"><TypewriterTitle/></h2>
        <div className="mt-8"></div>
        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button className="relative start-1/3">Let's go<PartyPopper className="ml-2 w-5 h-5" strokeWidth={3}/></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}