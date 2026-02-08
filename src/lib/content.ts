export const tickerMessages = [
  'NOW BOOKING Q1 & Q2 2026 — CORPORATE · DOCUMENTARY · LIVE EVENT',
  '30 YEARS BEHIND THE LENS. STILL ROLLING.',
  'AVAILABLE FOR SCREAM 7 PREMIERE COVERAGE — SERIOUS INQUIRIES ONLY — I WILL NOT BE GOING BACK TO WOODSBORO',
  '"BEST FREELANCE VIDEOGRAPHER IN THE TRI-STATE AREA" — GALE WEATHERS, PROBABLY',
  "NEW BLOG POST: WHY I'M NOT WATCHING SCREAM 7 (BUT I HOPE IT DOES WELL)",
  'REMINDER: KENNY DOES NOT DO FOUND FOOTAGE PROJECTS. STOP ASKING.',
] as const;

export const homepageIntro =
  "Kenny Jones has spent three decades capturing stories that matter — from Fortune 500 product launches to grassroots documentaries, from sold-out live events to breaking news coverage. Based on the East Coast and available worldwide, Kenny brings a veteran's eye and a survivor's work ethic to every shoot. If you need someone who won't flinch under pressure, you've found your guy.";

export const aboutBioParagraphs = [
  'Kenneth "Kenny" Jones is a freelance videographer and director of photography with over 30 years of professional experience in news broadcasting, documentary filmmaking, corporate production, and live event coverage.',
  "Kenny got his start in broadcast journalism in the early '90s as a field cameraman for a regional news network, where he worked alongside several prominent journalists on high-profile stories. In 1996, he gained — and this is the word his therapist says he should use — notoriety following an incident during a field assignment in Woodsboro, California, which resulted in a neck injury and an extremely complicated relationship with the true crime community. He recovered. He moved on. His neck healed. Mostly.",
  "In the three decades since, Kenny has built a quietly excellent career that most people ignore in favor of asking about the scar. He has shot corporate campaigns for clients across the Fortune 500, produced documentary segments that have aired on major streaming platforms, and provided live event coverage for conferences, concerts, and galas nationwide. He is technically proficient, creatively flexible, and pathologically reliable. He shows up. He does the work. He goes home alive. That last part used to be a given in this industry, but Kenny doesn't take it for granted anymore.",
] as const;

export const aboutSidebarDetails = [
  { label: 'Based in', value: "Somewhere That Isn't Woodsboro" },
  { label: 'Experience', value: '30+ Years' },
  { label: 'Specialties', value: 'News, Documentary, Corporate, Events' },
  { label: 'Availability', value: 'Immediate' },
  { label: 'Fun Fact', value: 'Has never owned a Ghostface mask. Not even for Halloween.' },
] as const;

export const scarFaqQuestion = 'What happened to your neck?';

export const scarFaqAnswers = [
  'In 1996, I sustained a laceration to the neck while on assignment as a field cameraman during the Woodsboro murders in Woodsboro, California. I received emergency medical treatment and made a full recovery. I am grateful to the first responders and medical professionals who treated me, and I have since dedicated my career to the craft of visual storytelling.',
  "I got cut. On a job. In the '90s. It healed. I'm fine. Can we talk about my showreel?",
  "Look — I have over 500 completed projects, multiple industry recognitions, and three decades of experience. I once shot an entire 14-camera live broadcast with zero downtime during a hurricane. But sure, let's talk about the thing that happened for 45 seconds in 1996.",
  'No.',
  "Here's the Wikipedia article for the 1996 Woodsboro murders. Read it, get it out of your system, and then come back when you're ready to talk about B-roll rates.",
] as const;

export type PortfolioCategory = 'Corporate' | 'Documentary' | 'Live Event' | 'News' | 'Wedding';

