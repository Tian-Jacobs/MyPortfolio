
import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PixelTransition from "@/components/ui/PixelTransition";

const About = () => {
  return (
    <section id="about" className="bg-muted/30">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-6">
          <User className="h-6 w-6 text-primary" />
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-6">
            <h3 className="section-subtitle">Professional Bio</h3>
            <p className="text-muted-foreground">
              Tian Jacobs is a data analysis professional specializing in extracting meaningful insights from complex datasets. With a strong foundation in technical tools and analytical methodologies, they excel at transforming raw data into actionable information.
            </p>
            <p className="text-muted-foreground">
              Eager to apply technical expertise and analytical mindset to contribute immediate value while growing professionally. Tian combines technical proficiency with strong problem-solving abilities to approach data challenges with creativity and precision.
            </p>
            
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Personal Bio</h3>
                <p className="text-muted-foreground">
                  My name is Tian Jacobs. I'm from Kuils River and I've lived there my whole life. I went to school at De Kuilen Primary and then De Kuilen Highschool. After school I studied at University of Stellenbosch and got a BSc in Mathematical Sciences. For my hobbies I like to play video games, playing/watching soccer and watching movies/series.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center justify-center">
            <PixelTransition
              firstContent={
                <img 
                  src="/lovable-uploads/IMG20250721171126-removebg-preview.png"
                  alt="Tian Jacobs - Professional headshot"
                  className="w-full h-full object-cover rounded-full"
                />
              }
              secondContent={
                <img 
                  src="/lovable-uploads/Problem-Solving-Quotes-To-Solve-The-Problem-In-Your-Own-Way-jpg-9e684b8d5fe54ec921ecc4dc6821b8d0.jpg"
                  alt="Problem solving motivation"
                  className="w-full h-full object-fill rounded-full"
                />
              }
              gridSize={8}
              pixelColor="#3b82f6"
              animationStepDuration={0.4}
              className="w-full max-w-sm mx-auto rounded-full"
              aspectRatio="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;