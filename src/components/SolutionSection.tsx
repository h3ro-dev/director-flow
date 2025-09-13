const SolutionSection = () => {
  const aiCapabilities = [
    {
      title: "Project Coordination AI",
      description: "Automate the endless status meetings and update requests",
      features: [
        "Intelligent project status aggregation",
        "Automated stakeholder updates",
        "Cross-team dependency tracking",
        "Smart meeting prioritization"
      ],
      icon: "🎯"
    },
    {
      title: "Team Development AI",
      description: "Track individual growth without micromanaging",
      features: [
        "Performance pattern recognition",
        "Skill gap identification",
        "Development pathway mapping",
        "Goal alignment tracking"
      ],
      icon: "📈"
    },
    {
      title: "Strategic Planning AI",
      description: "Turn executive vision into executable team plans",
      features: [
        "Vision-to-action translation",
        "Resource allocation optimization",
        "Timeline feasibility analysis",
        "Impact measurement frameworks"
      ],
      icon: "🧭"
    },
    {
      title: "Communication AI",
      description: "Keep everyone informed without being the information bottleneck",
      features: [
        "Context-aware message routing",
        "Priority-based information filtering",
        "Stakeholder communication templates",
        "Feedback loop automation"
      ],
      icon: "💬"
    }
  ];

  return (
    <section className="py-20 bg-gradient-professional text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Lead Like the Director You Were{" "}
            <span className="text-primary-accent">Meant to Be</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Transform from human switchboard back to strategic leader with AI that handles 
            the coordination so you can focus on direction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {aiCapabilities.map((capability, index) => (
            <div key={index} className="group">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20 h-full hover:bg-primary-foreground/15 transition-all duration-300 group-hover:scale-[1.02]">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{capability.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-foreground">
                        {capability.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-lg">
                        {capability.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-accent rounded-full flex-shrink-0"></div>
                        <span className="text-primary-foreground/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-primary-accent/20 text-primary-accent px-6 py-3 rounded-full border border-primary-accent/30">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Stop coordinating. Start leading.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;