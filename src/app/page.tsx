import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Kuttush Tech Hub</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/reviews" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Reviews</Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Find Your Perfect <span className="text-blue-600 dark:text-blue-400">Fitness Watch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the latest in fitness technology with honest reviews and expert recommendations. 
            Currently featuring the most popular smartwatch with Alexa integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/reviews/smartwatch"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Read Smartwatch Review
            </a>
            <a
              href="https://amzn.to/4orr7Ds"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Buy on Amazon
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Featured Product</h3>
          <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
            {/* Smart Watch - Only Product */}
            <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6 hover:shadow-xl transition-shadow border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs font-semibold">
                  FEATURED
                </span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs font-semibold">
                  Amazon&apos;s Choice
                </span>
              </div>
              <div className="aspect-video bg-gray-100 dark:bg-gray-600 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://m.media-amazon.com/images/I/61AP4d1AUgL._AC_SX466_.jpg"
                  alt="Smart Watch with Alexa Built-In"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Smart Watch with Alexa Built-In</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Comprehensive review of this feature-packed smartwatch with Alexa, Bluetooth calls, and 120+ sports modes.</p>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  <span className="text-lg">★★★★☆</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">4.5/5 (2,847 reviews)</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="/reviews/smartwatch" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 text-sm">
                  Read Review →
                </a>
                <a href="https://amzn.to/4orr7Ds" target="_blank" rel="noopener noreferrer sponsored" className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded transition-colors">
                  Buy on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Focus Category</h3>
          <div className="flex justify-center">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer border-2 border-blue-200 dark:border-blue-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 text-2xl">⌚</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fitness Wearables</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Smart watches, fitness trackers, and health monitoring devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Kuttush Tech Hub</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We are passionate tech enthusiasts dedicated to helping you make informed decisions about your next gadget purchase. 
            Our team tests and reviews the latest technology products to provide you with honest, detailed insights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Honest Reviews</h4>
              <p className="text-gray-600 dark:text-gray-300">Unbiased opinions based on thorough testing and real-world usage.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Detailed Analysis</h4>
              <p className="text-gray-600 dark:text-gray-300">In-depth comparisons to help you choose the right product.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expert Insights</h4>
              <p className="text-gray-600 dark:text-gray-300">Professional recommendations from tech industry experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="text-xl font-bold mb-4">Kuttush Tech Hub</h5>
              <p className="text-gray-400">Your trusted source for tech reviews and recommendations.</p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Categories</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Smartphones</a></li>
                <li><a href="#" className="hover:text-white">Laptops</a></li>
                <li><a href="#" className="hover:text-white">Gaming</a></li>
                <li><a href="#" className="hover:text-white">Smart Home</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Resources</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Buying Guides</a></li>
                <li><a href="#" className="hover:text-white">Comparisons</a></li>
                <li><a href="#" className="hover:text-white">Best Deals</a></li>
                <li><a href="#" className="hover:text-white">Tech News</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Connect</h6>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><a href="#" className="hover:text-white">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Kuttush Tech Hub. All rights reserved.</p>
            <p className="mt-2 text-sm">
              As an Amazon Associate, we earn from qualifying purchases. Product prices and availability are accurate as of the date/time indicated and are subject to change.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
