import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function NotFound() {
    return (
        <div className="w-full">
            <main className="relative z-10 w-full pb-12">
                <Section id="not-found">
                    <Container>
                        <div className="flex flex-col items-center justify-center text-center py-20 sm:py-32">
                            <h1 className="text-6xl sm:text-8xl font-medium tracking-tight text-foreground mb-4">
                                404
                            </h1>
                            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-6">
                                Page Not Found
                            </h2>
                            <p className="text-muted-foreground text-[16px] sm:text-[18px] mb-12 font-normal leading-relaxed max-w-md">
                                The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
                            </p>
                            
                            <Link 
                                href="/"
                                className="px-8 py-4 rounded-xl flex items-center justify-center gap-3 text-[16px] font-bold bg-foreground text-background hover:scale-105 active:scale-95 transition-all cursor-pointer group"
                            >
                                Return to Home
                            </Link>
                        </div>
                    </Container>
                </Section>
            </main>
        </div>
    );
}
