const Refund = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-forest-green pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-pale-yellow mb-4 tracking-tighter">
            Refund Policy
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
                <h2 className="text-3xl font-bold text-forest-green mb-4">30-Day Money-Back Guarantee</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We stand behind the quality of our service. If you're not completely satisfied with FastFiber within the first 30 days of service, we'll refund your monthly service fee—no questions asked.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">What's Covered</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our 30-day money-back guarantee includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Full refund of first month's service fee</li>
                  <li>Refund of installation charges (if applicable)</li>
                  <li>No early termination fees</li>
                  <li>Free equipment return shipping</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">What's Not Covered</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The following are not eligible for refund:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Third-party services or add-ons</li>
                  <li>Premium channel subscriptions</li>
                  <li>Pay-per-view or on-demand purchases</li>
                  <li>Equipment damage fees</li>
                  <li>Services beyond the first 30 days</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">How to Request a Refund</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To request a refund under our 30-day guarantee:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                  <li>Contact our customer service at 1-800-FASTFIBER or support@fastfiber.com</li>
                  <li>Provide your account number and reason for cancellation</li>
                  <li>Return all equipment within 14 days of cancellation</li>
                  <li>Refund will be processed to your original payment method within 7-10 business days</li>
                </ol>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Service Credits</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In cases of extended service outages (beyond 24 hours), we may issue service credits to your account. Credits are calculated on a pro-rata basis for the time service was unavailable.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Cancellation After 30 Days</h2>
                <p className="text-muted-foreground leading-relaxed">
                  After the 30-day guarantee period, you can cancel service at any time with 30 days notice. No refunds will be provided for partial months, but you can use the service until the end of your billing cycle.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Billing Disputes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you believe you've been incorrectly charged, please contact our billing department within 60 days of the charge. We'll investigate and issue appropriate credits or refunds if an error occurred.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Equipment Return</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All FastFiber-provided equipment must be returned within 14 days of service cancellation. Failure to return equipment will result in charges to your account equal to the replacement value of the equipment.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-4">Questions?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about our refund policy, please contact our customer service team at support@fastfiber.com or call 1-800-FASTFIBER.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refund;
