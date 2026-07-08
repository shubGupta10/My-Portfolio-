"use client";
import { useRef, useState } from "react";

export default function Magnetic({ children, intensity = 0.2 }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * intensity, y: middleY * intensity });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                transition: position.x === 0 && position.y === 0 ? "transform 0.3s ease-out" : "transform 0.1s ease-out"
            }}
            className="w-fit cursor-pointer"
        >
            {children}
        </div>
    );
}
