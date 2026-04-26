import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Newton IPTV Privacy Policy — how we collect, use, and protect your personal data.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Who We Are",
    body: `Newton IPTV operates the website newtoniptv.co.uk and the related IPTV streaming service. When we refer to "we", "us", or "our", we mean Newton IPTV. For data protection purposes, Newton IPTV is the data controller responsible for your personal information.`,
  },
  {
    title: "2. What Data We Collect",
    body: `We collect the following information when you register or purchase a subscription: your name, email address, selected device type, and payment information (processed securely by our payment provider — we do not store card details). We also collect standard server logs including IP address, browser type, and pages visited for security and analytics purposes.`,
  },
  {
    title: "3. How We Use Your Data",
    body: `Your data is used to: deliver your IPTV credentials and service, communicate service updates or support responses, process payments, prevent fraud, and improve the service. We do not sell, rent, or share your personal data with third parties for marketing purposes.`,
  },
  {
    title: "4. Legal Basis for Processing",
    body: `We process your data on the following legal bases: performance of a contract (to deliver the service you purchased), legitimate interests (to prevent fraud and maintain security), and compliance with legal obligations. Where we send marketing communications, we do so with your consent.`,
  },
  {
    title: "5. Data Retention",
    body: `We retain your account data for as long as your subscription is active and for up to 2 years thereafter for legal and financial record-keeping purposes. Server logs are retained for 90 days. You may request deletion of your data at any time by contacting us.`,
  },
  {
    title: "6. Cookies",
    body: `We use essential cookies to maintain your session and preferences. We may use analytics cookies (e.g., via Google Analytics) to understand how visitors use our site. You can control cookies via your browser settings. Blocking essential cookies may affect site functionality.`,
  },
  {
    title: "7. Your Rights",
    body: `Under UK GDPR, you have the right to: access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, object to or restrict certain processing, and data portability. To exercise any of these rights, contact us at privacy@newtoniptv.co.uk. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO).`,
  },
  {
    title: "8. Third-Party Services",
    body: `We use trusted third-party services to operate the platform, including payment processors and hosting providers. These providers process data only as instructed by us and are bound by data processing agreements. We do not transfer your data outside of the UK/EEA unless appropriate safeguards are in place.`,
  },
  {
    title: "9. Security",
    body: `We implement industry-standard technical and organisational measures to protect your data, including encrypted data transmission (HTTPS), secure credential storage, and access controls. However, no system is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "10. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. We will notify you of material changes via email or a prominent notice on our website. Continued use of the service after changes constitutes acceptance of the updated policy.`,
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-3">Privacy Policy</h1>
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
            Data protection enquiries:{" "}
            <a href="mailto:privacy@newtoniptv.co.uk" className="text-brand-red hover:underline">
              privacy@newtoniptv.co.uk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
