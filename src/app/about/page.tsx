import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-bold text-gray-900 dark:text-white">Kuttush Tech Hub</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Reviews</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Categories</a>
              <Link href="/about" className="text-blue-600 dark:text-blue-400 font-semibold">About</Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Kuttush Tech Hub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your trusted guide for fitness wearable technology. 
            We&apos;re passionate about helping you find the perfect smartwatch or fitness tracker for your active lifestyle.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Honest Reviews</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We provide unbiased, thorough reviews of fitness wearables based on extensive testing and real-world usage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Deep Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our detailed comparisons help you understand which fitness features and health tracking capabilities matter most.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Expert Guidance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get professional recommendations for fitness wearables tailored to your health goals and activity level.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Founded in 2025, Kuttush Tech Hub began as a passion project by technology enthusiasts who were 
                frustrated with superficial product reviews and biased recommendations flooding the internet.
              </p>
              <p>
                We recognized the need for a platform that prioritizes transparency, thorough testing, and 
                genuine user benefit over marketing hype. Our team combines years of experience in technology, 
                engineering, and digital content creation.
              </p>
              <p>
                Today, we&apos;re proud to serve thousands of readers who trust our insights to make better 
                technology purchasing decisions.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">What Sets Us Apart</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">Independent testing methodology</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">Real-world usage scenarios</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">Transparent affiliate relationships</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">Regular content updates</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                </div>
                <span className="text-gray-600 dark:text-gray-300">Community-driven recommendations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">🔒 Transparency</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We clearly disclose our affiliate relationships and funding sources. Our editorial independence 
                is never compromised by commercial interests.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">⚡ Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We stay ahead of technology trends and constantly improve our testing methodologies to 
                provide the most relevant and accurate information.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">🤝 Community</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We value our readers&apos; feedback and actively engage with our community to understand 
                their needs and preferences.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">🎯 Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every piece of content undergoes rigorous fact-checking and review before publication 
                to ensure accuracy and usefulness.
              </p>
            </div>
          </div>
        </div>

        {/* Disclosure Section */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">🔍 Affiliate Disclosure</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Kuttush Tech Hub is a participant in the Amazon Services LLC Associates Program and other affiliate 
            programs. This means we may earn small commissions from qualifying purchases made through our links, 
            at no additional cost to you.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            These affiliate relationships help support our website and allow us to continue providing free, 
            high-quality content. However, they never influence our editorial decisions or the products we 
            choose to review. Our recommendations are always based on merit and user value.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of tech enthusiasts who trust our reviews and recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Browse Reviews
            </Link>
            <Link
              href="/contact"
              className="bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white font-semibold py-4 px-8 rounded-lg text-lg border border-gray-300 dark:border-gray-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
