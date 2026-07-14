export default function Container({ children, className = "" }) {
    return (
        <div className={`w-full max-w-3xl mx-auto px-5 sm:px-8 ${className}`}>
            {children}
        </div>
    );
}
