import { Button } from "@/components/ui/button";
import { MapPin, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-forest-green pt-32 pb-24 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-pale-yellow mb-6 tracking-tighter">
            About <span className="text-lime-yellow">Hyper Speed Net</span>
          </h1>
          <p className="text-xl text-pale-yellow/80 max-w-3xl mx-auto leading-relaxed">
            Empowering communities with lightning-fast, rock-solid fiber internet since 2015
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6 tracking-tight">
                Our Mission
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed mb-6">
                At Hyper Speed Net, we're passionate about delivering exceptional internet access to everyone. We're building a cutting-edge fiber network that seamlessly connects homes and businesses to the digital world with uncompromising performance.
              </p>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Our commitment extends far beyond simply providing internet service—we're establishing the critical infrastructure that fuels innovation, empowers remote work, and strengthens community connections.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-secondary rounded-2xl p-8 text-center">
                <Users className="mx-auto mb-4 text-forest-green" size={48} />
                <p className="text-4xl font-bold text-forest-green mb-2">50K+</p>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div className="bg-lime-yellow rounded-2xl p-8 text-center">
                <MapPin className="mx-auto mb-4 text-forest-green" size={48} />
                <p className="text-4xl font-bold text-forest-green mb-2">15</p>
                <p className="text-forest-green/70">Cities Covered</p>
              </div>
              <div className="bg-lime-yellow rounded-2xl p-8 text-center">
                <Award className="mx-auto mb-4 text-forest-green" size={48} />
                <p className="text-4xl font-bold text-forest-green mb-2">4.9/5</p>
                <p className="text-forest-green/70">Customer Rating</p>
              </div>
              <div className="bg-secondary rounded-2xl p-8 text-center">
                <TrendingUp className="mx-auto mb-4 text-forest-green" size={48} />
                <p className="text-4xl font-bold text-forest-green mb-2">99.9%</p>
                <p className="text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 px-6 bg-dark-green">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-pale-yellow mb-16 tracking-tight">
            Our Journey
          </h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="flex gap-8">
              <div className="text-lime-yellow font-bold text-2xl min-w-[100px]">2015</div>
              <div>
                <h3 className="text-2xl font-bold text-pale-yellow mb-2">Founded</h3>
                <p className="text-pale-yellow/70 leading-relaxed">
                  Launched with an ambitious vision to deliver premium fiber internet to underserved communities in our inaugural city.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="text-lime-yellow font-bold text-2xl min-w-[100px]">2017</div>
              <div>
                <h3 className="text-2xl font-bold text-pale-yellow mb-2">Rapid Growth</h3>
                <p className="text-pale-yellow/70 leading-relaxed">
                  Surpassed 10,000 satisfied customers and successfully expanded operations to 5 additional cities throughout the region.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="text-lime-yellow font-bold text-2xl min-w-[100px]">2020</div>
              <div>
                <h3 className="text-2xl font-bold text-pale-yellow mb-2">Technological Leap</h3>
                <p className="text-pale-yellow/70 leading-relaxed">
                  Pioneered Wi-Fi 6 technology deployment and advanced smart home integration features during the remote work revolution.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="text-lime-yellow font-bold text-2xl min-w-[100px]">2024</div>
              <div>
                <h3 className="text-2xl font-bold text-pale-yellow mb-2">Today</h3>
                <p className="text-pale-yellow/70 leading-relaxed">
                  Serving over 50,000 customers across 15 cities with gigabit speeds and industry-leading reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-forest-green mb-6 tracking-tight">
            Leadership Team
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Meet the people dedicated to keeping you connected
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Michael Chen", role: "CEO & Founder", bio: "15 years in telecom infrastructure" },
              { name: "Rachel Foster", role: "CTO", bio: "Former network architect at major ISP" },
              { name: "James Rodriguez", role: "COO", bio: "Expert in scaling tech operations" },
            ].map((member, idx) => (
              <div key={idx} className="bg-secondary rounded-3xl p-8 text-center">
                <div className="w-32 h-32 rounded-full bg-lime-yellow/20 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-forest-green mb-2">{member.name}</h3>
                <p className="text-forest-green/60 mb-4">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-forest-green">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-pale-yellow mb-6 tracking-tight">
            Ready to experience hyper speed?
          </h2>
          <p className="text-xl text-pale-yellow/70 mb-8 max-w-2xl mx-auto">
            Join thousands of thrilled customers experiencing lightning-fast fiber internet
          </p>
          <a href="tel:888-809-0202">
            <Button className="bg-lime-yellow text-forest-green hover:bg-pale-yellow font-bold text-lg px-8 py-6">
              Call (888) 809-0202
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
