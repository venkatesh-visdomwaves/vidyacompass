import React from 'react';
import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function HowItWorksHero() {
    return (
        <Card className="w-full h-[600px] bg-black relative overflow-hidden text-left border-0 rounded-none">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="flex flex-col md:flex-row h-full">
                {/* Left content */}
                <div className="flex-1 p-8 relative z-10 flex flex-col justify-center pl-10 md:pl-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#FF9933] mb-6 rounded-lg w-fit">
                        Our Process & Methodology
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#FF9933] via-white to-[#138808] mb-8 italic uppercase leading-tight">
                        The Intelligence <br />
                        <span className="text-white">Engine.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed font-medium">
                        Understand how our AI-driven platform personalizes your career journey.
                        From deep data analysis to algorithmic matching, witness the science behind your success.
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

