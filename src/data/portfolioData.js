// ================================================================
//  PORTFOLIO DATA — Edit YOUR info here only. Nothing else to touch.
//  Every section of the site reads from this file.
// ================================================================

// ── PERSONAL INFO ────────────────────────────────────────────────
export const personal = {
  name:      "Mohammad Imran Uddin",
  shortName: "Imran",

  // Typing animation cycles through these in the Hero section
  designations: [
    "Full Stack Web Developer",
    "Next.js Developer",
    "TypeScript Enthusiast",
    "MERN Stack Developer",
    "Open Source Contributor",
  ],

  tagline: "Building clean, scalable web applications that solve real problems.",

  location: "Dhaka, Bangladesh",
  email:    "mohammadimranmiskat@gmail.com",
  phone:    null,   // ✏️ Add your number
  whatsapp: null,   // ✏️ Add your WhatsApp number (or set to null)

  // ✏️ Replace with your real photo path after adding to /src/assets/
  // e.g.  photo: "/src/assets/profile.jpg"
  photo: '/profile.jpg',

  social: {
    github:   "https://github.com/mdimranuddin",
    linkedin: "https://linkedin.com/in/mohammadimranuddin",
    facebook: "https://facebook.com/imran.miskat.3",
  },
};

// ── ABOUT ME ─────────────────────────────────────────────────────
export const about = {
  journey: `I started my programming journey with Python during my first year at BRAC University, 
  where I quickly discovered a passion for building things on the web. What began as academic curiosity 
  turned into a commitment — I completed intensive full stack web engineering training and started 
  shipping real, deployed applications while still a student.`,

  workType: `I enjoy building full stack products that solve everyday problems. 
  From a live grocery price tracker built for everyday shoppers in Bangladesh, to an AI-powered cybersecurity 
  honeypot — I care about writing clean, modular code that is maintainable and scalable. 
  TypeScript is my daily driver, and I love working across the full stack from UI to database.`,

  hobbies: [
    { icon: "💪", label: "Fitness & Gym" },
    { icon: "📖", label: "Reading Tech Blogs" },
    { icon: "🔐", label: "Cybersecurity Research" },
    { icon: "🌐", label: "Open Source Contribution" },
    { icon: "🎮", label: "Gaming" },
  ],

  personality: `I am self-driven, curious, and collaborative. I believe in learning by building — 
  not just watching tutorials. I push commits regularly, I take feedback seriously, and I am always looking for the next problem worth solving.`,
};

// ── SKILLS ───────────────────────────────────────────────────────
export const skills = {
  frontend: [
    { name: "HTML5",       level: 90 },
    { name: "CSS3",        level: 85 },
    { name: "JavaScript",  level: 85 },
    { name: "TypeScript",  level: 80 },
    { name: "React.js",    level: 82 },
    { name: "Next.js",     level: 80 },
    { name: "Tailwind CSS",level: 88 },
  ],
  backend: [
    { name: "Node.js",    level: 75 },
    { name: "Express.js", level: 75 },
    { name: "MongoDB",    level: 78 },
    { name: "REST API",   level: 80 },
    { name: "BetterAuth", level: 70 },
    { name: "Python",     level: 72 },
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "VS Code",      level: 90 },
    { name: "Docker",       level: 60 },
    { name: "Vercel",       level: 80 },
    { name: "Figma",        level: 60 },
    { name: "Postman",      level: 72 },
  ],
};

// ── EDUCATION ────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree:      "B.Sc. in Computer Science & Engineering",
    institution: "BRAC University",
    location:    "Dhaka, Bangladesh",
    period:      "Feb 2023 – Present",
    status:      "Ongoing",
    courses:     "Data Structures & Algorithms, OOP, Database Management Systems, Software Engineering, Computer Networks, Numerical Methods, Engineering Mathematics",
    logo:        null,  // ✏️ Add institution logo path if you have one
  },
  {
    id: 2,
    degree:      "Higher Secondary Certificate (HSC) — Science",
    institution: "Chittagong Government Model School & College",
    location:    "Chittagong, Bangladesh",
    period:      "Jun 2019 – Feb 2022",
    status:      "Completed",
    courses:     "Physics, Chemistry, Mathematics, Biology",
    grade:       "Grade: A+",
    logo:        null,
  },
];

