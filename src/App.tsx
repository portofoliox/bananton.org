import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Code, Book, Heart, Coffee, Lightbulb, Brain, Globe, Smartphone, ShoppingCart, Gamepad, ExternalLink } from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      icon: ShoppingCart,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "AI-Powered Learning Platform",
      description: "An educational platform featuring AI-driven personalized learning paths and progress tracking",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      icon: Brain,
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Mobile Fitness App",
      description: "A cross-platform fitness application with workout tracking, nutrition planning, and social features",
      image: "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      tech: ["React Native", "Firebase", "Redux", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      icon: Smartphone,
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white">
      <ParticlesBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1a1f2e]/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold text-blue-400"
            >
              Portfolio
            </motion.span>
            <div className="flex space-x-8">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' }
              ].map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <motion.div 
          style={{ scale, opacity, y }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span className="text-blue-400">John Doe</span>
              </h1>
              <h2 className="text-3xl font-bold text-gray-400 mb-4">
                Developer & Problem Solver
              </h2>
              <p className="text-xl text-gray-500 mb-8">
                Transforming ideas into elegant digital solutions
              </p>
              <div className="flex space-x-4">
                {[
                  { Icon: Github, href: "https://github.com" },
                  { Icon: Linkedin, href: "https://linkedin.com" },
                  { Icon: Mail, href: "mailto:contact@example.com" }
                ].map(({ Icon, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900/90 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10"
            >
              <div className="p-4 border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="space-y-4">
                  <div>
                    <span className="text-green-400">$ whoami</span>
                    <p className="text-gray-400 ml-4">Full Stack Developer</p>
                  </div>
                  <div>
                    <span className="text-green-400">$ cat skills.txt</span>
                    <pre className="text-gray-400 ml-4 mt-2">
{`{
  "frontend": ["React", "TypeScript", "Tailwind"],
  "backend": ["Node.js", "Python", "PostgreSQL"],
  "tools": ["Git", "Docker", "AWS"]
}`}
                    </pre>
                  </div>
                  <div>
                    <span className="text-green-400">$ uptime</span>
                    <p className="text-gray-400 ml-4">5+ years in development</p>
                  </div>
                  <div>
                    <span className="text-green-400">$ echo $STATUS</span>
                    <p className="text-gray-400 ml-4">Ready for new challenges</p>
                  </div>
                  <div className="text-green-400 animate-pulse">▋</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="space-y-6 text-gray-400">
                <p>
                  I'm a passionate developer with a keen eye for detail and a love for creating beautiful, functional web applications. My journey in web development has been driven by curiosity and a constant desire to learn and improve.
                </p>
                <p>
                  I specialize in building modern web applications using cutting-edge technologies. From responsive front-end interfaces to scalable back-end systems, I enjoy tackling complex problems and turning them into elegant solutions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <Heart className="w-6 h-6 text-red-400 mb-2" />
                  <h3 className="font-semibold mb-2">Passion</h3>
                  <p className="text-sm text-gray-400">
                    Driven by the love for creating and innovating through code
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <Book className="w-6 h-6 text-blue-400 mb-2" />
                  <h3 className="font-semibold mb-2">Learning</h3>
                  <p className="text-sm text-gray-400">
                    Constantly exploring new technologies and best practices
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Coffee className="w-6 h-6 text-yellow-400" />
                  Daily Motivation
                </h3>
                <p className="text-gray-400">
                  Every morning, I wake up excited about the possibilities that coding brings. Whether it's solving complex problems, optimizing performance, or creating intuitive user interfaces, each day presents new challenges and opportunities to grow.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  Philosophy
                </h3>
                <p className="text-gray-400">
                  I believe that great software is not just about writing code - it's about understanding people's needs and creating solutions that make their lives easier. This human-centered approach guides every project I take on.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <blockquote className="text-lg italic text-gray-300">
                  "The best code is not just functional, but also maintainable, scalable, and a joy to work with. That's what I strive for in every project."
                </blockquote>
                <p className="text-sm text-gray-500 mt-2">- My Development Philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                color: "from-blue-500 to-cyan-500",
                skills: [
                  { name: "React & Next.js", level: 95 },
                  { name: "TypeScript", level: 90 },
                  { name: "Tailwind CSS", level: 85 },
                  { name: "Framer Motion", level: 80 }
                ]
              },
              {
                title: "Backend Development",
                color: "from-purple-500 to-pink-500",
                skills: [
                  { name: "Node.js", level: 90 },
                  { name: "PostgreSQL", level: 85 },
                  { name: "RESTful APIs", level: 90 },
                  { name: "GraphQL", level: 75 }
                ]
              },
              {
                title: "Tools & Deployment",
                color: "from-orange-500 to-red-500",
                skills: [
                  { name: "Git & GitHub", level: 90 },
                  { name: "Docker", level: 85 },
                  { name: "AWS", level: 80 },
                  { name: "CI/CD", level: 85 }
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} text-transparent bg-clip-text`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-20`}>
                      <project.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${project.color} bg-opacity-20`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
