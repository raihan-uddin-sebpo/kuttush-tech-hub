// Product configuration for Amazon affiliate links
export const affiliateProducts = {
  smartWatch: {
    id: 'alexa-fitness-smartwatch',
    name: 'Smart Watch with Alexa Built-In',
    shortDescription: 'Advanced fitness tracker with Alexa, Bluetooth calls, and 24/7 health monitoring',
    price: 'Check Amazon for current price',
    amazonUrl: 'https://amzn.to/4orr7Ds',
    image: 'https://m.media-amazon.com/images/I/61AP4d1AUgL._AC_SX466_.jpg',
    rating: 4.5,
    reviewCount: '2,847',
    category: 'Fitness & Health',
    features: [
      'Alexa Built-In & Hands-Free Convenience',
      'Bluetooth 5.3 Calls',
      '1.83" HD Touchscreen',
      '120+ Sports Modes',
      '24/7 Health Monitoring',
      'IP68 Waterproof',
      'iOS & Android Compatible'
    ],
    detailedFeatures: {
      alexa: {
        title: 'Alexa Built-In & Hands-Free Convenience',
        description: 'Smart watch with built-in Alexa voice assistant, control music, set reminders, check weather, and access over 6M Alexa skills directly from your wrist. Life just got easier.'
      },
      calls: {
        title: 'Bluetooth Calls',
        description: 'Powered by Bluetooth 5.3 chip providing stable connection. Make or answer calls directly through the watch - ideal for workouts, driving, or busy days.'
      },
      display: {
        title: '1.83" HD Screen',
        description: 'Fitness tracking watch with HD screen offers vivid colors and sharp details on the ultra-large touchscreen, even under sunlight, with customizable watch faces.'
      },
      sports: {
        title: '120+ Sports Modes',
        description: 'From running, cycling, swimming to yoga - monitor real-time stats (calories, distance, duration) for all activities.'
      },
      health: {
        title: '24/7 Health Monitoring',
        description: 'Advanced sensors track heart rate, steps, calories, sleep quality, and stress levels, providing actionable insights for better wellness (not intended for medical diagnosis).'
      },
      waterproof: {
        title: 'IP68 Waterproof',
        description: 'IP68 waterproof rating means you can swim, shower, or train in heavy rain worry-free. Withstands submersion up to 1.5 meters for 30 minutes. Note: High water temperatures can affect water resistance.'
      },
      compatibility: {
        title: 'iOS & Android Compatibility',
        description: 'Sync effortlessly with iPhone and Android phones (iOS 10.0+/Android 6.0+). Receive notifications for calls, texts, and apps. Note: Compatible with message notifications but does not support replies.'
      }
    },
    pros: [
      'Built-in Alexa voice assistant',
      'Excellent battery life',
      'Comprehensive health tracking',
      'Large, bright display',
      'Waterproof for swimming',
      'Bluetooth calling feature',
      '120+ workout modes'
    ],
    cons: [
      'Cannot reply to messages',
      'Limited third-party app support',
      'Charging cable proprietary'
    ],
    idealFor: [
      'Fitness enthusiasts',
      'Busy professionals who need hands-free convenience',
      'People who want comprehensive health tracking',
      'Users looking for Alexa integration',
      'Anyone wanting Bluetooth calling on their wrist'
    ]
  }
};

export const siteConfig = {
  affiliateDisclaimer: 'As an Amazon Associate, TechGadget Hub earns from qualifying purchases. This means we may receive a small commission when you click on our links and make a purchase, at no additional cost to you.',
  amazonAssociateTag: 'your-associate-tag-20', // Replace with your actual tag
};