export type PortfolioItem = {
  title: string;
  category?: PortfolioCategory;
  date: string;
  description: string;
  color: string;
  corrupted?: boolean;
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'TechNova Global Summit 2024',
    category: 'Corporate',
    date: 'MAR 15 2024',
    description: "Full event coverage for TechNova's annual global summit. 3-camera setup, same-day highlight reel, executive interview series.",
    color: '#1a365d',
  },
  {
    title: '"Still Waters" Documentary Short',
    category: 'Documentary',
    date: 'AUG 22 2023',
    description:
      'Award-nominated short documentary exploring the revival of independent fisheries along the Gulf Coast. Shot on location over 14 days.',
    color: '#2d3748',
  },
  {
    title: 'Meridian Music Festival',
    category: 'Live Event',
    date: 'JUN 08 2023',
    description: 'Multi-day festival coverage including mainstage performances, backstage artist interviews, and fan experience montage.',
    color: '#553c9a',
  },
  {
    title: 'Channel 8 News — Hurricane Mara Coverage',
    category: 'News',
    date: 'SEP 30 2022',
    description:
      "Live field reporting during Hurricane Mara. 14-camera broadcast, zero downtime, 72-hour continuous coverage. Yes, the wind was that bad. No, I didn't leave.",
    color: '#9b2c2c',
  },
  {
    title: 'The Hargrove-Patel Wedding',
    category: 'Wedding',
    date: 'OCT 14 2023',
    description:
      'Full-day coverage of a 200-guest celebration in Savannah, Georgia. Ceremony, reception, and a surprisingly emotional father-of-the-bride speech.',
    color: '#744210',
  },
  {
    title: 'DataStream Brand Launch',
    category: 'Corporate',
    date: 'JAN 20 2024',
    description:
      "Product launch video package for DataStream's enterprise platform. Studio shoot, motion graphics integration, executive testimonials.",
    color: '#1a365d',
  },
  {
    title: '"Voices Carry" — Podcast Promo Series',
    category: 'Documentary',
    date: 'NOV 03 2022',
    description:
      'Promotional video series for a narrative podcast network. Cinematic interview setups, location B-roll, audiogram assets for social.',
    color: '#2d3748',
  },
  {
    title: 'Woodsboro News Van — Raw Footage',
    date: 'SEP 25 1996',
    description: 'CORRUPTED · UNDER LEGAL REVIEW',
    color: '#000000',
    corrupted: true,
  },
];

export type ServiceItem = {
  icon: string;
  name: string;
  description: string;
  price: string;
  retired?: boolean;
  note?: string;
};

export const serviceItems: ServiceItem[] = [
  {
    icon: '🎬',
    name: 'Corporate Video Production',
    description:
      "From brand films to internal communications, Kenny delivers polished corporate video that actually holds people's attention. Includes pre-production planning, multi-camera capture, and post-production editing.",
    price: 'Starting at $2,500/day',
  },
  {
    icon: '🎤',
    name: 'Live Event Coverage',
    description:
      "Concerts, conferences, galas, product launches — if it's happening live, Kenny's there with a camera and a plan. Multi-camera setups, same-day highlights, and full post-event packages available.",
    price: 'Starting at $1,800/day',
  },
  {
    icon: '🎞️',
    name: 'Documentary Consulting & Production',
    description:
      "From concept development to final cut, Kenny brings a journalist's instinct and a filmmaker's eye to documentary projects of any scale. Long-form, short-form, series — he's done it all.",
    price: 'Starting at $3,000/day',
  },
  {
    icon: '📡',
    name: 'News & Broadcast Freelance',
    description:
      "Three decades of broadcast experience means Kenny can slot into any newsroom workflow. Field camera, studio setup, live remote — he's fluent in all of it.",
    price: 'Starting at $2,000/day',
  },
  {
    icon: '💍',
    name: 'Wedding & Celebration Videography',
    description:
      "Kenny has filmed over 100 weddings and has cried at approximately 60% of them. He brings a documentary sensibility to life's biggest moments — no cheesy drone shots, just honest, beautiful footage.",
    price: 'Starting at $2,200/day',
  },
  {
    icon: '⚠️',
    name: 'Hazard Pay',
    description:
      "For assignments involving elevated personal risk, hostile environments, or any situation where the phrase \"it's probably fine\" is being used too liberally.",
    price: '$5,000/day',
    retired: true,
    note: "No longer applicable. Don't ask.",
  },
];

