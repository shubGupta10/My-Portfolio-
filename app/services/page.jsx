import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { ArrowRight, Rocket, Code2, Bot, Cloud, Wrench, Settings2, CheckCircle2 } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "Services | Shubham Gupta",
  description: "I help businesses build reliable web applications, launch MVPs, and integrate AI features into their products.",
  alternates: {
    canonical: "https://www.shubhamgupta.online/services",
  },
  openGraph: {
    title: "Services | Shubham Gupta",
    description: "I help businesses build reliable web applications, launch MVPs, and integrate AI features into their products.",
    url: "https://www.shubhamgupta.online/services",
  },
  twitter: {
    title: "Services | Shubham Gupta",
    description: "I help businesses build reliable web applications, launch MVPs, and integrate AI features into their products.",
  },
};

const services = [
    {
        title: "MVP Development",
        description:
            "If you have an idea and want to turn it into a real product, I can help you build the first version. I'll focus on the features that matter most, so you can launch something solid without overcomplicating it.",
        included: [
            "Planning the features for the first release",
            "User authentication and account management",
            "Database setup",
            "Frontend and backend development",
            "Deployment",
        ],
    },
    {
        title: "Full Stack Web Development",
        description:
            "I build complete web applications from start to finish. From designing the user interface to building APIs, databases, and integrations, I handle the entire development process.",
        included: [
            "Responsive frontend development",
            "Backend APIs and business logic",
            "Database design",
            "Authentication and authorization",
            "Payment and third-party integrations",
        ],
    },
    {
        title: "AI Integration",
        description:
            "If you're looking to add AI to your product, I can help you build features that are actually useful. Whether it's AI chat, document analysis, content generation, or workflow automation, I'll integrate it into your existing application.",
        included: [
            "LLM integrations (OpenAI, Gemini, Claude)",
            "AI chat experiences",
            "Document processing and RAG",
            "Prompt engineering",
            "Workflow automation",
        ],
    },
    {
        title: "SaaS Development",
        description:
            "I build SaaS products with the features most businesses need from day one. That includes user accounts, subscriptions, dashboards, permissions, and everything required to run a subscription-based application.",
        included: [
            "User authentication",
            "Subscription billing",
            "Role-based access control",
            "Team management",
            "Admin dashboards",
        ],
    },
    {
        title: "Existing Product Improvements",
        description:
            "Already have a product? I can join your existing project to improve performance, clean up the codebase, fix bugs, and build new features without starting everything from scratch.",
        included: [
            "Performance improvements",
            "Code refactoring",
            "Bug fixes",
            "UI improvements",
            "New feature development",
        ],
    },
];

const process = [
    { step: "01", title: "Discovery", desc: "Define project scope, technical requirements, and goals." },
    { step: "02", title: "Planning", desc: "Outline the system architecture and establish a development timeline." },
    { step: "03", title: "Development", desc: "Write the code and provide regular progress updates." },
    { step: "04", title: "Testing", desc: "Verify functionality, edge cases, and overall performance." },
    { step: "05", title: "Launch", desc: "Deploy the application to a production environment." },
    { step: "06", title: "Ongoing Support", desc: "Provide maintenance, bug fixes, and feature additions." },
];

const faqs = [
    {
        q: "Do you work with startups?",
        a: "Yes. The majority of my work involves building early-stage products or helping teams ship their first version.",
    },
    {
        q: "Can you work on an existing product?",
        a: "Yes. I often join existing projects to refactor code, improve performance, or update the interface.",
    },
    {
        q: "Can you handle both frontend and backend?",
        a: "Yes. I work across the stack, managing the database, API, and frontend UI.",
    },
    {
        q: "Do you provide support after launch?",
        a: "Yes. I am available for ongoing maintenance, bug fixes, and feature additions once the project is deployed.",
    },
    {
        q: "How do we get started?",
        a: "Send me an email. We will discuss the project requirements, and if it's a good fit, I will provide a timeline and an estimate.",
    },
];


export default function ServicesPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web Development",
        "provider": {
            "@type": "Person",
            "name": "Shubham Gupta",
            "url": "https://www.shubhamgupta.online"
        },
        "description": "I help businesses build reliable web applications, launch MVPs, and integrate AI features into their products.",
        "areaServed": "Worldwide"
    };

    return (
        <div className="w-full">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <main className="w-full">
                <Section>
                    <Container>

                        {/* Intro */}
                        <div className="mb-6">
                            <h1 className="typo-h1 mb-6 flex items-center gap-2">
                                Services <span className="text-[0.85em]">💻</span>
                            </h1>
                            <p className="typo-body mb-6 max-w-3xl">
                                I help businesses build reliable web applications, launch MVPs, and integrate AI features into their products.
                            </p>
                            <p className="typo-body max-w-3xl">
                                Whether you are starting with a new concept or improving an existing platform, I focus on delivering functional and maintainable technical solutions.
                            </p>
                        </div>

                        <hr className="border-border mb-6" />

                        {/* Service Blocks */}
                        <div className="flex flex-col gap-10 sm:gap-16">
                            {services.map((service, idx) => (
                                <div key={idx} className="max-w-4xl">
                                    <h2 className="typo-h2 mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="typo-body mb-10 max-w-3xl">
                                        {service.description}
                                    </p>

                                    <div>
                                        <h3 className="typo-h3 mb-4">
                                            What's included:
                                        </h3>
                                        <ul className="space-y-3">
                                            {service.included.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed flex items-start gap-3"
                                                >
                                                    <CheckCircle2 className="w-[18px] h-[18px] text-foreground/40 mt-0.5 shrink-0" />
                                                    <span className="typo-body !text-foreground/80 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {idx < services.length - 1 && (
                                        <hr className="border-border mt-10 sm:mt-16" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <hr className="border-border my-8 sm:my-12" />

                        {/* Process */}
                        <div className="mb-8">
                            <h2 className="typo-h2 mb-6">
                                How I Work
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {process.map((step) => (
                                    <div key={step.step} className="flex gap-4">
                                        <span className="typo-meta !font-bold mt-1 shrink-0">
                                            {step.step}
                                        </span>
                                        <div>
                                            <h3 className="typo-h3 mb-1">
                                                {step.title}
                                            </h3>
                                            <p className="typo-body">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <hr className="border-border my-8 sm:my-12" />

                        {/* FAQ */}
                        <div className="mb-8">
                            <h2 className="typo-h2 mb-6">
                                Frequently Asked
                            </h2>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, idx) => (
                                    <AccordionItem key={idx} value={`faq-${idx}`}>
                                        <AccordionTrigger>{faq.q}</AccordionTrigger>
                                        <AccordionContent>{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <hr className="border-border my-8 sm:my-12" />

                        {/* Final CTA */}
                        <div className="mb-8">
                            <h2 className="typo-h2 mb-4">
                                Have a project in mind?
                            </h2>
                            <p className="typo-body mb-8">
                                Send me a message about what you're working on. We can discuss the technical requirements, timeline, and pricing.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-foreground font-medium text-[15px] sm:text-[16px] underline underline-offset-4 transition-colors"
                            >
                                Get in touch <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                    </Container>
                </Section>
            </main>
        </div>
    );
}
