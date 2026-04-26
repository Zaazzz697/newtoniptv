import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Newton IPTV Refund Policy — understand your rights and how to request a refund.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "Our Commitment",
    body: `At Newton IPTV, we stand behind the quality of our service. We offer a 24-hour free trial specifically so you can verify our service meets your needs before making any payment. We encourage all customers to use the free trial before purchasing.`,
  },
  {
    title: "Free Trial First",
    body: `We strongly recommend taking advantage of our 24-hour free trial before purchasing a subscription. The trial gives you full access to all channels, VOD content, and features — identical to a paid subscription. No credit card is required for the trial.`,
  },
  {
    title: "Refund Eligibility",
    body: `We offer refunds in the following circumstances: (1) You experienced significant service downtime (over 24 consecutive hours) during your subscription period and notified us within 48 hours. (2) You were charged in error due to a technical fault on our platform. (3) You were unable to set up the service despite following our setup guide and contacting support within 48 hours of purchase. Refund requests must be submitted within 7 days of purchase.`,
  },
  {
    title: "Non-Refundable Circumstances",
    body: `Refunds will not be issued if: you simply changed your mind after purchasing, you experienced issues due to your own internet connection or device compatibility (we recommend testing with the free trial first), your account was terminated due to a breach of our Terms of Service, or more than 7 days have passed since your purchase date.`,
  },
  {
    title: "How to Request a Refund",
    body: `To request a refund, email us at support@newtoniptv.co.uk with your order reference number, the email address used to purchase, a description of the issue, and any screenshots or evidence of the problem. We will respond within 24 hours on business days.`,
  },
  {
    title: "Refund Processing",
    body: `Approved refunds are processed to the original payment method within 5–10 business days, depending on your bank or card provider. We will notify you by email once the refund has been issued.`,
  },
  {
    title: "Consumer Rights",
    body: `Nothing in this policy affects your statutory rights as a consumer under UK law, including the Consumer Contracts Regulations 2013 and the Consumer Rights Act 2015. If you believe you have a statutory right to a refund not covered above, please contact us to discuss.`,
  },
];

export default function RefundPage() {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-3">Refund Policy</h1>
          <p className="text-brand-gray text-sm">Last updated: 1 January 2025</p>
        </div>

        {/* Highlight box */}
        <div className="bg-brand-red/5 border border-brand-red/20 rounded-2xl p-6 mb-10">
          <p className="text-brand-dark font-semibold text-sm mb-1">Try before you buy</p>
          <p className="text-brand-gray text-sm leading-6">
            We offer a free 24-hour trial with no credit card required. This is the best way to confirm our service
            works perfectly on your device before committing to a subscription.
          </p>
          <Link
            href="/free-trial"
            className="inline-block mt-4 bg-brand-red hover:bg-brand-red-hover text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
          >
            Start Free Trial
          </Link>
        </div>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-brand-dark mb-3">{s.title}</h2>
              <p className="text-brand-gray text-sm leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-brand-border">
          <p className="text-brand-gray/60 text-xs">
            Refund requests:{" "}
            <a href="mailto:support@newtoniptv.co.uk" className="text-brand-red hover:underline">
              support@newtoniptv.co.uk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
