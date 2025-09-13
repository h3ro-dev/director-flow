const PainSection = () => {
  const painPoints = [
    {
      quote: "Senior leadership says 'execute the vision' while your team says 'we need clearer direction'",
      impact: "Vision Translation Gap"
    },
    {
      quote: "Strategic initiatives keep dying because you're buried in daily coordination meetings",
      impact: "Strategic Drift"
    },
    {
      quote: "You're managing personalities, projects, and politics with no one managing the load you're carrying",
      impact: "Leadership Isolation"
    },
    {
      quote: "Every department problem somehow becomes your fire to fight",
      impact: "Responsibility Creep"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            The Director's Impossible Juggle That's{" "}
            <span className="text-destructive">Killing Your Leadership</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-card rounded-xl p-8 shadow-card border border-border/50">
              <p className="text-2xl font-semibold text-foreground mb-4">
                The Coordination Trap Statistics
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Directors spend <span className="font-bold text-destructive">73% of their time coordinating</span> instead of leading. 
                You're not a leader - you're a human switchboard.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {painPoints.map((pain, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-card rounded-xl p-8 shadow-card border border-border/50 h-full hover:shadow-professional transition-all duration-300 group-hover:scale-[1.02]">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                    <blockquote className="text-lg text-foreground leading-relaxed italic">
                      "{pain.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border/30">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
                      {pain.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-destructive/10 text-destructive px-6 py-3 rounded-full border border-destructive/20">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">You weren't hired to be a coordinator. You were hired to lead.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;