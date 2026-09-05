// ── Wedding info ──────────────────────────────────────────────────────────────
const WEDDING = {
  bride: 'May',
  groom: 'Jun Yu',
  dateDisplay: '26 Sep 2026',
  year: 2026,
  month: 8,
  day: 26, // month is 0-indexed (8 = September)
};

// ── Schedule phases ───────────────────────────────────────────────────────────
const phases = [
  { name: 'Getting Ready', range: '3:00 AM – 9:30 AM' },
  { name: 'Tea Ceremony', range: '9:45 AM – 11:30 AM' },
  { name: 'Ceremony', range: '12:00 PM – 1:00 PM' },
  { name: 'Reception', range: '1:00 PM – 3:00 PM' },
];

// ── Schedule events ───────────────────────────────────────────────────────────
// type: 'event' = something happening  |  'task' = someone needs to act
const events = [
  // Getting Ready
  {
    phase: 0,
    type: 'event',
    time: '3:00 AM',
    mins: 180,
    title: "May's makeup begins",
    sub: 'Carlton Hotel · Karyn - 9772 7454 · end ~6.30 AM',
  },
  {
    phase: 0,
    type: 'task',
    time: '5:00 AM',
    mins: 300,
    title: "Call May's mum — confirm ETA",
    assignee: 'Yong Han',
  },
  {
    phase: 0,
    type: 'event',
    time: '5:45 AM',
    mins: 345,
    title: "May's mum makeup begins",
    sub: 'Carlton Hotel · Anna - 9772 7454 · end ~7.00 AM',
  },
  {
    phase: 0,
    type: 'event',
    time: '6:30 AM',
    mins: 390,
    title: "Jy's styling begins",
    sub: '',
  },
  {
    phase: 0,
    type: 'task',
    time: '6:30 AM',
    mins: 390,
    title: 'Prepare items to bring to venue',
    assignee: 'Wei Jie',
    details:
      "• Wedding bands x 2\n• Bridal bouquet\n• Jy's boutonnière\n• Parents' corsages\n• May's shoes\n• Hotel key card\n• Thank you cards\n• Vows cards \n\nIf anything is missing, flag it to Junyu or May.",
  },
  {
    phase: 0,
    type: 'event',
    time: '7:00 AM',
    mins: 420,
    title: 'Photographer arrives at hotel',
    sub: 'Yan Cong - 9772 7454',
  },
  {
    phase: 0,
    type: 'task',
    time: '7:00 AM',
    mins: 420,
    title: "Pass corsages to May's parents",
    assignee: 'Yong Han',
  },
  {
    phase: 0,
    type: 'event',
    time: '7:15 AM',
    mins: 435,
    title: 'Veiling by parents',
    sub: '',
  },
  {
    phase: 0,
    type: 'event',
    time: '7:45 AM',
    mins: 465,
    title: 'Jy picks up May',
    sub: '',
  },
  {
    phase: 0,
    type: 'task',
    time: '8:00 AM',
    mins: 480,
    title: 'Reach National Gallery Singapore',
    assignee: 'Everyone',
  },
  {
    phase: 0,
    type: 'event',
    time: '8:15 AM',
    mins: 495,
    title: 'Start Photoshoot',
    sub: 'National Gallery Singapore',
  },
  {
    phase: 0,
    type: 'event',
    time: '8:45 AM',
    mins: 525,
    title: "Jy's mum makeup begins",
    sub: "Junyu's house · Anna - 9772 7454 · end 10.00 AM",
  },
  {
    phase: 0,
    type: 'event',
    time: '9:15 AM',
    mins: 555,
    title: 'End Photoshoot',
    sub: 'Travel to Secret Haven',
  },
  // Tea Ceremony
  {
    phase: 1,
    type: 'event',
    time: '9:45 AM',
    mins: 585,
    title: 'Arrive at Secret Haven',
    sub: 'Couple + full bridal party',
  },
  {
    phase: 1,
    type: 'event',
    time: '10:00 AM',
    mins: 600,
    title: "May's second makeup begins",
    sub: 'Style change · 1h',
  },
  {
    phase: 1,
    type: 'task',
    time: '10:00 AM',
    mins: 600,
    items: [
      { title: 'Prepare for tea ceremony' },
      { title: 'Table cards placement' },
      { title: 'Reception table decorations' },
      { title: 'Venue decorations' },
      { title: "Pass corsages to JY's parents" },
    ],
  },
  {
    phase: 1,
    type: 'event',
    time: '11:00 AM',
    mins: 660,
    title: "Tea ceremony — Jy's family",
    sub: 'Couple serves tea',
  },
  {
    phase: 1,
    type: 'event',
    time: '11:30 AM',
    mins: 690,
    title: "Tea ceremony — May's family",
    sub: 'Couple serves tea',
  },
  {
    phase: 1,
    type: 'task',
    time: '12:00 PM',
    mins: 690,
    title: 'Pass all angbaos from tea ceremony to Weijie',
    assignee: 'Gin Ling',
  },
  // Ceremony
  {
    phase: 2,
    type: 'event',
    time: '12:00 PM',
    mins: 720,
    title: 'Reception',
    sub: 'Guests begin arriving · Bridal party on welcome duty at entrance',
  },
  {
    phase: 2,
    type: 'event',
    time: '12:00 PM',
    mins: 720,
    title: 'May changes to white gown',
    sub: '',
  },
  {
    phase: 2,
    type: 'event',
    time: '12:25 PM',
    mins: 745,
    title: 'Guests seated',
    sub: 'Emcee announces seating · Registration closes',
  },
  {
    phase: 2,
    type: 'task',
    time: '12:30 PM',
    mins: 750,
    title: 'Pass all angbaos from reception to Weijie',
    assignee: 'Siew Hwee',
  },
  {
    phase: 2,
    type: 'event',
    time: '12:35 PM',
    mins: 755,
    title: 'Solemnisation begins',
    sub: '',
  },
  {
    phase: 2,
    type: 'event',
    time: '1:00 PM',
    mins: 780,
    title: 'Lunch commences',
    sub: '',
  },
  // Reception
  { phase: 3, type: 'event', time: '2:00 PM', mins: 840, title: 'Games', sub: 'TBC' },
  {
    phase: 3,
    type: 'event',
    time: '2:10 PM',
    mins: 850,
    title: 'Video montage',
    sub: '',
  },
  {
    phase: 3,
    type: 'event',
    time: '2:15 PM',
    mins: 855,
    title: 'Couple — table photo rounds',
    sub: 'Couple circulates for guest photos',
  },
  {
    phase: 3,
    type: 'event',
    time: '3:00 PM',
    mins: 900,
    title: 'End of reception',
    sub: 'Final photo · Farewell',
  },
];