export const willNotAcceptDisclaimer =
  'NOTICE TO PROSPECTIVE CLIENTS: Kenneth Jones reserves the right to decline any engagement involving, but not limited to: masks of any kind (Halloween, surgical, Guy Fawkes, Venetian, or "ironic"), voice-altering devices or apps, requests to "just keep rolling no matter what," basement or attic setups with limited egress, anyone who opens a conversation with "what\'s your favorite scary movie," found footage projects, productions where the crew-to-talent ratio is less than 1:1, any shoot scheduled between 10 PM and 5 AM in a location without cellular service, and/or any gig where the phrase "it\'s probably nothing" is used to describe on-site conditions. This policy has been in effect since January 1, 1997 and is non-negotiable.';

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  dateStamp: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Kenny is one of the most dependable camera operators I've ever worked with. During our time together at the station, he consistently delivered footage that elevated my reporting — which, as anyone who knows my work can tell you, is already quite elevated. He handles pressure remarkably well, all things considered. I genuinely recommend him for any project that doesn't require me to also be on camera, because at that point you should probably just hire my current team.",
    name: 'Gale Weathers',
    title: 'Journalist, Author, Television Personality',
    dateStamp: 'APR 18 2025',
  },
  {
    quote:
      'Kenny and his team provided outstanding video production support for our annual global summit. The deliverables were on time, on budget, and exceeded our expectations. The highlight reel was particularly effective in our post-event marketing campaigns. Would absolutely hire again.',
    name: 'Mike Chen',
    title: 'VP of Marketing, TechNova Inc.',
    dateStamp: 'JAN 09 2025',
  },
  {
    quote:
      "Oh my GOD, working with Kenny was incredible. Like, the man has SEEN things, you know? And you can feel it in his work — there's this rawness, this almost haunted quality to the way he frames a shot. I kept telling him, 'Kenny, you NEED to come on the podcast,' and he kept saying no, but the offer stands FOREVER. His promo videos for our show were absolutely killer — and I mean that in the most complimentary, non-triggering way possible. Legend.",
    name: 'Darla Voss',
    title: 'Host, "Cold Open" Podcast',
    dateStamp: 'MAY 27 2024',
  },
  {
    quote: "He showed up. He didn't die. 5 stars.",
    name: 'Anonymous',
    title: 'Woodsboro, CA',
    dateStamp: 'OCT 31 2023',
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  signOff?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-im-not-watching-scream-7',
    title: "Why I'm Not Watching Scream 7 (But I Hope It Does Well)",
    date: 'February 1, 2026',
    excerpt: 'On the upcoming seventh installment of the franchise that made me a footnote.',
    content: [
      "The seventh Scream movie comes out on February 27th. People have been asking me about it since the trailer dropped. Here are my thoughts, organized for efficiency because I've had this conversation approximately four hundred times.",
      "No, I haven't seen the trailer. No, I don't plan to see the movie. No, I don't have \"insider information\" about the plot. No, I was not consulted. No, I'm not bitter about not being consulted. Okay — I'm a little bitter about not being consulted.",
      "Here's the thing: I don't have a problem with the Scream franchise. Those movies have brought a lot of joy to a lot of people. Wes Craven was a genius. Kevin Williamson is a hell of a writer. And listen, the fact that they've kept this thing going for thirty years is genuinely impressive from a business perspective.",
      "What I have a problem with is being a footnote. In the movie, my character — who, for the record, has a name — gets maybe fifteen minutes of screen time before being reduced to a plot device in a news van. In real life, I'm a working professional with three decades of credits and a client list that would make most videographers jealous. But every October, my inbox fills up with people asking if I'll do interviews about \"what really happened.\"",
      "What really happened is that I got hurt on the job, I healed, and I went back to work. That's it. That's the whole story.",
      "So no, I won't be watching Scream 7. But I hope it's great. I hope it makes a billion dollars. I hope Gale finally gets an Emmy in the movie, because lord knows the real Gale thinks she deserves one. And I hope — sincerely — that no cameramen were harmed in the making of this film.",
      "Now if you'll excuse me, I have a corporate shoot to prep for. It pays better and nobody dies.",
    ],
    signOff: '— Kenny',
  },
  {
    slug: 'best-camera-bags',
    title: "The 5 Best Camera Bags for Professionals Who've Seen Some Shit",
    date: 'January 15, 2026',
    excerpt: 'A practical guide to camera bags, from someone who values both gear protection and rapid egress.',
    content: [
      "After thirty years in the field, I've used just about every camera bag on the market. Here's what I look for: durability, organization, quick access to gear, and — this one's personal — the ability to grab it and move fast if things go sideways. Not that things go sideways anymore. But old habits.",
      '1. Peak Design Everyday Backpack V3 — $290\nThe gold standard. Clean design, magnetic latches that open silently (useful in more situations than you\'d think), and enough compartment options to satisfy the most obsessive gear organizer. It\'s also comfortable for 12-hour shoot days, which is when most of my best work happens and most of my worst decisions used to happen.',
      "2. Tenba Axis V2 — $250\nBuilt like a tank. I once dropped this off a tailgate onto asphalt and the only casualty was my pride. Interior dividers are customizable, exterior MOLLE webbing lets you clip on extras. It's the bag I grab when the shoot might get \"interesting,\" a word I use in the civilian sense now.",
      "3. Lowepro ProTactic 450 AW II — $230\nThe workhorse. Four access points means you can pull gear from any angle, which I appreciate both as a practical feature and as someone who likes to know his exit options. Weather-sealed, which matters when you're shooting in conditions that reasonable people would avoid.",
      "4. Think Tank Photo Airport Roller — $380\nFor travel gigs. TSA-friendly, fits in overhead bins, rolls smooth. I've taken this through thirty-something airports and the only time it got flagged was because I'd forgotten a multi-tool in the bottom pocket. That's on me.",
      "5. Domke F-2 Original — $190\nOld school. Canvas and brass. No frills. This is the bag I use when I want to move light and fast, which honestly is most of the time now. There's something about a bag with no zippers — just flaps and buckles — that appeals to a guy who learned the hard way that every second of access time counts.",
      "Whatever you choose, buy quality, protect your gear, and always — always — know where the exits are. That's just good practice for anyone in field production.",
    ],
    signOff: '— Kenny',
  },
  {
    slug: 'open-letter-to-podcasters',
    title: 'An Open Letter to True Crime Podcasters: Please Stop Calling Me',
    date: 'December 20, 2025',
    excerpt: "I'm going to say this once. Okay, I've said it before. But this time I mean it.",
    content: [
      'Dear True Crime Podcast Community,\n\nMy name is Kenny Jones. I am a professional videographer. I am not a "survivor personality." I am not a "primary source." I am not your Season 3 premiere interview. Please stop calling me.',
      'In the past year alone, I have received inquiries from no fewer than twenty-three podcasts, four YouTube channels, two TikTok "investigators," and one person who described themselves as a "murder influencer," which is a phrase that should not exist.',
      'I understand the appeal. Woodsboro is catnip for the true crime community, and I get that having an actual person who was there adds "authenticity" to your content. But here\'s what I need you to understand: I am not interested in reliving the worst day of my professional career so that you can boost your download numbers between ad reads for mattresses and meal kits.',
      'Some specific responses to specific requests I\'ve received:\n\n"Would you be willing to walk us through the timeline of that night?"\nNo.\n\n"We\'d love to have you on for a casual, no-pressure conversation."\nThere is no such thing as a "casual" conversation about the time someone tried to kill me.\n\n"We\'ll donate a portion of proceeds to a charity of your choice."\nThat\'s actually the most reasonable offer I\'ve gotten, and the answer is still no.\n\n"What if we came to you?"\nAbsolutely not. I moved for a reason.\n\n"Can you at least confirm some details about the layout of the news van?"\nWhy? What are you building?',
      'I wish you all well. I hope your podcasts thrive. I hope you find the guests who want to share their stories. I am not one of them. Please update your databases accordingly.',
      'Professionally yours,\nKenny Jones\n\nP.S. — If your podcast is called "Cold Open," I have already said no to you six times, Darla. The answer has not changed.',
    ],
  },
];

export const contactSuccessMessage =
  'Thanks for reaching out. Kenny will review your inquiry and get back to you within 48 hours. If this is an emergency, please call 911 — not Kenny. Kenny is not equipped for emergencies. Not anymore.';

export const contactSidebarNote =
  "For press inquiries about Woodsboro, the answer is no. For everything else, I'd love to hear from you.";

export const footerText = '© 2026 Kenny Jones. All rights reserved. All footage property of Kenneth Jones Productions LLC.';
export const footerCredit = 'Site designed by someone who is definitely not Ghostface™';
