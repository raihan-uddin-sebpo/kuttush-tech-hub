import Link from "next/link";
import { affiliateProducts } from "@/config/products";

const smartWatch = affiliateProducts.smartWatch;

export default function SmartWatchReview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-bold text-gray-900 dark:text-white">TechGadget Hub</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
              <Link href="/reviews" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Reviews</Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span>→</span>
            <Link href="/reviews" className="hover:text-blue-600 dark:hover:text-blue-400">Reviews</Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white">Smart Watch Review</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 mb-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <img 
                src="https://m.media-amazon.com/images/I/61AP4d1AUgL._AC_SX466_.jpg"
                alt="Smart Watch with Alexa Built-In"
                className="aspect-square w-full object-contain bg-white dark:bg-gray-100 rounded-xl mb-6 shadow-md"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                  {smartWatch.category}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {smartWatch.name}
              </h1>
              
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      {i < Math.floor(smartWatch.rating) ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-300">
                  {smartWatch.rating}/5 ({smartWatch.reviewCount} reviews)
                </span>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {smartWatch.shortDescription}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={smartWatch.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg text-center transition-colors flex items-center justify-center"
                >
                  <span className="mr-2">🛒</span>
                  View on Amazon
                </a>
                <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 py-4 px-6 rounded-lg text-center">
                  <div className="font-semibold">Best Price</div>
                  <div className="text-sm">{smartWatch.price}</div>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features:</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {smartWatch.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Review */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Detailed Review</h2>
          
          {/* Feature Breakdown */}
          <div className="space-y-8">
            {Object.entries(smartWatch.detailedFeatures).map(([key, feature]) => (
              <div key={key} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Pros */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-6">
              ✅ Pros
            </h3>
            <ul className="space-y-3">
              {smartWatch.pros.map((pro, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">+</span>
                  <span className="text-green-700 dark:text-green-300">{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-800 dark:text-red-300 mb-6">
              ❌ Cons
            </h3>
            <ul className="space-y-3">
              {smartWatch.cons.map((con, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">-</span>
                  <span className="text-red-700 dark:text-red-300">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Who Should Buy This */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-6">
            🎯 Who Should Buy This Smart Watch?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {smartWatch.idealFor.map((person, index) => (
              <div key={index} className="flex items-center">
                <span className="text-blue-600 mr-3">👤</span>
                <span className="text-blue-700 dark:text-blue-300">{person}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final Verdict */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 mb-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Final Verdict</h3>
          <div className="flex justify-center items-center mb-4">
            <div className="flex text-yellow-400 mr-2 text-3xl">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < Math.floor(smartWatch.rating) ? '★' : '☆'}
                </span>
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {smartWatch.rating}/5
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            This smart watch delivers excellent value for money with its comprehensive health tracking, 
            built-in Alexa, and impressive battery life. The Bluetooth calling feature and waterproof design 
            make it perfect for active lifestyles. While it has some limitations with message replies, 
            the overall package is outstanding for the price point.
          </p>
          <a
            href={smartWatch.amazonUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            🛒 Get It on Amazon - Best Price
          </a>
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-gray-100 dark:bg-slate-700 rounded-lg p-6 text-sm text-gray-600 dark:text-gray-300">
          <h4 className="font-semibold mb-2">📢 Affiliate Disclosure:</h4>
          <p>
            As an Amazon Associate, TechGadget Hub earns from qualifying purchases. 
            When you click on our Amazon links and make a purchase, we may receive a small commission 
            at no additional cost to you. This helps support our website and allows us to continue 
            providing honest, detailed reviews. Our opinions and recommendations remain completely independent 
            and are based on our genuine assessment of the products.
          </p>
        </div>
      </div>
    </div>
  );
}
