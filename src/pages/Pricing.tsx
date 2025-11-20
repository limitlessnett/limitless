import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Fiber",
      speed: "300 Mbps",
      price: "$49",
      description: "Perfect for browsing, streaming, and light usage",
      features: [
        "300 Mbps download",
        "300 Mbps upload",
        "Unlimited data",
        "Free Wi-Fi router",
        "Free installation",
        "24/7 support",
      ],
      highlighted: false,
      color: "bg-secondary",
    },
    {
      name: "Standard Fiber + Cable",
      speed: "600 Mbps",
      price: "$79",
      description: "Great for families with multiple devices",
      features: [
        "600 Mbps download",
        "600 Mbps upload",
        "Unlimited data",
        "Wi-Fi 6 mesh system",
        "100+ cable channels",
        "Free premium installation",
        "Priority support",
      ],
      highlighted: true,
      color: "bg-lime-yellow",
    },
    {
      name: "Ultra-Speed Gigabit",
      speed: "1 Gbps",
      price: "$99",
      description: "Maximum speed for power users",
      features: [
        "1 Gbps download",
        "1 Gbps upload",
        "Unlimited data",
        "Advanced Wi-Fi 6 system",
        "200+ premium channels",
        "White-glove installation",
        "VIP support",
        "Static IP included",
      ],
      highlighted: false,
      color: "bg-secondary",
    },
    {
      name: "Business Pro",
      speed: "1 Gbps+",
      price: "$149",
      description: "Enterprise-grade for businesses",
      features: [
        "Up to 2 Gbps speeds",
        "Dedicated bandwidth",
        "99.9% uptime SLA",
        "Business-grade equipment",
        "5 static IPs",
        "Same-day installation",
        "24/7 business support",
        "Network monitoring",
      ],
      highlighted: false,
      color: "bg-secondary",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-forest-green pt-32 pb-24 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-pale-yellow mb-6 tracking-tighter">
            Simple, <span className="text-lime-yellow">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-pale-yellow/80 max-w-3xl mx-auto leading-relaxed">
            No hidden fees, no contracts, no surprises. Just fast, reliable internet at fair prices.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`${plan.color} rounded-3xl p-8 shadow-card ${
                  plan.highlighted ? "ring-4 ring-forest-green scale-105" : ""
                } hover:shadow-hover transition-smooth animate-fade-in`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="inline-block bg-forest-green text-lime-yellow px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-forest-green mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-forest-green">{plan.price}</span>
                  <span className="text-forest-green/60">/month</span>
                </div>
                <p className="text-xl font-bold text-forest-green mb-4">{plan.speed}</p>
                <p className="text-forest-green/70 mb-6 leading-relaxed">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start text-forest-green">
                      <Check className="mr-2 flex-shrink-0 mt-1" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="tel:888-809-0202">
                  <Button
                    variant={plan.highlighted ? "default" : "outline"}
                    className={`w-full font-bold ${
                      plan.highlighted
                        ? "bg-forest-green text-lime-yellow hover:bg-dark-green"
                        : "border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-lime-yellow"
                    }`}
                  >
                    Call Now
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 px-6 bg-dark-green">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-pale-yellow mb-6 tracking-tight">
            Optional <span className="text-lime-yellow">Add-Ons</span>
          </h2>
          <p className="text-xl text-center text-pale-yellow/70 mb-16 max-w-2xl mx-auto">
            Customize your plan with these optional features
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-lime-yellow/10 backdrop-blur-sm border-2 border-lime-yellow/20 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-lime-yellow mb-4">Premium Channels</h3>
              <p className="text-4xl font-bold text-pale-yellow mb-2">+$20</p>
              <p className="text-pale-yellow/70 mb-4">per month</p>
              <p className="text-pale-yellow/60 leading-relaxed">
                HBO Max, Showtime, Starz, and more premium entertainment
              </p>
            </div>
            <div className="bg-lime-yellow/10 backdrop-blur-sm border-2 border-lime-yellow/20 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-lime-yellow mb-4">Extra Storage</h3>
              <p className="text-4xl font-bold text-pale-yellow mb-2">+$10</p>
              <p className="text-pale-yellow/70 mb-4">per month</p>
              <p className="text-pale-yellow/60 leading-relaxed">
                Upgrade your DVR with 500 hours of cloud storage
              </p>
            </div>
            <div className="bg-lime-yellow/10 backdrop-blur-sm border-2 border-lime-yellow/20 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-lime-yellow mb-4">Tech Pro Support</h3>
              <p className="text-4xl font-bold text-pale-yellow mb-2">+$15</p>
              <p className="text-pale-yellow/70 mb-4">per month</p>
              <p className="text-pale-yellow/60 leading-relaxed">
                On-demand tech support for all your devices and smart home
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-forest-green mb-16 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Are there any contracts?",
                a: "No, all our plans are month-to-month with no long-term contracts required.",
              },
              {
                q: "What's included in installation?",
                a: "Free professional installation includes fiber line setup, router configuration, and basic network testing.",
              },
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Yes, you can change your plan anytime. Changes take effect at the start of your next billing cycle.",
              },
              {
                q: "Do you have data caps?",
                a: "No, all our plans include unlimited data with no throttling or overage fees.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-secondary rounded-2xl p-8">
                <h3 className="text-xl font-bold text-forest-green mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-forest-green">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-pale-yellow mb-6 tracking-tight">
            Still have questions?
          </h2>
          <p className="text-xl text-pale-yellow/70 mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the perfect plan
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:888-809-0202">
              <Button className="bg-lime-yellow text-forest-green hover:bg-pale-yellow font-bold text-lg px-8 py-6">
                Call (888) 809-0202
              </Button>
            </a>
            <a href="tel:888-809-0202">
              <Button variant="outline" className="border-2 border-lime-yellow text-lime-yellow hover:bg-lime-yellow hover:text-forest-green font-bold text-lg px-8 py-6">
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
