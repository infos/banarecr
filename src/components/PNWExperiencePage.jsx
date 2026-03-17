import { useState } from 'react'
import './PNWExperiencePage.css'

const pageData = [
  {
    id: 'during',
    navLabel: 'During',
    title: 'During the Conference',
    description:
      'Short and practical options that fit naturally between sessions, evening receptions, and team dinners.',
    headerImage:
      '/pnw-images/https---source-unsplash-com-1600x900--seattle-skyline.jpg',
    groups: [
      {
        title: 'Quick (1–2 hours)',
        cards: [
          {
            title: 'Seattle Waterfront Walk',
            duration: '1–2 hours',
            location: 'Seattle Waterfront',
            description:
              'A flat waterfront route with piers, lookout points, and convenient food stops near downtown hotels.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--seattle-waterfront.jpg',
          },
          {
            title: 'Pike Place + Downtown',
            duration: '1–2 hours',
            location: 'Pike Place Market & Downtown',
            description:
              'A compact loop through market highlights, central shopping streets, and public art installations.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--pike-place-market.jpg',
          },
        ],
      },
      {
        title: 'Half Day (3–5 hours)',
        cards: [
          {
            title: 'Argosy Harbor Cruise',
            duration: '3 hours total',
            location: 'Central Waterfront',
            description:
              'A scheduled harbor cruise with skyline views and concise narration on Seattle maritime landmarks.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--seattle-ferry.jpg',
          },
          {
            title: 'Seattle MTB Trail Ride',
            duration: '3–5 hours',
            location: 'Regional trail network',
            description:
              'A guided or self-planned mountain biking session for attendees seeking a higher-activity outing.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--seattle-mountain-bikin.jpg',
          },
          {
            title: 'Seattle Highlights',
            duration: '3–4 hours',
            location: 'Seattle Center & Downtown',
            description:
              'A broad sampler covering signature viewpoints, notable districts, and easy transit connections.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--space-needle.jpg',
          },
        ],
      },
    ],
  },
  {
    id: 'pre-trip',
    navLabel: 'Pre-Trip',
    title: 'Pre-Trip Planning',
    description:
      'Full-day itineraries for attendees arriving early and setting aside one substantial regional excursion.',
    headerImage:
      '/pnw-images/https---source-unsplash-com-1600x900--mount-rainier-meadow.jpg',
    groups: [
      {
        title: 'Full Day Excursions',
        cards: [
          {
            title: 'Mount Rainier National Park',
            duration: '8–12 hours',
            location: 'Mount Rainier, Washington',
            description:
              'An alpine day trip built around visitor center stops, scenic drives, and seasonal trail access.',
            image: '/pnw-images/https---source-unsplash-com-1600x900--mount-rainier.jpg',
          },
          {
            title: 'Olympic National Park',
            duration: '10–12 hours',
            location: 'Olympic Peninsula',
            description:
              'A longer outing with flexible routing across coast, rainforest, or mountain viewpoints.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--olympic-national-park.jpg',
          },
          {
            title: 'North Cascades Scenic Route',
            duration: '10–12 hours',
            location: 'North Cascades region',
            description:
              'A mountain-focused highway day with short walks, scenic overlooks, and small-town stops.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--north-cascades.jpg',
          },
          {
            title: 'San Juan Islands Kayaking',
            duration: '8–11 hours',
            location: 'San Juan Islands',
            description:
              'An island itinerary that combines ferry timing with guided paddling windows.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--san-juan-islands-kayak.jpg',
          },
        ],
      },
    ],
  },
  {
    id: 'post-trip',
    navLabel: 'Post-Trip',
    title: 'Post-Trip Extensions',
    description:
      'Additional destinations for attendees extending their stay after the conference concludes.',
    headerImage:
      '/pnw-images/https---source-unsplash-com-1600x900--vancouver-canada-skyli.jpg',
    groups: [
      {
        title: 'Short Trips (1–3 days)',
        cards: [
          {
            title: 'Vancouver',
            duration: '2–3 days',
            location: 'British Columbia, Canada',
            description:
              'A polished urban extension with waterfront districts, parks, and broad transit options.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--vancouver-canada-skyli.jpg',
          },
          {
            title: 'Portland',
            duration: '1–3 days',
            location: 'Oregon, USA',
            description:
              'A flexible city extension by rail, flight, or drive with diverse neighborhood itineraries.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--portland-bridge-cyclin.jpg',
          },
          {
            title: 'Leavenworth',
            duration: '1–2 days',
            location: 'Washington, USA',
            description:
              'A compact mountain town break with seasonal events and walkable downtown streets.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--leavenworth-washington.jpg',
          },
          {
            title: 'Snoqualmie Falls',
            duration: '1 day',
            location: 'Snoqualmie, Washington',
            description:
              'A straightforward regional outing centered on viewpoints and scenic driving routes.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--snoqualmie-falls.jpg',
          },
        ],
      },
      {
        title: 'Cruise Extensions',
        cards: [
          {
            title: 'Alaska Cruise from Seattle',
            duration: '3–7+ days',
            location: 'Departing Seattle',
            description:
              'A post-conference cruise option with multiple itinerary lengths and route structures.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--alaska-cruise-glacier.jpg',
          },
        ],
      },
    ],
  },
]

function ScenicImage({ src, alt, className, fallbackLabel }) {
  const [hasError, setHasError] = useState(false)

  if (hasError || !src) {
    return (
      <div className={`${className} image-fallback`} role="img" aria-label={alt}>
        <span>{fallbackLabel}</span>
      </div>
    )
  }

  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setHasError(true)} />
}

function PlanCard({ card }) {
  return (
    <article className="plan-card">
      <ScenicImage
        src={card.image}
        alt={card.title}
        className="plan-card__image"
        fallbackLabel="Image unavailable"
      />
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
  return (
    <div className="pnw-page">
      <header className="hero">
        <p className="eyebrow">BANA Seattle · Activity Guide</p>
        <h1>Pacific Northwest Conference Activity Planner</h1>
        <p>
          Explore destination options by timeline. Each section is organized for practical planning,
          balancing conference commitments with regional experiences.
        </p>
      </header>

      <nav className="segmented-nav" aria-label="Activity planner sections">
        {pageData.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="segment-link">
            {section.navLabel}
          </a>
        ))}
      </nav>

      <main>
        {pageData.map((section) => (
          <section key={section.id} id={section.id} className="time-section">
            <div className="section-banner">
              <ScenicImage
                src={section.headerImage}
                alt={section.title}
                className="section-banner__image"
                fallbackLabel="Destination image unavailable"
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
    </div>
  )
}
