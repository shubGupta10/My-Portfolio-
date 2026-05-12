"use client";

import { useState, useRef, useEffect } from "react";

export default function HoverGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const glowRef = useRef(null);

    useEffect(() => {
        const parent = glowRef.current?.parentElement;
        if (!parent) return;

        const handleMouseMove = (e) => {
            const rect = parent.getBoundingClientRect();
            setPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        const handleMouseEnter = () => setOpacity(1);
        const handleMouseLeave = () => setOpacity(0);

        parent.addEventListener("mousemove", handleMouseMove);
        parent.addEventListener("mouseenter", handleMouseEnter);
        parent.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            parent.removeEventListener("mousemove", handleMouseMove);
            parent.removeEventListener("mouseenter", handleMouseEnter);
            parent.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl transition-opacity duration-500 ease-in-out"
            style={{ opacity }}
        >
            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />
        </div>
    );
}