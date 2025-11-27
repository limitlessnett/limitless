const Privacy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-forest-green pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-pale-yellow mb-4 tracking-tighter">
            Privacy Policy
          </h1>
          <p className="text-xl text-pale-yellow/70">Last updated: November 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Hyper Speed Net, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Name, email address, phone number, and postal address</li>
                  <li>Payment and billing information</li>
                  <li>Service usage data and network activity</li>
                  <li>Customer support communications</li>
                  <li>Device information and technical data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process payments and send billing statements</li>
                  <li>Respond to customer support requests</li>
                  <li>Monitor and analyze network usage and performance</li>
                  <li>Send important service updates and notifications</li>
                  <li>Detect and prevent fraud and abuse</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal information. We may share your information with service providers who help us operate our business, law enforcement when required by law, or with your consent for specific purposes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to your data</li>
                  <li>Request deletion of your data (subject to legal obligations)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at privacy@hyperspeednet.com or call (888) 460-8802.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
