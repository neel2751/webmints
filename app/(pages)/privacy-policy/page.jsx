// pages/privacy-policy.tsx

import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Webmints</title>
        <meta
          name="description"
          content="Our commitment to protecting your data and privacy."
        />
      </Head>
      <main id="content">
        <div className="lg:max-w-5xl text-center px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 pb-5 mx-auto">
          <h1 className="mb-2 text-2xl font-bold md:text-4xl dark:text-white font-grotesk">
            Privacy Policy
          </h1>
          <p className="text-gray-700 dark:text-neutral-400">
            Last updated: July, 2025
          </p>
        </div>

        <div className="lg:max-w-5xl px-4 sm:px-6 lg:px-8 pb-12 md:pt-6 sm:pb-20 mx-auto space-y-8">
          <div className="grid gap-4 md:gap-8">
            <div>
              <p className="mb-8 dark:text-neutral-400 text-xl font-grotesk font-medium tracking-tight">
                Webmints ("Company", "we", "our", or "us") is committed to
                protecting the privacy of our clients and users. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website and use our custom
                SaaS products and related services.
              </p>

              {/* 1 */}
              <h2 className="text-xl font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                1. Information We Collect
              </h2>
              <p className="mb-4 dark:text-neutral-400 font-medium tracking-tight">
                At Webmints, your privacy is our priority. We do not share,
                sell, or rent your personal information to third parties. All
                data stored via our services is owned by you or your business
                and can be transferred or deleted upon request, though this may
                limit access to certain content.
              </p>
              <p className="mb-3 font-grotesk tracking-tight">
                We may collect the following types of information:
              </p>
              <h3 className="text-lg font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                a. Personal Information
              </h3>
              <ul className="list-disc ml-5 space-y-2 font-medium tracking-tight mb-3">
                <li>Account and portal data (name, email, usage)</li>
                <li>Billing information (via Stripe)</li>
                <li>
                  Website analytics and advertising data (via Google Analytics,
                  Ads, Tag Manager)
                </li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                b. Technical Information
              </h3>
              <ul className="list-disc ml-5 space-y-2 font-medium tracking-tight mb-3">
                <li>IP address, browser type, device identifiers</li>
                <li>Usage data, analytics, and logs</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                c. User Data
              </h3>
              <ul className="list-disc ml-5 space-y-2 font-medium tracking-tight mb-8">
                <li>
                  Any data uploaded by you or generated during your use of our
                  SaaS products, including but not limited to text entries,
                  files, communications, and configurations.
                </li>
              </ul>

              {/* 2 */}
              <h2 className="text-xl font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                2. How We Use Your Information
              </h2>
              <p className="mb-3 font-grotesk tracking-tight">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc ml-5 space-y-2 font-medium tracking-tight mb-8">
                <li>To provide and improve the portal and Services</li>
                <li>
                  To manage your account, subscriptions, and support requests
                </li>
                <li>To send invoices, payment reminders, and system alerts</li>
                <li>
                  To track analytics and advertising effectiveness (on
                  ourwebsite only)
                </li>
                <li>To comply with legal obligations</li>
              </ul>

              {/* 3 */}
              <h2 className="text-xl font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                3. How We Share Information
              </h2>
              <p className="mb-3 font-grotesk tracking-tight">
                We do not sell your personal information. We may share your data
                in the following limited cases:
              </p>
              <ul className="list-disc ml-5 space-y-2 font-medium tracking-tight mb-8">
                <li>
                  Service providers (e.g., Stripe for payments, analytics
                  providers)
                </li>
                <li>Law enforcement if required by legal order</li>
                <li>In a company merger or acquisition</li>
              </ul>

              {/* 4 */}
              <h2 className="text-xl font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                4. Data Retention
              </h2>
              <p className="mb-8 dark:text-neutral-400 font-medium tracking-tight">
                We retain your data only for as long as necessary to fulfill the
                purposes outlined in this Privacy Policy or to comply with legal
                obligations.
              </p>

              {/* 5 */}
              <h2 className="text-xl font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                5. Data Security
              </h2>
              <p className="mb-8 dark:text-neutral-400 font-medium tracking-tight">
                We use industry-standard encryption and security practices to
                protect your data. Sensitive payment data is handled by Stripe
                and never stored on our servers.
              </p>

              {/* 6 */}
              <h2 className="text-xl font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                6. Legal Compliance and General Use
              </h2>
              <p className="mb-8 dark:text-neutral-400 font-medium tracking-tight">
                Webmints may release personal information if required by law,
                such as in response to a court order or fraud investigation. We
                also use aggregated, non-identifiable user data for general
                analytical purposes.
              </p>

              {/* 7 */}
              <h2 className="text-xl font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                7. User Rights
              </h2>
              <p className="mb-3 font-grotesk tracking-tight">
                Depending on your location, you have rights to:
              </p>
              <ul className="list-disc ml-5 space-y-2 font-medium tracking-tight mb-4">
                <li>Access, update, or delete your data</li>
                <li>Object to or restrict processing</li>
                <li>Withdraw consent (for analytics/ads)</li>
                <li>Data portability (request your data)</li>
              </ul>
              <p className="mb-8 font-grotesk tracking-tight">
                To exercise these rights, email us at{" "}
                <span className="font-medium text-indigo-600">
                  rights@webmints.com
                </span>
                .
              </p>

              {/* 8 */}
              <h2 className="text-xl font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                8. International Data Transfers
              </h2>
              <p className="mb-8 dark:text-neutral-400 font-medium tracking-tight">
                We may store and process your data in jurisdictions outside your
                country. Our primary servers are located in the EU (LONDON).
              </p>

              {/* 9 */}
              <h2 className="text-xl font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                9. Children's Privacy
              </h2>
              <p className="mb-8 dark:text-neutral-400 font-medium tracking-tight">
                Our Services are intended for business users and are not
                directed to individuals under 13. Webmints is intended for use
                by individuals who have reached the legal age in their
                jurisdiction and reside in regions where such use is
                permissible. We do not knowingly collect data from individuals
                under the legal age.
              </p>

              {/* 10 */}
              <h2 className="text-xl font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                10. Changes to This Policy
              </h2>
              <p className="mb-8 dark:text-neutral-400 font-medium tracking-tight">
                We may update this policy periodically. Significant changes will
                be communicated via email or within the portal.
              </p>

              {/* 11 */}
              <h2 className="text-xl font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                11. Contact Us
              </h2>
              <p className="mb-4 dark:text-neutral-400 font-medium tracking-tight">
                For questions about this Privacy Policy or our privacy
                practices, contact us via live chat on our website
              </p>
              <p className="mb-3 font-grotesk tracking-tight">
                If you have any questions about this policy:
              </p>
              <ul className="list-disc ml-5 space-y-2 font-medium tracking-tight mb-8">
                <li>Webmints</li>
                <li>info@webmints.com</li>
              </ul>

              {/* 12 */}
              <h2 className="text-xl font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                12. Agreement
              </h2>
              <p className="mb-8 dark:text-neutral-400 font-medium tracking-tight">
                By using Preline products and services, you acknowledge your
                understanding and agreement to this Privacy Policy.
              </p>

              {/* 13 */}
              <h2 className="text-xl font-semibold mb-2 dark:text-white font-grotesk tracking-tight">
                13. Privacy Changes
              </h2>
              <p className="mb-8 dark:text-neutral-400 font-medium tracking-tight">
                If we change our privacy policy we will post those changes on
                this page. Registered users will be sent an email that outlines
                changes made to the privacy policy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
