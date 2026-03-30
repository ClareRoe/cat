import { useState } from 'react'

const ANTHROPIC_API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY

export default function CatCard({ cat, isFavourite, onToggleFavourite }) {
  const [naming, setNaming] = useState(false)
  const [catName, setCatName] = useState(null)
  const [nameError, setNameError] = useState(null)
  const [imgError, setImgError] = useState(false)

  const handleNameThisCat = async () => {
    if (!ANTHROPIC_API_KEY) {
      setNameError('No API key configured. Add VITE_ANTHROPIC_API_KEY to your .env file.')
      return
    }
    setNaming(true)
    setNameError(null)
    setCatName(null)
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 256,
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'image',
                  source: {
                    type: 'url',
                    url: cat.url,
                  },
                },
                {
                  type: 'text',
                  text: 'Look at this cat photo. Give it a creative, funny name and write one sentence describing its personality. Format: **Name:** [name]\n**Personality:** [sentence]',
                },
              ],
            },
          ],
        }),
      })
      if (!response.ok) {
        const err = await response.json().catch(() => ({}))
        throw new Error(err?.error?.message || `API error ${response.status}`)
      }
      const data = await response.json()
      setCatName(data.content?.[0]?.text || 'Could not generate a name.')
    } catch (e) {
      setNameError(e.message || 'Failed to name this cat.')
    } finally {
      setNaming(false)
    }
  }

  const fallbackSrc = `https://picsum.photos/seed/${cat.id}/400/300`

  return (
    <div className="bg-white rounded-2xl shadow-md border border-purple-100 overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative w-full aspect-square bg-purple-50 overflow-hidden">
        <img
          src={imgError ? fallbackSrc : cat.url}
          alt="A cat"
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
        {/* Heart button overlay */}
        <button
          onClick={() => onToggleFavourite(cat)}
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full w-9 h-9 flex items-center justify-center shadow hover:scale-110 transition-transform"
          aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
        >
          <span className="text-lg">{isFavourite ? '❤️' : '🤍'}</span>
        </button>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Name This Cat button */}
        <button
          onClick={handleNameThisCat}
          disabled={naming}
          className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white rounded-xl text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
        >
          {naming ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Naming...
            </>
          ) : (
            <>✨ Name This Cat</>
          )}
        </button>

        {/* Result */}
        {catName && (
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 text-sm text-indigo-900 leading-relaxed">
            {catName.split('\n').map((line, i) => (
              <p key={i} className={i > 0 ? 'mt-1' : ''}>
                {line.replace(/\*\*(.*?)\*\*/g, '$1')}
              </p>
            ))}
          </div>
        )}

        {nameError && (
          <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-sm text-red-700">
            {nameError}
          </div>
        )}
      </div>
    </div>
  )
}
