import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import headshotAsset from "@/assets/Swetakshi_headshot.jpeg.asset.json";
import resumeAsset from "@/assets/Swetakshi_Nanda_Resume.pdf.asset.json";
import hairstyleProject from "@/assets/ai-hairstyle-project.jpg";
import awsProject from "@/assets/aws-security-project.jpg";

const roleBadges = [
  "HackerRank Campus Crew Secretary",
  "Marketing Coordinator",
  "Secretary",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swetakshi Nanda | Data Analyst & Software Engineer" },
      { name: "description", content: "Explore Swetakshi Nanda's work in data analytics, AI, financial technology, and cloud infrastructure." },
      { property: "og:title", content: "Swetakshi Nanda | Data Analyst & Software Engineer" },
      { property: "og:description", content: "Data analytics, AI, financial technology, and cloud infrastructure projects by Swetakshi Nanda." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  "Python", "Java", "JavaScript", "SQL", "C++", "React", "Next.js", "Node.js",
  "Tableau", "AWS", "Pandas", "OpenVINO", "FAISS", "Data Mining",
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [badgeHidden, setBadgeHidden] = useState(false);

  useEffect(() => {
    if (badgeHidden) {
      document.documentElement.classList.add("hide-lovable-badge");
      document.querySelectorAll('[class*="lovable"], [id*="lovable"], a[href*="lovable.app"], img[alt*="Lovable"], img[src*="lovable"]').forEach((el) => {
        (el as HTMLElement).style.setProperty("display", "none", "important");
      });
    }
  }, [badgeHidden]);

  useEffect(() => {
    const root = document.documentElement;
    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
      root.style.setProperty("--cursor-visible", "1");
    };
    const onPointerLeave = () => root.style.setProperty("--cursor-visible", "0");
    window.addEventListener("pointermove", onPointerMove);
    document.documentElement.addEventListener("mouseleave", onPointerLeave);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal-section").forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      observer.disconnect();
    };
  }, []);

  const trackCardGlow = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--card-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--card-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div className="cursor-glow min-h-screen bg-surface text-brand">
      <nav aria-label="Main navigation" className="sticky top-0 z-50 border-b border-brand/5 bg-surface/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="font-display text-xl font-bold">SN.</a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-brand/60 md:flex">
            <a href="#experience" className="transition-colors hover:text-primary">Experience</a>
            <a href="#projects" className="transition-colors hover:text-primary">Projects</a>
            <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
            <Button asChild size="sm" className="rounded-full">
              <a href="mailto:connect.swetakshinanda@gmail.com">Contact</a>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <div className="border-t border-border bg-background px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold">
              {[["Experience", "#experience"], ["Projects", "#projects"], ["Skills", "#skills"]].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
              <a href="mailto:connect.swetakshinanda@gmail.com" className="text-primary">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <main id="top">
        <header className="mx-auto max-w-7xl px-5 pb-24 pt-14 sm:px-8 lg:pb-32 lg:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <div className="animate-fade-in space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary">
                <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" /><span className="relative inline-flex size-2 rounded-full bg-primary" /></span>
                Open to internships & collaborations
              </div>
              <div>
                <p className="mb-4 text-sm font-bold uppercase text-primary">Hello, I’m Swetakshi Nanda</p>
                <h1 className="font-display text-5xl font-bold leading-[1.06] sm:text-6xl lg:text-7xl">
                  Data Analyst & <span className="text-primary">Software Engineer.</span>
                </h1>
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-brand/70 sm:text-xl">
                I’m a Computer Information Systems scholar building AI-powered tools, financial education platforms, and secure cloud systems that turn complex ideas into useful experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="hero" size="hero"><a href="#projects">Explore my work <ArrowUpRight /></a></Button>
                <Button asChild variant="outline" size="hero" className="rounded-full"><a href={resumeAsset.url} download="Swetakshi_Nanda_Resume.pdf">Résumé <ArrowDownToLine /></a></Button>
              </div>
              <div className="flex gap-4">
                <div className="rounded-lg border border-brand/10 bg-background p-4 shadow-sm"><div className="text-2xl font-bold">4.00</div><div className="text-xs font-semibold uppercase text-brand/50">Current GPA</div></div>
                <div className="rounded-lg border border-brand/10 bg-background p-4 shadow-sm"><div className="text-2xl font-bold">NSBE</div><div className="text-xs font-semibold uppercase text-brand/50">Vice President</div></div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md animate-scale-in">
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-3xl" />
              <div className="relative mb-5 flex flex-wrap justify-center gap-2">
                {roleBadges.map((role) => (
                  <span key={role} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                    {role}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setBadgeHidden(true)}
                className="block w-full cursor-pointer appearance-none border-none bg-transparent p-0 text-left"
                aria-label="Dismiss corner badge"
              >
                <img src={headshotAsset.url} alt="Swetakshi Nanda, data analyst and software engineer" width={768} height={978} className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-2xl ring-1 ring-brand/10 transition-transform duration-300 hover:scale-[1.02]" />
              </button>
              <div className="absolute -bottom-5 -left-4 rounded-lg border border-brand/10 bg-background/95 px-5 py-4 shadow-xl backdrop-blur">
                <p className="text-xs font-semibold uppercase text-brand/50">Based in</p><p className="font-display text-lg font-bold">Salisbury, NC</p>
              </div>
            </div>
          </div>
        </header>

        <section id="experience" className="reveal-section scroll-mt-20 bg-background py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="mb-3 text-sm font-bold uppercase text-primary">Experience</p>
            <h2 className="font-display mb-16 text-3xl font-bold sm:text-4xl">Turning technology into impact</h2>
            <div className="grid gap-12">
              <article className="grid gap-6 border-t border-border pt-8 lg:grid-cols-4">
                <p className="text-sm font-semibold text-brand/45">OCT 2025 — PRESENT</p>
                <div className="lg:col-span-3"><h3 className="text-2xl font-bold">Data Analyst <span className="text-primary">@ RMA</span></h3><p className="mt-2 font-medium text-brand/50">Risk Management Association · Salisbury, NC</p><p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand/70">Designed and built WealthBridge, an interactive financial literacy platform for underserved communities. Its AI-powered Wealth Navigator creates personalized challenges and guidance, with projected engagement and completion gains of approximately 40%.</p></div>
              </article>
              <article className="grid gap-6 border-t border-border pt-8 lg:grid-cols-4">
                <p className="text-sm font-semibold text-brand/45">MAY — JUL 2024</p>
                <div className="lg:col-span-3"><h3 className="text-2xl font-bold">Software Engineer <span className="text-primary">@ Intel Unnati</span></h3><p className="mt-2 font-medium text-brand/50">Industrial Training · Barasat, India</p><p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand/70">Built a real-time PDF question-answering application with TinyLlama, OpenVINO, FAISS, and Gradio—reducing manual search effort by over 60%, reaching 90%+ answer relevance, and cutting CPU inference time by 30–40%.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="reveal-section scroll-mt-20 bg-brand py-24 text-brand-foreground">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="mb-3 text-sm font-bold uppercase text-highlight">Selected projects</p>
            <div className="mb-14 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><h2 className="font-display text-3xl font-bold sm:text-4xl">AI, data & infrastructure</h2><p className="max-w-md text-brand-foreground/60">Projects built to make technology more useful, accessible, and secure.</p></div>
            <div className="grid gap-7 md:grid-cols-2">
              <article onMouseMove={trackCardGlow} className="project-shine relative overflow-hidden rounded-2xl border border-brand-foreground/10 bg-brand-foreground/5 transition-transform duration-300 hover:-translate-y-1">
                <img src={hairstyleProject} alt="AI hairstyle visualization mobile product concept" width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full object-cover" />
                <div className="relative z-10 p-7"><p className="mb-4 text-xs font-bold uppercase text-highlight">BE Smart Hackathon · 24 hours</p><h3 className="font-display text-2xl font-bold">AI Hairstyle Visualizer</h3><p className="mt-3 leading-relaxed text-brand-foreground/65">Collaborated in a five-person team to ship a mobile-first prototype using Next.js, Tailwind CSS, Figma, Google Imagen 3, and custom Blender assets—supporting 50+ hairstyle variations.</p></div>
              </article>
              <article onMouseMove={trackCardGlow} className="project-shine relative overflow-hidden rounded-2xl border border-brand-foreground/10 bg-brand-foreground/5 transition-transform duration-300 hover:-translate-y-1">
                <img src={awsProject} alt="Secure cloud infrastructure network visualization" width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full object-cover" />
                <div className="relative z-10 p-7"><p className="mb-4 text-xs font-bold uppercase text-highlight">Cloud infrastructure & security</p><h3 className="font-display text-2xl font-bold">Secure AWS Environment</h3><p className="mt-3 leading-relaxed text-brand-foreground/65">Designed a secure VPC, configured IAM access, launched EC2 and Apache, worked with RDS and DynamoDB, and monitored resources through CloudWatch dashboards.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="reveal-section scroll-mt-20 py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-3">
            <div><p className="mb-3 text-sm font-bold uppercase text-primary">Capabilities</p><h2 className="font-display text-3xl font-bold sm:text-4xl">Technical toolkit</h2><p className="mt-5 leading-relaxed text-brand/60">A versatile stack for data-rich applications, AI prototypes, and secure systems.</p></div>
            <div className="flex flex-wrap content-start gap-3 lg:col-span-2">{skills.map((skill) => <span key={skill} className="rounded-lg border border-brand/10 bg-background px-5 py-3 font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md">{skill}</span>)}</div>
          </div>
        </section>

        <section className="reveal-section bg-background py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
            <div><p className="mb-3 text-sm font-bold uppercase text-primary">Education</p><h2 className="font-display text-3xl font-bold">Livingstone College</h2><p className="mt-3 text-lg text-brand/70">B.S. Computer Information Systems · Expected May 2027</p><p className="mt-6 max-w-xl leading-relaxed text-brand/60">Presidential Scholar, Albert S. Stout Sr. Memorial Scholar, White Coat Scholar, Class of 1969 Scholar, and Dean’s List.</p></div>
            <div><p className="mb-3 text-sm font-bold uppercase text-primary">Leadership</p><h2 className="font-display text-3xl font-bold">Building community, too</h2><p className="mt-5 max-w-xl leading-relaxed text-brand/60">Vice President of the Livingstone College NSBE chapter, Tech Club President, HackerRank Campus Crew Secretary, residence hall leader, and student mentor.</p></div>
          </div>
        </section>

        <section className="reveal-section px-5 py-24 text-center sm:px-8">
          <div className="mx-auto max-w-3xl"><p className="text-sm font-bold uppercase text-primary">Let’s connect</p><h2 className="font-display mt-4 text-4xl font-bold sm:text-5xl">Have a challenge worth solving?</h2><p className="mx-auto mt-5 max-w-xl text-lg text-brand/65">I’m always interested in opportunities where data, software, and thoughtful design can create real impact.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Button asChild variant="hero" size="hero"><a href="mailto:connect.swetakshinanda@gmail.com"><Mail /> Email me</a></Button><Button asChild variant="outline" size="hero" className="rounded-full"><a href="https://linkedin.com/in/swetakshinanda" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a></Button></div></div>
        </section>
      </main>

      <footer className="border-t border-brand/5 bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row"><p className="text-sm text-brand/45">© 2026 Swetakshi Nanda</p><div className="flex items-center gap-5"><a href="https://github.com/SwetakshiNanda18" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-brand/55 transition-colors hover:text-primary"><Github /></a><a href="https://linkedin.com/in/swetakshinanda" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-brand/55 transition-colors hover:text-primary"><Linkedin /></a><a href={resumeAsset.url} download="Swetakshi_Nanda_Resume.pdf" className="text-sm font-bold text-brand transition-colors hover:text-primary">Résumé PDF</a></div></div>
      </footer>
    </div>
  );
}