// ── Roles ─────────────────────────────────────────────────────────────────────
// `title` used only for special duties (Emcee, Angbao keeper/driver). Fill names later.
const roles = {
  bride: [
    {
      id: 'B1',
      name: 'Gin Ling',
      phone: '8448 0040',
      title: '',
      tasks: [
        'Prepare for tea ceremony',
        'Venue decorations',
        'Handle tea ceremony',
        'Pass Angbaos to Weijie when tea ceremony ends',
      ],
    },
    {
      id: 'B2',
      name: 'Yong Han',
      phone: '9641 0621',
      title: '',
      tasks: [
        "Call May's mum — confirm ETA",
        "Pass corsages to May's parents",
        'Reception table decorations',
        'Handle reception',
      ],
    },
    {
      id: 'B3',
      name: 'Xue Yi',
      phone: '9099 2971',
      title: '',
      tasks: [
        "Handle May's Instagram",
        'Prepare for tea ceremony',
        'Venue decorations',
        'Handle tea ceremony',
      ],
    },
    {
      id: 'B4',
      name: 'Ivy',
      phone: '8595 2788',
      title: '',
      tasks: ['Our DJI IC', 'Prepare for tea ceremony', 'Venue decorations', 'Handle tea ceremony'],
    },
    {
      id: 'B5',
      name: 'Siew Hwee',
      phone: '8388 2861',
      title: '',
      tasks: [
        "Pass corsages to JY's parents before tea ceremony",
        'Reception table decorations',
        'Handle reception',
        'Pass Angbaos to Weijie when reception ends',
      ],
    },
  ],
  groom: [
    {
      id: 'G1',
      name: 'Shijun',
      phone: '9731 6543',
      title: '',
      tasks: ['Table cards placement', 'Venue decorations'],
    },
    {
      id: 'G2',
      name: 'Darren',
      phone: '9727 7684',
      title: '',
      tasks: ['Table cards placement', 'Venue decorations', 'Handle reception'],
    },
    {
      id: 'G3',
      name: 'Richie',
      phone: '8369 1997',
      title: '',
      tasks: ['Table cards placement', 'Venue decorations', 'Handle reception'],
    },
    {
      id: 'G4',
      name: 'Wei Jie',
      phone: '9734 0785',
      title: 'Angbao keeper / Chauffeur',
      tasks: ['Prepare items to bring from hotel', 'Guard angbaos with your life'],
    },
    {
      id: 'G5',
      name: 'Zach',
      phone: '8807 8344',
      title: 'Emcee',
      tasks: ['Handle tea ceremony', 'Yap yap yap'],
    },
  ],
};

// ── Contacts ──────────────────────────────────────────────────────────────────
// iconType: 'coordinator' | 'person' | 'home' | 'mic'
const contacts = [
  {
    name: 'Wedding / Venue coordinator',
    role: 'Ewis · The Secret Haven',
    phone: '97727454',
    iconType: 'coordinator',
  },
  { name: 'Photographer', role: 'Yan Cong', phone: '97727454', iconType: 'person' },
  { name: 'Bride makeup', role: 'Karyn', phone: '97727454', iconType: 'person' },
  { name: "Mum's makeup", role: 'Anna', phone: '97727454', iconType: 'person' },
];

// ── Locations ─────────────────────────────────────────────────────────────────
const locations = [
  {
    tag: 'Getting Ready',
    name: 'Carlton Hotel Singapore',
    address: '76 Bras Basah Road, Singapore 189558',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Carlton%20Hotel%20Singapore',
  },
  {
    tag: 'Wedding',
    name: 'The Secret Haven',
    address: '31 Mount Sophia, Singapore 228480',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=The%20Secret%20Haven%20Singapore',
  },
  {
    tag: 'Photoshoot',
    name: 'National Gallery Singapore',
    address: "1 St Andrew's Road, Singapore 178957",
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=National%20Gallery%20Singapore',
  },
];

// ── Key info at a glance ──────────────────────────────────────────────────────
const glance = [
  { icon: '🪑', label: 'Be seated by', value: '12:20 PM' },
  { icon: '💍', label: 'Solemnisation', value: '12:35 PM' },
  { icon: '🍽️', label: 'Lunch', value: '1:00 PM' },
  { icon: '🎉', label: 'Reception ends', value: '3:00 PM' },
  { icon: '🧧', label: 'Angbao', value: 'Give to Wei Jie' },
  { icon: '🅿️', label: 'Parking ticket', value: 'See Wei Jie' },
  { icon: '📱', label: 'Find your seat', value: 'Scan the QR code' },
  { icon: '🚻', label: 'Toilet', value: 'Left of the screen' },
];
