"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        setClicked(true);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setTimeout(() => setClicked(false), 300);
    }

    return (
        <div className = "fixed bottom-4 right-4 z-50">
            <button className = {`flex items-center justify-center bg-amber-400 hover:bg-amber-500 transition-all duration-300 shadow-lg text-white rounded-full w-12 h-12 focus:outline-none ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`} onClick = {scrollToTop}>
                <ArrowUp className = {`text-lg ${clicked ? "animate-bounce" : ""}`} />
            </button>
        </div>
    )
}

export default ScrollToTop;