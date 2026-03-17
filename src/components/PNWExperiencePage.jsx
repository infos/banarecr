import { useMemo, useState } from 'react'
import './PNWExperiencePage.css'

const imageMap = {
  hero: {
    src: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&w=1800&q=80',
    alt: 'Seattle skyline at sunset',
  },
  duringBanner: {
    src: 'https://images.unsplash.com/photo-1516778542139-ec8f1e4f34f5?auto=format&fit=crop&w=1600&q=80',
    alt: 'Seattle waterfront and skyline',
  },
  preTripBanner: {
    src: 'https://images.unsplash.com/photo-1622043238302-7ce9688f4554?auto=format&fit=crop&w=1600&q=80',
    alt: 'Mountain landscape in Washington',
  },
  postTripBanner: {
    src: 'https://images.unsplash.com/photo-1579803706827-73d5f2747d06?auto=format&fit=crop&w=1600&q=80',
    alt: 'Alaska cruise ship near port',
  },
  pikePlace: {
    src: 'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pike Place Market sign in Seattle',
  },
  ferry: {
    src: 'https://images.unsplash.com/photo-1477982456963-f8dd7fa4f4cf?auto=format&fit=crop&w=1200&q=80',
    alt: 'Ferry crossing Puget Sound',
  },
  rainier: {
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    alt: 'Mount Rainier with wildflowers',
  },
  vancouver: {
    src: 'https://images.unsplash.com/photo-1519885277449-12eee5564d38?auto=format&fit=crop&w=1200&q=80',
    alt: 'Vancouver skyline and harbor',
  },
}

const pageData = [
  {
    id: 'during',
    navLabel: 'During',
    title: 'During the Conference',
    description: 'Fast options between sessions, receptions, and dinners.',
    headerImage: imageMap.duringBanner,
    groups: [
      {
        title: 'Quick (1–2 hours)',
        cards: [
          {
            title: 'Seattle Waterfront Walk',
            duration: '1–2h',
            location: 'Downtown waterfront',
            description: 'Easy walk with piers, views, and coffee stops.',
          },
          {
            title: 'Pike Place + Downtown',
            duration: '1–2h',
            location: 'Pike Place Market',
            description: 'Market highlights and nearby public art loop.',
            image: imageMap.pikePlace,
            featured: true,
          },
        ],
      },
      {
        title: 'Half Day (3–5 hours)',
        cards: [
          {
            title: 'Argosy Harbor Cruise',
            duration: '3h',
            location: 'Central waterfront',
            description: 'Narrated harbor cruise with skyline perspectives.',
            image: imageMap.ferry,
            featured: true,
          },
          {
            title: 'Seattle MTB Trail Ride',
            duration: '3–5h',
            location: 'Regional trails',
            description: 'Higher-energy ride with optional guide support.',
          },
          {
            title: 'Seattle Highlights',
            duration: '3–4h',
            location: 'Seattle Center + core',
            description: 'Simple city sampler across major landmarks.',
          },
        ],
      },
    ],
  },
  {
    id: 'pre-trip',
    navLabel: 'Pre-Trip',
    title: 'Pre-Trip Planning',
    description: 'Full-day regional outings for early arrivals.',
    headerImage: imageMap.preTripBanner,
    groups: [
      {
        title: 'Full Day Excursions',
        cards: [
          {
            title: 'Mount Rainier National Park',
            duration: '8–12h',
            location: 'Mount Rainier, WA',
            description: 'Classic alpine drive with short trail options.',
            image: imageMap.rainier,
            featured: true,
          },
          {
            title: 'Olympic National Park',
            duration: '10–12h',
            location: 'Olympic Peninsula',
            description: 'Flexible route through coast or rainforest stops.',
          },
          {
            title: 'North Cascades Scenic Route',
            duration: '10–12h',
            location: 'North Cascades',
            description: 'Mountain highway day with scenic overlooks.',
          },
          {
            title: 'San Juan Islands Kayaking',
            duration: '8–11h',
            location: 'San Juan Islands',
            description: 'Ferry + guided paddling itinerary.',
          },
        ],
      },
    ],
  },
  {
    id: 'post-trip',
    navLabel: 'Post-Trip',
    title: 'Post-Trip Extensions',
    description: '1–3 day add-ons once the conference wraps.',
    headerImage: imageMap.postTripBanner,
    groups: [
      {
        title: 'Short Trips (1–3 days)',
        cards: [
          {
            title: 'Vancouver',
            duration: '2–3d',
            location: 'British Columbia',
            description: 'Waterfront city break with easy transit.',
            image: imageMap.vancouver,
            featured: true,
          },
          {
            title: 'Portland',
            duration: '1–3d',
            location: 'Oregon',
            description: 'Neighborhood-based food and culture trip.',
          },
          {
            title: 'Leavenworth',
            duration: '1–2d',
            location: 'Washington',
            description: 'Small alpine town and walkable downtown.',
          },
          {
            title: 'Snoqualmie Falls',
            duration: '1d',
            location: 'Snoqualmie',
            description: 'Quick scenic outing to iconic waterfalls.',
          },
        ],
      },
      {
        title: 'Cruise Extensions',
        cards: [
          {
            title: 'Alaska Cruise from Seattle',
            duration: '3–7+d',
            location: 'Seattle departure',
            description: 'Multi-day sailings to Alaska ports and glaciers.',
          },
        ],
      },
    ],
  },
]

