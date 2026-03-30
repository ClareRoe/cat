import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'

const features = [
  {
    icon: '🖼️',
    title: 'Gallery',
    description: 'Browse an endless gallery of adorable cats fetched fresh from The Cat API. New cats every time!',
    to: '/gallery',
  },
  {
    icon: '🕰️',
    title: 'History',
    description: 'Travel through 10,000 years of the fascinating relationship between humans and cats.',
    to: '/history',
  },
  {
    icon: '✨',
    title: 'Name This Cat',
    description: 'Let Claude AI look at each cat photo and give it a creative, funny name and personality.',
    to: '/gallery',
  },
  {
    icon: '❤️',
    title: 'Favourites',
    description: 'Save your favourite cat photos to revisit any time. All stored locally in your browser.',
    to: '/favourites',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-300 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <span>🐱</span> Welcome to Cat Lab
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              The Internet&apos;s<br />
              <span className="text-sky-300">Purr-fect</span> Cat Hub
            </h1>
            <p className="text-indigo-100 text-lg mb-8 max-w-md mx-auto md:mx-0">
              Explore cat photos, dive into 10,000 years of feline history, and let AI name your favourite cats.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                to="/gallery"
                className="px-6 py-3 bg-white text-purple-700 font-bold rounded-xl hover:bg-purple-50 transition-colors shadow-lg"
              >
                🖼️ Explore Gallery
              </Link>
              <Link
                to="/history"
                className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/30"
              >
                🕰️ Cat History
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30">
            <img
              src="https://cataas.com/cat"
              alt="A random cat"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://placekitten.com/400/400'
              }}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-indigo-900 mb-3">Everything Cat</h2>
          <p className="text-indigo-500 text-lg">Four ways to enjoy your feline obsession</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Link key={f.title} to={f.to} className="no-underline block">
              <FeatureCard icon={f.icon} title={f.title} description={f.description} />
            </Link>
          ))}
        </div>
      </section>

      {/* Fun fact banner */}
      <section className="bg-indigo-600 text-white py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl font-bold mb-2">🌍 Did you know?</p>
          <p className="text-indigo-100 text-lg">
            There are an estimated <strong>600 million domestic cats</strong> worldwide — and they&apos;ve been humanity&apos;s companions for over 10,000 years.
          </p>
        </div>
      </section>
    </div>
  )
}
