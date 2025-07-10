// components/SkillsSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import AnimatedContent from "@/components/AnimatedContent";
import GlareHover from "@/components/GlareHover";
import {
  FaPython, FaJava, FaGitAlt, FaNodeJs, FaCss3Alt, FaJsSquare,
  FaMicrosoft, FaGithub, FaGoogle, FaTable
} from "react-icons/fa";
import {
  SiTableau, SiVercel, SiRender, SiJupyter, SiKaggle, SiEclipseide
} from "react-icons/si";
// ...existing code...
import { TbNotebook } from "react-icons/tb";
import { GrDocumentWord, GrDocumentExcel } from "react-icons/gr";

const tools = [
  {
    category: "Programming Languages & IDEs",
    items: [
      { name: "Python", icon: <FaPython size={24} /> },
      { name: "Java", icon: <FaJava size={24} /> },
      { name: "MATLAB", icon: <TbNotebook size={24} /> },
      { name: "R Studio", icon: <TbNotebook size={24} /> },
      { name: "Node.js", icon: <FaNodeJs size={24} /> },
      { name: "JavaScript", icon: <FaJsSquare size={24} /> },
      { name: "CSS", icon: <FaCss3Alt size={24} /> },
    ],
  },
  {
    category: "Data & Visualization Tools",
    items: [
      { name: "Tableau", icon: <SiTableau size={24} /> },
      { name: "Microsoft Excel", icon: <GrDocumentExcel size={24} /> },
      { name: "Microsoft Word", icon: <GrDocumentWord size={24} /> },
      { name: "SSMS", icon: <FaTable size={24} /> },
      { name: "Jupyter Notebook", icon: <SiJupyter size={24} /> },
      { name: "Google Colab", icon: <FaGoogle size={24} /> },
      { name: "Kaggle", icon: <SiKaggle size={24} /> },
    ],
  },
  {
    category: "Dev & Deployment Tools",
    items: [
      { name: "GitHub", icon: <FaGithub size={24} /> },
      { name: "Vercel", icon: <SiVercel size={24} /> },
      { name: "Render", icon: <SiRender size={24} /> },
      { name: "Visual Studio", icon: <FaMicrosoft size={24} /> },
      { name: "Eclipse", icon: <SiEclipseide size={24} /> },
    ],
  },
];

const skills = [
  // Existing skills
  "Data Analysis",
  "Machine Learning",
  "Data Visualization",
  "Web Development",
  "Database Management",
  "Statistical Modeling",
  // New skills
  "Linear Programming",
  "Optimization Modeling",
  "Simulation",
  "Decision Analysis",
  "Queuing Theory",
  "Network Flows",
  "Algorithms & Data Structures",
  "Numerical Analysis",
  "Differential Equations",
  "Mathematical Modeling",
  "Probability & Statistics",
  "Computational Methods",
  "Proof Writing",
  "Abstract Algebra",
  "Calculus",
  "Discrete Mathematics",
  "Mathematical Logic",
];

const abilities = [
  // Existing abilities
  "Critical Thinking",
  "Problem Solving",
  "Communication",
  "Collaboration",
  "Attention to Detail",
  "Adaptability",
  "Analytical Mindset",
  "Creativity",
  // New abilities
  "Analytical Reasoning",
  "Deductive Thinking",
  "Persistence in Problem Solving",
  "Conceptual Clarity",
  "Quantitative Reasoning",
  "Pattern Recognition",
  "Model Validation",
  "Precision & Accuracy",
  "Abstract Thinking",
  "Logical Reasoning",
  "Scenario Planning",
  "Resource Allocation",
  "Strategic Thinking",
];

export default function SkillsSection() {
  // Scroll to top handler
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto relative">
      {/* Back to Top Button */}
      <button
        onClick={handleBackToTop}
        aria-label="Back to top"
        className="fixed bottom-6 left-6 z-50 bg-primary text-white rounded-full shadow-lg p-3 hover:bg-primary/80 transition-all focus:outline-none"
        style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <h2 className="text-3xl font-bold mb-8 text-center">Skills, Tools & Abilities</h2>

      {/* Tools Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Tools</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((section, idx) => (
            <AnimatedContent
              key={section.category}
              delay={1 + idx * 0.6}
            >
              <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4">{section.category}</h4>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item.name} className="flex items-center gap-3">
                        <span className="text-primary">{item.icon}</span>
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedContent>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Skills</h3>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <GlareHover
              key={skill}
              glareColor="#fff"
              glareOpacity={0.5}
              borderRadius="9999px"
              className="text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow"
              style={{ background: "#e0f2fe" }}
            >
              {skill}
            </GlareHover>
          ))}
        </ul>
      </div>

      {/* Abilities Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center">Abilities</h3>
        <ul className="flex flex-wrap justify-center gap-4">
          {abilities.map((ability) => (
            <GlareHover
              key={ability}
              glareColor="#fff"
              glareOpacity={0.5}
              borderRadius="9999px"
              className="text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow"
              style={{ background: "#bbf7d0" }}
            >
              {ability}
            </GlareHover>
          ))}
        </ul>
      </div>
    </section>
  );
}
