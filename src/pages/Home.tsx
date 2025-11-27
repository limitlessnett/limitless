import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wifi, Zap, Shield, Clock, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import homeOffice from "@/assets/home-office.jpg";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import customerTestimonial from "@/assets/customer-testimonial.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-forest-green via-dark-green to-[#0a2f24] pt-20 pb-16 px-6 overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(196, 240, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(196, 240, 65, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-lime-yellow/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pale-yellow/10 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - 6 columns */}
            <div className="lg:col-span-6 space-y-8">
              {/* Animated badge */}
              <div className="inline-flex items-center gap-3 bg-lime-yellow/10 backdrop-blur-sm border border-lime-yellow/30 rounded-full px-6 py-3 animate-fade-in">
                <div className="relative">
                  <div className="w-3 h-3 bg-lime-yellow rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-lime-yellow rounded-full animate-ping"></div>
                </div>
                <span className="text-lime-yellow font-semibold text-sm">Next-Gen Fiber Network</span>
              </div>

              {/* Main headline */}
		      <div className="space-y-4">
		        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] animate-slide-up">
		          <span className="block bg-gradient-to-r from-lime-yellow via-pale-yellow to-lime-yellow bg-clip-text text-transparent animate-gradient">
		            Hyper Speed. Zero Limits.
		          </span>
		        </h1>
		      </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-pale-yellow/80 leading-relaxed max-w-xl animate-fade-in" style={{animationDelay: '0.2s'}}>
                Lightning-fast fiber internet engineered for peak performance. Stream in 4K, dominate online gaming, power your home office, and connect every device with blazing speeds up to 1Gbps.
              </p>

              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-lime-yellow/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-lime-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="text-lime-yellow" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">1Gbps</div>
                    <div className="text-pale-yellow/60 text-sm">Lightning Speed</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-lime-yellow/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-lime-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="text-lime-yellow" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">99.9%</div>
                    <div className="text-pale-yellow/60 text-sm">Uptime SLA</div>
                  </div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <a href="tel:888-460-8802">
                  <Button className="group bg-lime-yellow text-forest-green hover:bg-pale-yellow font-bold text-lg px-8 py-7 rounded-2xl shadow-2xl hover:shadow-lime-yellow/20 transition-all duration-300 hover:scale-105">
                    Get Started Today
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </a>
                <a href="tel:888-460-8802">
                  <Button variant="outline" className="border-2 border-pale-yellow/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-pale-yellow font-bold text-lg px-8 py-7 rounded-2xl transition-all duration-300">
                    Learn More
                  </Button>
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 pt-6 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-yellow to-pale-yellow border-2 border-forest-green"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pale-yellow to-lime-yellow border-2 border-forest-green"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-yellow to-pale-yellow border-2 border-forest-green"></div>
                  </div>
                  <div className="text-pale-yellow/80 text-sm">
                    <span className="text-lime-yellow font-bold">10,000+</span> Happy Customers
                  </div>
                </div>
                <div className="h-4 w-px bg-pale-yellow/30"></div>
                <div className="flex items-center gap-2 text-pale-yellow/80 text-sm">
                  <svg className="w-5 h-5 text-lime-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold">4.9/5</span> Rating
                </div>
              </div>
            </div>

            {/* Right Visual - 6 columns */}
            <div className="lg:col-span-6 relative">
              <div className="relative animate-scale-in">
                {/* Main image card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[3rem] p-6 border border-white/20 shadow-2xl">
                  <div className="relative rounded-[2.5rem] overflow-hidden">
                    <img src={heroImage} alt="High-speed fiber internet" className="w-full h-auto" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-green/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Floating speed indicator */}
                  <div className="absolute -top-6 -right-6 bg-lime-yellow rounded-3xl p-6 shadow-2xl animate-float">
                    <div className="text-center">
                      <div className="text-4xl font-black text-forest-green mb-1">1000</div>
                      <div className="text-sm font-bold text-forest-green/70">Mbps</div>
                    </div>
                  </div>

                  {/* Floating stats card */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl animate-float" style={{animationDelay: '0.5s'}}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-lime-yellow to-pale-yellow rounded-2xl flex items-center justify-center">
                        <Wifi className="text-forest-green" size={28} />
                      </div>
                      <div>
                        <div className="text-2xl font-black text-forest-green">24/7</div>
                        <div className="text-sm text-forest-green/70 font-semibold">Support</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Network animation bars */}
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-forest-green to-dark-green rounded-3xl p-6 shadow-2xl border border-lime-yellow/20 animate-float" style={{animationDelay: '1s'}}>
                  <div className="text-xs text-lime-yellow/60 uppercase tracking-wider font-bold mb-3">Live Network</div>
                  <div className="flex items-end gap-1.5 h-20 w-28">
                    {[45, 60, 50, 75, 55, 85, 95, 70].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-lime-yellow to-pale-yellow rounded-t-lg transition-all duration-700"
                        style={{
                          height: `${height}%`,
                          animation: `pulse 2s ease-in-out ${i * 0.1}s infinite`
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-right mt-2">
                    <span className="text-lime-yellow font-bold text-lg">↑ 98%</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-lime-yellow/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-pale-yellow/60">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Clear the Path Section */}
      <section className="bg-dark-green py-24 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-pale-yellow mb-6 tracking-tight">
            Say goodbye to slow internet
            <br />
            <span className="text-lime-yellow">and hello to hyper-speed connectivity</span>
          </h2>
          <p className="text-xl text-pale-yellow/70 max-w-3xl mx-auto leading-relaxed">
            Our state-of-the-art fiber network delivers consistently blazing-fast speeds. Zero buffering, instant downloads, seamless streaming - just pure, uninterrupted performance for everything you do online.
          </p>
        </div>
      </section>

      {/* Two Cards Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-pale-yellow to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-lime-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-forest-green/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black text-forest-green mb-6">
              Built for <span className="text-lime-yellow">Every Need</span>
            </h2>
            <p className="text-xl text-forest-green/70 max-w-2xl mx-auto">
              From home offices to enterprise teams, we deliver connectivity that scales
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Stacked images with offset */}
            <div className="relative animate-slide-in-left">
              <div className="relative">
                {/* Back image */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-lime-yellow/20 rounded-[3rem] animate-pulse" style={{animationDelay: '2s'}}></div>
                
                {/* Main image */}
                <div className="relative bg-white rounded-[3rem] p-3 shadow-2xl hover:shadow-lime-yellow/20 transition-all duration-500 hover:scale-[1.02]">
                  <img src={homeOffice} alt="Home office with fast internet" className="rounded-[2.5rem] w-full" />
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-lime-yellow rounded-2xl p-6 shadow-2xl animate-float">
                    <div className="text-center">
                      <div className="text-3xl font-black text-forest-green">500+</div>
                      <div className="text-sm font-bold text-forest-green/70">Mbps</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature card overlay */}
              <div className="mt-8 bg-forest-green rounded-3xl p-8 shadow-xl animate-slide-up" style={{animationDelay: '0.2s'}}>
                <h3 className="text-3xl font-bold text-lime-yellow mb-4">
                  Engineered for Home & Business
                </h3>
                <p className="text-pale-yellow/80 leading-relaxed">
                  Stream, work, and play without compromise. Our advanced fiber network delivers rock-solid speeds across all your devices - from 4K smart TVs to sophisticated home security systems.
                </p>
              </div>
            </div>

            {/* Right - Dashboard with features */}
            <div className="relative animate-slide-in-right">
              <div className="relative bg-gradient-to-br from-lime-yellow to-pale-yellow rounded-[3rem] p-8 shadow-2xl hover:shadow-lime-yellow/30 transition-all duration-500">
                <img src={dashboardMockup} alt="Network dashboard" className="rounded-2xl shadow-xl mb-6" />
                
                {/* Feature list */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white/40 backdrop-blur-sm rounded-2xl p-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
                    <div className="w-10 h-10 bg-forest-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="text-lime-yellow" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-green text-lg">Instant Setup</h4>
                      <p className="text-forest-green/70 text-sm">Get connected in under 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/40 backdrop-blur-sm rounded-2xl p-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <div className="w-10 h-10 bg-forest-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="text-lime-yellow" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-green text-lg">Team Collaboration</h4>
                      <p className="text-forest-green/70 text-sm">Seamless video calls & file sharing</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/40 backdrop-blur-sm rounded-2xl p-4 animate-fade-in" style={{animationDelay: '0.5s'}}>
                    <div className="w-10 h-10 bg-forest-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="text-lime-yellow" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-green text-lg">Enterprise Security</h4>
                      <p className="text-forest-green/70 text-sm">Bank-level encryption included</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Layer Section */}
      <section className="bg-forest-green py-24 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-pale-yellow mb-6 tracking-tight">
            The foundation of
            <br />
            <span className="text-lime-yellow">your connected world</span>
          </h2>
          <p className="text-xl text-pale-yellow/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            We deliver enterprise-grade fiber-to-the-home connectivity that powers modern life. From smart home ecosystems to crystal-clear 4K streaming, competitive gaming, and seamless remote work - our next-generation infrastructure supports it all with exceptional speed and rock-solid reliability.
          </p>
          <a href="tel:888-460-8802">
            <Button className="bg-lime-yellow text-forest-green hover:bg-pale-yellow font-bold text-lg px-8 py-6">
              Call (888) 460-8802
            </Button>
          </a>
        </div>
      </section>

      {/* Stack Illustration Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-mid-green via-forest-green to-dark-green relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(196, 240, 65, 0.1) 35px, rgba(196, 240, 65, 0.1) 70px)`,
          }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              How It <span className="bg-gradient-to-r from-lime-yellow to-pale-yellow bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-pale-yellow/70 max-w-2xl mx-auto">
              Our advanced three-tier fiber network delivers hyper-fast internet directly to your doorstep
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Interactive Stack Layers */}
            <div className="relative">
              {/* Connection lines */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-soft-purple via-soft-blue to-soft-pink -translate-x-1/2 hidden lg:block"></div>

              {/* Layer 1 - Fiber Network */}
              <div className="relative mb-8 animate-slide-in-left">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-soft-purple/90 to-soft-purple/60 backdrop-blur-xl rounded-[3rem] p-10 shadow-2xl hover:shadow-soft-purple/30 transition-all duration-500 hover:scale-105 border border-white/10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center animate-pulse">
                        <TrendingUp className="text-soft-purple" size={32} />
                      </div>
                      <div>
                        <div className="text-xs text-white/60 uppercase tracking-wider font-bold mb-1">Layer 1</div>
                        <h3 className="text-3xl font-black text-white">Fiber Network</h3>
                      </div>
                    </div>
                    <p className="text-white/80 leading-relaxed text-lg">
                      Our cutting-edge infrastructure backbone transmitting data at light speed through premium fiber-optic cables.
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <div className="flex items-center gap-4 mb-4">
                      <Zap className="text-lime-yellow" size={24} />
                      <h4 className="text-xl font-bold text-white">Infrastructure</h4>
                    </div>
                    <p className="text-pale-yellow/70">Nationwide fiber backbone network with redundant connections</p>
                  </div>
                </div>
              </div>

              {/* Layer 2 - Local Nodes */}
              <div className="relative mb-8 animate-slide-in-right" style={{animationDelay: '0.2s'}}>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 lg:order-2">
                    <div className="flex items-center gap-4 mb-4">
                      <TrendingUp className="text-lime-yellow" size={24} />
                      <h4 className="text-xl font-bold text-white">Transmission</h4>
                    </div>
                    <p className="text-pale-yellow/70">High-speed data delivery through local distribution points</p>
                  </div>
                  <div className="bg-gradient-to-br from-soft-blue/90 to-soft-blue/60 backdrop-blur-xl rounded-[3rem] p-10 shadow-2xl hover:shadow-soft-blue/30 transition-all duration-500 hover:scale-105 border border-white/10 lg:order-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center animate-pulse" style={{animationDelay: '0.5s'}}>
                        <Users className="text-soft-blue" size={32} />
                      </div>
                      <div>
                        <div className="text-xs text-white/60 uppercase tracking-wider font-bold mb-1">Layer 2</div>
                        <h3 className="text-3xl font-black text-white">Local Nodes</h3>
                      </div>
                    </div>
                    <p className="text-white/80 leading-relaxed text-lg">
                      Strategically positioned distribution hubs in your neighborhood guaranteeing ultra-low latency and peak performance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Layer 3 - Home Router */}
              <div className="relative animate-slide-in-left" style={{animationDelay: '0.4s'}}>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-soft-pink/90 to-soft-pink/60 backdrop-blur-xl rounded-[3rem] p-10 shadow-2xl hover:shadow-soft-pink/30 transition-all duration-500 hover:scale-105 border border-white/10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center animate-pulse" style={{animationDelay: '1s'}}>
                        <Wifi className="text-soft-pink" size={32} />
                      </div>
                      <div>
                        <div className="text-xs text-white/60 uppercase tracking-wider font-bold mb-1">Layer 3</div>
                        <h3 className="text-3xl font-black text-white">Home Router</h3>
                      </div>
                    </div>
                    <p className="text-white/80 leading-relaxed text-lg">
                      Next-gen Wi-Fi 6 router providing flawless connectivity across all your devices simultaneously.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <Wifi className="text-lime-yellow" size={20} />
                        <h4 className="text-lg font-bold text-white">Wi-Fi 6 Technology</h4>
                      </div>
                      <p className="text-pale-yellow/70 text-sm">Latest generation wireless for all devices</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="text-lime-yellow" size={20} />
                        <h4 className="text-lg font-bold text-white">Secure Connection</h4>
                      </div>
                      <p className="text-pale-yellow/70 text-sm">Bank-level encryption and protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Stack Section */}
      <section className="py-24 px-6 bg-dark-green">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* First Stack */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-soft-blue flex items-center justify-center">
                    <Zap className="text-forest-green" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-pale-yellow">Infrastructure</h4>
                    <p className="text-pale-yellow/60">Fiber backbone network</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-soft-purple flex items-center justify-center">
                    <TrendingUp className="text-forest-green" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-pale-yellow">Transmission</h4>
                    <p className="text-pale-yellow/60">High-speed data delivery</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-soft-pink flex items-center justify-center">
                    <Wifi className="text-forest-green" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-pale-yellow">Router Layer</h4>
                    <p className="text-pale-yellow/60">Wi-Fi 6 technology</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Stack */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-lime-yellow flex items-center justify-center">
                    <Shield className="text-forest-green" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-pale-yellow">Security</h4>
                    <p className="text-pale-yellow/60">Protected connection</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-soft-blue flex items-center justify-center">
                    <Users className="text-forest-green" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-pale-yellow">Household Devices</h4>
                    <p className="text-pale-yellow/60">Multiple connections</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-soft-pink flex items-center justify-center">
                    <Clock className="text-forest-green" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-pale-yellow">24/7 Support</h4>
                    <p className="text-pale-yellow/60">Always available help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <section className="py-16 px-6 bg-pale-yellow">
        <div className="container mx-auto">
          <p className="text-center text-sm text-forest-green/60 mb-8 font-bold uppercase tracking-wider">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            <span className="text-2xl font-bold text-forest-green">TechCorp</span>
            <span className="text-2xl font-bold text-forest-green">SmartHome</span>
            <span className="text-2xl font-bold text-forest-green">CloudNet</span>
            <span className="text-2xl font-bold text-forest-green">StreamMax</span>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-forest-green via-dark-green to-forest-green relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(196, 240, 65, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(196, 240, 65, 0.15) 0%, transparent 50%)`,
          }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-lime-yellow/10 rounded-full px-6 py-3 mb-6">
              <span className="text-lime-yellow font-bold text-sm uppercase tracking-wider">Customer Success Story</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Real Results from <span className="bg-gradient-to-r from-lime-yellow to-pale-yellow bg-clip-text text-transparent">Real Customers</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main testimonial card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[4rem] p-12 md:p-16 border border-white/20 shadow-2xl animate-scale-in">
              <div className="max-w-4xl mx-auto space-y-10">
                {/* Large quote mark */}
                <div className="flex justify-center">
                  <svg className="w-20 h-20 text-lime-yellow/30" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z"/>
                  </svg>
                </div>

                {/* Main quote */}
                <blockquote className="space-y-6 text-center">
                  <p className="text-3xl md:text-4xl text-white font-bold leading-relaxed">
                    Hyper Speed Net revolutionized my home business. The blazing speed and unwavering reliability are simply unbeatable - I could never go back to anything less.
                  </p>
                  <p className="text-xl text-pale-yellow/80 leading-relaxed">
                    From high-definition video conferences to massive file transfers, everything operates flawlessly. The professional installation was quick and hassle-free, and their expert support team is always available when I need assistance. My productivity has skyrocketed by 40% since making the switch!
                  </p>
                </blockquote>

                {/* Customer info with rating */}
                <div className="flex flex-col items-center gap-6 pt-6">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} className="w-6 h-6 text-lime-yellow" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Customer details */}
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-white mb-2">Sarah Mitchell</h3>
                    <p className="text-pale-yellow/70 font-medium mb-2">Small Business Owner</p>
                    <div className="flex items-center justify-center gap-2 text-lime-yellow text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-black text-lime-yellow mb-1">1Gbps</div>
                    <div className="text-sm text-pale-yellow/60">Speed Boost</div>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <div className="text-3xl font-black text-lime-yellow mb-1">40%</div>
                    <div className="text-sm text-pale-yellow/60">More Productive</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-lime-yellow mb-1">2 Years</div>
                    <div className="text-sm text-pale-yellow/60">Loyal Customer</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center pt-6">
                  <a href="tel:888-460-8802">
                    <Button className="bg-lime-yellow text-forest-green hover:bg-pale-yellow font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl hover:shadow-lime-yellow/30 transition-all duration-300 hover:scale-105">
                      Get Started Like Sarah
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Additional mini testimonials */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-lime-yellow/30 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.1s'}}>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-lime-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-sm mb-4 leading-relaxed">&quot;Best internet service I&apos;ve ever had. Zero downtime!&quot;</p>
                <p className="text-pale-yellow/70 text-xs font-bold">- John D., Tech Startup</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-lime-yellow/30 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.2s'}}>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-lime-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-sm mb-4 leading-relaxed">&quot;Finally, internet that actually delivers on its promises!&quot;</p>
                <p className="text-pale-yellow/70 text-xs font-bold">- Maria L., Remote Worker</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-lime-yellow/30 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.3s'}}>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-lime-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-sm mb-4 leading-relaxed">&quot;Customer support is incredible. They solved my issue in minutes!&quot;</p>
                <p className="text-pale-yellow/70 text-xs font-bold">- David K., Home User</p>
              </div>
            </div>

            {/* Additional mini testimonials */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-lime-yellow/30 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.1s'}}>
                <div className="flex gap-1 mb-4">
                  <span className="text-lime-yellow text-lg">★★★★★</span>
                </div>
                <p className="text-white text-sm mb-4 leading-relaxed">&quot;Best internet service I&apos;ve ever had. Zero downtime!&quot;</p>
                <p className="text-pale-yellow/70 text-xs font-bold">- John D., Tech Startup</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-lime-yellow/30 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.2s'}}>
                <div className="flex gap-1 mb-4">
                  <span className="text-lime-yellow text-lg">★★★★★</span>
                </div>
                <p className="text-white text-sm mb-4 leading-relaxed">&quot;Finally, internet that actually delivers on its promises!&quot;</p>
                <p className="text-pale-yellow/70 text-xs font-bold">- Maria L., Remote Worker</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-lime-yellow/30 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.3s'}}>
                <div className="flex gap-1 mb-4">
                  <span className="text-lime-yellow text-lg">★★★★★</span>
                </div>
                <p className="text-white text-sm mb-4 leading-relaxed">&quot;Customer support is incredible. They solved my issue in minutes!&quot;</p>
                <p className="text-pale-yellow/70 text-xs font-bold">- David K., Home User</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-dark-green">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-6xl font-bold text-lime-yellow mb-4">99.9%</div>
              <p className="text-pale-yellow/80 text-lg">Uptime Guarantee</p>
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl font-bold text-lime-yellow mb-4">10K+</div>
              <p className="text-pale-yellow/80 text-lg">Happy Customers</p>
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="text-6xl font-bold text-lime-yellow mb-4">1Gbps</div>
              <p className="text-pale-yellow/80 text-lg">Max Speed</p>
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="text-6xl font-bold text-lime-yellow mb-4">24/7</div>
              <p className="text-pale-yellow/80 text-lg">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - NEW */}
      <section className="py-32 px-6 bg-gradient-to-br from-forest-green via-dark-green to-forest-green relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(196, 240, 65, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-lime-yellow to-pale-yellow bg-clip-text text-transparent">Hyper Speed Net</span>?
            </h2>
            <p className="text-xl text-pale-yellow/70 max-w-2xl mx-auto">
              Discover the difference with our cutting-edge fiber network technology
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Large featured card */}
            <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-lime-yellow to-pale-yellow rounded-[3rem] p-10 shadow-2xl hover:shadow-lime-yellow/30 transition-all duration-500 hover:scale-[1.02] animate-slide-up">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-20 h-20 bg-forest-green rounded-3xl flex items-center justify-center mb-6 animate-pulse">
                    <Zap className="text-lime-yellow" size={40} />
                  </div>
                  <h3 className="text-4xl font-black text-forest-green mb-6">Hyper-Speed Performance</h3>
                  <p className="text-forest-green/80 text-lg leading-relaxed mb-8">
                    Experience mind-blowing internet speeds up to 1Gbps. Stream stunning 4K content on multiple devices simultaneously, dominate online gaming with zero lag, and upload large files in mere seconds. Our advanced fiber-optic technology guarantees consistent peak speeds around the clock.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-forest-green/20 rounded-full overflow-hidden">
                    <div className="h-full bg-forest-green rounded-full animate-pulse" style={{width: '95%'}}></div>
                  </div>
                  <span className="text-2xl font-bold text-forest-green">1Gbps</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-lime-yellow/20 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="text-lime-yellow" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Military-Grade Security</h3>
              <p className="text-pale-yellow/70 leading-relaxed">
                Bank-level encryption and cutting-edge threat protection safeguard your data 24/7.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-lime-yellow/20 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="text-lime-yellow" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-pale-yellow/70 leading-relaxed">
                Our expert team is always available to assist you anytime, anywhere.
              </p>
            </div>

            {/* Card 4 - Wide */}
            <div className="lg:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-lime-yellow/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Wifi className="text-lime-yellow" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Next-Gen Wi-Fi 6 Technology</h3>
                  <p className="text-pale-yellow/70 leading-relaxed">
                    Premium latest-generation routers included with every plan. Connect unlimited devices with lightning-fast speeds and superior coverage blanketing your entire home or office.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-lime-yellow/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-lime-yellow" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Easy Setup</h3>
              <p className="text-pale-yellow/70 leading-relaxed">
                Professional installation in 24 hours or less. We handle everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Section */}
      <section className="py-24 px-6 bg-mid-green">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-pale-yellow mb-6 tracking-tight">
              Beyond traditional connectivity
              <br />
              <span className="text-lime-yellow">to a superior experience</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-lime-yellow/10 backdrop-blur-sm border-2 border-lime-yellow/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-lime-yellow mb-4">Intelligent Wi-Fi Management</h3>
              <p className="text-pale-yellow/70 leading-relaxed">
                Control your entire network from your smartphone. Prioritize devices, configure advanced parental controls, and monitor real-time usage with our intuitive app.
              </p>
            </div>
            <div className="bg-lime-yellow/10 backdrop-blur-sm border-2 border-lime-yellow/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-lime-yellow mb-4">Premium Streaming Experience</h3>
              <p className="text-pale-yellow/70 leading-relaxed">
                Dedicated bandwidth engineered for flawless 4K and 8K streaming on multiple devices. Zero throttling, zero buffering - just crystal-clear entertainment.
              </p>
            </div>
            <div className="bg-lime-yellow/10 backdrop-blur-sm border-2 border-lime-yellow/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-lime-yellow mb-4">Proactive Security Shield</h3>
              <p className="text-pale-yellow/70 leading-relaxed">
                Built-in multi-layer protection against cyber threats, automatic firmware updates, and military-grade encrypted connections for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large CTA Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-lime-yellow via-pale-yellow to-lime-yellow overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-forest-green/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-forest-green/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div className="space-y-8 animate-slide-in-left">
                <div className="inline-flex items-center gap-2 bg-forest-green/10 rounded-full px-6 py-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full animate-ping"></div>
                  <span className="text-forest-green font-bold text-sm">Limited Time Offer</span>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-forest-green leading-tight">
                  Ready to Experience
                  <span className="block mt-2">Hyper Speed?</span>
                </h2>

                <p className="text-xl text-forest-green/70 leading-relaxed">
                  Join thousands of thrilled customers enjoying blazing-fast fiber internet. Get connected and experience the difference in 24 hours or less.
                </p>

                {/* Stats mini */}
                <div className="grid grid-cols-3 gap-4 py-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-forest-green mb-1">1000</div>
                    <div className="text-sm text-forest-green/60">Mbps Speed</div>
                  </div>
                  <div className="text-center border-x border-forest-green/20">
                    <div className="text-3xl font-black text-forest-green mb-1">24hr</div>
                    <div className="text-sm text-forest-green/60">Setup Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-forest-green mb-1">$0</div>
                    <div className="text-sm text-forest-green/60">Installation</div>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4">
                  <a href="tel:888-460-8802">
                    <Button className="group bg-forest-green text-lime-yellow hover:bg-dark-green font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl hover:shadow-forest-green/30 transition-all duration-300 hover:scale-105">
                      Call Now: (888) 460-8802
                      <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </Button>
                  </a>
                  <Link to="/pricing">
                    <Button variant="outline" className="border-3 border-forest-green text-forest-green hover:bg-forest-green hover:text-lime-yellow font-bold text-lg px-10 py-7 rounded-2xl transition-all duration-300">
                      View Plans
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right visual */}
              <div className="relative animate-slide-in-right">
                {/* Large circular badge */}
                <div className="relative">
                  <div className="absolute inset-0 bg-forest-green/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative bg-white rounded-full p-16 shadow-2xl">
                    <div className="text-center">
                      <div className="text-8xl font-black text-forest-green mb-4 animate-bounce-subtle">1GB</div>
                      <div className="text-2xl font-bold text-forest-green/70 mb-8">Fiber Speed</div>
                      
                      {/* Feature icons */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center gap-2 bg-lime-yellow/20 rounded-2xl p-4">
                          <Zap className="text-forest-green" size={32} />
                          <span className="text-sm font-bold text-forest-green">Lightning Fast</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-lime-yellow/20 rounded-2xl p-4">
                          <Shield className="text-forest-green" size={32} />
                          <span className="text-sm font-bold text-forest-green">Secure</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-lime-yellow/20 rounded-2xl p-4">
                          <Wifi className="text-forest-green" size={32} />
                          <span className="text-sm font-bold text-forest-green">Wi-Fi 6</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-lime-yellow/20 rounded-2xl p-4">
                          <Clock className="text-forest-green" size={32} />
                          <span className="text-sm font-bold text-forest-green">24/7 Support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-forest-green text-lime-yellow rounded-2xl px-6 py-4 shadow-xl animate-float">
                  <div className="text-sm font-bold">Free Installation</div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-forest-green text-lime-yellow rounded-2xl px-6 py-4 shadow-xl animate-float" style={{animationDelay: '0.5s'}}>
                  <div className="text-sm font-bold">No Contracts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
