import { useState } from "react";
import { submitLead } from "@/lib/lead";
import { notifyLead, utmFromLocation } from "@/lib/notifyLead";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ConversionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    coordinationHours: "",
    strategicTime: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitLead(formData as any);
    try {
      const page_url = typeof window !== 'undefined' ? window.location.href : '';
      const payload = { ...formData, page_url, ...utmFromLocation() } as any;
      notifyLead('contact', payload);
    } catch (e) {
      console.warn('notifyLead skipped', e);
    }
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Reclaim Your Role as{" "}
              <span className="text-primary-accent">Strategic Leader</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join directors who've transformed from coordination bottlenecks to strategic leaders. 
              Start your leadership liberation today.
            </p>
          </div>

          <Card className="shadow-professional border-border/50">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold">
                Get Your Director AI Leadership Assessment
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department" className="text-sm font-semibold">
                    Which area of the business do you direct?
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("department", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select your department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="customer-success">Customer Success</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coordinationHours" className="text-sm font-semibold">
                    How many hours per week do you spend in coordination meetings?
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("coordinationHours", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select coordination hours" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10">5-10 hours</SelectItem>
                      <SelectItem value="10-15">10-15 hours</SelectItem>
                      <SelectItem value="15-20">15-20 hours</SelectItem>
                      <SelectItem value="20-25">20-25 hours</SelectItem>
                      <SelectItem value="25+">25+ hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="strategicTime" className="text-sm font-semibold">
                    When did you last have uninterrupted time for strategic thinking?
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("strategicTime", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="this-week">This week</SelectItem>
                      <SelectItem value="last-week">Last week</SelectItem>
                      <SelectItem value="last-month">Last month</SelectItem>
                      <SelectItem value="last-quarter">Last quarter</SelectItem>
                      <SelectItem value="cant-remember">Can't remember</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-6">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6 bg-gradient-professional hover:opacity-90 transition-opacity"
                  >
                    Amplify My Directorial Impact
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  Get your personalized Director AI assessment and discover how to reclaim 15+ hours per week for strategic leadership.
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConversionForm;
