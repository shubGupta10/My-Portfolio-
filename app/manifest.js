
export default function manifest() {
  return {
    name: "Shubham Gupta | Full-Stack Web Developer",
    short_name: "Shubham Gupta",
    description: "Portfolio of Shubham Gupta – building fast, modern full-stack apps using Next.js, TypeScript, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f0f",
    theme_color: "#0f0f0f",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
