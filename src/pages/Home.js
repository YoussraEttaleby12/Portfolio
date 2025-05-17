import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiDevdotto } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaJava,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiFigma, SiExpress, SiJira, SiMongodb } from 'react-icons/si';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    title: "Développeuse Full Stack",
    company: "UMT",
    period: "2023 - Présent",
    description: "Développement d'une application web pour l'Union Marocaine du Travail avec React et Laravel."
  },
  {
    title: "Développeuse Front-end",
    company: "PestKit",
    period: "2023",
    description: "Création d'une interface utilisateur moderne pour une application de gestion des services de dératisation."
  },
  {
    title: "Développeuse Web",
    company: "LETDEM",
    period: "2023",
    description: "Développement d'un site web pour le laboratoire LETDEM avec gestion des événements et travaux doctoraux."
  }
];

const featuredProjects = [
  {
    title: "UMT",
    description: "Application web pour l'Union Marocaine du Travail",
    image: "/images/UMT.png",
    technologies: ['ReactJs', 'Laravel', 'MySQL']
  },
  {
    title: "PestKit",
    description: "Application de gestion des services de dératisation",
    image: "/images/nettoyage.png",
    technologies: ['ReactJS', 'Laravel', 'MySQL']
  },
  {
    title: "LETDEM",
    description: "Site web du laboratoire LETDEM",
    image: "/images/letdem.png",
    technologies: ['ReactJS', 'Laravel', 'MySQL']
  }
];

const featuredSkills = [
  { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
  { name: 'Express.js', icon: <SiExpress className="text-[#000000]" /> },
  { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
  { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
];

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <div className="flex items-center justify-center pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Section Texte */}
            <motion.div variants={itemVariants}>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-secondary mb-4 font-mono"
              >
                Bonjour, je m'appelle
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                <span className="text-textPrimary">Youssra Ettaleby</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="text-2xl md:text-3xl text-secondary mb-8"
              >
                Développeuse Web Full Stack
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="text-textSecondary text-lg mb-8"
              >
                Passionnée par le développement web et l'innovation, je crée des applications
                modernes et performantes avec une attention particulière à l'expérience utilisateur
                et au design.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex space-x-6 mb-8"
              >
                <motion.a
                  href="https://github.com/YoussraEttaleby12"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="text-textSecondary hover:text-secondary"
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/youssra-ettaleby-8b3b53292/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="text-textSecondary hover:text-secondary"
                >
                  <FaLinkedin size={24} />
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex space-x-6"
              >
                <Link to="/projects" onClick={scrollToTop}>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    Découvrir mes projets
                  </motion.button>
                </Link>
                <motion.a
                  href="/assets/YoussraEttalebyCV.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-tertiary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors border border-secondary"
                >
                  <FaDownload />
                  <span>Télécharger CV</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Section Photo */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative w-80 h-80 mx-auto"
              >
                <div className="absolute inset-0 bg-secondary rounded-full opacity-20 blur-2xl transform -rotate-6"></div>
                <div className="absolute inset-0 bg-secondary rounded-full opacity-20 blur-2xl transform rotate-6"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-secondary shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop&crop=faces"
                    alt="Ma photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Section Projets en Vedette */}
      <div className="py-20 bg-tertiary">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-secondary text-center">Projets en Vedette</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-tertiary rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-textPrimary">{project.title}</h3>
                    <p className="text-textSecondary mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary text-secondary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/projects" onClick={scrollToTop}>
                <motion.button
                  whileHover={{ 
                    y: -2,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90"
                >
                  Voir tous les projets
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section Compétences */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-secondary text-center">Mes Compétences</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
              {featuredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-primary p-6 rounded-lg flex flex-col items-center shadow-lg"
                >
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <span className="text-textSecondary text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/about" onClick={scrollToTop}>
                <motion.button
                  whileHover={{ 
                    y: -2,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90"
                >
                  Voir toutes mes compétences
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section À propos de moi */}
      <div className="py-20 bg-tertiary">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-secondary text-center">À propos de moi</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-textPrimary">Qui suis-je ?</h3>
                <p className="text-textSecondary leading-relaxed">
                  Je suis une développeuse web full stack passionnée par la création d'applications
                  web modernes et performantes. Avec une solide expérience dans les technologies
                  front-end et back-end, je m'efforce de créer des solutions élégantes et
                  efficaces pour résoudre des problèmes complexes.
                </p>
                <p className="text-textSecondary leading-relaxed">
                  Je crois en l'importance du code propre, des tests rigoureux et de la
                  documentation claire. Je m'efforce constamment d'améliorer mes compétences
                  et de rester à jour avec les dernières technologies et meilleures pratiques
                  du développement web.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-textPrimary">Mon approche</h3>
                <p className="text-textSecondary leading-relaxed">
                  Mon approche du développement web combine créativité et rigueur technique.
                  Je m'efforce de créer des expériences utilisateur intuitives tout en
                  maintenant un code robuste et maintenable.
                </p>
                <p className="text-textSecondary leading-relaxed">
                  Je suis particulièrement attentive aux détails et à la qualité du code,
                  tout en gardant à l'esprit les besoins et les objectifs des utilisateurs
                  finaux.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section Me contacter */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-secondary text-center">Me contacter</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-textPrimary">Prenons contact</h3>
                <p className="text-textSecondary">
                  Je suis toujours ouverte à discuter de nouveaux projets, idées créatives
                  ou opportunités de collaboration.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-secondary text-xl" />
                    <span className="text-textSecondary">y.ettaleby123@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaPhone className="text-secondary text-xl" />
                    <span className="text-textSecondary">+212669300768</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="text-secondary text-xl" />
                    <span className="text-textSecondary">Casablanca, Morocco</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <Link to="/contact" onClick={scrollToTop}>
                  <motion.button
                    whileHover={{ 
                      y: -2,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90"
                  >
                    Envoyer un message
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home; 