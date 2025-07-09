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
      <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">

      <Header />
          {/*
          <Link href="/counter">
             <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 absolute top-5 left-5"
             >
                 Counter
             </button>
         </Link>
          */}

    <h1 className="text-4xl font-bold">{sayHello(name)}</h1>
    <p className="text-lg mt-4">
        Welcome to my very first Next.js app using TypeScript!
    </p>
    <h2 className="flex">
        This is just a test to see if i understood tailwinds css atleast a little bit
    </h2>
    <p className="text-lg mt-">Current date: {getYear()}th</p>
</main>
  )
    ;
}
