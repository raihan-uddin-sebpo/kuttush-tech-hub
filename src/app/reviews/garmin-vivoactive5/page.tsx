import Link from "next/link";
import { affiliateProducts } from "@/config/products";

const product = affiliateProducts.garminVivoactive5;

export default function GarminVivoactive5Review() {
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
          <span className="text-gray-900 dark:text-white">Garmin Vívoactive 5 Review</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {product.name} Review
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete analysis of Garmin&apos;s latest AMOLED GPS smartwatch featuring 11-day battery life, Body Battery monitoring, and 30+ sports apps. The ultimate multi-sport fitness companion.
          </p>

          {/* Quick Buy CTA */}
          <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-6 mb-8 text-white">
            <p className="text-lg font-semibold mb-2">🏃‍♂️ Ultimate GPS Fitness Smartwatch</p>
            <p className="mb-4">11-day battery life with comprehensive health and fitness tracking!</p>
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-white text-green-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors inline-block"
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
                  <div className="text-2xl font-bold text-green-600">{product.rating}/5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Expert Rating</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">11 Days</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Battery Life</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">AMOLED</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Display Type</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">30+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Sports Apps</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
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
          
          {/* Key Features */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Standout Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🔋 11-Day Battery Life</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The Vívoactive 5 delivers exceptional battery performance with up to 11 days in smartwatch mode. 
                  The bright AMOLED display doesn&apos;t compromise on power efficiency, making it perfect for 
                  extended adventures and multi-day activities.
                </p>
                <div className="text-sm text-green-600 dark:text-green-400">✓ Up to 11 days smartwatch mode</div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">⚡ Body Battery Monitoring</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Advanced Body Battery energy monitoring provides personalized insights based on sleep, stress, 
                  workouts, and daily activities. Know when you&apos;re charged up or need rest with this innovative feature.
                </p>
                <div className="text-sm text-blue-600 dark:text-blue-400">✓ Personalized energy insights</div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🎯 30+ Sports Apps</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Built-in GPS and more than 30 sports apps cover everything from running and cycling to swimming, 
                  golf, HIIT, and specialized wheelchair activities. Perfect for multi-sport athletes.
                </p>
                <div className="text-sm text-purple-600 dark:text-purple-400">✓ Multi-sport GPS tracking</div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">♿ Accessibility Features</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Wheelchair mode tracks pushes instead of steps, includes push and handcycle activities, 
                  and offers specialized workouts and challenges designed specifically for wheelchair users.
                </p>
                <div className="text-sm text-orange-600 dark:text-orange-400">✓ Inclusive fitness tracking</div>
              </div>
            </div>
          </section>

          {/* Health Monitoring */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Comprehensive Health Tracking</h2>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-4">💤</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sleep Coaching</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Personalized sleep score, coaching, and automatic nap detection with HRV status monitoring.</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">❤️</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Heart Rate Monitoring</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Wrist-based heart rate tracking with stress monitoring and fitness age assessment.</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">🧘</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Wellness Features</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Meditation tracking, menstrual cycle monitoring, and morning health reports.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Training Features */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Advanced Training</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Workout Benefits</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Understand how each workout affects your body with workout benefit analysis and get 
                  personalized recovery time recommendations to optimize your training schedule.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Workout impact analysis</li>
                  <li>• Recovery time guidance</li>
                  <li>• Training load balance</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Preloaded Workouts</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Access cardio, yoga, strength, HIIT, and Pilates workouts. Create custom routines 
                  in Garmin Connect or try Garmin Coach adaptive training plans.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Strength & cardio routines</li>
                  <li>• Garmin Coach training plans</li>
                  <li>• Custom workout creation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Music & Entertainment */}
          <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Music & Entertainment</h2>
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Phone-Free Music</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Download your favorite playlists from Spotify, Amazon Music, or Deezer directly to your watch. 
                Connect wireless headphones for phone-free listening during workouts and activities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center">
                <span className="text-green-600 font-semibold">Spotify</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center">
                <span className="text-orange-600 font-semibold">Amazon Music</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center">
                <span className="text-purple-600 font-semibold">Deezer</span>
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
          <section className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.idealFor.map((user, index) => (
                <div key={index} className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <span className="text-2xl mr-4">🎯</span>
                  <span className="text-gray-700 dark:text-gray-300">{user}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Final Verdict */}
          <section className="text-center bg-white dark:bg-slate-800 p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Final Verdict</h2>
            <div className="text-6xl font-bold mb-2">{product.rating}/5</div>
            <div className="text-xl mb-6">Multi-Sport GPS Excellence</div>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              The Garmin Vívoactive 5 excels as a comprehensive GPS fitness smartwatch with its brilliant AMOLED display, 
              exceptional 11-day battery life, and extensive sports tracking capabilities. Body Battery monitoring and 
              accessibility features make it inclusive and intelligent.
            </p>
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors inline-block"
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
