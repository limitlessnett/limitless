const Terms = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-forest-green pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-pale-yellow mb-4 tracking-tighter">
            Terms & Conditions
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
                <h2 className="text-3xl font-bold text-forest-green mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using FastFiber services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Service Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  FastFiber provides high-speed internet, cable television, and related telecommunications services. Service availability, speeds, and features may vary by location and plan.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Billing and Payment</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Monthly service fees are billed in advance on your billing date</li>
                  <li>Payment is due upon receipt of invoice</li>
                  <li>Late payments may result in service interruption</li>
                  <li>All prices are subject to applicable taxes and fees</li>
                  <li>Price changes will be communicated 30 days in advance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Acceptable Use Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to use our services to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Distribute malware or engage in hacking</li>
                  <li>Send spam or unsolicited communications</li>
                  <li>Interfere with network operations or other users</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Service Guarantee</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to provide 99.9% network uptime. Scheduled maintenance and force majeure events are excluded. Service credits may be available for qualifying outages.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Equipment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Equipment provided by FastFiber remains our property and must be returned upon service termination. You are responsible for any damage to or loss of equipment while in your possession.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate service with 30 days notice. We reserve the right to immediately suspend or terminate service for violation of these terms or non-payment.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  FastFiber shall not be liable for indirect, incidental, special, or consequential damages arising from use or inability to use our services. Our total liability is limited to the amount paid for services in the preceding three months.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms and Conditions, please contact us at legal@fastfiber.com or call 1-800-FASTFIBER.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