// ── EXPERIENCE ───────────────────────────────────────────────────
// ✏️ Add your real experience here when you have one.
// Currently shows open-source work as experience.
export const experience = [
  {
    id: 1,
    title:    "Open Source Developer",
    company:  "Self-initiated (GitHub)",
    period:   "May 2026 – Present",
    type:     "Open Source",
    location: "Dhaka, Bangladesh (Remote)",
    points: [
      "Developed and published AI-Adaptive Honeypot — MIT-licensed cybersecurity tool using Python, Docker and Groq API for LLM-based attacker behavior prediction.",
      "Built and deployed Bazar Dor — a full stack grocery price tracker in TypeScript and Next.js, live on Vercel.",
      "Maintained active GitHub profile with 100+ contributions across TypeScript, JavaScript and Python repositories.",
      "Built BookNook — a full-stack online library with a Next.js client, a JWT-protected Express API and MongoDB, deployed on Vercel.",
    ],
  },
];

// ── PROJECTS ─────────────────────────────────────────────────────
// ✏️ Edit project details, add real image paths, and update live/repo links.
export const projects = [
  {
    id: 1,
    slug:        "bazar-dor",
    title:       "Bazar Dor — Grocery Price Tracker",
    tagline:     "Bangladeshi grocery prices, live and compared.",
    image:       "/bazar-dor.png",
    techStack:   ["Next.js", "TypeScript", "MongoDB", "BetterAuth", "Tailwind CSS", "Vercel"],
    description: `A live, full stack web application that tracks and compares daily grocery prices 
    across Bangladesh. Built to solve a real problem — helping everyday Bangladeshis navigate rising 
    grocery costs. Features secure user authentication via BetterAuth, a MongoDB database, 
    and is deployed live on Vercel.`,
    liveLink:    "https://bazar-dor-alpha-ten.vercel.app",
    repoLink:    "https://github.com/mdimranuddin/bazar-dor",
    features: [
      "Real-time grocery price tracking and comparison across Bangladesh",
      "Secure user authentication with BetterAuth and session management",
      "MongoDB database with structured data modeling via Mongoose",
      "Fully responsive Bengali-language UI with Tailwind CSS and DaisyUI",
      "Deployed live on Vercel with continuous deployment from GitHub",
    ],
    challenges: [
      "Handling multi-source price data and keeping it consistent across different categories.",
      "Implementing secure auth flow with BetterAuth in a Next.js App Router setup.",
      "Building a fully Bengali-friendly responsive UI with proper font rendering.",
    ],
    improvements: [
      "Add price history charts to show inflation trends over time.",
      "Add user-submitted price reports with moderation.",
      "Build a mobile app using React Native.",
    ],
  },
  {
    id: 2,
    slug:        "ai-adaptive-honeypot",
    title:       "AI-Adaptive Honeypot",
    tagline:     "Predicting attackers before they strike.",
    image:       "/honeypot.png",
    techStack:   ["Python", "Docker", "Groq API", "Pydantic", "LLM"],
    description: `An open-source cybersecurity tool that deploys an adaptive honeypot to capture 
    and analyze attacker behavior, then uses LLM-based classification powered by Groq API 
    to predict the attacker's next actions. Fully containerized with Docker. MIT licensed.`,
    liveLink:    "https://mdimranuddin.github.io/ai-adaptive-honeypot/dashboard.html",
    repoLink:    "https://github.com/mdimranuddin/ai-adaptive-honeypot",
    features: [
      "Captures and logs real attacker interactions via a honeypot environment",
      "Uses Groq API and LLM classification to predict next attacker actions",
      "Fully containerized with Docker for portable, easy deployment",
      "Open-source under MIT License — available for community contribution",
    ],
    challenges: [
      "Integrating LLM classification with low-latency real-time attack data.",
      "Containerizing the full honeypot stack so it runs on any machine via Docker.",
      "Tuning Groq API prompts to accurately classify different attack patterns.",
    ],
    improvements: [
      "Add real-time updates and alerts to the dashboard for attack logs and predictions.",
      "Integrate with SIEM tools for enterprise-level deployment.",
      "Add support for multiple honeypot protocols beyond the current implementation.",
    ],
  },
  {
    id: 3,
    slug:        "dev-stack-builder",
    title:       "Dev Stack Builder",
    tagline:     "Explore, compare, and build your ideal tech stack.",
    image:       "/devstack.png",
    techStack:   ["React", "TypeScript", "Vite", "Tailwind CSS", "JSON"],
    description: `A modern web application that helps developers explore, compare and build their 
    ideal technology stack. Browse and filter a curated library of developer tools and technologies, 
    then build and export a complete custom stack. Built with React, TypeScript and Vite for 
    fast performance.`,
    liveLink:    "https://mdimranuddin.github.io/dev-stack-builder",
    repoLink:    "https://github.com/mdimranuddin/dev-stack-builder",
    features: [
      "Browse and filter a curated library of developer tools and technologies",
      "Build and visualize a complete custom tech stack side by side",
      "Fast performance powered by Vite build tool",
      "Clean, fully responsive UI with Tailwind CSS",
    ],
    challenges: [
      "Designing a flexible data structure for categorizing diverse tech tools.",
      "Building efficient search/filter that works well on mobile without extra libraries.",
    ],
    improvements: [
      "Allow users to save and share their custom stacks via a unique URL.",
      "Add community voting on technology recommendations.",
      "Build a tech stack compatibility checker.",
    ],
  },
  {
    id: 4,                           // must be a new number, not used by other projects
    slug:        "booknook",         // used in the URL: /project/booknook
    title:       "BookNook",
    tagline:     "📚 A small online library: add a book, borrow a book, return a book.",
    image:       "/booknook.png",
    techStack:   ["Next.js", "Express.js", "MongoDB", "BetterAuth", "JWT", "Tailwind CSS", "DaisyUI", "Framer Motion"],
    description: `BookNook is a full-stack online library where readers share books and borrow them for 7 days. It solves the problem of tracking who has which book, with live copy counts and no double borrowing. It is built for small communities such as classrooms, clubs and friend groups.`,
    liveLink:    "https://booknook-client-rho.vercel.app",
    repoLink:    "https://github.com/mdimranuddin/booknook-client",
    features: [
      "Email and Google login with BetterAuth, plus private routes that bring users back to the page they wanted",
      "Add, edit and delete books with image upload, and only the owner can change a book",
      "Smart borrowing: copies go down and up automatically, \"Not Available\" at 0 copies, and no double borrow",
      "Express API with 8 REST routes, where adding, editing, deleting and borrowing are protected by JWT",
      "Dark and light mode, a floating 3D book hero, tilt cards and Framer Motion animations",
    ],
    challenges: [
      "Connecting two separate apps securely: the Next.js session cookie does not reach the Express server, so I used a signed JWT and verified it on the server with the public keys",
      "Google login failed with an account-not-linked error when the same email already existed, so I enabled account linking for trusted providers",
      "Deploying two projects with many environment variables: I had to match the login URLs, Google redirect links and server settings on Vercel, and move the database to its own user so no secret was shared",
    ],
    improvements: [
      "Add forgot-password and email verification",
      "Add search, category filters and pagination on the All Books page",
      "Add overdue reminders and a borrow history page",
      "Add automated tests for the API routes",
    ],
  },
];

// ── CERTIFICATIONS ───────────────────────────────────────────────
export const certifications = [
  { id: 1, name: "Python Development and Python Programming Fundamentals", issuer: "Udemy", date: "Aug 2024" },
  { id: 2, name: "Complete Python Programming for Beginners",              issuer: "Udemy", date: "Aug 2024" },
  { id: 3, name: "Data Science Tools: Basic of Statistics",                issuer: "Udemy", date: "Aug 2024" },
  { id: 4, name: "Online Safety",                                          issuer: "Grameenphone Ltd", date: "Aug 2024" },
];
