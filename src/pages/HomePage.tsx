import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Code2,
  Database,
  Terminal,
  Cloud,
  Smartphone,
  Globe,
  ExternalLink,
  SquirrelIcon,
} from "lucide-react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900/50 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            <SquirrelIcon size={32} className="text-blue-400" />
          </Link>
          <div className="flex gap-6">
            <Link to="/blog" className="hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 pt-32 pb-16 flex flex-col items-center text-center">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          src="/kevinRushProfile.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full mb-8 object-cover border-4 border-blue-500/50 shadow-lg shadow-blue-500/20"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Akshat Dwivedi
          </h1>
          <p className="text-xl text-blue-400 mb-6">React Native Developer</p>
          <div className="flex gap-4 mb-8 justify-center">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="hover:text-blue-400 transition-colors"
            >
              <Twitter size={24} />
            </motion.a>
          </div>
          <p className="max-w-2xl text-gray-300 mx-auto">
            Passionate React Native developer with 5+ years of experience
            building cross-platform mobile applications. Focused on creating
            elegant, user-friendly solutions that deliver real business value.
          </p>
        </motion.div>
      </header>

      {/* Skills Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/0 via-blue-900/10 to-gray-900/0">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <SkillCard icon={<Smartphone />} title="React Native" delay={0} />
            <SkillCard icon={<Code2 />} title="TypeScript" delay={0.1} />
            <SkillCard icon={<Github />} title="Git" delay={0.2} />
            <SkillCard icon={<Database />} title="SQL" delay={0.3} />
            <SkillCard icon={<Cloud />} title="AWS" delay={0.4} />
            <SkillCard icon={<Terminal />} title="Node.js" delay={0.5} />
            <SkillCard icon={<Globe />} title="REST APIs" delay={0.6} />
            <SkillCard icon={<Code2 />} title="JavaScript" delay={0.7} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProjectCard
              title="E-commerce App"
              description="A full-featured React Native e-commerce application with real-time inventory management and secure payment processing."
              tech={["React Native", "TypeScript", "Redux", "Stripe"]}
              image="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=800"
              delay={0}
            />
            <ProjectCard
              title="Health & Fitness Tracker"
              description="Cross-platform fitness tracking app with workout planning, progress monitoring, and social features."
              tech={["React Native", "GraphQL", "AWS", "Firebase"]}
              image="https://images.unsplash.com/photo-1539794830467-1f1755804d13?auto=format&fit=crop&q=80&w=800"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-b from-gray-900/0 via-blue-900/10 to-gray-900/0"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out if you'd like to
              collaborate!
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:contact@example.com"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({
  icon,
  title,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
    </motion.div>
  );
}

function ProjectCard({
  title,
  description,
  tech,
  image,
  delay,
}: {
  title: string;
  description: string;
  tech: string[];
  image: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          {title}
          <ExternalLink size={16} className="text-blue-400" />
        </h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;
