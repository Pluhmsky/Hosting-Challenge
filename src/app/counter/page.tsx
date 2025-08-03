"use client";
import { useState } from "react";
import link from "next/link";
import * as React from "react"
import { useTheme } from "next-themes"
import Header from "@/components/layout/header";

export default function ClickCounterPage() {
 const [count, setCount] = useState(0);
 const [inputCount, setInputCount] = useState(0);
 const { setTheme } = useTheme()

    return (
<div>
    <Header/>

        <main className="min-h-screen flex flex-row justify-between items-center p-8">

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setTheme('light')}
            >
                Switch to Light Mode
            </button>


            <h1 className="text-2xl font-bold mb-4">Click Counter</h1>

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 "
                onClick={() => window.history.back()}
            >
                Back
            </button>

        </main>
</div>
    );
}