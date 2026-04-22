export interface Publication {
  title: string;
  journal: string;
  year: number;
  authors: string;
  doi?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  status: 'Ongoing' | 'Completed';
}

export const ACADEMIC_DATA = {
  name: "Alireza Ghorbani",
  title: "PhD Candidate in Mechanical Engineering",
  institution: "University of Illinois Chicago (UIC)",
  location: "Chicago, IL",
  bio: "I am a Ph.D. candidate at UIC specialized in atomic-scale materials characterization and in situ electron microscopy. My research focus is on uncovering fundamental mechanisms in catalytic and energy materials using advanced TEM-based operando techniques and data-driven interpretation.",
  email: "aghorb2@uic.edu",
  linkedin: "https://linkedin.com/in/alirezaghorbani1997/",
  googleScholar: "https://scholar.google.com/citations?user=0sBcjKkAAAAJ&hl=en", // User can add his specific scholar ID
  github: "https://github.com/Alirezaghorbani1997", // Assumed from LinkedIn handle
  researchInterests: [
    {
      title: "In Situ Electron Microscopy",
      description: "Utilizing operando TEM and S/TEM to track dynamic phase evolutions and transformations in nanoparticles."
    },
    {
      title: "Nanomaterials & Catalysis",
      description: "Investigating structure-property relationships in entropy-stabilized and multimetallic catalytic systems."
    },
    {
      title: "Energy Storage Systems",
      description: "Studying lithiation mechanisms, void formation, and interface motion in lithium-ion battery materials."
    }
  ],
  publications: [
    {
      title: "In Situ Transmission Electron Microscopy of Sequentially Formed FeCoNi Medium-Entropy Nanoparticles Driving Catalytic Graphitization",
      journal: "Small Structures",
      year: 2026,
      authors: "Ghorbani, A., Yurkiv, V., Hajilou, N., Shahbazian-Yassar, R.",
      doi: "https://doi.org/10.1002/sstr.202500809"
    },
    {
      title: "Thermodynamically-guided machine learning modelling for predicting the glass-forming ability of bulk metallic glasses",
      journal: "Scientific Reports",
      year: 2022,
      authors: "Ghorbani, A., Askari, A., Malekan, M., Nili-Ahmadabadi, M.",
      doi: "https://doi.org/10.1038/s41598-022-15981-2"
    },
    {
      title: "Role of CO2 and Glycerol in the Formation of Urchin-Like Strontium Carbonate Particles",
      journal: "ACS Sustainable Chemistry & Engineering",
      year: 2024,
      authors: "Ghorbani, A., Yurkiv, V., Gonçalves, J. M., et al.",
      doi: "https://doi.org/10.1021/acssuschemeng.3c07205"
    }
  ] as Publication[],
  projects: [
    {
      title: "Catalytic Graphitization",
      description: "Investigating metal-catalyzed graphitization of polymer-derived nanofibers using operando and ex situ TEM, reducing processing temperatures from 1400°C to 700°C.",
      tags: ["TEM", "S/TEM", "Carbon Nanofibers"],
      status: "Ongoing"
    },
    {
      title: "Machine Learning for Metallic Glasses",
      description: "Developed a random forest model to predict glass-forming ability (critical diameter) for BMGs with R2=96%, significantly reducing experimental iterations.",
      tags: ["Machine Learning", "Python", "Thermodynamics"],
      status: "Completed"
    }
  ] as Project[]
};
