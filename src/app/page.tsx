import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Certificates } from "@/components/certificates";
import { Skills } from "@/components/skills";
import { ToolsMarquee } from "@/components/tools-marquee";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { WebGLShader } from "@/components/ui/web-gl-shader";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden relative">
      {/* WebGL Shader Animation Background - 100vh with fade at bottom */}
      <div
        className="absolute inset-x-0 top-0 z-0 h-screen pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'
        }}
      >
        <WebGLShader />
      </div>

      {/* Content - positioned above shader */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Certificates />
        <Skills />
        <ToolsMarquee />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
