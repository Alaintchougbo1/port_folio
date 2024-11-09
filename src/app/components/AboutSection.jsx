"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>PHP</li>
        <li>Laravel</li>
        <li>Python</li>
        <li>Node.js</li>
        <li>Typescript</li>
        <li>Mysql</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next</li>
        <li>Nest</li>
        <li>Flask</li>
        <li>Django</li>
        <li>Tailwind CSS</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Coding Academy</li>
        <li>EPITECH</li>
        <li>Étude en licence de Génie Logiciel à Institut de Formation et de Recherche en Informatique(IFRI)</li>
        <li>Diplôme du Technicien(DT) en Installation Maintenance Informatique (IMI) au Lycée Technique de Bohicon (LYTEB)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certificat de développeur web option full stack à la Coding Academy By EPITECH</li>
        <li>Certificat en Data/IA option Data Engeering par Afica Tech Up Tour</li>
        <li>Certificat programmation en python et Intelligence Artificielle au club d'IA de la bibliothèque Bénin Excellence</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={900} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">À propos de moi</h2>
          <p className="text-base lg:text-lg">
              Développeur en formation passionné par l'évolution technologique, je suis résolument engagé dans l'apprentissage continu. Axé sur le développement, je cherche à approfondir mes compétences dans des domaines tels que le développement d'application et la science des données . Actuellement en apprentissage, je me consacre à rester à jour avec les dernières tendances de l'industrie pour créer des solutions innovantes.Mon intérêt grandissant pour les données et le traitement de l'information m'a amené à explorer les aspects de l'analyse et de la gestion des données. Mon objectif est de contribuer de manière significative à la technologie en fournissant des solutions robustes. Je suis ouvert aux opportunités de collaboration et de croissance professionnelle, enthousiaste à l'idée de participer à des projets stimulants et d'apprendre de professionnels chevronnés. Contactez-moi pour discuter de collaborations potentielles, de conseils ou simplement pour partager nos passions communes liées au développement.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
