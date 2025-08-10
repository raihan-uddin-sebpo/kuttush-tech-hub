import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            <strong>Effective Date:</strong> August 9, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By accessing and using TechGadget Hub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Use License</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Permission is granted to temporarily download one copy of the materials on TechGadget Hub&apos;s website 
              for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Under this license you may not:</p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Remove any copyright or other proprietary notations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Affiliate Disclaimer</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              TechGadget Hub participates in affiliate marketing programs, including the Amazon Associates Program. 
              This means we may earn commissions from qualifying purchases made through links on our site. 
              These affiliate relationships do not influence our editorial content or product recommendations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Product Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We strive to provide accurate product information and reviews. However, product specifications, 
              prices, and availability may change without notice. We recommend verifying product details 
              directly with manufacturers or retailers before making purchases.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Disclaimer</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The materials on TechGadget Hub&apos;s website are provided on an &apos;as is&apos; basis. TechGadget Hub makes 
              no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, 
              without limitation, implied warranties or conditions of merchantability, fitness for a particular 
              purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Limitations</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              In no event shall TechGadget Hub or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising out of 
              the use or inability to use the materials on TechGadget Hub&apos;s website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Governing Law</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of the 
              jurisdiction in which TechGadget Hub operates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We reserve the right to revise these terms of service at any time without notice. 
              By using this website, you are agreeing to be bound by the then current version of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about these Terms of Service, please contact us at: legal@techgadgethub.com
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
