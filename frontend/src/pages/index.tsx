import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import SearchBar from '@/components/Search/SearchBar';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Practo Clone - Your home for health</title>
        <meta name="description" content="Find and book appointments with verified doctors. Get expert medical advice and quality healthcare." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 floating-animation"></div>
              <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full opacity-10"></div>
              <div className="absolute bottom-20 left-32 w-12 h-12 bg-blue-300 rounded-full opacity-15"></div>
              <div className="absolute bottom-40 right-10 w-24 h-24 bg-green-400 rounded-full opacity-10"></div>
              
              {/* Placeholder for "Image One" - Animated graphics */}
              <div className="absolute top-16 right-16 w-64 h-64 hidden lg:block">
                <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center text-white/60 text-center p-4">
                  <div>
                    <p className="text-sm font-medium">Image One</p>
                    <p className="text-xs mt-2">Replace with healthcare illustrations/graphics from the design</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              {/* Main Heading */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Your home for health
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Find and book appointments with minimum wait-time & verified doctor details
                </p>
              </div>

              {/* Search Section */}
              <div className="mb-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-2">
                    Find and Book
                  </h2>
                </div>
                <SearchBar />
              </div>
            </div>
          </div>
        </section>

        {/* Popular Searches Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Popular searches:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Dermatologist', emoji: '🩺' },
                { name: 'Pediatrician', emoji: '👶' },
                { name: 'Gynecologist/Obstetrician', emoji: '🤱' },
                { name: 'Orthopedic', emoji: '🦴' },
                { name: 'Cardiologist', emoji: '❤️' },
                { name: 'ENT Specialist', emoji: '👂' }
              ].map((specialty) => (
                <div
                  key={specialty.name}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center group"
                >
                  <div className="text-3xl mb-3">{specialty.emoji}</div>
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-practo-blue">
                    {specialty.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Skip the travel! Find Online
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Medical and Health
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-practo-lightBlue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-practo-blue text-2xl">🩺</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Instant Video Consultation</h4>
                <p className="text-gray-600">Connect within 60 secs</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">💊</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Find Doctors Near You</h4>
                <p className="text-gray-600">Confirmed appointments</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">🏥</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Surgeries</h4>
                <p className="text-gray-600">Safe and trusted surgery centers</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HomePage;