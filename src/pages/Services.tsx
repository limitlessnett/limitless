import { Button } from "@/components/ui/button";
import { Wifi, Tv, Router, Wrench, Headphones, Building2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: "Home Fiber Internet",
      description: "Blazing-fast fiber-to-the-home connectivity with speeds up to 1 Gbps. Engineered for seamless streaming, competitive gaming, and productive remote work.",
      features: ["Up to 1 Gbps speeds", "Unlimited data", "No contracts", "Free installation"],
      color: "bg-lime-yellow",
    },
    {
      icon: Building2,
      title: "Business Fiber",
      description: "Enterprise-grade fiber internet engineered for demanding businesses. True symmetric upload/download speeds with dedicated priority support.",
      features: ["Dedicated bandwidth", "99.9% SLA uptime", "Static IP included", "24/7 business support"],
      color: "bg-secondary",
    },
    {
      icon: Tv,
      title: "Premium Cable TV Bundles",
      description: "Bundle your internet with premium cable TV packages. Over 200 crystal-clear HD channels featuring sports, blockbuster movies, and premium entertainment.",
      features: ["200+ HD channels", "Sports packages", "On-demand content", "DVR included"],
      color: "bg-secondary",
    },
    {
      icon: Router,
      title: "Next-Gen Wi-Fi 6 Systems",
      description: "Advanced mesh Wi-Fi systems that completely eliminate dead zones. Comprehensive whole-home coverage powered by cutting-edge Wi-Fi 6 technology.",
      features: ["Mesh technology", "Parental controls", "Guest network", "Mobile app management"],
      color: "bg-lime-yellow",
    },
    {
      icon: Wrench,
      title: "Expert Professional Installation",
      description: "Precision installation and setup by certified expert technicians. We handle everything from professional wiring to complete router configuration.",
      features: ["Same-day installation", "Network optimization", "Device setup help", "Quality guarantee"],
      color: "bg-secondary",
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Round-the-clock technical support from real people who genuinely care. Get expert assistance whenever you need it, any time of day or night.",
      features: ["Live chat support", "Phone support", "Remote diagnostics", "On-site service"],
      color: "bg-lime-yellow",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-forest-green pt-32 pb-24 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-pale-yellow mb-6 tracking-tighter">
            Our <span className="text-lime-yellow">Services</span>
          </h1>
          <p className="text-xl text-pale-yellow/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive connectivity solutions engineered for homes and businesses
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className={`${service.color} rounded-3xl p-8 shadow-card hover:shadow-hover transition-smooth animate-fade-in`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="text-forest-green mb-6" size={48} />
                  <h3 className="text-2xl font-bold text-forest-green mb-4">{service.title}</h3>
                  <p className="text-forest-green/70 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center text-forest-green/80">
                        <span className="w-2 h-2 bg-forest-green rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:888-460-8802">
                    <Button variant="outline" className="w-full border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-lime-yellow font-bold">
                      Call Now
                    </Button>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-24 px-6 bg-dark-green">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-pale-yellow mb-6 tracking-tight">
              Check Our <span className="text-lime-yellow">Coverage</span>
            </h2>
            <p className="text-xl text-pale-yellow/70 max-w-2xl mx-auto leading-relaxed">
              We're rapidly expanding every day. Enter your address to discover if Hyper Speed Net is available in your area.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter your address"
                className="flex-1 px-6 py-4 rounded-2xl bg-forest-green border-2 border-lime-yellow/20 text-pale-yellow placeholder:text-pale-yellow/40 focus:outline-none focus:border-lime-yellow"
              />
              <a href="tel:888-460-8802">
                <Button className="bg-lime-yellow text-forest-green hover:bg-pale-yellow font-bold px-8">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-forest-green mb-16 tracking-tight">
            Why Choose Hyper Speed Net?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-lime-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-forest-green">1</span>
              </div>
              <h3 className="text-2xl font-bold text-forest-green mb-4">Hyper-Speed Performance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced fiber-optic technology delivering true symmetrical gigabit speeds with zero throttling and unlimited data.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-lime-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-forest-green">2</span>
              </div>
              <h3 className="text-2xl font-bold text-forest-green mb-4">Reliable Network</h3>
              <p className="text-muted-foreground leading-relaxed">
                99.9% uptime guarantee with redundant infrastructure and proactive monitoring.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-lime-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-forest-green">3</span>
              </div>
              <h3 className="text-2xl font-bold text-forest-green mb-4">Local Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Real people, based locally, ready to help 24/7. No outsourced call centers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-forest-green">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-pale-yellow mb-6 tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-pale-yellow/70 mb-8 max-w-2xl mx-auto">
            Choose a plan that fits your needs and get connected today
          </p>
          <a href="tel:888-460-8802">
            <Button className="bg-lime-yellow text-forest-green hover:bg-pale-yellow font-bold text-lg px-8 py-6">
              Call (888) 460-8802
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
