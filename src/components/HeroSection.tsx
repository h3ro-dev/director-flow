import { Button } from "@/components/ui/button";
import heroImage from "@/assets/director-pressure-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-professional text-primary-foreground overflow-hidden">
      {/* Connecting arrows background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-24 h-0.5 bg-primary-foreground transform rotate-45"></div>
        <div className="absolute top-32 right-20 w-32 h-0.5 bg-primary-foreground transform -rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-28 h-0.5 bg-primary-foreground transform rotate-12"></div>
        <div className="absolute bottom-60 right-10 w-20 h-0.5 bg-primary-foreground transform -rotate-12"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Team Needs Direction. Your Boss Wants Results.{" "}
                <span className="text-primary-accent">You're Drowning in the Coordination.</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                You're the bridge everyone walks on to get what they need. But who's supporting the bridge?
              </p>
              
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <p className="text-lg italic text-primary-foreground/95">
                  "When did directing become being everyone's problem solver but no one's solution?"
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Reclaim Your Leadership
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                See How It Works
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-professional">
              <img
                src={heroImage}
                alt="Director being pulled in multiple directions by team demands"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating pressure indicators */}
            <div className="absolute -top-4 -left-4 bg-primary-accent text-primary-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Strategic Vision
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary-foreground text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Daily Coordination
            </div>
            <div className="absolute top-1/2 -right-8 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform -rotate-12">
              Endless Meetings
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;