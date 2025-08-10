import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            <strong>Effective Date:</strong> August 9, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We collect information you provide directly to us, such as when you contact us through our website. 
              We also automatically collect certain information about your device when you use our website, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Log information (IP address, browser type, operating system)</li>
              <li>Usage information (pages viewed, time spent on site)</li>
              <li>Device information (device type, operating system version)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Provide, maintain, and improve our website</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze how our website is used</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Affiliate Links and Advertising</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              TechGadget Hub is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program 
              designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. 
              We may earn commission from qualifying purchases made through our affiliate links.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Cookies and Tracking</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use cookies and similar tracking technologies to collect and use personal information about you. 
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set 
              or access cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our website may contain links to other websites and online services. We are not responsible for the 
              privacy practices of these third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Security</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We take reasonable measures to protect your personal information from loss, theft, misuse, 
              and unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at: privacy@techgadgethub.com
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
