'use client';

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Code, FileText, Send, Github, Linkedin, Twitter, ChevronDown, ExternalLink } from "lucide-react";

/**
 * Color scheme:
 * - Backgrounds: white / slate-50 / slate-900
 * - Text: slate-800 / slate-200
 * - Accent: indigo-600 (buttons/links) + cyan-500 (subtle details)
 * - Borders: slate-200 / slate-700
 */

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center bg-gradient-to-b from-slate-900 to-slate-800 text-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Syed Mafooq Ul Hassan
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 font-light">
              PhD Student & Research Associate —{" "}
              <a
                href="https://dicl.cut.ac.cy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-cyan-500 underline-offset-4 hover:text-cyan-400"
              >
                DICL Lab
              </a>
            </h2>
            <p className="text-lg max-w-xl">
              PhD student and Research Associate specializing in intelligent resource
              management across the cloud–edge–IoT continuum. Currently working at DICL
              (Cyprus University of Technology) on Kubernetes-based simulation,
              multi-agent reinforcement learning, and scheduling for hyper-distributed systems.
            </p>

            <div className="flex gap-4 pt-2">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-500 text-white">
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-400/10"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Mafooq009" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6 text-cyan-400 hover:text-cyan-300" />
              </a>
              <a href="https://www.linkedin.com/in/mafooqulhassan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-cyan-400 hover:text-cyan-300" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-cyan-400 hover:text-cyan-300" />
              </a>
            </div>
          </div>

          {/* Headshot */}
          <div className="relative">
            <div className="rounded-xl p-1 bg-gradient-to-tr from-indigo-600 to-cyan-500">
              <div className="rounded-lg overflow-hidden bg-slate-900">
                <Image
                  src="/picture.png"  /* <-- put your edited photo at public/profile.jpg */
                  alt="Syed Mafooq Ul Hassan"
                  width={720}
                  height={720}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden border border-slate-200">
              <Image
                src="/profile.jpg"
                alt="Syed Mafooq Ul Hassan"
                width={900}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg">
                I am a PhD student and Research Associate at the{" "}
                <a
                  href="https://dicl.cut.ac.cy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-indigo-500 underline-offset-4"
                >
                  Data Intensive Computing Laboratory (DICL)
                </a>, Cyprus University of Technology. My work bridges large-scale
                industrial applications with modern distributed systems and AI.
              </p>
              <p className="text-lg">
                I design and evaluate Kubernetes-based simulators, scheduling strategies,
                and data-driven pipelines for intelligent resource management across
                cloud, edge, and IoT environments.
              </p>

              <Accordion type="single" collapsible className="w-full pt-2">
                <AccordionItem value="philosophy" className="border-b border-slate-200">
                  <AccordionTrigger className="hover:no-underline text-lg font-medium">
                    <span className="flex items-center gap-2">
                      <ChevronDown className="h-5 w-5" /> Professional Philosophy
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Build sustainable, human-centred systems using reproducible research,
                    open tooling, and rigorous engineering—so innovations survive beyond
                    prototypes and deliver impact at scale.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* PhD */}
            <Card className="bg-white border border-slate-200 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Doctor of Philosophy</CardTitle>
                <CardDescription className="text-lg">Computer Science (in progress)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Cyprus University of Technology — DICL Lab</p>
                <p>
                  Research: Intelligent resource management in the cloud–edge–IoT continuum;
                  scheduling strategies with Kubernetes and multi-agent reinforcement learning.
                </p>
              </CardContent>
            </Card>

            {/* MSc */}
            <Card className="bg-white border border-slate-200 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Master of Science</CardTitle>
                <CardDescription className="text-lg">Intelligent Critical Infrastructure Systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2">University of Cyprus</p>
                <p>
                  GPA 7.49/10. Thesis: “Generating Synthetic Images using Generative Adversarial
                  Networks for Deep Learning Algorithm Training in Emergency Response.”
                  50% tuition scholarship from the KIOS Center of Excellence.
                </p>
              </CardContent>
            </Card>

            {/* BSc */}
            <Card className="bg-white border border-slate-200 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Bachelor of Science</CardTitle>
                <CardDescription className="text-lg">Electrical Engineering</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2">FAST-NUCES, Peshawar (National University of Computer & Emerging Sciences)</p>
                <p>
                  GPA 3.77/4.00. Thesis: “Grid Automation and Monitoring using Internet of Things (IoT).”
                  Full scholarship based on academic excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Work History */}
      <section id="work" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">Work History</h2>
          <div className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              {/* DICL */}
              <AccordionItem value="dicl" className="border-b border-slate-200 bg-white rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline text-lg font-medium py-4">
                  <span className="flex items-center gap-2">
                    <ChevronDown className="h-5 w-5" /> Research Associate — DICL (08/2024—Present)
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Lead development of Kubernetes-based workload simulators for MARL scheduling research.</li>
                    <li>Co-author publications on resource orchestration across cloud–edge–IoT.</li>
                    <li>Maintain reproducible pipelines and documentation for open research.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* KIOS */}
              <AccordionItem value="kios" className="border-b border-slate-200 bg-white rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline text-lg font-medium py-4">
                  <span className="flex items-center gap-2">
                    <ChevronDown className="h-5 w-5" /> Research Engineer I — KIOS CoE (01/2022—06/2024)
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Developed QSU2 (QGIS plugin) for generating <code>.su2</code> files (PathoCERT, EU-funded).</li>
                    <li>Worked on PathoCERT Water; performed CFD simulations for contamination evolution.</li>
                    <li>Contributed to Oceanos-xlsx plugin and CI interdependency analyses.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* TA UCY */}
              <AccordionItem value="ucy" className="border-b border-slate-200 bg-white rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline text-lg font-medium py-4">
                  <span className="flex items-center gap-2">
                    <ChevronDown className="h-5 w-5" /> Teaching Assistant — University of Cyprus (06/2023—05/2024)
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>TA to Prof. Stavros Iezekiel (Electronic Devices and Circuits); tutorials and exam invigilation.</li>
                    <li>Managed grading and instructional materials aligned with course objectives.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Earlier TA */}
              <AccordionItem value="fast" className="border-b border-slate-200 bg-white rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline text-lg font-medium py-4">
                  <span className="flex items-center gap-2">
                    <ChevronDown className="h-5 w-5" /> Teaching Assistant — FAST-NUCES (08/2018—12/2020)
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Supported: Microprocessor Interfacing & Programming, Electronic Devices & Circuits, Programming Fundamentals, Applied Calculus.</li>
                    <li>Mentored students and led lab sessions.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-900">Core Focus</h3>
              <div className="space-y-6">
                <div>
                  <p className="mb-2">Distributed Systems (Cloud–Edge–IoT)</p>
                  <Progress value={90} className="h-2 bg-slate-200" indicatorClassName="bg-indigo-600" />
                </div>
                <div>
                  <p className="mb-2">Resource Scheduling & Orchestration</p>
                  <Progress value={88} className="h-2 bg-slate-200" indicatorClassName="bg-indigo-600" />
                </div>
                <div>
                  <p className="mb-2">Multi-Agent RL for Scheduling</p>
                  <Progress value={80} className="h-2 bg-slate-200" indicatorClassName="bg-indigo-600" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-900">Technical Proficiencies</h3>
              <div className="space-y-6">
                <div>
                  <p className="mb-2">Python (Data/ML)</p>
                  <Progress value={75} className="h-2 bg-slate-200" indicatorClassName="bg-indigo-600" />
                </div>
                <div>
                  <p className="mb-2">MATLAB/Simulink</p>
                  <Progress value={88} className="h-2 bg-slate-200" indicatorClassName="bg-indigo-600" />
                </div>
                <div>
                  <p className="mb-2">Kubernetes (Medium)</p>
                  <Progress value={70} className="h-2 bg-slate-200" indicatorClassName="bg-indigo-600" />
                </div>
                <div>
                  <p className="mb-2">Linux, Docker, Git</p>
                  <Progress value={82} className="h-2 bg-slate-200" indicatorClassName="bg-indigo-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* KWS */}
            <Card className="bg-white border border-slate-200 hover:shadow-md transition-all">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-indigo-600" />
                  <CardTitle className="text-xl text-slate-900">Kubernetes Workload Simulator</CardTitle>
                </div>
                <CardDescription className="mt-1">MARL-driven scheduling research environment</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/assets/placeholder-image.png"
                  alt="Kubernetes Workload Simulator"
                  width={800}
                  height={450}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-slate-600 mb-4">
                  Open-source simulator for evaluating scheduling strategies across the cloud–edge–IoT
                  continuum using Kubernetes and QMIX.
                </p>
                <Button asChild variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
                  <a
                    href="https://gitlab.eclipse.org/eclipse-research-labs/hyper-ai-project/k8s-workload-simulator/-/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Repository <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* SUMO */}
            <Card className="bg-white border border-slate-200 hover:shadow-md transition-all">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-indigo-600" />
                  <CardTitle className="text-xl text-slate-900">SUMO-based Urban Traffic Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Image
                  src="/assets/placeholder-image.png"
                  alt="SUMO MFD Project"
                  width={800}
                  height={450}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-slate-600">
                  Derived Macroscopic Fundamental Diagrams; analyzed speed–density and flow–density
                  patterns across peak scenarios.
                </p>
              </CardContent>
            </Card>

            {/* RSA */}
            <Card className="bg-white border border-slate-200 hover:shadow-md transition-all">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-indigo-600" />
                  <CardTitle className="text-xl text-slate-900">RSA with Dedicated Protection</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Image
                  src="/assets/placeholder-image.png"
                  alt="RSA Project"
                  width={800}
                  height={450}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-slate-600">
                  Explored routing & spectrum allocation using Dijkstra + first-fit; evaluated disjoint
                  protection strategies and blocking rates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications (optional placeholder to mirror resume) */}
      <section id="publications" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">Publications</h2>
          <p className="text-center text-slate-600">
            Coming soon. (Add selected papers, preprints, or links to Google Scholar.)
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-900 text-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                <Input
                  type="text"
                  id="name"
                  className="bg-slate-800 border-slate-700 text-slate-200 placeholder-slate-400 focus-visible:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <Input
                  type="email"
                  id="email"
                  className="bg-slate-800 border-slate-700 text-slate-200 placeholder-slate-400 focus-visible:ring-indigo-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
              <Input
                type="text"
                id="subject"
                className="bg-slate-800 border-slate-700 text-slate-200 placeholder-slate-400 focus-visible:ring-indigo-500"
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
              <Textarea
                id="message"
                rows={5}
                className="bg-slate-800 border-slate-700 text-slate-200 placeholder-slate-400 focus-visible:ring-indigo-500"
                placeholder="Your message"
              />
            </div>
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-2">
              <Send className="h-4 w-4" /> Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-slate-400">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Syed Mafooq Ul Hassan. All rights reserved.</p>
          <div className="flex justify-center gap-4 pt-4">
            <a href="https://github.com/Mafooq009" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 hover:text-slate-300" />
            </a>
            <a href="https://www.linkedin.com/in/mafooqulhassan/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 hover:text-slate-300" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 hover:text-slate-300" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
