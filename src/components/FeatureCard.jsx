export default function FeatureCard({ icon, title, description, to }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 flex flex-col items-center text-center gap-3 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      <div className="text-4xl">{icon}</div>
      <h3 className="text-lg font-bold text-indigo-900">{title}</h3>
      <p className="text-indigo-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
