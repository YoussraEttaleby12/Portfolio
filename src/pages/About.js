import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

const skills = [
  { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
  { name: 'Express.js', icon: <SiExpress className="text-[#000000]" /> },
  { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
  { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
  { name: 'JIRA/Scrum', icon: <SiJira className="text-[#0052CC]" /> },
  { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },

];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-secondary">À propos de moi</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-textPrimary">Qui suis-je ?</h3>
              <p className="text-textSecondary leading-relaxed">
                Je suis une développeuse web full stack passionnée par la création d'applications
                web modernes et performantes. Avec une solide expérience dans les technologies
                front-end et back-end, je m'efforce de créer des solutions élégantes et
                efficaces pour résoudre des problèmes complexes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-textPrimary">Mon approche</h3>
              <p className="text-textSecondary leading-relaxed">
                Je crois en l'importance du code propre, des tests rigoureux et de la
                documentation claire. Je m'efforce constamment d'améliorer mes compétences
                et de rester à jour avec les dernières technologies et meilleures pratiques
                du développement web.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-6 text-textPrimary">Compétences techniques</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="bg-tertiary p-4 rounded-lg flex flex-col items-center"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <span className="text-textSecondary">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 