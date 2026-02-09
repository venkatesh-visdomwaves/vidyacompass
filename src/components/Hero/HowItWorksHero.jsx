import React from 'react';
import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function HowItWorksHero() {
    return (
        <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden text-left border-0 rounded-none">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="flex flex-col md:flex-row h-full">
                {/* Left content */}
                <div className="flex-1 p-8 relative z-10 flex flex-col justify-center pl-10 md:pl-20">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Internal Workings
                    </h1>
                    <p className="mt-4 text-neutral-300 max-w-lg">
                        Understand how our AI-driven platform personalizes your career journey.
                        From data analysis to personalized recommendations, see the magic happening behind the scenes.
                    </p>
                </div>

                {/* Right content */}
                <div className="flex-1 relative hidden md:block">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </Card>
    )
}
