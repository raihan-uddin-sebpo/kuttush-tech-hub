import Link from "next/link";
import { affiliateProducts } from "@/config/products";

const product = affiliateProducts.fitbitSense2;

export default function FitbitSense2Review() {
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
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/reviews" className="text-gray-500 hover:text-gray-700">Reviews</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 dark:text-white">Fitbit Sense 2 Review</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {product.name} Review
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            In-depth review of Fitbit&apos;s most advanced health and fitness smartwatch featuring stress management, ECG monitoring, and 6+ day battery life. The ultimate wellness companion for 2025.
          </p>

          {/* Quick Buy CTA */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 mb-8 text-white">
            <p className="text-lg font-semibold mb-2">💎 Premium Health Smartwatch</p>
            <p className="mb-4">Advanced health tracking with 6-month Fitbit Premium included!</p>
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Check Price on Amazon
            </a>
          </div>
        </div>

        {/* Product Image & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src={product.image}
              alt={product.name}
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quick Overview</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{product.rating}/5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Expert Rating</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">6+ Days</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Battery Life</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">ECG + SpO2</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Health Sensors</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">40+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Exercise Modes</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Highlights</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Review Sections */}
        <div className="space-y-16">
          
          {/* Health & Fitness Features */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Advanced Health Monitoring</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🫀 ECG & Heart Health</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The Fitbit Sense 2 includes an FDA-cleared ECG app that can detect signs of atrial fibrillation. 
                  Combined with 24/7 heart rate monitoring and irregular rhythm notifications, it provides 
                  comprehensive cardiac health insights.
                </p>
                <div className="text-sm text-blue-600 dark:text-blue-400">✓ FDA-cleared ECG readings</div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">😌 Stress Management</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Revolutionary cEDA sensor detects stress levels throughout the day, providing a Daily Stress 
                  Management Score. Includes guided meditation and mindfulness content to help manage stress effectively.
                </p>
                <div className="text-sm text-green-600 dark:text-green-400">✓ All-day stress detection</div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">💤 Sleep Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Personalized Sleep Profile analyzes your sleep patterns and provides a Sleep Score. 
                  Smart wake alarm and do not disturb mode ensure optimal rest and recovery.
                </p>
                <div className="text-sm text-purple-600 dark:text-purple-400">✓ Sleep stages tracking</div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🩸 SpO2 Monitoring</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Blood oxygen saturation monitoring helps track your overall wellness and can indicate 
                  potential health issues. Essential for altitude training and sleep apnea awareness.
                </p>
                <div className="text-sm text-red-600 dark:text-red-400">✓ Continuous SpO2 tracking</div>
              </div>
            </div>
          </section>

          {/* Smart Features */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Smart Connectivity</h2>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-4">📞</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Bluetooth Calls</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Take calls directly from your wrist with built-in speaker and microphone.</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">🗣️</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Alexa Built-in</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Voice control for smart home devices, weather, timers, and more.</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">💳</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fitbit Pay</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Contactless payments with secure NFC technology.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pros and Cons */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Pros & Cons</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-4">✅ Pros</h3>
                <ul className="space-y-2">
                  {product.pros.map((pro, index) => (
                    <li key={index} className="flex items-start text-green-700 dark:text-green-300">
                      <span className="text-green-500 mr-2 mt-1">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-red-800 dark:text-red-400 mb-4">❌ Cons</h3>
                <ul className="space-y-2">
                  {product.cons.map((con, index) => (
                    <li key={index} className="flex items-start text-red-700 dark:text-red-300">
                      <span className="text-red-500 mr-2 mt-1">-</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Who Is This For */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Who Should Buy This?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.idealFor.map((user, index) => (
                <div key={index} className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <span className="text-2xl mr-4">👤</span>
                  <span className="text-gray-700 dark:text-gray-300">{user}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Final Verdict */}
          <section className="text-center bg-white dark:bg-slate-800 p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Final Verdict</h2>
            <div className="text-6xl font-bold mb-2">{product.rating}/5</div>
            <div className="text-xl mb-6">Premium Health & Wellness Champion</div>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              The Fitbit Sense 2 sets the gold standard for health-focused smartwatches. With advanced ECG monitoring, 
              stress management tools, and comprehensive sleep tracking, it&apos;s the ultimate wellness companion for users 
              serious about their health journey.
            </p>
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors inline-block"
            >
              Get the Best Price on Amazon
            </a>
          </section>

          {/* Affiliate Disclaimer */}
          <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl text-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              As an Amazon Associate, Kuttush Tech Hub earns from qualifying purchases. 
              When you click on our Amazon links and make a purchase, we may receive a small commission 
              at no additional cost to you. This helps support our website and allows us to continue 
              providing detailed, unbiased reviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
