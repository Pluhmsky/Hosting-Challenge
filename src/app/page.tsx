import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";

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
        <div className="text-4xl font-bold justify-center items-center text-center p-20 ">Tribe Hosting</div>

        <main className="flex flex-col text-[#F3E7CC] p-8 relative bg-background/20 backdrop-blur-sm w-1/2 h-screen mx-auto rounded-lg shadow-lg border border-[#F3E7CC]/20">

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