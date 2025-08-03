import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import {Button} from "@/components/ui/button";


export default function Home() {
  const name = "Mikey";

  function sayHello(user: string): string {
    return "Hello, " + user + "!";
  }

  function getYear(): number {
    return new Date().getDate()
  }

  return (
      <div className="min-h-screen relative">

<div className="fixed inset-0 z-[-1]">
  <Image
    src="/images/backgroundimg.png"
    alt="Background"
    quality="100"
    fill
    className="object-cover w-full"
    priority
    sizes="100vw"
  />
</div>


        <Header/>

          <div className="flex flex-col gap-6 items-center text-center max-w-4xl mx-auto mt-32">
    <h1 className="text-5xl font-bold text-[#F3E7CC] animate-fade-in">
        Ark: Survival Evolved Server Hosting
    </h1>
    
    <p className="text-xl text-[#F3E7CC]/90 mb-4">
        Host your ultimate dinosaur adventure with our premium, high-performance servers. 
        Get started in minutes with easy setup and 24/7 support.
    </p>
    
    <div className="flex flex-col gap-4 items-center">
        <div className="grid grid-cols-3 gap-8 text-[#F3E7CC]/80 mb-6">
            <div className="flex flex-col items-center">
                <span className="text-2xl font-bold mb-2">99.9%</span>
                <span className="text-sm">Uptime Guaranteed</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-2xl font-bold mb-2">Instant</span>
                <span className="text-sm">Server Setup</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-2xl font-bold mb-2">24/7</span>
                <span className="text-sm">Technical Support</span>
            </div>
        </div>
        
        <Button 
            className="text-2xl w-fit px-8 py-4 bg-accent text-background hover:bg-accent/80 hover:brightness-150  transform transition-all hover:scale-105"
            variant="default"
        >
            Start Hosting Now
        </Button>
        
        <p className="text-sm text-[#F3E7CC]/70 mt-2">
            No credit card required • Free 24-hour trial
        </p>
    </div>
</div>

        <main className="flex flex-col text-[#F3E7CC] m-7 p-9 relative bg-background/20 backdrop-blur-sm w-1/2 h-fit mx-auto rounded-lg shadow-lg border border-[#F3E7CC]/20">

        <div className=" px-2 rounded-2xl flex flex-col gap-2 text-lg text-center">
        <div>
  <h1 className="font-bold py-2 text-3xl">Powerful Performance, Zero Lag</h1>
  Powered by high-clock-speed CPUs, NVMe SSD storage, and low-latency networking.
  Our infrastructure is fine-tuned for real-time responsiveness, ensuring smooth tick rates
  and lag-free multiplayer gameplay — even with mods and large player counts.
</div>

<div>
  <h1 className="font-bold py-2 text-3xl">99.9% Uptime Guaranteed</h1>
  Backed by redundant systems and enterprise-grade data centers, your server stays online around the clock.
  Automatic failover and DDoS protection keep your world safe and uninterrupted.
</div>

<div>
  <h1 className="font-bold py-2 text-3xl">Tailored for Ark</h1>
  Optimized Ark server instances with full Steam Workshop integration, auto mod updating,
  and performance flags like -useallavailablecores and -crossplay.
  Play with full control and minimal friction.
</div>

<div>
  <h1 className="font-bold py-2 text-3xl">Easy Customization</h1>
  Access full FTP and file browser tools, edit GameUserSettings.ini and Game.ini directly,
  or use our custom panel to change settings, enable PvP, adjust XP rates, and more — no terminal required.
</div>

<div>
  <h1 className="font-bold py-2 text-3xl">Instant Setup</h1>
  Deploy your server in under 60 seconds with auto-generated configs, one-click mod packs, and instant server start.
  No port forwarding, no headaches.
</div>

<div>
  <h1 className="font-bold py-2 text-3xl">24/7 Expert Support</h1>
  Our team knows Ark inside and out — from mod conflicts and map rotations to cluster
  setups and advanced INI tuning. Help is always a live chat or email away.
</div>
        </div>
      </main>

    </div>
  );
}