import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function Plan() {
  const plans = [
    {
      name: "Daily Plan",
      price: "$19",
      period: "per day",
      description: "Perfect for trying out SpiceFit",
      features: [
        "1 fresh meal daily",
        "Calorie-controlled portions",
        "Traditional Indian flavors",
        "Same-day delivery",
        "Basic nutrition tracking"
      ],
      buttonText: "Select Plan",
      popular: false,
      color: "from-orange-400 to-orange-500"
    },
    {
      name: "Weekly Plan",
      price: "$119",
      period: "per week",
      originalPrice: "$133",
      description: "Most popular choice for consistent results",
      features: [
        "7 fresh meals weekly",
        "Free delivery all week",
        "Personalized meal selection",
        "Weight loss guarantee*",
        "Dedicated nutrition support",
        "Flexible meal scheduling",
        "Progress tracking app"
      ],
      buttonText: "Select Plan",
      popular: true,
      color: "from-red-500 to-red-600"
    },
    {
      name: "Monthly Plan",
      price: "$399",
      period: "per month",
      originalPrice: "$476",
      description: "Best value for serious transformation",
      features: [
        "30 fresh meals monthly",
        "Free delivery all month",
        "Premium meal variety",
        "Weight loss guarantee*",
        "1-on-1 nutrition coaching",
        "Custom meal planning",
        "Priority customer support",
        "Exclusive recipe access"
      ],
      buttonText: "Select Plan",
      popular: false,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-orange-50 to-red-50 min-h-screen">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> SpiceFit </span>
              Plan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Start your weight loss journey with authentic Indian flavors. All plans include calorie-controlled meals, 
              fresh ingredients, and the traditional spices you love.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No contracts • Cancel anytime • 100% satisfaction guarantee</span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-4 ring-red-500 ring-opacity-50' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <div className="text-left">
                        <div className="text-gray-600 text-sm">{plan.period}</div>
                        {plan.originalPrice && (
                          <div className="text-gray-400 text-sm line-through">{plan.originalPrice}</div>
                        )}
                      </div>
                    </div>

                    {plan.originalPrice && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Save ${parseInt(plan.originalPrice.slice(1)) - parseInt(plan.price.slice(1))}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    to="/enter-details"
                    className={`w-full block text-center py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${plan.color} hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose SpiceFit?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Authentic Flavors</h4>
                  <p className="text-gray-600 text-sm">Traditional Indian spices and cooking methods, just healthier</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
                  <p className="text-gray-600 text-sm">Weight loss guarantee when you follow our meal plans</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fresh Daily</h4>
                  <p className="text-gray-600 text-sm">Prepared fresh every morning and delivered to your door</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h3>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="font-semibold text-gray-900 mb-2">What's included in the weight loss guarantee?</h4>
                <p className="text-gray-600">If you eat only SpiceFit meals for your chosen plan duration and don't see results, we'll refund your money. Terms and conditions apply.</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Can I customize my meals?</h4>
                <p className="text-gray-600">Yes! During onboarding, you'll specify your dietary preferences (veg, non-veg, vegan, keto, halal) and we'll tailor your meals accordingly.</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="font-semibold text-gray-900 mb-2">How fresh are the meals?</h4>
                <p className="text-gray-600">All meals are prepared fresh daily in our commercial kitchen using traditional Indian cooking methods and delivered within hours.</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Transformation?</h3>
              <p className="text-xl mb-6 opacity-90">Join thousands of Indian Australians who've already transformed their health with SpiceFit</p>
              <Link
                to="/enter-details"
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get Started Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Plan;