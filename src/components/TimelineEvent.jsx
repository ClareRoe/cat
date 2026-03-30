export default function TimelineEvent({ date, title, description, emoji, isLast }) {
  return (
    <div className="relative flex gap-6 pb-10">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-purple-200" />
      )}

      {/* Node */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-lg shadow-md z-10">
        {emoji || '🐱'}
      </div>

      {/* Content */}
      <div className="flex-1 bg-white rounded-2xl border border-purple-100 shadow-sm p-5 hover:shadow-md transition-shadow duration-200">
        <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full mb-2">
          {date}
        </div>
        <h3 className="text-base font-bold text-indigo-900 mb-1">{title}</h3>
        <p className="text-sm text-indigo-700 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
