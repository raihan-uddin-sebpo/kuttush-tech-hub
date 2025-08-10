import Link from "next/link";
import { affiliateProducts } from "@/config/products";

const product = affiliateProducts.smartWatchPro;

export const metadata = {
  title: "Smart Watch 1.91\" HD Review - Call & Fitness Tracker 2025 | Kuttush Tech Hub",
  description: "Comprehensive review of the 1.91\" HD Smart Watch with Bluetooth 5.3 calling, 110+ sport modes, and 30-day battery life. Find out if this fitness tracker is worth buying in 2025.",
  keywords: "smart watch review, 1.91 HD smartwatch, fitness tracker 2025, bluetooth calling watch, 110 sport modes, long battery smartwatch, IP68 waterproof watch",
  openGraph: {
    title: "Smart Watch 1.91\" HD Review - Premium Fitness Tracker 2025",
    description: "In-depth review of the premium HD smartwatch with calling features, extensive sport modes, and month-long battery life.",
    images: [product.image],
  },
};

export default function HDSmartwatchReview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
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

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">Home</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href="/reviews" className="text-blue-600 dark:text-blue-400 hover:underline">Reviews</Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700 dark:text-gray-300">HD Smart Watch Review</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {product.name} Review
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete analysis of the premium 1.91" HD smartwatch with calling features, 110+ sport modes, 
            and industry-leading 30-day battery life. Is this the ultimate fitness companion for 2025?
          </p>
          
          {/* Quick Buy CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 mb-8 text-white">
            <p className="text-lg font-semibold mb-2">🔥 Amazon's Choice - Limited Time Deal</p>
            <p className="mb-4">Get the best price on this premium smartwatch today!</p>
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              View Current Price on Amazon →
            </a>
          </div>
        </div>

        {/* Product Overview */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 mb-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-md mx-auto rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Product Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {product.shortDescription}
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-xl mr-2">★★★★★</span>
                  <span className="text-gray-700 dark:text-gray-300">{product.rating}/5 ({product.reviewCount} reviews)</span>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Category:</span> {product.category}
                </div>
              </div>

              <div className="space-y-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-b border-gray-200 dark:border-gray-600 pb-2">
                <span className="font-semibold text-gray-900 dark:text-white">Screen Size:</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">{product.specs.screenSize}</span>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-600 pb-2">
                <span className="font-semibold text-gray-900 dark:text-white">Operating System:</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">{product.specs.operatingSystem}</span>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-600 pb-2">
                <span className="font-semibold text-gray-900 dark:text-white">Memory Storage:</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">{product.specs.memoryStorage}</span>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-600 pb-2">
                <span className="font-semibold text-gray-900 dark:text-white">Battery Capacity:</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">{product.specs.batteryCapacity}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-b border-gray-200 dark:border-gray-600 pb-2">
                <span className="font-semibold text-gray-900 dark:text-white">Connectivity:</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">{product.specs.connectivity}</span>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-600 pb-2">
                <span className="font-semibold text-gray-900 dark:text-white">Battery Type:</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">{product.specs.batteryType}</span>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-600 pb-2">
                <span className="font-semibold text-gray-900 dark:text-white">GPS:</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">{product.specs.gps}</span>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-600 pb-2">
                <span className="font-semibold text-gray-900 dark:text-white">Shape:</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">{product.specs.shape}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">In-Depth Feature Analysis</h2>
          <div className="space-y-8">
            {Object.entries(product.detailedFeatures).map(([key, feature], index) => (
              <div key={key} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">{index === 0 ? '📱' : index === 1 ? '📞' : index === 2 ? '❤️' : index === 3 ? '🏃' : index === 4 ? '🔋' : index === 5 ? '💧' : '🤖'}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-6">✅ Pros</h3>
            <ul className="space-y-3">
              {product.pros.map((pro, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 text-lg">•</span>
                  <span className="text-green-700 dark:text-green-200">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-800 dark:text-red-300 mb-6">❌ Cons</h3>
            <ul className="space-y-3">
              {product.cons.map((con, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-3 text-lg">•</span>
                  <span className="text-red-700 dark:text-red-200">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Who Should Buy This */}
        <section className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-6">🎯 Perfect For</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.idealFor.map((user, index) => (
              <div key={index} className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">👤</span>
                <span className="text-blue-700 dark:text-blue-200">{user}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Final Verdict */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Final Verdict</h2>
          <div className="text-center">
            <div className="text-6xl font-bold mb-2">{product.rating}/5</div>
            <div className="text-xl mb-6">Excellent Value for Money</div>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              The 1.91" HD Smart Watch delivers exceptional value with its premium display, outstanding battery life, 
              and comprehensive fitness tracking. The Bluetooth 5.3 calling feature and 110+ sport modes make it 
              ideal for active users who want professional-grade health monitoring without breaking the bank.
            </p>
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Get the Best Price on Amazon →
            </a>
          </div>
        </section>

        {/* Affiliate Disclaimer */}
        <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            As an Amazon Associate, Kuttush Tech Hub earns from qualifying purchases. 
            When you click on our Amazon links and make a purchase, we may receive a small commission 
            at no additional cost to you. This helps support our site and allows us to continue 
            providing detailed, unbiased reviews. Thank you for your support!
          </p>
        </section>
      </div>
    </div>
  );
}
