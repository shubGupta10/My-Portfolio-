export default function Section({ children, id, className = "" }) {
    return (
        <section
            id={id}
            className={`relative w-full py-8 ${className}`}
        >
            {children}

        </section>
    );
}
