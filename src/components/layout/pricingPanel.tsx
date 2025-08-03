import React from 'react';
import {Button} from "@/components/ui/button";

interface PricingPanelProps {
    points:
        Array<{
        text: string;
        included: boolean;
        }>;
        title?: string;
        price?: string;
        description?: string;
}


export default function PricingPanel({
    points,
    title = "Standard Plan",
    price = "$14.99",
    description = "Perfect for small to medium communities"
}: PricingPanelProps) {
    return (
        <div className="w-full max-w-md ">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                    <p className="text-gray-600 mt-2">{description}</p>
                    <div className="mt-4">
                        <span className="text-4xl font-bold text-gray-900">{price}</span>
                        <span className="text-gray-600">/month</span>
                    </div>
                </div>

                <div className="space-y-3 text-sm">
                    {points.map((point, index) => (
                        <div key={index} className="flex items-start gap-2">
                            <span className={point.included ? "text-green-500 text-lg" : "text-red-500 text-lg"}>
                                {point.included ? "✓" : "✕"}
                            </span>
                            <span className="text-gray-700">{point.text}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <Button className="w-full bg-[#A87A5D] hover:bg-[#A87A5D]/90 text-white">
                        Select Plan
                    </Button>
                </div>
            </div>
        </div>
    )
}