export interface Book {
  title: string;
  author: string;
  year: string;
  href: string;
  excerpt: string;
}

const rawBooks: Book[] = [
  {
    title: "Take Me to Your Leader: Perspectives on Your First Alien Encounter",
    author: "Neil deGrasse Tyson",
    year: "2026",
    href: "https://www.goodreads.com/book/show/246898797",
    excerpt: "America’s favorite astrophysicist has written the most entertaining and universally appealing book of his stellar career: a practical guide for dealing with Alien visitors, an exploration..."
  },
  {
    title: "Tiny Experiments: How to Live Freely in a Goal-Obsessed World",
    author: "Anne-Laure Le Cunff",
    year: "2025",
    href: "https://www.goodreads.com/book/show/214268997",
    excerpt: "\"I loved this profound, practical, and generous book.\"—Oliver Burkeman A transformative guide to rethinking our approach to goals, creativity, and life itself from a neuroscientist and..."
  },
  {
    title: "Blood: The Science, Medicine, and Mythology of Menstruation",
    author: "Jennifer Gunter",
    year: "2024",
    href: "https://www.goodreads.com/book/show/75496481",
    excerpt: "Dr. Jen Gunter fights myths and fear-mongering with real science, inclusive facts, and shame-free advice on the topic that impacts more than 72 million Americans every month: menstruation."
  },
  {
    title: "If I Go Missing",
    author: "Leslie Wolfe",
    year: "2024",
    href: "https://www.goodreads.com/book/show/200566080",
    excerpt: "If you’re reading this, I’ve gone missing."
  },
  {
    title: "Nexus: A Brief History of Information Networks from the Stone Age to AI",
    author: "Yuval Noah Harari",
    year: "2024",
    href: "https://www.goodreads.com/book/show/204927599",
    excerpt: "From the author of Sapiens comes the groundbreaking story of how information networks have made, and unmade, our world."
  },
  {
    title: "The Singularity Is Nearer: When We Merge with AI",
    author: "Ray Kurzweil",
    year: "2024",
    href: "https://www.goodreads.com/book/show/57629136",
    excerpt: "The noted inventor and futurist's successor to his landmark book The Singularity Is Near explores how technology will refashion the human race in the decades to come Since it was first..."
  },
  {
    title: "Outlive: The Science and Art of Longevity",
    author: "Peter Attia",
    year: "2023",
    href: "https://www.goodreads.com/book/show/136356633",
    excerpt: "The Science and Art of Longevity"
  },
  {
    title: "End Times: Elites, Counter-Elites, and the Path of Political Disintegration",
    author: "Peter Turchin",
    year: "2023",
    href: "https://www.goodreads.com/book/show/62926960",
    excerpt: "“Peter Turchin brings science to history."
  },
  {
    title: "Going Infinite: The Rise and Fall of a New Tycoon",
    author: "Michael Lewis",
    year: "2023",
    href: "https://www.goodreads.com/book/show/149105520",
    excerpt: "From the #1 best-selling author of The Big Short and Flash Boys , the story of FTX’s spectacular collapse and the enigmatic founder at its center."
  },
  {
    title: "The Creative Act: A Way of Being",
    author: "Rick Rubin",
    year: "2023",
    href: "https://www.goodreads.com/book/show/60965426",
    excerpt: "From the legendary music producer, a master at helping people connect with the wellsprings of their creativity, comes a beautifully crafted book many years in the making that offers that..."
  },
  {
    title: "The Experience Machine: How Our Minds Predict and Shape Reality",
    author: "Andy Clark",
    year: "2023",
    href: "https://www.goodreads.com/book/show/61028382",
    excerpt: "A grand new vision of cognitive science that explains how our minds build our worldsFor as long as we've studied the mind, we've believed that information flowing from our senses determines..."
  },
  {
    title: "The Glucose Goddess Method: The 4-Week Guide to Cutting Cravings, Getting Your Energy Back, and Feeling Amazing",
    author: "Jessie Inchauspé",
    year: "2023",
    href: "https://www.goodreads.com/book/show/62919439",
    excerpt: "INSTANT NEW YORK TIMES BESTSELLER From the #1 internationally bestselling author of Glucose Revolution , a four-week, four-step program for living a healthier, happier life with balanced..."
  },
  {
    title: "After Steve: How Apple Became a Trillion-Dollar Company and Lost Its Soul",
    author: "Tripp Mickle",
    year: "2022",
    href: "https://www.goodreads.com/book/show/58733657",
    excerpt: "From the Wall Street Journal' s Tripp Mickle, the dramatic, untold story inside Apple after the passing of Steve Jobs by following his top lieutenants--Jony Ive, the Chief Design Officer,..."
  },
  {
    title: "Butts: A Backstory",
    author: "Heather Radke",
    year: "2022",
    href: "https://www.goodreads.com/book/show/59366123",
    excerpt: "Whether we love them or hate them, think they’re sexy, think they’re strange, consider them too big, too small, or anywhere in between, humans have a complicated relationship with butts."
  },
  {
    title: "Friends, Lovers, and the Big Terrible Thing",
    author: "Matthew Perry",
    year: "2022",
    href: "https://www.goodreads.com/book/show/59641216",
    excerpt: "“Hi, my name is Matthew, although you may know me by another name."
  },
  {
    title: "Glucose Revolution: The Life-Changing Power of Balancing Your Blood Sugar",
    author: "Jessie Inchauspé",
    year: "2022",
    href: "https://www.goodreads.com/book/show/58438618",
    excerpt: "Improve all areas of your health—your sleep, cravings, mood, energy, skin, weight—and even slow down aging with easy, science-based hacks to manage your blood sugar while still eating the..."
  },
  {
    title: "How the World Really Works: A Scientist's Guide to Our Past, Present and Future",
    author: "Vaclav Smil",
    year: "2022",
    href: "https://www.goodreads.com/book/show/56587388",
    excerpt: "* THE NEW YORK TIMES BESTSELLER * 'Another masterpiece from one of my favorite authors ."
  },
  {
    title: "The Book Eaters",
    author: "Sunyi Dean",
    year: "2022",
    href: "https://www.goodreads.com/book/show/58724745",
    excerpt: "Out on the Yorkshire Moors lives a secret line of people for whom books are food, and who retain all of a book's content after eating it."
  },
  {
    title: "The Bullet That Missed (Thursday Murder Club, #3)",
    author: "Richard Osman",
    year: "2022",
    href: "https://www.goodreads.com/book/show/58957615",
    excerpt: "It is an ordinary Thursday, and things should finally be returning to normal."
  },
  {
    title: "Unreasonable Hospitality: The Remarkable Power of Giving People More Than They Expect",
    author: "Will Guidara",
    year: "2022",
    href: "https://www.goodreads.com/book/show/60018618",
    excerpt: "National Bestseller Essential lessons in hospitality for every business, from the former co-owner of legendary restaurant Eleven Madison Park."
  },
  {
    title: "Why Has Nobody Told Me This Before?",
    author: "Julie Smith",
    year: "2022",
    href: "https://www.goodreads.com/book/show/58536046",
    excerpt: "Drawing on years of experience as a clinical psychologist, online sensation Dr Julie Smith provides the skills you need to navigate common life challenges and take charge of your emotional..."
  },
  {
    title: "Chwasty od kuchni",
    author: "Piotr Ciemny",
    year: "2021",
    href: "https://www.goodreads.com/book/show/58035290",
    excerpt: "Poznaj chwasty, które mijasz w parku, lesie i na łące."
  },
  {
    title: "Four Thousand Weeks: Time Management for Mortals",
    author: "Oliver Burkeman",
    year: "2021",
    href: "https://www.goodreads.com/book/show/54785515",
    excerpt: "The average human lifespan is absurdly, insultingly brief."
  },
  {
    title: "Genius Makers: The Mavericks Who Brought AI to Google, Facebook, and the World",
    author: "Cade Metz",
    year: "2021",
    href: "https://www.goodreads.com/book/show/55051662",
    excerpt: "\"This colorful page-turner puts artificial intelligence into a human perspective."
  },
  {
    title: "How to Not Die Alone: The Surprising Science That Will Help You Find Love",
    author: "Logan Ury",
    year: "2021",
    href: "https://www.goodreads.com/book/show/54304221",
    excerpt: "A “must-read” ( The Washington Post ) funny and practical guide to help you find, build, and keep the relationship of your dreams."
  },
  {
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    year: "2021",
    href: "https://www.goodreads.com/book/show/59999991",
    excerpt: "Klara and the Sun , the first novel by Kazuo Ishiguro since he was awarded the Nobel Prize in Literature, tells the story of Klara, an Artificial Friend with outstanding observational..."
  },
  {
    title: "Noise: A Flaw in Human Judgment",
    author: "Daniel Kahneman",
    year: "2021",
    href: "https://www.goodreads.com/book/show/55339408",
    excerpt: "From the bestselling author of Thinking, Fast and Slow and the co-author of Nudge , a groundbreaking exploration of why most people make bad judgments, and how to control for that noise.​..."
  },
  {
    title: "The Bomber Mafia: A Dream, a Temptation, and the Longest Night of the Second World War",
    author: "Malcolm Gladwell",
    year: "2021",
    href: "https://www.goodreads.com/book/show/56668328",
    excerpt: "An exploration of how technology and best intentions collide in the heat of war A  New York Times Book Review Editors’ Choice In The Bomber Mafia , Malcolm Gladwell weaves together the..."
  },
  {
    title: "Think Again: The Power of Knowing What You Don't Know",
    author: "Adam M. Grant",
    year: "2021",
    href: "https://www.goodreads.com/book/show/55539565",
    excerpt: "Think Again is a book about the benefit of doubt, and about how we can get better at embracing the unknown and the joy of being wrong."
  },
  {
    title: "This Is How They Tell Me the World Ends: The Cyberweapons Arms Race",
    author: "Nicole Perlroth",
    year: "2021",
    href: "https://www.goodreads.com/book/show/49247043",
    excerpt: "From The New York Times cybersecurity reporter Nicole Perlroth, the untold story of the cyberweapons market-the most secretive, invisible, government-backed market on earth-and a terrifying..."
  },
  {
    title: "Die with Zero: Getting All You Can from Your Money and Your Life",
    author: "Bill Perkins",
    year: "2020",
    href: "https://www.goodreads.com/book/show/52950915",
    excerpt: "A Common-Sense Guide to Living Rich….Instead of Dying Rich Imagine if by the time you died, you did everything you were told to."
  },
  {
    title: "How Innovation Works: Serendipity, Energy and the Saving of Time",
    author: "Matt Ridley",
    year: "2020",
    href: "https://www.goodreads.com/book/show/52219273",
    excerpt: "Innovation is the main event of the modern age, the reason we experience both dramatic improvements in our living standards and unsettling changes in our society."
  },
  {
    title: "Lift as You Climb: Women and the Art of Ambition",
    author: "Viv Groskop",
    year: "2020",
    href: "https://www.goodreads.com/book/show/46158608",
    excerpt: "A dynamic guide to owning your ambition and striving for success in an ever-changing world, while helping others along the way."
  },
  {
    title: "Marketing Made Simple: A Step-By-Step Storybrand Guide for Any Business",
    author: "Donald Miller",
    year: "2020",
    href: "https://www.goodreads.com/book/show/49121574",
    excerpt: "Based on Building a StoryBrand by New York Times bestselling author Donald Miller, this checklist is a strategic and actionable guide to applying the StoryBrand framework to any brand and..."
  },
  {
    title: "Numbers Don't Lie: 71 Things You Need to Know About the World",
    author: "Vaclav Smil",
    year: "2020",
    href: "https://www.goodreads.com/book/show/50705179",
    excerpt: "Is flying dangerous? How much do the world's cows weigh?"
  },
  {
    title: "Radical Uncertainty: Decision-Making Beyond the Numbers",
    author: "John Kay",
    year: "2020",
    href: "https://www.goodreads.com/book/show/51924687",
    excerpt: "Some uncertainties are resolvable. The insurance industry’s actuarial tables and the gambler’s roulette wheel both yield to the tools of probability theory."
  },
  {
    title: "The Alignment Problem: 'If you're going to read one book on artificial intelligence, this is the one' New York Times",
    author: "Brian Christian",
    year: "2020",
    href: "https://www.goodreads.com/book/show/56771275",
    excerpt: "How do we prevent AI working against us?"
  },
  {
    title: "The Almanack of Naval Ravikant: A Guide to Wealth and Happiness",
    author: "Eric Jorgenson",
    year: "2020",
    href: "https://www.goodreads.com/book/show/54898389",
    excerpt: "Getting rich is not just about luck; Happiness is not just a trait we are born with."
  },
  {
    title: "The Midnight Library (The Midnight World, #1)",
    author: "Matt Haig",
    year: "2020",
    href: "https://www.goodreads.com/book/show/52578297",
    excerpt: "Between life and death there is a library."
  },
  {
    title: "The Ministry for the Future",
    author: "Kim Stanley Robinson",
    year: "2020",
    href: "https://www.goodreads.com/book/show/50998056",
    excerpt: "Established in 2025, the purpose of the new organization was simple: To advocate for the world's future generations and to protect all living creatures, present and future."
  },
  {
    title: "Who They Was",
    author: "Gabriel Krauze",
    year: "2020",
    href: "https://www.goodreads.com/book/show/55315488",
    excerpt: "An astonishing, visceral autobiographical novel about a young man straddling two cultures: the university where he is studying English Literature and the disregarded world of London gang..."
  },
  {
    title: "Chasing Black Unicorns: How Building the Amazon of Africa Put Me on Interpol's Most Wanted List",
    author: "Marek Zmyslowski",
    year: "2019",
    href: "https://www.goodreads.com/book/show/52295065",
    excerpt: "Silicon Valley meets Indiana Jones – Chasing Black Unicorns is an autobiography written by Marek Zmysłowski, one of Poland’s most respected internet entrepreneurs."
  },
  {
    title: "Life Ceremony",
    author: "Sayaka Murata",
    year: "2019",
    href: "https://www.goodreads.com/book/show/59793324",
    excerpt: "With Life Ceremony , the incomparable Sayaka Murata is back with her first collection of short stories ever to be translated into English."
  },
  {
    title: "Lifespan: Why We Age―and Why We Don't Have To",
    author: "David A. Sinclair",
    year: "2019",
    href: "https://www.goodreads.com/book/show/43723901",
    excerpt: "It’s a seemingly undeniable truth that aging is inevitable."
  },
  {
    title: "Ninth House (Alex Stern, #1)",
    author: "Leigh Bardugo",
    year: "2019",
    href: "https://www.goodreads.com/book/show/43263680",
    excerpt: "Galaxy “Alex” Stern is the most unlikely member of Yale’s freshman class."
  },
  {
    title: "Novacene: The Coming Age of Hyperintelligence",
    author: "James E. Lovelock",
    year: "2019",
    href: "https://www.goodreads.com/book/show/43706493",
    excerpt: "James Lovelock, creator of the Gaia hypothesis and the greatest environmental thinker of our time, has produced an astounding new theory about future of life on Earth."
  },
  {
    title: "Outgrowing God: A Beginner’s Guide to Atheism",
    author: "Richard Dawkins",
    year: "2019",
    href: "https://www.goodreads.com/book/show/43532557",
    excerpt: "Should we believe in God? In this new book, written for a new generation, the brilliant science writer and author of The God Delusion , explains why we shouldn't."
  },
  {
    title: "Reboot: Leadership and the Art of Growing Up",
    author: "Jerry Colonna",
    year: "2019",
    href: "https://www.goodreads.com/book/show/42754169",
    excerpt: "One of the start-up world’s most in-demand executive coaches—hailed as the “CEO Whisperer” (Gimlet Media)—reveals why radical self-inquiry is critical to professional success and healthy..."
  },
  {
    title: "Sissy: A Coming-of-Gender Story",
    author: "Jacob Tobia",
    year: "2019",
    href: "https://www.goodreads.com/book/show/40984365",
    excerpt: "A heart-wrenching, eye-opening, and giggle-inducing memoir about what it's like to grow up not sure if you're (a) a boy, (b) a girl, (c) something in between, or (d) all of the above."
  },
  {
    title: "The Body: A Guide for Occupants",
    author: "Bill Bryson",
    year: "2019",
    href: "https://www.goodreads.com/book/show/43582376",
    excerpt: "In the bestselling, prize-winning A Short History of Nearly Everything , Bill Bryson achieved the seemingly impossible by making the science of our world both understandable and..."
  },
  {
    title: "The Flatshare",
    author: "Beth O'Leary",
    year: "2019",
    href: "https://www.goodreads.com/book/show/36478784",
    excerpt: "Tiffy and Leon share a flat Tiffy and Leon share a bed Tiffy and Leon have never met… Tiffy Moore needs a cheap flat, and fast."
  },
  {
    title: "Trillion Dollar Coach: The Leadership Playbook of Silicon Valley's Bill Campbell",
    author: "Eric Schmidt",
    year: "2019",
    href: "https://www.goodreads.com/book/show/36501797",
    excerpt: "#1 Wall Street Journal Bestseller New York Times Bestseller USA Today Bestseller The team behind How Google Works returns with management lessons from legendary coach and business..."
  },
  {
    title: "Educated",
    author: "Tara Westover",
    year: "2018",
    href: "https://www.goodreads.com/book/show/35133922",
    excerpt: "#1 NEW YORK TIMES, WALL STREET JOURNAL, AND BOSTON GLOBE BESTSELLER • One of the most acclaimed books of our time: an unforgettable memoir about a young woman who, kept out of school,..."
  },
  {
    title: "Europe's Growth Champion: Insights from the Economic Rise of Poland",
    author: "Marcin Piatkowski",
    year: "2018",
    href: "https://www.goodreads.com/book/show/39092309",
    excerpt: "What makes countries rich? What makes countries poor?"
  },
  {
    title: "Everything I Know About Love",
    author: "Dolly Alderton",
    year: "2018",
    href: "https://www.goodreads.com/book/show/46041465",
    excerpt: "The wildly funny, occasionally heartbreaking internationally bestselling memoir about growing up, growing older, and learning to navigate friendships, jobs, loss, and love along the ride..."
  },
  {
    title: "How to Change Your Mind: The New Science of Psychedelics",
    author: "Michael Pollan",
    year: "2018",
    href: "https://www.goodreads.com/book/show/37674171",
    excerpt: "THE NO. 1 NEW YORK TIMES BESTSELLER, NOW A MAJOR NEW NETFLIX SERIES'Reminds us that the mind is the greatest mystery in the universe' Yuval Noah Harari, Guardian, Books of the Year Could..."
  },
  {
    title: "Hyperfocus: How to Work Less to Achieve More",
    author: "Chris Bailey",
    year: "2018",
    href: "https://www.goodreads.com/book/show/48499270",
    excerpt: "Our attention has never been as overwhelmed or in-demand as it is today; we've never been so busy while accomplishing so little, and we've grown uncomfortable with boredom and a lack of..."
  },
  {
    title: "Life After Google: The Fall of Big Data and the Rise of the Blockchain Economy",
    author: "George Gilder",
    year: "2018",
    href: "https://www.goodreads.com/book/show/32073021",
    excerpt: "A FINANCIAL TIMES BOOK OF THE MONTH FROM THE WALL STREET \" Nothing Mr."
  },
  {
    title: "Normal People",
    author: "Sally Rooney",
    year: "2018",
    href: "https://www.goodreads.com/book/show/41057294",
    excerpt: "At school Connell and Marianne pretend not to know each other."
  },
  {
    title: "Sea of Strangers",
    author: "Lang Leav",
    year: "2018",
    href: "https://www.goodreads.com/book/show/36100966",
    excerpt: "Sea of Strangers  by Lang Leav picks up from her previous international bestselling books including  Love & Misadventure , Lullabies , and The Universe of Us , and sets sail for a grand new..."
  },
  {
    title: "Skin in the Game: Hidden Asymmetries in Daily Life (Incerto)",
    author: "Nassim Nicholas Taleb",
    year: "2018",
    href: "https://www.goodreads.com/book/show/36507099",
    excerpt: "From the New York Times bestselling author of The Black Swan, a bold new work that challenges many of our long-held beliefs about risk and reward, politics and religion, finance and..."
  },
  {
    title: "The Consciousness Instinct: Unraveling the Mystery of How the Brain Makes the Mind",
    author: "Michael S. Gazzaniga",
    year: "2018",
    href: "https://www.goodreads.com/book/show/35259598",
    excerpt: "\"The father of cognitive neuroscience\" illuminates the past, present, and future of the mind-brain problem."
  },
  {
    title: "The Ten Types of Human: Who We Are and Who We Can Be",
    author: "Dexter Dias",
    year: "2018",
    href: "https://www.goodreads.com/book/show/40920818",
    excerpt: "This book will introduce you to ten people."
  },
  {
    title: "When: The Scientific Secrets of Perfect Timing",
    author: "Daniel H. Pink",
    year: "2018",
    href: "https://www.goodreads.com/book/show/35412097",
    excerpt: "Everyone knows that timing is everything."
  },
  {
    title: "A Crack in Creation: Gene Editing and the Unthinkable Power to Control Evolution",
    author: "Jennifer A. Doudna",
    year: "2017",
    href: "https://www.goodreads.com/book/show/30971755",
    excerpt: "Two scientists explore the potential of a revolutionary genetics technology capable of easily and affordably manipulating DNA in human embryos to prevent specific diseases, addressing key..."
  },
  {
    title: "Astrophysics for People in a Hurry",
    author: "Neil deGrasse Tyson",
    year: "2017",
    href: "https://www.goodreads.com/book/show/32191710",
    excerpt: "The #1 New York Times Bestseller: The essential universe, from our most celebrated and beloved astrophysicist."
  },
  {
    title: "Behave: The Biology of Humans at Our Best and Worst",
    author: "Robert M. Sapolsky",
    year: "2017",
    href: "https://www.goodreads.com/book/show/31170723",
    excerpt: "Why do we do the things we do? More than a decade in the making, this game-changing book is Robert Sapolsky's genre-shattering attempt to answer that question as fully as perhaps only he..."
  },
  {
    title: "Blue Ocean Shift: Beyond Competing - Proven Steps to Inspire Confidence and Seize New Growth",
    author: "W. Chan Kim",
    year: "2017",
    href: "https://www.goodreads.com/book/show/35699890",
    excerpt: "NEW YORK TIMES  BESTSELLER #1 WALL STREET JOURNAL BESTSELLER Blue Ocean Shift is the essential follow up to Blue Ocean Strategy, the classic and over 4 million copy global bestseller by..."
  },
  {
    title: "Doughnut Economics: Seven Ways to Think Like a 21st-Century Economist",
    author: "Kate Raworth",
    year: "2017",
    href: "https://www.goodreads.com/book/show/29214420",
    excerpt: "Economics matters. Its theories are the mother tongue of public policy, the rationale for multi-billion-dollar investments, and the tools we use to tackle global poverty and manage our..."
  },
  {
    title: "Everybody Lies: Big Data, New Data, and What the Internet Can Tell Us About Who We Really Are",
    author: "Seth Stephens-Davidowitz",
    year: "2017",
    href: "https://www.goodreads.com/book/show/28512671",
    excerpt: "Foreword by Steven Pinker Blending the informed analysis of The Signal and the Noise with the instructive iconoclasm of Think Like a Freak, a fascinating, illuminating, and witty look at..."
  },
  {
    title: "Hit Refresh: The Quest to Rediscover Microsoft's Soul and Imagine a Better Future for Everyone",
    author: "Satya Nadella",
    year: "2017",
    href: "https://www.goodreads.com/book/show/30835567",
    excerpt: "As told by Microsoft CEO Satya Nadella, Hit Refresh is the story of corporate change and reinvention as well as the story of Nadella’s personal journey, one that is taking place today..."
  },
  {
    title: "I Hear You: The Surprisingly Simple Skill Behind Extraordinary Relationships",
    author: "Michael S. Sorensen",
    year: "2017",
    href: "https://www.goodreads.com/book/show/35522033",
    excerpt: "+ 2018 IPA Book Award Winner+ 2018 Readers' Favorite Award WinnerWhat if making one tweak to your day-to-day conversations could immediately improve every relationship in your life?In this..."
  },
  {
    title: "Invictus",
    author: "Ryan Graudin",
    year: "2017",
    href: "https://www.goodreads.com/book/show/33152795",
    excerpt: "A heart-stopping adventure that defies time and space--New York Times bestselling author Marie Lu calls it \"an incredibly intricate, brilliantly paced, masterfully written journey.\" Farway..."
  },
  {
    title: "Killers of the Flower Moon: The Osage Murders and the Birth of the FBI",
    author: "David Grann",
    year: "2017",
    href: "https://www.goodreads.com/book/show/29496076",
    excerpt: "A twisting, haunting true-life murder mystery about one of the most monstrous crimes in American history."
  },
  {
    title: "Move Fast and Break Things: How Facebook, Google, and Amazon Cornered Culture and Undermined Democracy",
    author: "Jonathan Taplin",
    year: "2017",
    href: "https://www.goodreads.com/book/show/31420725",
    excerpt: "A stinging polemic that traces the destructive monopolization of the Internet by Google, Facebook and Amazon, and that proposes a new future for musicians, journalists, authors and..."
  },
  {
    title: "NEW-The Startup Way (Lead Title)",
    author: "Eric Ries",
    year: "2017",
    href: "https://www.goodreads.com/book/show/146534150",
    excerpt: "Brand New Deliver In 6-18 Working Days"
  },
  {
    title: "Radical Candor: How to Get What You Want by Saying What You Mean",
    author: "Kim Malone Scott",
    year: "2017",
    href: "https://www.goodreads.com/book/show/34451267",
    excerpt: "Radical Candor is the sweet spot between managers who are obnoxiously aggressive on the one side and ruinously empathetic on the other."
  },
  {
    title: "The Elephant in the Brain: Hidden Motives in Everyday Life",
    author: "Kevin Simler",
    year: "2017",
    href: "https://www.goodreads.com/book/show/28820444",
    excerpt: "Human beings are primates, and primates are political animals."
  },
  {
    title: "The Greatest Story Ever Told—So Far: Why Are We Here?",
    author: "Lawrence M. Krauss",
    year: "2017",
    href: "https://www.goodreads.com/book/show/30753821",
    excerpt: "Internationally renowned, award-winning theoretical physicist, New York Times bestselling author of A Universe from Nothing , and passionate advocate for reason, Lawrence Krauss tells the..."
  },
  {
    title: "The Infinite Game",
    author: "Simon Sinek",
    year: "2017",
    href: "https://www.goodreads.com/book/show/38390751",
    excerpt: "Do you know how to play the game you're in?"
  },
  {
    title: "The Mask of Masculinity: How Men Can Embrace Vulnerability, Create Strong Relationships, and Live Their Fullest Lives",
    author: "Lewis Howes",
    year: "2017",
    href: "https://www.goodreads.com/book/show/33533716",
    excerpt: "At 30 years old, Lewis Howes was outwardly thriving but unfulfilled inside."
  },
  {
    title: "Why We Sleep: The New Science of Sleep and Dreams",
    author: "Matthew Walker",
    year: "2017",
    href: "https://www.goodreads.com/book/show/36234689",
    excerpt: "'Astonishing ... an amazing book ..."
  },
  {
    title: "A Gentleman in Moscow",
    author: "Amor Towles",
    year: "2016",
    href: "https://www.goodreads.com/book/show/34066798",
    excerpt: "From the New York Times bestselling author of Rules of Civility, a novel about a man who is ordered to spend the rest of his life inside a luxury hotel—a beautifully transporting novel."
  },
  {
    title: "At the Existentialist Café",
    author: "Sarah Bakewell",
    year: "2016",
    href: "https://www.goodreads.com/book/show/25658482",
    excerpt: "Paris, near the turn of 1933. Three young friends meet over apricot cocktails at the Bec-de-Gaz bar on the rue Montparnasse."
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    year: "2016",
    href: "https://www.goodreads.com/book/show/27985224",
    excerpt: "Many modern knowledge workers now spend most of their brain power battling distraction and interruption, whether because of the incessant pinging of devices, noisy open-plan offices or the..."
  },
  {
    title: "Grit: The Power of Passion and Perseverance",
    author: "Angela Duckworth",
    year: "2016",
    href: "https://www.goodreads.com/book/show/27213329",
    excerpt: "In this must-read book for anyone striving to succeed, pioneering psychologist Angela Duckworth shows parents, educators, students, and business people both seasoned and new that the secret..."
  },
  {
    title: "Mad Genius: A Manifesto for Entrepreneurs",
    author: "Randy Gage",
    year: "2016",
    href: "https://www.goodreads.com/book/show/24612004",
    excerpt: "Create your next breakthrough Mad Genius  is a unique book for entrepreneurs--and for employees who want to think like entrepreneurs."
  },
  {
    title: "Marketing 4.0: Moving from Traditional to Digital",
    author: "Philip Kotler",
    year: "2016",
    href: "https://www.goodreads.com/book/show/33017355",
    excerpt: "Marketing has changed forever—this is what comes next Marketing 4.0: Moving from Traditional to Digital is the much-needed handbook for next-generation marketing."
  },
  {
    title: "Monetizing Innovation: How Smart Companies Design the Product Around the Price",
    author: "Madhavan Ramanujam",
    year: "2016",
    href: "https://www.goodreads.com/book/show/30121516",
    excerpt: "Surprising rules for successful monetization Innovation is the most important driver of growth."
  },
  {
    title: "My Name is Lucy Barton",
    author: "Elizabeth Strout",
    year: "2016",
    href: "https://www.goodreads.com/book/show/31340710",
    excerpt: "#1 NEW YORK TIMES BESTSELLER • A simple hospital visit becomes a portal to the tender relationship between mother and daughter in this extraordinary novel by the Pulitzer Prize–winning..."
  },
  {
    title: "Predictable Prospecting: How to Radically Increase Your B2B Sales Pipeline",
    author: "Marylou Tyler",
    year: "2016",
    href: "https://www.goodreads.com/book/show/31556357",
    excerpt: "The proven system for rapid B2B sales growth from the coauthor of Predictable Revenue, the breakout bestseller hailed as a “sales bible” (Inc.) If your organization’s success is driven by..."
  },
  {
    title: "StarTalk: Everything You Ever Need to Know About Space Travel, Sci-Fi, the Human Race, theUniverse, and Beyond",
    author: "Neil deGrasse Tyson",
    year: "2016",
    href: "https://www.goodreads.com/book/show/28251011",
    excerpt: "This beautifully illustrated companion to celebrated scientist Neil deGrasse Tyson’s popular podcast and National Geographic Channel TV show is an eye-opening journey for anyone curious..."
  },
  {
    title: "The Universe of Us",
    author: "Lang Leav",
    year: "2016",
    href: "https://www.goodreads.com/book/show/29431081",
    excerpt: "Lang Leav presents a completely new collection of poetry with a celestial theme in The Universe of Us ."
  },
  {
    title: "Words on the Move: Why English Won't—and Can't—Sit Still (Like, Literally)",
    author: "John McWhorter",
    year: "2016",
    href: "https://www.goodreads.com/book/show/28696604",
    excerpt: "A bestselling linguist takes us on a lively tour of how the English language is evolving before our eyes -- and why we should embrace this transformation and not fight it Language is always..."
  },
  {
    title: "Go Set a Watchman",
    author: "Harper Lee",
    year: "2015",
    href: "https://www.goodreads.com/book/show/24817626",
    excerpt: "From Harper Lee comes a landmark new novel set two decades after her beloved Pulitzer Prize-winning masterpiece, To Kill a Mockingbird ."
  },
  {
    title: "Homo Deus: A History of Tomorrow",
    author: "Yuval Noah Harari",
    year: "2015",
    href: "https://www.goodreads.com/book/show/31138556",
    excerpt: "Yuval Noah Harari, author of the critically-acclaimed New York Times bestseller and international phenomenon Sapiens , returns with an equally original, compelling, and provocative book,..."
  },
  {
    title: "Marie Antoinette's Watch: Adultery, Larceny, & Perpetual Motion",
    author: "John Biggs",
    year: "2015",
    href: "https://www.goodreads.com/book/show/25456934",
    excerpt: "Across continents and into and out of the hands of royalty, revolutionaries, smugglers, thieves, and the world’s greatest tech engineers, was Marie Antoinette’s watch, the “160,” worth an..."
  },
  {
    title: "Memories",
    author: "Lang Leav",
    year: "2015",
    href: "https://www.goodreads.com/book/show/25330489",
    excerpt: "Best-selling poet Lang Leav presents a gorgeous hardcover gift book featuring the best of Lullabies and Love & Misadventure plus thirty-five new poems for fans to discover, along with..."
  },
  {
    title: "Red Notice: A True Story of High Finance, Murder, and One Man's Fight for Justice",
    author: "Bill Browder",
    year: "2015",
    href: "https://www.goodreads.com/book/show/22609522",
    excerpt: "A real-life political thriller about an American financier in the Wild East of Russia, the murder of his principled young tax attorney, and his dangerous mission to expose the Kremlin’s..."
  },
  {
    title: "Super Better: A Revolutionary Approach to Getting Stronger, Happier, Braver and More Resilient; Powered by the Science of Games",
    author: "Jane McGonigal",
    year: "2015",
    href: "https://www.goodreads.com/book/show/24612068",
    excerpt: "An innovative guide to living gamefully, based on the program that has already helped nearly half a million people achieve remarkable personal growth In 2009, internationally renowned game..."
  },
  {
    title: "The Diet Myth: The Real Science Behind What We Eat",
    author: "Tim Spector",
    year: "2015",
    href: "https://www.goodreads.com/book/show/25525225",
    excerpt: "Fully updated throughout and with a new foreword for this edition."
  },
  {
    title: "When to Rob a Bank: ...And 131 More Warped Suggestions and Well-Intended Rants",
    author: "Steven D. Levitt",
    year: "2015",
    href: "https://www.goodreads.com/book/show/23019295",
    excerpt: "In celebration of the 10th anniversary of the landmark book Freakonomics comes this curated collection from the most readable economics blog in the universe."
  },
  {
    title: "A Strangeness in My Mind",
    author: "Orhan Pamuk",
    year: "2014",
    href: "https://www.goodreads.com/book/show/24997390",
    excerpt: "A Strangeness In My Mind is a novel Orhan Pamuk has worked on for six years."
  },
  {
    title: "Charles Chaplin: Footlights with The World of Limelight",
    author: "David Robinson",
    year: "2014",
    href: "https://www.goodreads.com/book/show/20911406",
    excerpt: "Long before becoming one of the masterpieces of Charlie Chaplin's artistic maturity, and even before existing as a screenplay, Limelight was conceived by its author as a 34,000-word novella."
  },
  {
    title: "H is for Hawk",
    author: "Helen Macdonald",
    year: "2014",
    href: "https://www.goodreads.com/book/show/18803640",
    excerpt: "As a child Helen Macdonald was determined to become a falconer."
  },
  {
    title: "Lullabies",
    author: "Lang Leav",
    year: "2014",
    href: "https://www.goodreads.com/book/show/22151696",
    excerpt: "A sequel to the hugely popular, best-selling Love & Misadventure , Lullabies continues to explore the intricacies of love and loss."
  },
  {
    title: "Men Without Women",
    author: "Haruki Murakami",
    year: "2014",
    href: "https://www.goodreads.com/book/show/33652490",
    excerpt: "A dazzling new collection of short stories—the first major new work of fiction from the beloved, internationally acclaimed, Haruki Murakami since his #1 best-selling Colorless Tsukuru..."
  },
  {
    title: "Scrum: The Art of Doing Twice the Work in Half the Time",
    author: "Jeff Sutherland",
    year: "2014",
    href: "https://www.goodreads.com/book/show/19288230",
    excerpt: "In the future, historians may look back on human progress and draw a sharp line designating “before Scrum” and “after Scrum.” Scrum is that ground-breaking."
  },
  {
    title: "The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers―Straight Talk on the Challenges of Entrepreneurship",
    author: "Ben Horowitz",
    year: "2014",
    href: "https://www.goodreads.com/book/show/18176747",
    excerpt: "A lot of people talk about how great it is to start a business, but only Ben Horowitz is brutally honest about how hard it is to run one."
  },
  {
    title: "Love & Misadventure",
    author: "Lang Leav",
    year: "2013",
    href: "https://www.goodreads.com/book/show/18003300",
    excerpt: "Lang Leav is a poet and internationally exhibiting artist."
  },
  {
    title: "Memory Reconsolidation",
    author: "Cristina Alberini",
    year: "2013",
    href: "https://www.goodreads.com/book/show/17132954",
    excerpt: "As little as 10 years ago, it was believed that memory went from short to long term via one consolidation practice that made that memory intractable."
  },
  {
    title: "Salt",
    author: "Nayyirah Waheed",
    year: "2013",
    href: "https://www.goodreads.com/book/show/18585282",
    excerpt: "This collection of poetry explores the realities of multiple identities, language, diasporic life and pain, the self, community, healing, celebration, and love."
  },
  {
    title: "The Courage to Be Disliked: How to Free Yourself, Change Your Life and Achieve Real Happiness",
    author: "Ichiro Kishimi",
    year: "2013",
    href: "https://www.goodreads.com/book/show/43306206",
    excerpt: "The Japanese phenomenon that teaches us the simple yet profound lessons required to liberate our real selves and find lasting happiness."
  },
  {
    title: "B2B Marketing Confessions",
    author: "John J. Wall",
    year: "2012",
    href: "https://www.goodreads.com/book/show/16040328",
    excerpt: "What’s the Truth About Marketing? Contrary to the popular belief that marketing is advertising, listen to the confessions of an insider to learn how marketing affects every step of the..."
  },
  {
    title: "Er ist wieder da",
    author: "Timur Vermes",
    year: "2012",
    href: "https://www.goodreads.com/book/show/14897790",
    excerpt: "Sommer 2011. Adolf Hitler erwacht auf einem leeren Grundstück in Berlin-Mitte."
  },
  {
    title: "Free Will",
    author: "Sam Harris",
    year: "2012",
    href: "https://www.goodreads.com/book/show/13259270",
    excerpt: "Belief in free will touches nearly everything that human beings value."
  },
  {
    title: "Karl Jung’s Power of the Mind “How did he acquire his knowledge?”",
    author: "Martin Chekel",
    year: "2012",
    href: "https://www.goodreads.com/book/show/24113908",
    excerpt: "This book is a subjoined series of interviews and dialogues with Karl Jung.The present age is so distinctly one of change and transition that few individuals think about life and destiny,..."
  },
  {
    title: "So Good They Can't Ignore You: Why Skills Trump Passion in the Quest for Work You Love",
    author: "Cal Newport",
    year: "2012",
    href: "https://www.goodreads.com/book/show/13525945",
    excerpt: "In this eye-opening account, Cal Newport debunks the long-held belief that \"follow your passion\" is good advice."
  },
  {
    title: "Steal Like an Artist: 10 Things Nobody Told You About Being Creative",
    author: "Austin Kleon",
    year: "2012",
    href: "https://www.goodreads.com/book/show/13099738",
    excerpt: "You don’t need to be a genius, you just need to be yourself."
  },
  {
    title: "The Chimp Paradox: How Our Impulses and Emotions Can Determine Success and Happiness and How We Can Control Them",
    author: "Steve Peters",
    year: "2012",
    href: "https://www.goodreads.com/book/show/12228097",
    excerpt: "Leading consultant psychiatrist Steve Peters knows more than anyone how impulsive behaviour or nagging self-doubt can impact negatively on our professional and personal lives."
  },
  {
    title: "The Examined Life: How We Lose and Find Ourselves",
    author: "Stephen Grosz",
    year: "2012",
    href: "https://www.goodreads.com/book/show/18884566",
    excerpt: "**SUNDAY TIMES BESTELLER** This book is about learning to live."
  },
  {
    title: "100 Things Every Designer Needs to Know About People (Voices That Matter)",
    author: "Susan M. Weinschenk",
    year: "2011",
    href: "https://www.goodreads.com/book/show/11365883",
    excerpt: "We design to elicit responses from people."
  },
  {
    title: "At Last (Patrick Melrose, #5)",
    author: "Edward St. Aubyn",
    year: "2011",
    href: "https://www.goodreads.com/book/show/9723661",
    excerpt: "As friends, relatives and foes trickle in to pay their final respects to his mother Eleanor, Patrick Melrose finds himself questioning whether a life without parents will be the liberation..."
  },
  {
    title: "Escape Velocity: Free Your Company's Future from the Pull of the Past – A Strategic Guide for Executives on Next-Generation Category Leadership",
    author: "Geoffrey A. Moore",
    year: "2011",
    href: "https://www.goodreads.com/book/show/11738187",
    excerpt: "&#8220;Readthis book to learn how to create a company as powerful as Apple.&#8221;&#8212;Guy Kawasaki,former chief evangelist of Apple In Escape Velocity Geoffrey A."
  },
  {
    title: "Every Thing on It",
    author: "Shel Silverstein",
    year: "2011",
    href: "https://www.goodreads.com/book/show/10659536",
    excerpt: "Have you ever read a book with everything on it?"
  },
  {
    title: "My Brilliant Friend (Neapolitan Novels, #1)",
    author: "Elena Ferrante",
    year: "2011",
    href: "https://www.goodreads.com/book/show/35036409",
    excerpt: "Beginning in the 1950s in a poor but vibrant neighborhood on the outskirts of Naples, Elena Ferrante's four-volume story spans almost sixty years, as its main characters, the fiery and..."
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    year: "2011",
    href: "https://www.goodreads.com/book/show/23692271",
    excerpt: "From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have..."
  },
  {
    title: "The Art of Thinking Clearly",
    author: "Rolf Dobelli",
    year: "2011",
    href: "https://www.goodreads.com/book/show/16248196",
    excerpt: "In engaging prose and with practical examples and anecdotes, an eye-opening look at human reasoning and essential reading for anyone with important decisions to make."
  },
  {
    title: "The Mind in Action",
    author: "Eric Berne",
    year: "2011",
    href: "https://www.goodreads.com/book/show/14485052",
    excerpt: "Many of the earliest books, particularly those dating back to the 1900s and before, are now extremely scarce and increasingly expensive."
  },
  {
    title: "The Science of Trust: Emotional Attunement for Couples",
    author: "John M. Gottman",
    year: "2011",
    href: "https://www.goodreads.com/book/show/10650879",
    excerpt: "An eminent therapist explains what makes couples compatible and how to sustain a happy marriage."
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: "2011",
    href: "https://www.goodreads.com/book/show/11468377",
    excerpt: "In the highly anticipated Thinking, Fast and Slow , Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think."
  },
  {
    title: "Why We Broke Up",
    author: "Daniel Handler",
    year: "2011",
    href: "https://www.goodreads.com/book/show/10798418",
    excerpt: "I'm telling you why we broke up, Ed."
  },
  {
    title: "Attached: The New Science of Adult Attachment and How It Can Help You Find—and Keep—Love",
    author: "Amir Levine",
    year: "2010",
    href: "https://www.goodreads.com/book/show/9547888",
    excerpt: "Is there a science to love? In this groundbreaking book, psychiatrist and neuroscientist Amir Levine and psychologist Rachel S."
  },
  {
    title: "I Live in the Future & Here's How It Works: Why Your World, Work, and Brain Are Being Creatively Disrupted",
    author: "Nick Bilton",
    year: "2010",
    href: "https://www.goodreads.com/book/show/7125196",
    excerpt: "Are we driving off a digital cliff and heading for disaster, unable to focus, maintain concentration, or form the human bonds that make life worth living?"
  },
  {
    title: "Obliquity: Why Our Goals Are Best Achieved Indirectly",
    author: "John Kay",
    year: "2010",
    href: "https://www.goodreads.com/book/show/7888001",
    excerpt: "If you want to go in one direction, the best route may involve going in another."
  },
  {
    title: "Switch: How to Change Things When Change Is Hard",
    author: "Chip Heath",
    year: "2010",
    href: "https://www.goodreads.com/book/show/6570502",
    excerpt: "Why is it so hard to make lasting changes in our companies, in our communities, and in our own lives?"
  },
  {
    title: "The 4% Universe: Dark Matter, Dark Energy, and the Race to Discover the Rest of Reality",
    author: "Richard Panek",
    year: "2010",
    href: "https://www.goodreads.com/book/show/8229029",
    excerpt: "The epic, behind-the-scenes story of an astounding gap in our scientific knowledge of the cosmos."
  },
  {
    title: "The Disappearing Spoon: And Other True Tales of Madness, Love, and the History of the World from the Periodic Table of the Elements",
    author: "Sam Kean",
    year: "2010",
    href: "https://www.goodreads.com/book/show/7247854",
    excerpt: "Why did Gandhi hate iodine (I, 53)? How did radium (Ra, 88) nearly ruin Marie Curie's reputation?"
  },
  {
    title: "A World Without Ice",
    author: "Henry N. Pollack",
    year: "2009",
    href: "https://www.goodreads.com/book/show/6677106",
    excerpt: "A co-winner of the 2007 Nobel Peace Prize offers a clear-eyed explanation of the planet’s imperiled ice."
  },
  {
    title: "Drive: The Surprising Truth About What Motivates Us",
    author: "Daniel H. Pink",
    year: "2009",
    href: "https://www.goodreads.com/book/show/6452796",
    excerpt: "The New York Times bestseller that gives readers a paradigm-shattering new way to think about motivation Most people believe that the best way to motivate is with rewards like money—the..."
  },
  {
    title: "Last Words",
    author: "George Carlin",
    year: "2009",
    href: "https://www.goodreads.com/book/show/6713071",
    excerpt: "As one of America's preeminent comedic voices, George Carlin saw it all throughout his extraordinary fifty-year career and made fun of most of it."
  },
  {
    title: "Start with Why: How Great Leaders Inspire Everyone to Take Action",
    author: "Simon Sinek",
    year: "2009",
    href: "https://www.goodreads.com/book/show/7108725",
    excerpt: "Why do you do what you do? Why are some people and organizations more innovative, more influential, and more profitable than others?"
  },
  {
    title: "The Hundred-Year-Old Man Who Climbed Out of the Window and Disappeared (Hundred-Year-Old Man, #1)",
    author: "Jonas Jonasson",
    year: "2009",
    href: "https://www.goodreads.com/book/show/13486632",
    excerpt: "Eigentlich hat Allan Karlsson allen Grund zum Feiern: Er wird 100 Jahre alt."
  },
  {
    title: "What the Dog Saw and Other Adventures",
    author: "Malcolm Gladwell",
    year: "2009",
    href: "https://www.goodreads.com/book/show/6516450",
    excerpt: "What is the difference between choking and panicking?"
  },
  {
    title: "Thinking in Systems: A Primer",
    author: "Donella H. Meadows",
    year: "2008",
    href: "https://www.goodreads.com/book/show/18891716",
    excerpt: "\"Dana Meadows' exposition in this book exhibits a degree of clarity and simplicity that can only be attained by one who profoundly and honestly understands the subject at hand--in this case..."
  },
  {
    title: "When You Are Engulfed in Flames",
    author: "David Sedaris",
    year: "2008",
    href: "https://www.goodreads.com/book/show/1044355",
    excerpt: "It's early autumn 1964. Two straight-A students head off to school, and when only one of them returns home Chesney Yelverton is coaxed from retirement and assigned to what proves to be the..."
  },
  {
    title: "Marketing 3.0: From Products to Customers to the Human Spirit",
    author: "Philip Kotler",
    year: "2007",
    href: "https://www.goodreads.com/book/show/8334860",
    excerpt: "Understand the next level of marketing The new model for marketing-Marketing 3.0-treats customers not as mere consumers but as the complex, multi-dimensional human beings that they are."
  },
  {
    title: "Better Never to Have Been: The Harm of Coming into Existence",
    author: "David Benatar",
    year: "2006",
    href: "https://www.goodreads.com/book/show/660518",
    excerpt: "Better Never to Have Been argues for a number of related, highly provocative, views: (1) Coming into existence is always a serious harm."
  },
  {
    title: "Stumbling on Happiness",
    author: "Daniel Todd Gilbert",
    year: "2006",
    href: "https://www.goodreads.com/book/show/56627",
    excerpt: "• Why are lovers quicker to forgive their partners for infidelity than for leaving dirty dishes in the sink?"
  },
  {
    title: "The God Delusion: A Study of Religious Belief and Skepticism",
    author: "Richard Dawkins",
    year: "2006",
    href: "https://www.goodreads.com/book/show/14743",
    excerpt: "A preeminent scientist - and the world's most prominent atheist - asserts the irrationality of belief in God, and the grievous harm religion has inflicted on society, from the Crusades to..."
  },
  {
    title: "The Happiness Hypothesis: Finding Modern Truth in Ancient Wisdom",
    author: "Jonathan Haidt",
    year: "2006",
    href: "https://www.goodreads.com/book/show/96884",
    excerpt: "In his widely praised book, award-winning psychologist Jonathan Haidt examines the world’s philosophical wisdom through the lens of psychological science, showing how a deeper understanding..."
  },
  {
    title: "The Three-Body Problem (Remembrance of Earth’s Past, #1)",
    author: "Liu Cixin",
    year: "2006",
    href: "https://www.goodreads.com/book/show/20518872",
    excerpt: "Set against the backdrop of China's Cultural Revolution, a secret military project sends signals into space to establish contact with aliens."
  },
  {
    title: "The Witch of Portobello",
    author: "Paulo Coelho",
    year: "2006",
    href: "https://www.goodreads.com/book/show/816720",
    excerpt: "How do we find the courage to always be true to ourselves—even if we are unsure of whom we are?"
  },
  {
    title: "Whatever You Think, Think the Opposite",
    author: "Paul Arden",
    year: "2006",
    href: "https://www.goodreads.com/book/show/265525",
    excerpt: "GÂNDEŞTE FIX PE DOS va zdruncina profund modul în care gândiţi, oricare ar fi el - chiar dacă nici măcar nu ştiaţi cum gândiţi."
  },
  {
    title: "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything",
    author: "Steven D. Levitt",
    year: "2005",
    href: "https://www.goodreads.com/book/show/1202",
    excerpt: "Which is more dangerous, a gun or a swimming pool?"
  },
  {
    title: "Mother's Milk (Patrick Melrose, #4)",
    author: "Edward St. Aubyn",
    year: "2005",
    href: "https://www.goodreads.com/book/show/466349",
    excerpt: "Writing with the scathing wit and bright perceptiveness for which he has become known, celebrated English author Edward St."
  },
  {
    title: "The History of Love",
    author: "Nicole Krauss",
    year: "2005",
    href: "https://www.goodreads.com/book/show/3867",
    excerpt: "Fourteen-year-old Alma Singer is trying to find a cure for her mother's loneliness."
  },
  {
    title: "The Singularity is Near: When Humans Transcend Biology",
    author: "Ray Kurzweil",
    year: "2005",
    href: "https://www.goodreads.com/book/show/83518",
    excerpt: "“Startling in scope and bravado.” —Janet Maslin,  The New York Times “Artfully envisions a breathtakingly better world.” — Los Angeles Times “Elaborate, smart and persuasive.” — The Boston..."
  },
  {
    title: "The Zahir",
    author: "Paulo Coelho",
    year: "2005",
    href: "https://www.goodreads.com/book/show/1427",
    excerpt: "Librarian note : Alternate cover edition of ISBN-13: 9780060832810, ISBN-10/ASIN: 0060832819 The narrator of  The Zahir   is a bestselling novelist who lives in Paris and enjoys all the..."
  },
  {
    title: "گرداب",
    author: "صادق هدایت",
    year: "2005",
    href: "https://www.goodreads.com/book/show/1646206",
    excerpt: "A thought-provoking exploration of the ideas and questions behind گرداب."
  },
  {
    title: "The Paradox of Choice: Why More Is Less",
    author: "Barry Schwartz",
    year: "2004",
    href: "https://www.goodreads.com/book/show/10639",
    excerpt: "In the spirit of Alvin Tofflers' Future Shock , a social critique of our obsession with choice, and how it contributes to anxiety, dissatisfaction and regret."
  },
  {
    title: "Eleven Minutes",
    author: "Paulo Coelho",
    year: "2003",
    href: "https://www.goodreads.com/book/show/1430",
    excerpt: "Alternative cover edition of ISBN 9780060589288 Eleven Minutes is the story of Maria, a young girl from a Brazilian village, whose first innocent brushes with love leave her heartbroken."
  },
  {
    title: "Marketing Insights from A to Z: 80 Concepts Every Manager Needs to Know",
    author: "Philip Kotler",
    year: "2003",
    href: "https://www.goodreads.com/book/show/586019",
    excerpt: "The most renowned figure in the world of marketing offers the new rules to the game for marketing professionals and business leaders alike In Marketing Insights from A to Z, Philip Kotler,..."
  },
  {
    title: "The Da Vinci Code (Robert Langdon, #2)",
    author: "Dan Brown",
    year: "2003",
    href: "https://www.goodreads.com/book/show/968",
    excerpt: "This is an alternate cover for 9780307277671."
  },
  {
    title: "Start with No: The Negotiating Tools that the Pros Don't Want You to Know",
    author: "Jim Camp",
    year: "2002",
    href: "https://www.goodreads.com/book/show/19035367",
    excerpt: "Start with No offers a contrarian, counterintuitive system for negotiating any kind of deal in any kind of situation—the purchase of a new house, a multimillion-dollar business deal, or..."
  },
  {
    title: "Ten Deadly Marketing Sins: Signs and Solutions",
    author: "Philip Kotler",
    year: "2000",
    href: "https://www.goodreads.com/book/show/225536",
    excerpt: "Marketing's undisputed doyen offers an unbeatable guide on what not to do As the cost of marketing rises, its effectiveness is in decline."
  },
  {
    title: "The Art of Possibility: Transforming Professional and Personal Life",
    author: "Rosamund Stone Zander",
    year: "2000",
    href: "https://www.goodreads.com/book/show/85697",
    excerpt: "Presenting twelve breakthrough practices for bringing creativity into all human endeavors, The Art of Possibility is the dynamic product of an extraordinary partnership."
  },
  {
    title: "The Devil and Miss Prym",
    author: "Paulo Coelho",
    year: "2000",
    href: "https://www.goodreads.com/book/show/4008",
    excerpt: "“The Devil and Miss Prym is a simple tale, with the meaning of life and spiritual guidance at its core.” -- The Guardian A community divided by greed, cowardice, and fear."
  },
  {
    title: "The Truth: Stage Adaptation",
    author: "Stephen Briggs",
    year: "2000",
    href: "https://www.goodreads.com/book/show/34498",
    excerpt: "There's been a murder. Allegedly. William de Worde is the Discworld's first investigative journalist."
  },
  {
    title: "Creativity: Unleashing the Forces Within (Osho Insights for a New Way of Living)",
    author: "Osho",
    year: "1999",
    href: "https://www.goodreads.com/book/show/97007",
    excerpt: "As Osho points out in the foreward to this book, historically, the creative person has been all but forced to rebel against the society."
  },
  {
    title: "The Coffee Book: Anatomy of an Industry from Crop to the Last Drop",
    author: "Gregory Dicum",
    year: "1999",
    href: "https://www.goodreads.com/book/show/1276912",
    excerpt: "A history of coffee from the sixth century to Starbucks that’s “good to the last sentence” ( Las Cruces Sun News )."
  },
  {
    title: "The Exceptional Individual: Achieving Business Success One Person at a Time",
    author: "Peter H. Engel",
    year: "1998",
    href: "https://www.goodreads.com/book/show/931630",
    excerpt: "Offering an alternative to the common team-player corporate mentality, a former CEO-turned-management professor demonstrates how individual entrepreneurs within a company are the ones who..."
  },
  {
    title: "Veronika Decides to Die",
    author: "Paulo Coelho",
    year: "1998",
    href: "https://www.goodreads.com/book/show/1431",
    excerpt: "In his latest international bestseller, the celebrated author of The Alchemist addresses the fundamental questions asked by millions: What am I doing here today?"
  },
  {
    title: "مردی که نفسش را کشت",
    author: "صادق هدایت",
    year: "1998",
    href: "https://www.goodreads.com/book/show/1371674",
    excerpt: "A thought-provoking exploration of the ideas and questions behind مردی که نفسش را کشت."
  },
  {
    title: "Potęga teraźniejszości",
    author: "Eckhart Tolle",
    year: "1997",
    href: "https://www.goodreads.com/book/show/13496273",
    excerpt: "Przez dwa lata mały człowiek przesiadywał na ławce w parku."
  },
  {
    title: "Falling Up",
    author: "Shel Silverstein",
    year: "1996",
    href: "https://www.goodreads.com/book/show/30120",
    excerpt: "Millie McDeevit screamed a scream, so loud it made her eyebrows steam."
  },
  {
    title: "The Fifth Mountain",
    author: "Paulo Coelho",
    year: "1996",
    href: "https://www.goodreads.com/book/show/4005",
    excerpt: "Immerse yourself in an electrifying reading experience like no other -- international bestselling author Paulo Coelho's The Fifth Mountain."
  },
  {
    title: "Blindness",
    author: "José Saramago",
    year: "1995",
    href: "https://www.goodreads.com/book/show/2526",
    excerpt: "No food, no water, no government, no obligation, no order."
  },
  {
    title: "Metaphors of Memory: A History of Ideas about the Mind",
    author: "Douwe Draaisma",
    year: "1995",
    href: "https://www.goodreads.com/book/show/217568",
    excerpt: "What is memory? Without memory we lose our sense of identity, reasoning, even our ability to perform simple physical tasks."
  },
  {
    title: "By the River Piedra I Sat Down and Wept",
    author: "Paulo Coelho",
    year: "1994",
    href: "https://www.goodreads.com/book/show/1428",
    excerpt: "Alternative cover edition of ISBN 9798853651234 From Paulo Coelho, author of the bestselling The Alchemist , comes a poignant, richly poetic story that reflects the depth of love and life."
  },
  {
    title: "Interesting Times (Discworld, #17; Rincewind, #5)",
    author: "Terry Pratchett",
    year: "1994",
    href: "https://www.goodreads.com/book/show/884288",
    excerpt: "Mighty battles! Revolution! Death! War!"
  },
  {
    title: "Some Hope (Patrick Melrose, #3)",
    author: "Edward St. Aubyn",
    year: "1994",
    href: "https://www.goodreads.com/book/show/15795418",
    excerpt: "I Visst hopp, som utspelar sig på en kylig societetstillställning, försöker en vuxen Patrick leva ett nyktrare liv, samtidigt som han letar efter något som kan rädda honom."
  },
  {
    title: "Bad News (Patrick Melrose, #2)",
    author: "Edward St. Aubyn",
    year: "1992",
    href: "https://www.goodreads.com/book/show/1077554",
    excerpt: "Andra boken om Patrick Melrose I Dåliga nyheter är Patrick Melrose i tjugoårsåldern."
  },
  {
    title: "Never Mind (Patrick Melrose, #1)",
    author: "Edward St. Aubyn",
    year: "1992",
    href: "https://www.goodreads.com/book/show/13514899",
    excerpt: "Första boken om Patrick Melrose Glöm det utspelar sig under en dag på familjen Melroses residens i Frankrike."
  },
  {
    title: "Small Gods (Discworld, #13)",
    author: "Terry Pratchett",
    year: "1992",
    href: "https://www.goodreads.com/book/show/34484",
    excerpt: "In the beginning was the Word. And the Word was: \"Hey, you!\" For Brutha the novice is the Chosen One."
  },
  {
    title: "When Nietzsche Wept",
    author: "Irvin D. Yalom",
    year: "1992",
    href: "https://www.goodreads.com/book/show/21031",
    excerpt: "In 19th-century Vienna, a drama of love, fate, and will is played out amid the intellectual ferment that defined the era."
  },
  {
    title: "Wild Swans: Three Daughters of China",
    author: "Jung Chang",
    year: "1991",
    href: "https://www.goodreads.com/book/show/1848",
    excerpt: "Alternate cover edition of ISBN 9780743246989 The story of three generations in twentieth-century China that blends the intimacy of memoir and the panoramic sweep of eyewitness history—a..."
  },
  {
    title: "Brida",
    author: "Paulo Coelho",
    year: "1990",
    href: "https://www.goodreads.com/book/show/68591",
    excerpt: "O livro conta a história de Brida O' Fern, uma irlandesa de 21 anos em busca da magia e dos poderes ocultos."
  },
  {
    title: "A History of the World in 10½ Chapters",
    author: "Julian Barnes",
    year: "1989",
    href: "https://www.goodreads.com/book/show/43980",
    excerpt: "Beginning with an unlikely stowaway's account of life on board Noah's Ark, A History of the World in 10½ Chapters presents a surprising, subversive, fictional history of earth told from..."
  },
  {
    title: "Hyperion (Hyperion Cantos, #1)",
    author: "Dan Simmons",
    year: "1989",
    href: "https://www.goodreads.com/book/show/77566",
    excerpt: "On the world called Hyperion, beyond the law of the Hegemony of Man, there waits the creature called the Shrike."
  },
  {
    title: "Matilda",
    author: "Roald Dahl",
    year: "1988",
    href: "https://www.goodreads.com/book/show/39988",
    excerpt: "“The Trunchbull” is no match for Matilda!"
  },
  {
    title: "Prelude to Foundation (Foundation, #6)",
    author: "Isaac Asimov",
    year: "1988",
    href: "https://www.goodreads.com/book/show/30013",
    excerpt: "This is an alternative cover edition for ISBN 9780586071113 It is the year 12,020 G.E."
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: "1988",
    href: "https://www.goodreads.com/book/show/865",
    excerpt: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure."
  },
  {
    title: "The Pilgrimage",
    author: "Paulo Coelho",
    year: "1987",
    href: "https://www.goodreads.com/book/show/4004",
    excerpt: "The Pilgrimage recounts the spectacular trials of Paulo Coelho and his mysterious mentor, Petrus, as they journey across Spain in search of a miraculous sword."
  },
  {
    title: "Foundation and Earth (Foundation, #5)",
    author: "Isaac Asimov",
    year: "1986",
    href: "https://www.goodreads.com/book/show/29582",
    excerpt: "Golan Trevize, former Councilman of the First Foundation, has chosen the future, and it is Gaia."
  },
  {
    title: "Love in the Time of Cholera",
    author: "Gabriel García Márquez",
    year: "1985",
    href: "https://www.goodreads.com/book/show/9712",
    excerpt: "In their youth, Florentino Ariza and Fermina Daza fall passionately in love."
  },
  {
    title: "The Elric Saga Part I (Elric Saga, #1-3)",
    author: "Michael Moorcock",
    year: "1984",
    href: "https://www.goodreads.com/book/show/60132",
    excerpt: "Includes first 3 volumes in the series: Elric of Melnibone, The Sailor on the Seas of Fate and The Weird of the White Wolf."
  },
  {
    title: "Collected Stories",
    author: "Gabriel García Márquez",
    year: "1983",
    href: "https://www.goodreads.com/book/show/759",
    excerpt: "Collected here are twenty-six of Gabriel Garcia Marquez's most brilliant and enchanting short stories, presented in the chronological order of their publication in Spanish from three..."
  },
  {
    title: "Winter's Tale",
    author: "Mark Helprin",
    year: "1983",
    href: "https://www.goodreads.com/book/show/12967",
    excerpt: "New York City is subsumed in arctic winds, dark nights, and white lights, its life unfolds, for it is an extraordinary hive of the imagination, the greatest house ever built, and nothing..."
  },
  {
    title: "Foundation's Edge (Foundation, #4)",
    author: "Isaac Asimov",
    year: "1982",
    href: "https://www.goodreads.com/book/show/76683",
    excerpt: "At last, the costly and bitter war between the two Foundations had come to an end."
  },
  {
    title: "The BFG",
    author: "Roald Dahl",
    year: "1982",
    href: "https://www.goodreads.com/book/show/6319",
    excerpt: "Captured by a giant! The BFG is no ordinary bone-crunching giant."
  },
  {
    title: "A Light in the Attic",
    author: "Shel Silverstein",
    year: "1981",
    href: "https://www.goodreads.com/book/show/30118",
    excerpt: "Last night while I lay thinking here Some Whatifs crawled inside my ear And pranced and partied all night long And sang their same old Whatif song: Whatif I flunk that test?"
  },
  {
    title: "Jane Austen: Seven Novels",
    author: "Jane Austen",
    year: "1981",
    href: "https://www.goodreads.com/book/show/2600408",
    excerpt: "In a publishing career that spanned less than a decade, Jane Austen revolutionized the literary romance, using it as a stage from which to address issues of gender politics and..."
  },
  {
    title: "The Missing Piece Meets the Big O",
    author: "Shel Silverstein",
    year: "1981",
    href: "https://www.goodreads.com/book/show/30125",
    excerpt: "From Shel Silverstein , the celebrated author of The Giving Tree and Where the Sidewalk Ends , comes The Missing Piece Meets the Big O , a charming fable that gently probes the nature of..."
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy, #1)",
    author: "Douglas Adams",
    year: "1979",
    href: "https://www.goodreads.com/book/show/11",
    excerpt: "Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The..."
  },
  {
    title: "The Chronicles of Thomas Covenant, the Unbeliever (The Chronicles of Thomas Covenant the Unbeliever, #1-3)",
    author: "Stephen R. Donaldson",
    year: "1977",
    href: "https://www.goodreads.com/book/show/179033",
    excerpt: "The acclaimed fantasy epic, together in one volume."
  },
  {
    title: "The Missing Piece",
    author: "Shel Silverstein",
    year: "1976",
    href: "https://www.goodreads.com/book/show/30122",
    excerpt: "From Shel Silverstein , the celebrated author of The Giving Tree and Where the Sidewalk Ends , comes The Missing Piece , a charming fable that gently probes the nature of quest and..."
  },
  {
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    year: "1976",
    href: "https://www.goodreads.com/book/show/61535",
    excerpt: "\"The Selfish Gene\" caused a wave of excitement among biologists and the general public when it was first published in 1976."
  },
  {
    title: "Complete Poems and Selected Letters",
    author: "John Keats",
    year: "1975",
    href: "https://www.goodreads.com/book/show/138133",
    excerpt: "'I think I shall be among the English Poets after my death,' John Keats soberly prophesied in 1818 as he started writing the blankverse epic Hyperion."
  },
  {
    title: "Where the Sidewalk Ends",
    author: "Shel Silverstein",
    year: "1974",
    href: "https://www.goodreads.com/book/show/30119",
    excerpt: "Come in... for where the sidewalk ends, Shel Silverstein's world begins."
  },
  {
    title: "Small Is Beautiful: Economics as if People Mattered",
    author: "Ernst F. Schumacher",
    year: "1973",
    href: "https://www.goodreads.com/book/show/1117634",
    excerpt: "\"Nothing less than a full-scale assault on conventional economic wisdom.\" — Newsweek One the 100 most influential books published since World War II — The Times Literary Supplement Hailed..."
  },
  {
    title: "The Trouble With Being Born",
    author: "Emil M. Cioran",
    year: "1973",
    href: "https://www.goodreads.com/book/show/117564",
    excerpt: "In this volume, which reaffirms the uncompromising brilliance of his mind, Cioran strips the human condition down to its most basic components, birth and death, suggesting that disaster..."
  },
  {
    title: "Love",
    author: "Leo F. Buscaglia",
    year: "1972",
    href: "https://www.goodreads.com/book/show/841125",
    excerpt: "Vintage paperback"
  },
  {
    title: "The Gods Themselves",
    author: "Isaac Asimov",
    year: "1972",
    href: "https://www.goodreads.com/book/show/41821",
    excerpt: "In the twenty-second century Earth obtains limitless, free energy from a source science little understands: an exchange between Earth and a parallel universe, using a process devised by the..."
  },
  {
    title: "General System Theory: Foundations, Development, Applications (Revised Edition)",
    author: "Ludwig Von Bertalanffy",
    year: "1969",
    href: "https://www.goodreads.com/book/show/1096749",
    excerpt: "Gathered here are Ludwig von Bertalanffy's writings on general systems theory, selected and edited to show the evolution of systems theory and to present it applications to problem solving."
  },
  {
    title: "I'm Okay, You're Okay",
    author: "Thomas A. Harris",
    year: "1967",
    href: "https://www.goodreads.com/book/show/20341310",
    excerpt: "1969 hardcover with dust jacket as shown."
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    year: "1967",
    href: "https://www.goodreads.com/book/show/320",
    excerpt: "Probably Garcí­a Márquez finest and most famous work."
  },
  {
    title: "A Giraffe and a Half",
    author: "Shel Silverstein",
    year: "1964",
    href: "https://www.goodreads.com/book/show/41888",
    excerpt: "If you had a giraffe and he stretched another half … you would have a giraffe and a half."
  },
  {
    title: "A Very Easy Death",
    author: "Simone de Beauvoir",
    year: "1964",
    href: "https://www.goodreads.com/book/show/123942",
    excerpt: "A Very Easy Death has long been considered one of Simone de Beauvoir’s masterpieces."
  },
  {
    title: "Charlie and the Chocolate Factory (Charlie Bucket, #1)",
    author: "Roald Dahl",
    year: "1964",
    href: "https://www.goodreads.com/book/show/6310",
    excerpt: "Charlie Bucket's wonderful adventure begins when he finds one of Mr."
  },
  {
    title: "Games People Play",
    author: "Eric Berne",
    year: "1964",
    href: "https://www.goodreads.com/book/show/49176",
    excerpt: "We think we’re relating to other people–but actually we’re all playing games."
  },
  {
    title: "The Giving Tree",
    author: "Shel Silverstein",
    year: "1964",
    href: "https://www.goodreads.com/book/show/370493",
    excerpt: "\"Once there was a tree...and she loved a little boy.\" So begins a story of unforgettable perception, beautifully written and illustrated by the gifted and versatile Shel Silverstein."
  },
  {
    title: "What Do You Say After You Say Hello?",
    author: "Eric Berne",
    year: "1964",
    href: "https://www.goodreads.com/book/show/456496",
    excerpt: "Berne, Eric, What Do You Say after You Say Hello?"
  },
  {
    title: "Island",
    author: "Aldous Huxley",
    year: "1962",
    href: "https://www.goodreads.com/book/show/5130",
    excerpt: "In Island , his last novel, Huxley transports us to a Pacific island where, for 120 years, an ideal society has flourished."
  },
  {
    title: "James and the Giant Peach",
    author: "Roald Dahl",
    year: "1961",
    href: "https://www.goodreads.com/book/show/6689",
    excerpt: "James Henry Trotter lives with two ghastly hags."
  },
  {
    title: "Atlas Shrugged",
    author: "Ayn Rand",
    year: "1957",
    href: "https://www.goodreads.com/book/show/9469037",
    excerpt: "This is the story of a man who said that he would stop the motor of the world and did."
  },
  {
    title: "The Chronicles of Narnia (The Chronicles of Narnia, #1-7)",
    author: "C.S. Lewis",
    year: "1956",
    href: "https://www.goodreads.com/book/show/11127",
    excerpt: "Librarian note: An alternate cover for this edition can be found here: 2005 ."
  },
  {
    title: "Lolita",
    author: "Vladimir Nabokov",
    year: "1955",
    href: "https://www.goodreads.com/book/show/7604",
    excerpt: "Librarian's note: Alternate cover edition of ISBN 9780141182537 ."
  },
  {
    title: "The Return of the King (The Lord of the Rings, #3)",
    author: "J.R.R. Tolkien",
    year: "1955",
    href: "https://www.goodreads.com/book/show/18512",
    excerpt: "Alternate cover edition here . The Companions of the Ring have become involved in separate adventures as the quest continues."
  },
  {
    title: "The Fellowship of the Ring (The Lord of the Rings, #1)",
    author: "J.R.R. Tolkien",
    year: "1954",
    href: "https://www.goodreads.com/book/show/34",
    excerpt: "Alternate Cover Edition ISBN 0618260269 (copyright page ISBN is 0618346252 - different from back cover) One Ring to rule them all, One Ring to find them, One Ring to bring them all and in..."
  },
  {
    title: "The Two Towers (The Lord of the Rings, #2)",
    author: "J.R.R. Tolkien",
    year: "1954",
    href: "https://www.goodreads.com/book/show/15241",
    excerpt: "The Two Towers. Book Two in J.R.R. Tolkien's acclaimed trilogy, a masterpiece of high fantasy."
  },
  {
    title: "Second Foundation (Foundation, #3)",
    author: "Isaac Asimov",
    year: "1953",
    href: "https://www.goodreads.com/book/show/29580",
    excerpt: "So far the Foundation was safe. But there was a hidden Second Foundation to protect the first."
  },
  {
    title: "The Man Who Planted Trees",
    author: "Jean Giono",
    year: "1953",
    href: "https://www.goodreads.com/book/show/757438",
    excerpt: "Simply written, but powerful and unforgettable, The Man Who Planted Trees is a parable for modern times."
  },
  {
    title: "Foundation and Empire (Foundation, #2)",
    author: "Isaac Asimov",
    year: "1952",
    href: "https://www.goodreads.com/book/show/29581",
    excerpt: "Foundation and Empire tells the incredible story of a new breed of man who create a new force for galactic government."
  },
  {
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    year: "1952",
    href: "https://www.goodreads.com/book/show/2165",
    excerpt: "Librarian's note: An alternate cover edition can be found here The last novel Ernest Hemingway saw published, The Old Man and the Sea has proved itself to be one of the most enduring works..."
  },
  {
    title: "Foundation (Foundation, #1)",
    author: "Isaac Asimov",
    year: "1951",
    href: "https://www.goodreads.com/book/show/29579",
    excerpt: "The first novel in Isaac Asimov's classic science-fiction masterpiece, the Foundation series For twelve thousand years the Galactic Empire has ruled supreme."
  },
  {
    title: "The Fog Horn",
    author: "Ray Bradbury",
    year: "1951",
    href: "https://www.goodreads.com/book/show/357496",
    excerpt: "Creative Education's short story collections are ideal introductions to some of the world's best-known authors."
  },
  {
    title: "I, Robot (Robot, #0.1)",
    author: "Isaac Asimov",
    year: "1950",
    href: "https://www.goodreads.com/book/show/41804",
    excerpt: "Isaac Asimov's I, Robot launches readers on an adventure into a not-so-distant future where man and machine , struggle to redefinelife, love, and consciousness—and where the stakes are..."
  },
  {
    title: "1984",
    author: "George Orwell",
    year: "1948",
    href: "https://www.goodreads.com/book/show/5470",
    excerpt: "The year 1984 has come and gone, but George Orwell's prophetic, nightmarish vision in 1949 of the world we were becoming is timelier than ever."
  },
  {
    title: "The Ethics of Ambiguity",
    author: "Simone de Beauvoir",
    year: "1947",
    href: "https://www.goodreads.com/book/show/21119",
    excerpt: "Simone de Beauvoir, novelist, dramatist, and philosopher, was the most distinguished woman writer in modern France."
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    year: "1946",
    href: "https://www.goodreads.com/book/show/4069",
    excerpt: "Psychiatrist Viktor Frankl's memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival."
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    year: "1945",
    href: "https://www.goodreads.com/book/show/7613",
    excerpt: "Librarian's note: There is an Alternate Cover Edition for this edition of this book here ."
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    year: "1943",
    href: "https://www.goodreads.com/book/show/157993",
    excerpt: "A pilot forced to land in the Sahara meets a little prince."
  },
  {
    title: "سگ ولگرد",
    author: "صادق هدایت",
    year: "1942",
    href: "https://www.goodreads.com/book/show/87815",
    excerpt: "سگ ولگرد مجموعه‌ای از داستان‌های کوتاه صادق هدایت است."
  },
  {
    title: "The Blind Owl",
    author: "Sadegh Hedayat",
    year: "1937",
    href: "https://www.goodreads.com/book/show/45967",
    excerpt: "Considered the most important work of modern Iranian literature, The Blind Owl is a haunting tale of loss and spiritual degradation."
  },
  {
    title: "The Hobbit, or There and Back Again",
    author: "J.R.R. Tolkien",
    year: "1937",
    href: "https://www.goodreads.com/book/show/5907",
    excerpt: "In a hole in the ground there lived a hobbit."
  },
  {
    title: "Heart of a Dog",
    author: "Mikhail Bulgakov",
    year: "1925",
    href: "https://www.goodreads.com/book/show/113205",
    excerpt: "This satirical novel tells the story of the surgical transformation of a dog into a man, and is an obvious criticism of Soviet society, especially the new rich that arose after the..."
  },
  {
    title: "Complete Works of Oscar Wilde",
    author: "Oscar Wilde",
    year: "1908",
    href: "https://www.goodreads.com/book/show/5289",
    excerpt: "In print since 1948, this is a single-volume collection of Oscar Wilde's texts."
  },
  {
    title: "چرند و پرند",
    author: "علی اکبر دهخدا",
    year: "1907",
    href: "https://www.goodreads.com/book/show/1330595",
    excerpt: "الحمدلله به خیر گذشت حالا که فکر می‌کنم می‌بینم واقعاً چه آدم‌های باگذشتی بودند."
  },
  {
    title: "The Importance of Being Earnest",
    author: "Oscar Wilde",
    year: "1895",
    href: "https://www.goodreads.com/book/show/92303",
    excerpt: "Oscar Wilde's madcap farce about mistaken identities, secret engagements, and lovers entanglements still delights readers more than a century after its 1895 publication and premiere..."
  },
  {
    title: "Tess of the D’Urbervilles",
    author: "Thomas Hardy",
    year: "1891",
    href: "https://www.goodreads.com/book/show/32261",
    excerpt: "Alternate covers can be found here and here ."
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    year: "1890",
    href: "https://www.goodreads.com/book/show/5297",
    excerpt: "Dorian Gray, a handsome young man, receives a beautiful painting of himself from his good friend Basil Hallward."
  },
  {
    title: "Miguel Strogoff",
    author: "Jules Verne",
    year: "1876",
    href: "https://www.goodreads.com/book/show/15707099",
    excerpt: "En el siglo XIX se produce una sublevación en Siberia, liderada por el tártaro Féofar-Khan, secundado por el renegado ruso Iván Ogareff, que se extiende y triunfa sin oposición."
  },
  {
    title: "Around the World in Eighty Days",
    author: "Jules Verne",
    year: "1872",
    href: "https://www.goodreads.com/book/show/54479",
    excerpt: "Pragmatic gambler Phileas Fogg has made a gentlemanly wager to the members of his exclusive club: that he can circle the world in just eighty days, right down to the minute."
  },
  {
    title: "The Man Who Laughs",
    author: "Victor Hugo",
    year: "1869",
    href: "https://www.goodreads.com/book/show/63038",
    excerpt: "Victor Hugo's The Man Who Laughs (first published under the French title L'Homme qui Rit in April 1869) is a sad and sordid tale -- not the sort of tale of the moment Hugo was known for."
  },
  {
    title: "Twenty Thousand Leagues Under the Sea",
    author: "Jules Verne",
    year: "1869",
    href: "https://www.goodreads.com/book/show/33507",
    excerpt: "Vingt mille lieues sous les mers - Niveau 1/A1 - Lecture CLE en français facile - Livre + Audio téléchargeable Public : Grands adolescents 16-18 ans / Adultes Collection : Lectures CLE en..."
  },
  {
    title: "From the Earth to the Moon",
    author: "Jules Verne",
    year: "1865",
    href: "https://www.goodreads.com/book/show/32827",
    excerpt: "Verne's 1865 tale of a trip to the moon is (as you'd expect from Verne) great fun, even if bits of it now seem, in retrospect, a little strange."
  },
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    year: "1862",
    href: "https://www.goodreads.com/book/show/24280",
    excerpt: "Victor Hugo's tale of injustice, heroism and love follows the fortunes of Jean Valjean, an escaped convict determined to put his criminal past behind him."
  },
  {
    title: "Great Expectations",
    author: "Charles Dickens",
    year: "1861",
    href: "https://www.goodreads.com/book/show/2623",
    excerpt: "Great Expectations charts the progress of Pip from childhood through often painful experiences to adulthood, as he moves from the Kent marshes to busy, commercial London, encountering a..."
  },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    year: "1859",
    href: "https://www.goodreads.com/book/show/1953",
    excerpt: "A Tale of Two Cities is Charles Dickens’s great historical novel, set against the violent upheaval of the French Revolution."
  },
  {
    title: "The Complete Stories and Poems",
    author: "Edgar Allan Poe",
    year: "1849",
    href: "https://www.goodreads.com/book/show/23919",
    excerpt: "Edgar Allan Poe was one of the most original writers in the history of American letters, a genius who was tragically misunderstood in his lifetime."
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    year: "1846",
    href: "https://www.goodreads.com/book/show/7126",
    excerpt: "An alternative cover edition for this ISBN can be found here Thrown in prison for a crime he has not committed, Edmond Dantes is confined to the grim fortress of If."
  },
  {
    title: "The Imp of the Perverse",
    author: "Edgar Allan Poe",
    year: "1845",
    href: "https://www.goodreads.com/book/show/1712675",
    excerpt: "Suspense, fear and the supernatural provide the center for this tale by the master prose writer, Edgar Allan Poe."
  },
  {
    title: "The Raven",
    author: "Edgar Allan Poe",
    year: "1845",
    href: "https://www.goodreads.com/book/show/264158",
    excerpt: "In Gustave Doré, one of the most prolific and successful book illustrators of the late 19h century, Edgar Allan Poe's renowned poem The Raven found perhaps its most perfect artistic..."
  },
  {
    title: "The Three Musketeers",
    author: "Alexandre Dumas",
    year: "1844",
    href: "https://www.goodreads.com/book/show/7190",
    excerpt: "First published in 1844, The Three Musketeers is the most famous of Alexandre Dumas' historical novels and one of the most popular adventure novels ever written."
  },
  {
    title: "The Tell-Tale Heart and Other Writings",
    author: "Edgar Allan Poe",
    year: "1843",
    href: "https://www.goodreads.com/book/show/391729",
    excerpt: "Edgar Allan Poe remains the unsurpassed master of works of mystery and madness in this outstanding collection of Poe's prose and poetry are sixteen of his finest tales, including: -The..."
  },
  {
    title: "Oliver Twist",
    author: "Charles Dickens",
    year: "1838",
    href: "https://www.goodreads.com/book/show/18254",
    excerpt: "A gripping portrayal of London's dark criminal underbelly, published in Penguin Classics with an introduction by Philip Horne."
  },
  {
    title: "The Hunchback of Notre-Dame",
    author: "Victor Hugo",
    year: "1831",
    href: "https://www.goodreads.com/book/show/30597",
    excerpt: "This extraordinary historical French gothic novel, set in Medieval Paris under the twin towers of its greatest structure and supreme symbol, the cathedral of Notre-Dame, is the haunting..."
  },
  {
    title: "Discourse on Method",
    author: "René Descartes",
    year: "1637",
    href: "https://www.goodreads.com/book/show/159418",
    excerpt: "By far the most widely used translation in North American college classrooms, Donald A."
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes Saavedra",
    year: "1605",
    href: "https://www.goodreads.com/book/show/3836",
    excerpt: "Don Quixote has become so entranced by reading chivalric romances that he determines to become a knight-errant himself."
  },
  {
    title: "An Introduction to Machine Learning",
    author: "Gopinath Rebala",
    year: "May 7, 2019",
    href: "https://www.goodreads.com/book/show/51859640",
    excerpt: "Just like electricity, Machine Learning will revolutionize our life in many ways – some of which are not even conceivable today."
  },
  {
    title: "Animal Farm / 1984",
    author: "George Orwell",
    year: "June 1, 2003",
    href: "https://www.goodreads.com/book/show/5472",
    excerpt: "This edition features George Orwell’s best-known novels—1984 and Animal Farm—with an introduction by Christopher Hitchens."
  },
  {
    title: "Freedom, Innovation, Prosperity: The Secrets of Success in the Digital Era",
    author: "Zoltan Csefalvay",
    year: "February 5, 2026",
    href: "https://www.goodreads.com/book/show/247632802",
    excerpt: "A thought-provoking exploration of the ideas and questions behind Freedom, Innovation, Prosperity: The Secrets of Success in the Digital Era."
  },
  {
    title: "How to Die Alone: The Foolproof Guide to Not Helping Yourself",
    author: "Mo Welch",
    year: "April 16, 2019",
    href: "https://www.goodreads.com/book/show/40591659",
    excerpt: "It’s OK. Really.   For every brave soul who wants to just say no—no to meeting the gang for drinks, no to wishing a coworker happy birthday (unless there’s free cake involved), and no to..."
  },
  {
    title: "How to Make a Few Billion Dollars",
    author: "Brad Jacobs",
    year: "January 15, 2024",
    href: "https://www.goodreads.com/book/show/199249408",
    excerpt: "Do you have a burning passion to make a lot of money in business?"
  },
  {
    title: "I'm a MOD: conversations about personal excellence",
    author: "Igor Legowski",
    year: "January 13, 2024",
    href: "https://www.goodreads.com/book/show/205360775",
    excerpt: "Dear Reader! Welcome to the world of MOD – the Master of Personal Excellence."
  },
  {
    title: "Is the Algorithm Plotting Against Us?: A Layperson's Guide to the Concepts, Math, and Pitfalls of AI",
    author: "Kenneth Wenger",
    year: "May 1, 2023",
    href: "https://www.goodreads.com/book/show/147984171",
    excerpt: "Artificial intelligence is everywhere—it’s in our houses and phones and cars."
  },
  {
    title: "Many Voices One Song: Shared Power with Sociocracy",
    author: "Ted J. Rau",
    year: "January 1, 2018",
    href: "https://www.goodreads.com/book/show/39462406",
    excerpt: "Imagine a world where all people meet each other as equals."
  },
  {
    title: "Mastering Uncertainty",
    author: "Matt Watkinson",
    year: "March 28, 2023",
    href: "https://www.goodreads.com/book/show/61646824",
    excerpt: "What separates the world’s most successful founders, entrepreneurs and business leaders from the rest?"
  },
  {
    title: "Obviously Awesome: How to Nail Product Positioning so Customers Get It, Buy It, Love It",
    author: "April Dunford",
    year: "May 14, 2019",
    href: "https://www.goodreads.com/book/show/45166937",
    excerpt: "You know your product is awesome—but does anybody else?"
  },
  {
    title: "Power vs. Force: The Hidden Determinants of Human Behavior",
    author: "David R. Hawkins",
    year: "June 1, 1985",
    href: "https://www.goodreads.com/book/show/19795.Power_vs_Force",
    excerpt: "A framework for understanding how levels of consciousness influence human behavior, decisions, and collective systems."
  },
  {
    title: "The 59 keys for understanding the beginning of life (Library of The Physic of Life Book 2)",
    author: "Jan Kubań",
    year: "April 7, 2019",
    href: "https://www.goodreads.com/book/show/49584808",
    excerpt: "The 59 keys for understanding the beginning of life presents a coherent theory of the origin of life on Earth."
  },
  {
    title: "The Art of Explanation",
    author: "Ros Atkins",
    year: "September 14, 2023",
    href: "https://www.goodreads.com/book/show/64631477",
    excerpt: "Explanation - conveying meaning - is an art."
  },
  {
    title: "The Illusion of Innovation: Escape \"Efficiency\" and Unleash Radical Progress",
    author: "Elliott Parker",
    year: "April 16, 2024",
    href: "https://www.goodreads.com/book/show/198280033",
    excerpt: "Our institutions are failing us. Corporations, governments, and universities all seem less capable of confronting challenges and opportunities than they once were.  The irony is that our..."
  },
  {
    title: "The Power of Discipline: How to Use Self Control and Mental Toughness to Achieve Your Goals",
    author: "Daniel Walter",
    year: "May 5, 2020",
    href: "https://www.goodreads.com/book/show/53500087",
    excerpt: "Have you spent weeks, months, or even years trying to achieve your goals but keep failing?"
  },
  {
    title: "The Private Equity Playbook: Management’s Guide to Working with Private Equity",
    author: "Adam Coffey",
    year: "February 26, 2019",
    href: "https://www.goodreads.com/book/show/44143328",
    excerpt: "Private equity firms are on the rise and rapidly changing the game."
  },
  {
    title: "The Skill Code: How to Save Human Ability in an Age of Intelligent Machines",
    author: "Matt Beane",
    year: "June 11, 2024",
    href: "https://www.goodreads.com/book/show/199534421",
    excerpt: "From one of the world’s top researchers on work and technology comes an insightful and surprising guide to protecting your skill in a world filling with AI and robots."
  },
  {
    title: "The Tears That Taught Me",
    author: "Morgan Richard Olivier",
    year: "January 1, 2022",
    href: "https://www.goodreads.com/book/show/60650000",
    excerpt: "With unapologetically honest reflections and revelations—Morgan Richard Olivier embraces the tears, trials, and triumphs one experiences when seeking development, direction, and detachment."
  },
  {
    title: "Think Faster, Talk Smarter: How to Speak Successfully When You're Put on the Spot",
    author: "Matt Abrahams",
    year: "September 26, 2023",
    href: "https://www.goodreads.com/book/show/101021597",
    excerpt: "Develop the life-changing ability to excel in spontaneous communication situations—from public speaking to interviewing to networking—with these essential strategies from a Stanford..."
  },
  {
    title: "True Age: Cutting-Edge Research to Help Turn Back the Clock",
    author: "Morgan Levine",
    year: "May 3, 2022",
    href: "https://www.goodreads.com/book/show/58735037",
    excerpt: "Cutting-edge research shows how to determine and decrease your true biological age."
  },
  {
    title: "Unfair Marketing: Drive Marketing Success by Leveraging Your Company's Unique Strengths",
    author: "David Rodnitzky",
    year: "July 13, 2021",
    href: "https://www.goodreads.com/book/show/58550291",
    excerpt: "Your company has an unfair advantage over the competition—and it’s an advantage just waiting for you to leverage it."
  },
  {
    title: "Women Holding Things: A Moving Art Book About Exploring the Profound in Everyday Life",
    author: "Maira Kalman",
    year: "October 18, 2022",
    href: "https://www.goodreads.com/book/show/60194116",
    excerpt: "From the critically acclaimed artist, designer, and author of the bestsellers The Principles of Uncertainty and My Favorite Things comes a wondrous collection of words and paintings that is..."
  },
  {
    title: "زنی كه مردش را گم كرد",
    author: "صادق هدایت",
    year: "July 1933",
    href: "https://www.goodreads.com/book/show/1894214",
    excerpt: "صبح زود در ايستگاه قلهك آژان قد كوتاه صورت سرخي به شوفر اتومبيلي كه آنجا ايستاده بود زن بچه بغلي رانشان داد و گفت:- اين زن مي خواسته برود مازندران اينجا آمده ، او را بشهر برسانيد ثواب دارد..."
  },
  {
    title: "سه قطره خون",
    author: "صادق هدایت",
    year: "July 1932",
    href: "https://www.goodreads.com/book/show/66608",
    excerpt: "داستان ایرانی ــ ۲۱ «سه قطره خون» از روان-داستان‌های صادق هدایت است که بیشتر در کنار «بوف کور» و «زنده بگور» مورد نقد و بررسی قرار گرفته است."
  },
  {
    title: "American Gods (American Gods, #1)",
    author: "Neil Gaiman",
    year: "2001",
    href: "https://www.goodreads.com/book/show/30165203-american-gods",
    excerpt: "A mythic journey across America where old gods, new powers, belief, and identity collide."
  },
  {
    title: "Norse Mythology",
    author: "Neil Gaiman",
    year: "2017",
    href: "https://www.goodreads.com/book/show/37903770-norse-mythology",
    excerpt: "A vivid retelling of the Norse myths, from the origins of the gods to the final upheaval of Ragnarok."
  },
  {
    title: "Good Omens",
    author: "Terry Pratchett & Neil Gaiman",
    year: "May 10, 1990",
    href: "https://www.goodreads.com/book/show/12067.Good_Omens",
    excerpt: "An angel and a demon form an unlikely alliance to prevent an apocalypse neither of them particularly wants."
  },
];

const publicationTimestamp = (value: string) => {
  if (value === "n.d.") return Number.NEGATIVE_INFINITY;
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? Number.NEGATIVE_INFINITY : timestamp;
};

export const books: Book[] = rawBooks.sort(
  (a, b) => publicationTimestamp(b.year) - publicationTimestamp(a.year)
);
