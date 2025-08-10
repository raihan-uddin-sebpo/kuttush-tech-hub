import Link from "next/link";
import { affiliateProducts } from "@/config/products";

export default function Reviews() {
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
              <Link href="/reviews" className="text-blue-600 dark:text-blue-400 font-semibold">Reviews</Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Fitness Wearable Reviews
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Honest, in-depth reviews of the latest fitness wearables to help you make informed purchasing decisions.
          </p>
        </div>

        {/* Featured Review - Smart Watch */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
          <div className="flex items-center mb-6">
            <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm font-semibold">
              Featured Review
            </span>
            <span className="ml-3 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
              Amazon&apos;s Choice
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://m.media-amazon.com/images/I/61AP4d1AUgL._AC_SX466_.jpg"
                alt="Smart Watch with Alexa Built-In"
                className="w-full aspect-square object-contain bg-gray-50 dark:bg-gray-100 rounded-xl shadow-md"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Smart Watch with Alexa Built-In - Complete Review
              </h2>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {'★★★★★'.split('').map((star, index) => (
                    <span key={index} className="text-xl">{index < 4 ? '★' : '☆'}</span>
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-300">4.5/5 Rating (2,847 reviews)</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                Our in-depth review of this feature-packed smartwatch with built-in Alexa, Bluetooth calling, 
                120+ sports modes, and comprehensive health monitoring. We tested it for 30 days to bring you 
                honest insights on performance, battery life, and real-world usability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/reviews/smartwatch"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Read Full Review
                </a>
                <a
                  href="https://amzn.to/4orr7Ds"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  🛒 View on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Review - HD Smart Watch */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
          <div className="flex items-center mb-6">
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
              Latest Review
            </span>
            <span className="ml-3 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-semibold">
              Premium Display
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://m.media-amazon.com/images/I/71tnnELX24L._AC_SX466_.jpg"
                alt="Smart Watch 1.91 HD - Call & Fitness Tracker"
                className="w-full aspect-square object-contain bg-gray-50 dark:bg-gray-100 rounded-xl shadow-md"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Smart Watch 1.91&quot; HD - Premium Display Review
              </h2>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {'★★★★★'.split('').map((star, index) => (
                    <span key={index} className="text-xl">{index < 5 ? '★' : '☆'}</span>
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-300">4.6/5 Rating (1,234 reviews)</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                Comprehensive review of the premium 1.91&quot; HD smartwatch featuring Bluetooth 5.3 calling, 
                110+ sport modes, and an incredible 30-day battery life. We tested every feature to give you 
                the complete picture of this value-packed fitness companion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/reviews/hd-smartwatch"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Read Full Review
                </a>
                <a
                  href="https://amzn.to/45Id5Gi"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  🛒 View on Amazon
                </a>
              </div>
            </div>
          </div>

          {/* Fitbit Sense 2 Review */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-16">
            <div className="flex items-center mb-6">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                Health Focus
              </span>
              <span className="ml-3 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-semibold">
                Premium
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img 
                  src={affiliateProducts.fitbitSense2.image}
                  alt="Fitbit Sense 2"
                  className="w-full aspect-square object-contain bg-gray-50 dark:bg-gray-100 rounded-xl shadow-md"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Fitbit Sense 2 - Premium Health Smartwatch Review
                </h2>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    <span className="text-2xl">★★★★☆</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">{affiliateProducts.fitbitSense2.rating}/5</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">({affiliateProducts.fitbitSense2.reviewCount} reviews)</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  Comprehensive review of Fitbit&apos;s most advanced health smartwatch featuring ECG monitoring, 
                  stress management tools, SpO2 tracking, and 6+ day battery life. The ultimate wellness companion 
                  with 6-month Fitbit Premium membership included.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reviews/fitbit-sense2"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    Read Full Review
                  </a>
                  <a
                    href={affiliateProducts.fitbitSense2.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    🛒 View on Amazon
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Garmin Vívoactive 5 Review */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                GPS Pro
              </span>
              <span className="ml-3 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-semibold">
                Long Battery
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img 
                  src={affiliateProducts.garminVivoactive5.image}
                  alt="Garmin Vívoactive 5"
                  className="w-full aspect-square object-contain bg-gray-50 dark:bg-gray-100 rounded-xl shadow-md"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Garmin Vívoactive 5 - GPS Fitness Smartwatch Review
                </h2>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    <span className="text-2xl">★★★★★</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">{affiliateProducts.garminVivoactive5.rating}/5</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">({affiliateProducts.garminVivoactive5.reviewCount} reviews)</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  Complete review of Garmin&apos;s latest AMOLED GPS smartwatch featuring 11-day battery life, 
                  Body Battery energy monitoring, 30+ sports apps, and accessibility features. Perfect for 
                  multi-sport athletes and fitness enthusiasts seeking comprehensive tracking.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reviews/garmin-vivoactive5"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    Read Full Review
                  </a>
                  <a
                    href={affiliateProducts.garminVivoactive5.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    🛒 View on Amazon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get notified when we publish new fitness wearable reviews and buying guides. No spam, just valuable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
