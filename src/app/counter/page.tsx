"use client"; // Required for interactive components in App Router
import { useState } from "react";
import link from "next/link";
import * as React from "react"


export default function ClickCounterPage() {
 const [count, setCount] = useState(0);
 const [inputCount, setInputCount] = useState(0);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8">

            <h1 className="text-2xl font-bold mb-4">Click Counter</h1>

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 absolute top-5 left-5"
                onClick={() => window.history.back()}
            >
                Back
            </button>

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setCount(count + 1)}
            >
                +
            </button>

            <p className="text-lg m-4">Count: {count}</p>

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setCount(count - 1)} // Increase count when clicked
            >
                -
            </button>


            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 m-2"
                onClick={() => setCount(0)}
            >
                reset
            </button>

            <label
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 m-2">
                Set Counter:
                <input
                    className="w-15"
                    type = "number" value={inputCount}
                onChange={e => {
                    setInputCount(Number(e.target.value))
                    setCount(Number(e.target.value))
                    }
                }/>
            </label>
        </main>
    );
}