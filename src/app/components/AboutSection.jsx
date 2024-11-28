

"use client";
import React, { useState } from "react";
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
        <li>TypeScript</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>NestJS</li>
        <li>Flask</li>
        <li>Django</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    // Ajoutez le contenu de l'onglet "Education" ici
  },
  // Ajoutez d'autres onglets si nécessaire
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(TAB_DATA[0].id);

  return (
    <section>
      <div>
        <div className="tab-buttons">
          {TAB_DATA.map((tab) => (
            <TabButton
              key={tab.id}
              title={tab.title}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
        <div className="tab-content">
          {/* Affiche le contenu de l'onglet actif */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;