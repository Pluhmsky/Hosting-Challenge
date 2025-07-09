import Image from "next/image";

export default function Home() {
  const name = "Mikey";

  function sayHello(user: string): string {
    return "Hello, " + user + "!";
  }

  return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">

          <h1 className="text-4xl font-bold">{sayHello(name)}</h1>
        <p className="text-lg mt-4">
          Welcome to my very first Next.js app using TypeScript!
        </p>
          <h2 className="flex">
              This is just a test to see if i understood tailwinds css atleast a little bit
          </h2>
      </main>
  );
}
