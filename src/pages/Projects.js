import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "UMT",
    description: "Une application web representative du l'Union Marocaine du Travail avec un design unique et moderne et deux côtés : côté admin et côté utilisateur, et 100% langue arabe .",
    technologies: ['ReactJs', 'Laravel', 'MySQL','HTML','CSS'],
    image: '/images/UMT.png',
    github: 'https://github.com/YoussraEttaleby12/UMT',
    live: 'https://github.com/YoussraEttaleby12/UMT',
  },
  {
    title: 'PestKit',
    description: "Une application web pour la gestion des services d'une societe qui fait de la Dératisation,Désinsectisation et la Désinfection avec un design moderne et responsive qui offre une interface utilisateur intuitive et facile à utiliser.Deux côtés : côté admin et côté utilisateur.",
    technologies: ['ReactJS', 'Laravel', 'MySQL','HTML','CSS'],
    image: '/images/nettoyage.png',
    github: 'https://github.com/YoussraEttaleby12/PestKit',
    live: 'https://github.com/YoussraEttaleby12/PestKit',
  },
  {
    title: 'LETDEM',
    description: "Une application web representative du Laboratoire d'Etudes Transversales en Droit, Economie et Management des Affaires(LETDEM), qui facilite la gestion de toutes ses informations tels que les evenemtns, les travaux doctoraux.... Avec un design moderne et unique.",
    technologies: ['ReactJS', 'Laravel', 'MySQL','CSS','Hosting::Hostinger'],
    image: '/images/letdem.png',
    github: 'https://github.com/YoussraEttaleby12',
    live: 'https://labo-letdem.com',
  },
  {
    title: 'BantuNet',
    description: "Une application web destinée à l'administrateur pour gérer les conditions, les intérêts et les activités affichées sur le site BantuNet, incluant les fonctionnalités CRUD (ajout, modification, suppression et affichage des détails) ",
    technologies: ['ReactJS', 'ExpressJS','MySQL','HTML','CSS'],
    image: '/images/bantuNet.png',
    github: 'https://github.com/YoussraEttaleby12/BantuNet',
    live: 'https://github.com/YoussraEttaleby12/BantuNet',
  },
  {
    title: 'Gestion Des Etudiants',
    description: "Une application complète pour la gestion des étudiants, permettant de suivre leurs notes et absences. Le système est structuré autour de trois profils d'utilisateurs distincts (Directeur Pedagogique, Directeur_Etudes et Secrétaire), chacun ayant des droits et des fonctionnalités spécifiques pour assurer une gestion efficace et sécurisée des informations académiques. ",
    technologies: ['Java','MySQL'],
    image: '/images/EtudiantJAVA.png',
    github: 'https://github.com/YoussraEttaleby12/GestionEtudiant',
    live: 'https://github.com/YoussraEttaleby12/GestionEtudiant',
  },
  {
    title: 'Mon Portfolio',
    description: "Création d'un portfolio web interactif pour mettre en valeur mes compétences techniques, mes projets académiques et personnels, ainsi que mon parcours en développement web full-stack.",
    technologies: ['ReactJS','HTML','Tailwind CSS'],
    image: '/images/Portfolio.png',
    github: 'https://github.com/YoussraEttaleby12',
    live: 'https://youssraettaleby-portfolio.vercel.app/',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-secondary">Mes Projets</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  <h3 className="text-xl font-semibold mb-2 text-textPrimary">
                    {project.title}
                  </h3>
                  <p className="text-textSecondary mb-4">
                    {project.description}
                  </p>
                  
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
                  
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.3 }
                      }}
                      className="text-textSecondary hover:text-secondary transition-colors"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.3 }
                      }}
                      className="text-textSecondary hover:text-secondary transition-colors"
                    >
                      <FaExternalLinkAlt size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 