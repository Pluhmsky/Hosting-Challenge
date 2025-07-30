"use client";
import { useState } from "react";
import link from "next/link";
import * as React from "react"
import { useTheme } from "next-themes"

export default function ClickCounterPage() {
 const [count, setCount] = useState(0);
 const [inputCount, setInputCount] = useState(0);
 const { setTheme } = useTheme()

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8">
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 absolute top-5 right-5"
                onClick={() => setTheme('light')}
            >
                Switch to Light Mode
            </button>


            <h1 className="text-2xl font-bold mb-4">Click Counter</h1>

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 absolute top-5 left-5"
                onClick={() => window.history.back()}
            >
                Back
            </button>

        </main>
    );
}