import TimelineEvent from '../components/TimelineEvent'

const events = [
  {
    date: '~10,000 BCE',
    title: 'The First Friendship',
    emoji: '🐱',
    description:
      'As humans in the Fertile Crescent began farming, grain stores attracted rodents — and wildcats (Felis silvestris lybica) followed. This was a mutually beneficial relationship: cats got easy prey, humans got pest control. Unlike dogs, cats essentially domesticated themselves.',
  },
  {
    date: '~7500 BCE',
    title: 'Cyprus Discovery',
    emoji: '🏺',
    description:
      'Archaeologists in Cyprus unearthed a deliberate burial of a human alongside a cat — the earliest known evidence of humans keeping cats as companions, predating Egyptian cat worship by thousands of years.',
  },
  {
    date: '~3100 BCE',
    title: 'Sacred in Ancient Egypt',
    emoji: '🐈‍⬛',
    description:
      'Cats became deeply woven into Egyptian culture. The goddess Bastet was depicted as a cat or cat-headed woman, representing home, fertility, and protection. Killing a cat — even accidentally — was punishable by death. When a family cat died, the household would shave their eyebrows in mourning.',
  },
  {
    date: '~500 BCE',
    title: 'Cats Spread Along Trade Routes',
    emoji: '🚢',
    description:
      'Phoenician traders are believed to have transported cats across the Mediterranean to control rodents aboard ships. This spread domestic cats into Europe. Cats became essential crew members on seafaring vessels for millennia.',
  },
  {
    date: '500–1500 CE',
    title: 'The Dark Middle Ages',
    emoji: '⚔️',
    description:
      'In medieval Europe, cats became associated with witchcraft and the devil, leading to widespread persecution. Pope Gregory IX\'s 1232 decree linked black cats to Satanism. Ironically, the resulting cat population decline may have contributed to rat proliferation and the Black Death.',
  },
  {
    date: '1600s',
    title: 'Cats Reach the Americas',
    emoji: '🌎',
    description:
      'European colonists brought cats to the Americas on ships. They quickly spread across the continents, helping protect food stores in the new settlements. Today, domestic cats are one of the most widespread mammals on Earth.',
  },
  {
    date: '1879',
    title: 'First Recorded Cat Show',
    emoji: '🏆',
    description:
      'The world\'s first formal cat show was held at Crystal Palace, London, organised by artist Harrison Weir. 170 cats competed across 25 classes. This began the era of cat breeding as a hobby and the recognition of distinct cat breeds.',
  },
  {
    date: '1963',
    title: 'Félicette, the Space Cat',
    emoji: '🚀',
    description:
      'On October 18, 1963, France launched Félicette into space aboard a Véronique AG1 rocket. She became the first and only cat to travel to space, surviving the mission. A bronze statue in her honour was unveiled in 2019 at the International Space University in Strasbourg.',
  },
  {
    date: '2007',
    title: 'The Internet Cat Takes Over',
    emoji: '💻',
    description:
      'Keyboard Cat (filmed 1984, posted 2007), Nyan Cat (2011), Grumpy Cat (Tardar Sauce, 2012), and Lil Bub (2012) turned cats into the undisputed rulers of the internet. Grumpy Cat\'s likeness earned over $100 million in merchandise. The "I Can Has Cheezburger?" meme site, launched in 2007, became one of the first viral meme platforms.',
  },
  {
    date: 'Today',
    title: '600 Million Cats Worldwide',
    emoji: '🌍',
    description:
      'There are an estimated 600 million domestic cats worldwide, with around 45.3 million households in the US alone owning at least one cat. Cats are the second most popular pet globally. They still exhibit many wild behaviours — the purr, the slow blink, the 3am zoomies — reminding us they chose us just as much as we chose them.',
  },
]

export default function History() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Page header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          🕰️ 10,000 Years of Cats
        </div>
        <h1 className="text-4xl font-extrabold text-indigo-900 mb-3">Cat History Timeline</h1>
        <p className="text-indigo-500 text-lg">
          From wildcats in the Fertile Crescent to rulers of the internet — the remarkable journey of Felis catus.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {events.map((event, index) => (
          <TimelineEvent
            key={event.date}
            date={event.date}
            title={event.title}
            emoji={event.emoji}
            description={event.description}
            isLast={index === events.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
