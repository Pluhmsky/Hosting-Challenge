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
          {/* Background Image Wrapper */}
<div className="fixed inset-0 z-[-1]">
  <Image
    src="/images/backgroundimg.png"
    alt="Background"
    fill
    className="object-cover w-full"
    priority
    sizes="100vw"
  />
</div>


        <Header/>
      <main className="flex flex-col items-center justify-center text-center text-white p-8 relative">
        <h1 className="text-4xl font-bold">{sayHello(name)}</h1>
        <p className="text-lg mt-4">
          Welcome to my very first Next.js app using TypeScript!
        </p>
        <h2 className="flex">
          This is just a test to see if i understood tailwinds css atleast a little bit
        </h2>
        <p className="text-lg mt-">Current date: {getYear()}th</p>
      </main>
    </div>
  );
}