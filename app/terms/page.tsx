import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Newton IPTV Terms of Service — read our terms before using the IPTV subscription service.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using the Newton IPTV service, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service. We reserve the right to modify these terms at any time, and your continued use of the service constitutes acceptance of any changes.`,
  },
  {
    title: "2. Service Description",
    body: `Newton IPTV provides an IPTV streaming service delivering live television channels, video-on-demand content, and related services. Access is granted via credentials (M3U URL or Xtream Codes) delivered to your registered email address following successful payment or free-trial activation.`,
  },
  {
    title: "3. Acceptable Use",
    body: `You agree to use the service for personal, non-commercial purposes only. You must not share, resell, redistribute, or sub-license your credentials. Each subscription is for a single household. Any misuse — including sharing credentials outside your household, reverse-engineering the service, or using automated tools to access content — may result in immediate account termination without refund.`,
  },
  {
    title: "4. Free Trial",
    body: `We offer a 24-hour free trial for new users. The trial provides full access to all channels and features. The trial is limited to one per person or household. Following the trial period, service will pause automatically — no charge is applied and no credit card is required to access the trial.`,
  },
  {
    title: "5. Payment & Billing",
    body: `All prices are displayed in GBP and include VAT where applicable. Payment is due at the time of purchase. Subscriptions are non-recurring unless you choose to renew. We accept major credit and debit cards and other payment methods as displayed at checkout.`,
  },
  {
    title: "6. Content & Intellectual Property",
    body: `All content streamed through Newton IPTV is the intellectual property of the respective rights holders. Newton IPTV operates as a technology platform and does not claim ownership of broadcast content. Users are responsible for ensuring their use complies with all applicable laws in their jurisdiction.`,
  },
  {
    title: "7. Service Availability",
    body: `We aim for 99.9% uptime but do not guarantee uninterrupted access. Scheduled maintenance, force majeure events, or third-party infrastructure issues may temporarily affect service availability. Newton IPTV will not be liable for any loss arising from service interruptions.`,
  },
  {
    title: "8. Account Termination",
    body: `We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or are used in ways that damage the service or other users. Termination for cause does not entitle the user to a refund.`,
  },
  {
    title: "9. Limitation of Liability",
    body: `To the maximum extent permitted by law, Newton IPTV shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service. Our total liability to you for any claim shall not exceed the amount you paid for the relevant subscription period.`,
  },
  {
    title: "10. Governing Law",
    body: `These Terms of Service are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
];

export default function TermsPage() {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-3">Terms of Service</h1>
          <p className="text-brand-gray text-sm">Last updated: 1 January 2025</p>
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
            If you have questions about these terms, contact us at{" "}
            <a href="mailto:support@newtoniptv.co.uk" className="text-brand-red hover:underline">
              support@newtoniptv.co.uk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
