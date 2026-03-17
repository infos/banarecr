import './PNWExperiencePage.css'

const pageData = [
  {
    id: 'during',
    navLabel: 'During',
    title: 'During the Conference',
    description:
      'Short, practical options attendees can fit around conference sessions and evening plans.',
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
            description: 'Flat route with views, piers, and easy food stops near downtown.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--seattle-waterfront.jpg',
          },
          {
            title: 'Pike Place + Downtown',
            duration: '1–2 hours',
            location: 'Pike Place Market and Downtown Seattle',
            description:
              'A short loop through market highlights, central retail streets, and public art.',
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
            location: 'Seattle Central Waterfront',
            description:
              'Scheduled harbor cruise with skyline views and narrated context on local landmarks.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--seattle-ferry.jpg',
          },
          {
            title: 'Seattle MTB Trail Ride',
            duration: '3–5 hours',
            location: 'Regional trails near Seattle',
            description:
              'Guided or self-planned mountain bike route for attendees seeking outdoor activity.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--seattle-mountain-bikin.jpg',
          },
          {
            title: 'Seattle Highlights',
            duration: '3–4 hours',
            location: 'Seattle Center and Downtown',
            description:
              'Broad city sampler including observation points, neighborhoods, and transit access.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--space-needle.jpg',
          },
        ],
      },
      {
        title: 'Flexible (2–4 hours self-paced)',
        cards: [
          {
            title: 'Seattle CityPASS Attractions',
            duration: '2–4 hours (flexible)',
            location: 'Multiple Seattle attractions',
            description:
              'Pick one or more included attractions based on open hours and your conference schedule.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--space-needle.jpg',
          },
          {
            title: 'Museum / Market / Waterfront Mix',
            duration: '2–4 hours (self-paced)',
            location: 'Downtown Seattle core',
            description:
              'Build a custom sequence of museum time, market stops, and waterfront walking.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--seattle-waterfront.jpg',
          },
        ],
      },
    ],
  },
  {
    id: 'pre-trip',
    navLabel: 'Pre-Trip',
    title: 'Pre-Trip (Full Day)',
    description:
      'Full-day options for attendees arriving early and planning one substantial outing.',
    headerImage:
      '/pnw-images/https---source-unsplash-com-1600x900--mount-rainier-meadow.jpg',
    groups: [
      {
        title: 'Full Day',
        cards: [
          {
            title: 'Mount Rainier National Park',
            duration: '8–12 hours',
            location: 'Mount Rainier area, Washington',
            description:
              'Day trip focused on alpine scenery, visitor centers, and seasonal trail access.',
            image: '/pnw-images/https---source-unsplash-com-1600x900--mount-rainier.jpg',
          },
          {
            title: 'Olympic National Park',
            duration: '10–12 hours',
            location: 'Olympic Peninsula, Washington',
            description:
              'Longer excursion with coast, forest, or mountain stops depending on route conditions.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--olympic-national-park.jpg',
          },
          {
            title: 'North Cascades',
            duration: '10–12 hours',
            location: 'North Cascades region, Washington',
            description:
              'Scenic highway day with mountain viewpoints, short trails, and small-town stops.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--north-cascades.jpg',
          },
          {
            title: 'San Juan Kayaking',
            duration: '8–11 hours',
            location: 'San Juan Islands, Washington',
            description:
              'Island-focused day that combines ferry timing with guided paddling windows.',
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
    title: 'Post-Trip (Extensions)',
    description:
      'Additional travel options for attendees extending their stay after the conference.',
    headerImage:
      '/pnw-images/https---source-unsplash-com-1600x900--vancouver-canada-skyli.jpg',
    groups: [
      {
        title: 'Short Trips (1–3 days)',
        cards: [
          {
            title: 'Vancouver',
            duration: '2–3 days',
            location: 'Vancouver, British Columbia',
            description:
              'Urban extension with parks, waterfront districts, and cross-border transit options.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--vancouver-canada-skyli.jpg',
          },
          {
            title: 'Portland',
            duration: '1–3 days',
            location: 'Portland, Oregon',
            description:
              'City extension accessible by rail, flight, or drive with flexible neighborhood planning.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--portland-bridge-cyclin.jpg',
          },
          {
            title: 'Leavenworth',
            duration: '1–2 days',
            location: 'Leavenworth, Washington',
            description:
              'Mountain town trip with seasonal events, trails, and compact downtown walking routes.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--leavenworth-washington.jpg',
          },
          {
            title: 'Snoqualmie Falls',
            duration: '1 day',
            location: 'Snoqualmie, Washington',
            description:
              'Simple regional outing centered on viewpoints and nearby scenic driving corridors.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--snoqualmie-falls.jpg',
          },
        ],
      },
      {
        title: 'Cruises (3–7+ days)',
        cards: [
          {
            title: 'Alaska Cruise from Seattle',
            duration: '3–7+ days',
            location: 'Departing Seattle, Washington',
            description:
              'Post-conference cruise extension with itinerary lengths varying by route and line.',
            image:
              '/pnw-images/https---source-unsplash-com-1600x900--alaska-cruise-glacier.jpg',
          },
        ],
      },
    ],
  },
]

function PlanCard({ card }) {
  return (
    <article className="plan-card">
      <img src={card.image} alt={card.title} className="plan-card__image" loading="lazy" />
      <div className="plan-card__content">
        <h4>{card.title}</h4>
        <p className="meta">
          <strong>Duration:</strong> {card.duration}
        </p>
        <p className="meta">
          <strong>Location:</strong> {card.location}
        </p>
        <p>{card.description}</p>
        <button type="button" className="placeholder-btn">
          Link placeholder
        </button>
      </div>
    </article>
  )
}

export default function PNWExperiencePage() {
  return (
    <div className="pnw-page">
      <header className="hero">
        <p className="eyebrow">BANA Conference Planning</p>
        <h1>Pacific Northwest Activity Planner</h1>
        <p>
          Use this page to compare options by time window: during the conference, before the
          conference, and after the conference.
        </p>
      </header>

      <nav className="chip-nav" aria-label="Section navigation">
        {pageData.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="chip-link">
            {section.navLabel}
          </a>
        ))}
      </nav>

      <main>
        {pageData.map((section) => (
          <section key={section.id} id={section.id} className="time-section">
            <div className="section-header">
              <img src={section.headerImage} alt={section.title} className="section-header__image" />
              <div>
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
