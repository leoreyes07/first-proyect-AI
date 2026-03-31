import type { NewsArticle, NewsCategory } from '@/types'

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Wolves FC clinches historic victory at Camp Nou',
    excerpt: 'A goal in the 89th minute secured a memorable victory that will live long in the memories of fans.',
    content: `
      <p>In what will be remembered as one of the greatest nights in Wolves FC's history, the team secured a dramatic 2-1 victory against Barcelona at Camp Nou.</p>
      <p>The match seemed destined for a draw until captain Marcus Thompson rose highest in the box to head home a stunning corner kick in the 89th minute.</p>
      <p>"This is what football is all about," said Thompson after the match. "The fans who traveled with us tonight were incredible. This victory belongs to them."</p>
      <p>Manager Antonio Rodriguez praised his team's resilience: "We never gave up. Even when they equalized, we kept believing. This shows the character of this squad."</p>
      <p>The win moves Wolves FC up to third place in the league standings, keeping their Champions League qualification hopes alive.</p>
    `,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
      'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800',
      'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800',
    ],
    date: '2024-03-10',
    category: 'Match',
    readTime: 3,
    author: 'Carlos Martinez',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    tags: ['Barcelona', 'Victory', 'Champions League'],
    featured: true,
  },
  {
    id: '2',
    title: 'New signing joins the first team',
    excerpt: 'The international midfielder arrives from FC Barcelona on a 4-year contract.',
    content: `
      <p>Wolves FC is delighted to announce the signing of Spanish international midfielder Pablo Fernandez from FC Barcelona.</p>
      <p>The 26-year-old has signed a four-year contract with the club and will wear the number 8 shirt.</p>
      <p>"I'm very excited to join Wolves FC," Fernandez said at his press conference. "The project here is very ambitious and I want to be part of it."</p>
      <p>Director of Football James Wilson added: "Pablo is a world-class midfielder who will add creativity and experience to our squad."</p>
      <p>Fernandez has made over 200 appearances in La Liga and won two Copa del Rey titles with Barcelona.</p>
    `,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    date: '2024-03-08',
    category: 'Transfers',
    readTime: 4,
    author: 'Laura Sanchez',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    tags: ['Transfer', 'Signing', 'Midfielder'],
  },
  {
    id: '3',
    title: 'Wolves Arena to host Copa del Rey Final',
    excerpt: 'Our city stadium has been selected to host the national competition final.',
    content: `
      <p>The Royal Spanish Football Federation has officially announced that Wolves Arena will host the Copa del Rey Final.</p>
      <p>This is the first time our stadium will host the prestigious cup final, scheduled for May 25th.</p>
      <p>"This is a tremendous honor for our club and our city," said club president Robert Chen. "We will work tirelessly to ensure this event is a success."</p>
      <p>The 60,000-seat stadium has undergone significant renovations in preparation for hosting major international events.</p>
      <p>Tickets for the final will go on sale next month, with Wolves FC fans receiving a priority allocation.</p>
    `,
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800',
    date: '2024-03-05',
    category: 'Club',
    readTime: 2,
    author: 'Pedro Garcia',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    tags: ['Stadium', 'Copa del Rey', 'Event'],
  },
  {
    id: '4',
    title: 'Exclusive interview with head coach Antonio Rodriguez',
    excerpt: 'In an exclusive sit-down, our head coach discusses tactics, ambitions, and the journey ahead.',
    content: `
      <p><strong>Coach, how would you assess the season so far?</strong></p>
      <p>"We've made significant progress. The team is developing well and the results are starting to reflect our work. But we can't be satisfied - there's always room for improvement."</p>
      
      <p><strong>What's your philosophy when it comes to building a winning team?</strong></p>
      <p>"I believe in creating an environment where players can thrive. Technical ability is important, but character and teamwork are what truly win matches."</p>
      
      <p><strong>How do you handle the pressure of managing Wolves FC?</strong></p>
      <p>"Pressure is part of football at this level. I focus on what I can control - training sessions, game plans, and player development. The rest takes care of itself."</p>
      
      <p><strong>What are the team's ambitions for the remainder of the season?</strong></p>
      <p>"We're fighting for a top-four finish. That's our goal and we're fully focused on achieving it."</p>
    `,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800',
    videoUrl: 'https://www.youtube.com/embed/example',
    date: '2024-03-03',
    category: 'Interviews',
    readTime: 6,
    author: 'Maria Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    tags: ['Interview', 'Coach', 'Tactics'],
  },
  {
    id: '5',
    title: 'Youth academy graduates make first-team debut',
    excerpt: 'Three academy products made their professional debuts in yesterday\'s cup match.',
    content: `
      <p>Wolves FC's youth academy continues to produce talent, with three young players making their first-team debuts in the cup victory.</p>
      <p>Midfielder Jake Thompson (18), defender Luke Williams (19), and forward Daniel Brown (17) all came on in the second half to earn their first minutes in senior football.</p>
      <p>"These boys have worked incredibly hard to get here," said academy director Frank Mitchell. "They represent the future of this club."</p>
      <p>All three players have been part of the academy since the age of 10 and have been standout performers in the youth leagues.</p>
      <p>The club's investment in youth development continues to pay dividends, with over 40% of the current first-team squad having come through the academy.</p>
    `,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800',
    date: '2024-02-28',
    category: 'Academy',
    readTime: 4,
    author: 'Tom Wilson',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    tags: ['Academy', 'Youth', 'Debut'],
  },
  {
    id: '6',
    title: 'Wolves FC launches community outreach program',
    excerpt: 'The club announces a new initiative to support local schools and youth centers.',
    content: `
      <p>Wolves FC is proud to announce the launch of "Wolves in the Community," a comprehensive outreach program aimed at supporting local schools and youth organizations.</p>
      <p>The program will provide:</p>
      <ul>
        <li>Free football equipment to underprivileged schools</li>
        <li>Coaching sessions led by academy staff</li>
        <li>Educational workshops on health and fitness</li>
        <li>Scholarship opportunities for talented young players</li>
      </ul>
      <p>"Football has the power to transform lives," said community director Sarah Brown. "We want to use our platform to make a real difference."</p>
      <p>The club has committed £500,000 annually to the program, which will initially focus on areas within a 10-mile radius of Wolves Arena.</p>
    `,
    image: 'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?w=800',
    date: '2024-02-25',
    category: 'Community',
    readTime: 3,
    author: 'Sarah Brown',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
    tags: ['Community', 'Charity', 'Outreach'],
  },
  {
    id: '7',
    title: 'Season ticket renewals now open for 2024/25',
    excerpt: 'Existing season ticket holders can renew their seats with early bird discounts until April 30.',
    content: `
      <p>Season ticket renewals for the 2024/25 season are now open, with exclusive early bird discounts available until April 30th.</p>
      <p>Key information:</p>
      <ul>
        <li>Early bird discount: 15% off standard pricing</li>
        <li>Deadline for renewal: May 31st</li>
        <li>Payment plans available (up to 6 installments)</li>
        <li>Same-seat guarantee until May 15th</li>
      </ul>
      <p>Members will receive their renewal packets via email this week. Online renewal is the fastest option.</p>
      <p>"We want to make it as easy as possible for our loyal supporters to continue their journey with us," said ticketing director Emma Clarke.</p>
      <p>New season ticket applications will open in June following the renewal period.</p>
    `,
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800',
    date: '2024-02-20',
    category: 'Club',
    readTime: 2,
    author: 'Emma Clarke',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100',
    tags: ['Tickets', 'Season Ticket', 'Membership'],
  },
  {
    id: '8',
    title: 'Match report: Wolves FC 3-0 Victory United',
    excerpt: 'A dominant display saw Wolves FC claim all three points with goals from Thompson, Fernandez, and Silva.',
    content: `
      <p>Wolves FC delivered a masterclass in attacking football, defeating Victory United 3-0 in Saturday's league encounter.</p>
      <p><strong>First half:</strong></p>
      <p>The hosts took control early, with Marcus Thompson opening the scoring in the 23rd minute after a swift counter-attack.</p>
      <p><strong>Second half:</strong></p>
      <p>New signing Pablo Fernandez doubled the lead with a stunning long-range effort in the 67th minute. Substitute Diego Silva completed the scoring in the 84th minute.</p>
      <p>"I'm delighted with the performance," said manager Rodriguez. "We've been working hard in training and it's showing on the pitch."</p>
      <p>The clean sheet was the team's fourth in the last six games, highlighting improved defensive organization.</p>
    `,
    image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800',
    date: '2024-02-17',
    category: 'Match',
    readTime: 4,
    author: 'David Anderson',
    authorAvatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100',
    tags: ['Match Report', 'Victory', 'League'],
  },
  {
    id: '9',
    title: 'Club announces partnership with leading sports brand',
    excerpt: 'A new multi-year kit supplier deal promises cutting-edge technology and sustainable materials.',
    content: `
      <p>Wolves FC is thrilled to announce a strategic partnership with SportTech Global, who will become the club's official kit supplier from the 2024/25 season.</p>
      <p>The agreement includes:</p>
      <ul>
        <li>Custom-designed kits using sustainable materials</li>
        <li>Advanced moisture-wicking technology</li>
        <li>Eco-friendly production processes</li>
        <li>Retail partnership for official merchandise</li>
      </ul>
      <p>"This partnership aligns with our commitment to sustainability," said commercial director Michael Brown. "We're excited about the innovative products we'll be able to offer our fans."</p>
      <p>The new kit range will be unveiled at the start of next season, with pre-orders opening in June.</p>
    `,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    date: '2024-02-14',
    category: 'Club',
    readTime: 3,
    author: 'Michael Brown',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    tags: ['Partnership', 'Kit', 'Commercial'],
  },
  {
    id: '10',
    title: 'Player spotlight: Marcus Thompson\'s journey to captaincy',
    excerpt: 'An in-depth look at how our captain developed from academy hopeful to club legend.',
    content: `
      <p>When Marcus Thompson joined Wolves FC's academy at age 12, few could have predicted the journey that lay ahead.</p>
      <p><strong>Early years:</strong></p>
      <p>Thompson's natural talent was evident from the start, but it was his dedication that set him apart. Academy coaches regularly noted his extra training sessions and professional approach.</p>
      <p><strong>Breakthrough:</strong></p>
      <p>His first-team debut came at 19 in a cup match, and he never looked back. Within three years, he was a regular starter.</p>
      <p><strong>Captaincy:</strong></p>
      <p>At 26, Thompson was named club captain. "It was the proudest moment of my career," he recalls. "This club has given me everything."</p>
      <p>With over 200 appearances and 80 goals, Thompson has become synonymous with Wolves FC.</p>
    `,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800',
    date: '2024-02-10',
    category: 'Interviews',
    readTime: 5,
    author: 'James Wilson',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    tags: ['Player', 'Captain', 'Career'],
  },
  {
    id: '11',
    title: 'Wolves FC 2-2 Draw in thrilling European encounter',
    excerpt: 'A last-minute equaliser ensures Wolves FC remain in the tie ahead of the return leg.',
    content: `
      <p>Wolves FC twice came from behind to secure a 2-2 draw in the first leg of their Europa League quarter-final against German side FC Munich.</p>
      <p><strong>First half:</strong></p>
      <p>Munich took an early lead through Muller, but Thompson equalized with a composed finish before halftime.</p>
      <p><strong>Second half:</strong></p>
      <p>The German side regained the lead midway through the second half. However, in the dying moments, substitute Diego Silva headed home to level the scores.</p>
      <p>"A point away from home in Europe is always a good result," said manager Rodriguez. "But we know we can play much better in the second leg."</p>
      <p>The return fixture at Wolves Arena takes place next Thursday.</p>
    `,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    date: '2024-02-07',
    category: 'Match',
    readTime: 4,
    author: 'Carlos Martinez',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    tags: ['Europa League', 'European', 'Draw'],
  },
  {
    id: '12',
    title: 'Open training session for young fans',
    excerpt: 'Join us for a special training session where young supporters can meet their heroes.',
    content: `
      <p>Wolves FC is hosting an open training session at Wolves Arena on Saturday, March 16th, from 10:00 AM to 2:00 PM.</p>
      <p>Activities include:</p>
      <ul>
        <li>Watch the first team train live</li>
        <li>Meet the players and get autographs</li>
        <li>Mini football tournaments</li>
        <li>Penalty shootout competitions</li>
        <li>Club shop discounts (20% off)</li>
      </ul>
      <p>Tickets are £10 for children and £15 for adults. All proceeds go to the Wolves in the Community foundation.</p>
      <p>Places are limited to 2,000 attendees. Book now to avoid disappointment!</p>
    `,
    image: 'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?w=800',
    date: '2024-02-03',
    category: 'Community',
    readTime: 2,
    author: 'Sarah Brown',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
    tags: ['Event', 'Community', 'Training'],
  },
]

export const newsCategories: NewsCategory[] = ['Match', 'Transfers', 'Club', 'Interviews', 'Academy', 'Community']

export function getNewsById(id: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.id === id)
}

export function getNewsByCategory(category: NewsCategory): NewsArticle[] {
  return newsArticles.filter((article) => article.category === category)
}

export function getFeaturedNews(): NewsArticle | undefined {
  return newsArticles.find((article) => article.featured)
}

export function getLatestNews(limit?: number): NewsArticle[] {
  const sorted = [...newsArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  return limit ? sorted.slice(0, limit) : sorted
}
