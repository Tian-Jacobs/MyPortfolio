
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const workExperience = [
  {
    title: "IT Demand Learnership Programme",
    company: "CAPACITI",
    duration: "April 2025 - Present",
    description: "Participating in an intensive 12-month learnership programme in Data Fundamentals & Analytics, including a specialized 2-month AI Bootcamp. Developed job-ready skills through hands-on projects, agile methodology, and real-world applications.",
    achievements: [
      "Built comprehensive portfolio with 4-5 deployed AI tools",
      "Completed AI Bootcamp using Agile Scrum methodology (May-June 2025)",
      "Developed chatbots, sentiment analysis dashboards, and end-to-end AI solutions",
      "Gained proficiency in Python, machine learning tools (Hugging Face, AWS Comprehend), and data visualization tools (Tableau, Power BI)",
      "Created AI applications using GPT-4, Streamlit, and no-code platforms (Teachable Machine, Dialogflow)",
      "Conducted bias audits and ethical AI assessments using IBM Fairness 360",
      "Participated in daily standups, sprint reviews, and technical presentations",
      "Obtained industry certifications in data analytics and AI/ML domains"
    ],
    technicalSkills: [
      "Developed web applications using Python, HTML/CSS, and JavaScript",
      "Implemented AI/ML solutions with OpenAI GPT-4, Hugging Face, TensorFlow, and Teachable Machine",
      "Performed statistical analysis, data visualization, and managed databases",
      "Built and deployed projects with Git, Jupyter Notebooks, Streamlit, Gradio, and AWS Comprehend",
      "Applied Agile Scrum methodology, version control, and created technical documentation"
    ]
  }
];

const certifications = [
  {
    title: "AI Bootcamp",
    provider: "Coursera",
    date: "July 8, 2025",
    description: "Intensive bootcamp covering AI fundamentals, machine learning, and practical applications.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/AI%20Bootcamp%20completion%20badge.png?alt=media&token=0a944853-f527-489f-9867-b615c5975b14"
  },
  {
    title: "Introduction to Data Engineering",
    provider: "IBM",
    date: "July 17, 2025",
    description: "Comprehensive introduction to data engineering concepts, tools, and best practices.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Introduction%20to%20Data%20Engineering.pdf?alt=media&token=d6faed4f-8c4d-413f-afb9-1eb9a55a3281"
  }
];

const Resume = () => {
  return (
    <section id="resume" className="bg-muted/30">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-6">
          <FileText className="h-6 w-6 text-primary" />
          <h2 className="section-title">Resume</h2>
        </div>
        
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <a 
              href="https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Tian_Jacobs_Resume_2025.pdf?alt=media&token=6fe7bcbd-2eee-44ef-9379-4c66ef2c3a08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" /> Download Full Resume
              </Button>
            </a>
          </div>
          
          <div className="space-y-8">
            <h3 className="section-subtitle text-center">Professional Profile</h3>
            
            {workExperience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription className="text-base">{job.company}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{job.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{job.description}</p>
                  <h4 className="font-semibold mb-2">Key Skills & Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground">{achievement}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mb-2">Technical Skills:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.technicalSkills.map((skill, i) => (
                      <li key={i} className="text-muted-foreground">{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;