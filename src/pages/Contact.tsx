import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-green via-dark-green to-forest-green pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(196, 240, 65, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(196, 240, 65, 0.15) 0%, transparent 50%)`,
          }}></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-pale-yellow mb-6 tracking-tighter animate-slide-down">
            Get In <span className="text-lime-yellow">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-pale-yellow/80 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            We&apos;re here to help. Reach out anytime and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-forest-green mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <Input type="text" placeholder="Your name" className="w-full transition-smooth hover-lift" />
                </div>
                <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <Input type="tel" placeholder="(555) 123-4567" className="w-full transition-smooth hover-lift" />
                </div>
                <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea
                    placeholder="How can we help you?"
                    className="w-full min-h-[150px] transition-smooth hover-lift"
                  />
                </div>
                <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
                  <a href="tel:888-460-8802">
                    <Button className="w-full bg-forest-green text-lime-yellow hover:bg-dark-green font-bold text-lg py-6 transition-smooth hover-lift hover-glow">
                      Send Message
                    </Button>
                  </a>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-in-right">
              <h2 className="text-2xl sm:text-3xl font-bold text-forest-green mb-6">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-4 items-start animate-scale-in" style={{animationDelay: '0.1s'}}>
                  <div className="w-14 h-14 bg-lime-yellow rounded-2xl flex items-center justify-center flex-shrink-0 animate-bounce-subtle">
                    <Phone className="text-forest-green" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-forest-green mb-2">Phone</h3>
                    <a href="tel:888-460-8802" className="text-muted-foreground hover:text-lime-yellow transition-smooth text-lg font-semibold block">
                      (888) 460-8802
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Call us anytime!</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start animate-scale-in" style={{animationDelay: '0.2s'}}>
                  <div className="w-14 h-14 bg-lime-yellow rounded-2xl flex items-center justify-center flex-shrink-0 animate-bounce-subtle" style={{animationDelay: '0.5s'}}>
                    <Clock className="text-forest-green" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-forest-green mb-2">Hours</h3>
                    <p className="text-muted-foreground">Support: 24/7</p>
                    <p className="text-muted-foreground">Sales: Mon-Fri 8AM-8PM</p>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="mt-12 p-8 bg-gradient-to-br from-forest-green to-dark-green rounded-3xl animate-scale-in" style={{animationDelay: '0.3s'}}>
                  <h3 className="text-2xl font-bold text-lime-yellow mb-4">Ready to Get Started?</h3>
                  <p className="text-pale-yellow/80 mb-6">Call us now and speak with our team to find the perfect plan for you.</p>
                  <a href="tel:888-460-8802">
                    <Button className="w-full bg-lime-yellow text-forest-green hover:bg-pale-yellow font-bold text-lg py-6 transition-smooth hover-lift hover-glow">
                      <Phone className="mr-2" size={20} />
                      Call (888) 460-8802
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Checker */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-dark-green to-forest-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 animate-rotate">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(196, 240, 65, 0.1) 35px, rgba(196, 240, 65, 0.1) 70px)`,
          }}></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pale-yellow mb-6 tracking-tight">
              Check <span className="text-lime-yellow">Coverage</span>
            </h2>
            <p className="text-base sm:text-xl text-pale-yellow/70 max-w-2xl mx-auto leading-relaxed">
              Enter your address to discover if Hyper Speed Net is available in your area
            </p>
          </div>
          <div className="max-w-2xl mx-auto animate-scale-in" style={{animationDelay: '0.2s'}}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Enter your address"
                className="flex-1 bg-forest-green border-2 border-lime-yellow/20 text-pale-yellow placeholder:text-pale-yellow/40 focus:border-lime-yellow transition-smooth hover-lift py-6 text-base sm:text-lg"
              />
              <a href="tel:888-460-8802" className="w-full sm:w-auto">
                <Button className="w-full bg-lime-yellow text-forest-green hover:bg-pale-yellow font-bold px-8 py-6 text-lg transition-smooth hover-lift hover-glow">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