function ScenicImage({ image, alt, className, eager = false }) {
  if (!image?.src) {
    return (
      <div className={`${className} image-neutral`} role="img" aria-label={alt}>
        <span>Photo available in itinerary details</span>
      </div>
    )
  }

  return (
    <img
      src={image.src}
      alt={image.alt || alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
    />
  )
}

function PlanCard({ card }) {
  return (
    <article className={`plan-card ${card.featured ? 'plan-card--featured' : ''}`}>
      {card.featured && (
        <ScenicImage image={card.image} alt={card.title} className="plan-card__image" />
      )}
      <div className="plan-card__content">
        <h4>{card.title}</h4>
        <dl className="plan-card__meta">
          <div>
            <dt>Duration</dt>
            <dd>{card.duration}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{card.location}</dd>
          </div>
        </dl>
        <p>{card.description}</p>
      </div>
    </article>
  )
}

export default function PNWExperiencePage() {
  const [activeSection, setActiveSection] = useState('during')
  const sections = useMemo(() => pageData, [])

  return (
    <div className="pnw-page">
      <header className="hero">
        <ScenicImage image={imageMap.hero} alt="Seattle" className="hero__image" eager />
        <div className="hero__content">
          <p className="eyebrow">BANA Seattle · Activity Guide</p>
          <h1>Pacific Northwest Planner</h1>
          <p>Choose a time window and book polished, low-friction experiences.</p>
        </div>
      </header>

      <nav className="segmented-nav" aria-label="Activity planner sections">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`segment-link ${activeSection === section.id ? 'is-active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.navLabel}
          </a>
        ))}
      </nav>

      <main>
        {sections.map((section, sectionIndex) => (
          <section key={section.id} id={section.id} className="time-section">
            <div className="section-banner">
              <ScenicImage
                image={section.headerImage}
                alt={section.title}
                className="section-banner__image"
                eager={sectionIndex === 0}
              />
              <div className="section-banner__content">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
            </div>

            {section.groups.map((group) => (
              <div key={group.title} className="subgroup">
                <h3>{group.title}</h3>
                <div className="card-grid">
                  {group.cards.map((card) => (
                    <PlanCard key={card.title} card={card} />
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </main>

      <footer className="image-attribution">
        <p>
          Photography sourced from Unsplash.{' '}
          <a href="https://unsplash.com" target="_blank" rel="noreferrer">
            View source
          </a>
          .
        </p>
      </footer>
    </div>
  )
}
