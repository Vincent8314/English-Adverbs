const adverbs = [
  { 
    english: "not", 
    french: "pas/ne pas",
    example: "She is not going to attend the conference tomorrow."
  },
  { 
    english: "up", 
    french: "en haut",
    example: "He climbed up the mountain to see the sunrise."
  },
  { 
    english: "out", 
    french: "dehors",
    example: "The children are playing out in the garden all day."
  },
  { 
    english: "there", 
    french: "là",
    example: "I will meet you there at the corner of the street."
  },
  { 
    english: "only", 
    french: "seulement",
    example: "She was only trying to help you with your problem."
  },
  { 
    english: "so", 
    french: "donc/si",
    example: "The weather was so nice that we decided to go hiking."
  },
  { 
    english: "when", 
    french: "quand",
    example: "Please let me know when you are ready to leave home."
  },
  { 
    english: "here", 
    french: "ici",
    example: "Put the package right here on the table beside me."
  },
  { 
    english: "now", 
    french: "maintenant",
    example: "We need to leave for the airport right now immediately."
  },
  { 
    english: "how", 
    french: "comment",
    example: "Could you please show me how to solve this math problem?"
  },
  { 
    english: "back", 
    french: "en arrière",
    example: "She will be back from her vacation next Monday morning."
  },
  { 
    english: "just", 
    french: "juste",
    example: "I was just about to call you when you texted me."
  },
  { 
    english: "then", 
    french: "alors",
    example: "First finish your homework and then you can watch television."
  },
  { 
    english: "well", 
    french: "bien",
    example: "She performed well in the competition and won first prize."
  },
  { 
    english: "where", 
    french: "où",
    example: "Do you know where I can find a good Italian restaurant?"
  },
  { 
    english: "very", 
    french: "très",
    example: "The new exhibit at the museum was very impressive and educational."
  },
  { 
    english: "even", 
    french: "même",
    example: "Even the most experienced climbers found the route challenging and difficult."
  },
  { 
    english: "today", 
    french: "aujourd'hui",
    example: "The weather forecast says it will rain heavily today across the region."
  },
  {
    english: "down",
    french: "en bas",
    example: "Please put the heavy boxes down before you hurt your back."
  },
  {
    english: "why",
    french: "pourquoi",
    example: "I don't understand why she decided to leave the company suddenly."
  },
  {
    english: "still",
    french: "encore",
    example: "Even after three attempts, he is still struggling with the assignment."
  },
  {
    english: "too",
    french: "trop",
    example: "The coffee was too hot to drink immediately after brewing."
  },
  {
    english: "really",
    french: "vraiment",
    example: "I really enjoyed the concert we attended last weekend in Paris."
  },
  {
    english: "again",
    french: "encore",
    example: "She had to explain the complicated concept to me again yesterday."
  },
  {
    english: "never",
    french: "jamais",
    example: "He has never visited Japan despite his interest in Japanese culture."
  },
  {
    english: "always",
    french: "toujours",
    example: "My grandmother always bakes cookies when we visit her house."
  },
  {
    english: "yet",
    french: "encore/déjà",
    example: "Have you finished your homework yet? The deadline is approaching quickly."
  },
  {
    english: "away",
    french: "loin",
    example: "The children ran away from the playground when it started raining."
  },
  {
    english: "already",
    french: "déjà",
    example: "We have already discussed this issue during yesterday's meeting."
  },
  {
    english: "daily",
    french: "quotidiennement",
    example: "She practices playing the piano daily to improve her musical skills."
  },
  {
    english: "ever",
    french: "jamais",
    example: "Have you ever visited the beautiful beaches of Normandy in France?"
    },
  {
    english: "early",
    french: "tôt",
    example: "We need to wake up early tomorrow to catch the first train."
  },
  {
    english: "usually",
    french: "habituellement",
    example: "She usually takes her dog for a walk before starting work."
  },
  {
    english: "together",
    french: "ensemble",
    example: "The family gathers together for a special meal every Sunday evening."
  },
  {
    english: "far",
    french: "loin",
    example: "The nearest hospital is far from their remote mountain village."
  },
  {
    english: "often",
    french: "souvent",
    example: "My grandfather often tells stories about his childhood during dinner."
  },
  {
    english: "currently",
    french: "actuellement",
    example: "He is currently working on an important project for his company."
  },
  {
    english: "enough",
    french: "assez",
    example: "Do we have enough ingredients to make dinner for everyone tonight?"
  },
  {
    english: "soon",
    french: "bientôt",
    example: "The construction of the new library will be completed soon."
  },
  {
    english: "actually",
    french: "en fait",
    example: "I thought the movie was boring, but it was actually quite interesting."
  },
  {
    english: "almost",
    french: "presque",
    example: "We had almost reached the summit when the storm forced us back."
  },
  {
    english: "friendly",
    french: "amicalement",
    example: "She smiled friendly at the new student to make him feel welcome."
  },
  {
    english: "simply",
    french: "simplement",
    example: "The problem could be simply solved by changing the battery."
  },
{
    english: "recently",
    french: "récemment",
    example: "I recently discovered a charming little café near my apartment building."
  },
  {
    english: "probably",
    french: "probablement",
    example: "She will probably arrive late because of the heavy traffic today."
  },
  {
    english: "especially",
    french: "particulièrement",
    example: "The gardens are especially beautiful during the spring season."
  },
  {
    english: "quite",
    french: "assez",
    example: "The explanation was quite clear, so everyone understood the instructions."
  },
  {
    english: "directly",
    french: "directement",
    example: "After the meeting, she went directly to the airport to catch her flight."
  },
  {
    english: "likely",
    french: "probablement",
    example: "The team will most likely win the championship this season."
  },
  {
    english: "maybe",
    french: "peut-être",
    example: "Maybe we should consider a different approach to solving this problem."
  },
  {
    english: "finally",
    french: "finalement",
    example: "After three hours of searching, we finally found our lost keys."
  },
  {
    english: "fully",
    french: "entièrement",
    example: "The restaurant was fully booked for Valentine's Day dinner reservations."
  },
  {
    english: "monthly",
    french: "mensuellement",
    example: "The company holds monthly meetings to discuss progress and challenges."
  },
  {
    english: "weekly",
    french: "hebdomadairement",
    example: "Our neighborhood organizes weekly farmers' markets during the summer months."
  },
  {
    english: "highly",
    french: "hautement",
    example: "She is a highly respected researcher in the field of marine biology."
  },
  {
    english: "perhaps",
    french: "peut-être",
    example: "Perhaps we should wait until tomorrow when we'll have more information."
  },
  {
    english: "particularly",
    french: "particulièrement",
    example: "This winter has been particularly cold compared to previous years."
  },
  {
    english: "easily",
    french: "facilement",
    example: "Children can easily learn new languages when they start at a young age."
  },
  {
    english: "generally",
    french: "généralement",
    example: "People generally prefer to travel during the summer vacation period."
  },
  {
    english: "quickly",
    french: "rapidement",
    example: "The firefighters responded quickly to the emergency call in the neighborhood."
  },
  {
    english: "immediately",
    french: "immédiatement",
    example: "You should notify your supervisor immediately if you notice any safety issues."
  },
  {
    english: "approximately",
    french: "approximativement",
    example: "The journey to the mountain resort takes approximately three hours by car."
  },
  {
    english: "automatically",
    french: "automatiquement",
    example: "The lights in the hallway turn on automatically when someone enters the room."
  },
  {
    english: "yesterday",
    french: "hier",
    example: "We submitted our final project proposal yesterday before the deadline expired."
  },
  {
    english: "completely",
    french: "complètement",
    example: "The storm completely destroyed the old wooden bridge connecting the villages."
  },
  {
    english: "clearly",
    french: "clairement",
    example: "She explained the complex procedure clearly so everyone could understand it."
  },
  {
    english: "frequently",
    french: "fréquement, souvent",
    example: "Patients with chronic conditions frequently need to visit their doctors for checkups."
  },
  {
    english: "exactly",
    french: "exactement",
    example: "This is exactly what I was looking for when I described the design."
  },
  {
    english: "nearly",
    french: "presque",
    example: "We had nearly finished painting the house when it started to rain."
  },
  {
    english: "slightly",
    french: "légerement, un peu",
    example: "The recipe tastes better if you add slightly more cinnamon to the mixture."
  },
  {
    english: "originally",
    french: "à l'origine",
    example: "The building was originally designed as a factory before being converted into apartments."
  },
  {
    english: "previously",
    french: "précédemment, auparavant",
    example: "She had previously worked as a teacher before changing her career path."
  },
  {
    english: "certainly",
    french: "certainement",
    example: "We will certainly consider your suggestion during our next planning meeting."
  },
  {
    english: "mostly",
    french: "principalement",
    example: "The audience was mostly composed of students from the local university."
  },
  {
    english: "specifically",
    french: "spécifiquement, précisement",
    example: "The medication was specifically developed to treat this rare condition."
  },
  {
    english: "totally",
    french: "totalemment, entièrement, complètement",
    example: "I am totally convinced that this is the right decision for our company."
  },
  {
    english: "extremely",
    french: "extrêmement",
    example: "The climbers faced extremely difficult conditions during their ascent to the summit."
  },
  {
    english: "truly",
    french: "vraiment",
    example: "I am truly grateful for all the support you have shown during this difficult time."
  },
  {
    english: "properly",
    french: "correctement",
    example: "Make sure to properly secure all doors and windows before leaving for vacation."
  },
  {
    english: "newly",
    french: "nouvellement",
    example: "The newly installed security system provides better protection for the building."
  },
  {
    english: "tomorrow",
    french: "demain",
    example: "We will discuss the details of the contract tomorrow during our meeting."
  },
  {
    english: "absolutely",
    french: "absolument",
    example: "This procedure must be followed absolutely correctly to ensure safety standards."
  },
  {
    english: "significantly",
    french: "significativement",
    example: "The new treatment has significantly improved the quality of life for many patients."
  },
  {
    english: "forth",
    french: "en avant",
    example: "The teacher asked the students to come forth with their ideas for the project."
  },
  {
    english: "normally",
    french: "normalement",
    example: "I normally take the bus to work, but today I decided to walk instead."
  },
  {
    english: "relatively",
    french: "relativement",
    example: "The test was relatively easy compared to what we had expected."
  },
  {
    english: "effectively",
    french: "efficacement, effectivement, en pratique, dans les faits",
    example: "The new system effectively reduced waiting times for all customers."
  },
  {
    english: "possibly",
    french: "possiblement",
    example: "This could possibly be the most important discovery of the decade."
  },
  {
    english: "typically",
    french: "typiquement",
    example: "Polar bears typically hunt seals by waiting patiently at their breathing holes."
  },
  {
    english: "widely",
    french: "largement",
    example: "This book has been widely translated and read around the world."
  },
  {
    english: "mainly",
    french: "principalement",
    example: "The region's economy is mainly dependent on tourism and agriculture."
  },
  {
    english: "seriously",
    french: "sérieusement",
    example: "We need to take these environmental warnings seriously before it's too late."
  },
  {
    english: "greatly",
    french: "grandement",
    example: "The new irrigation system has greatly improved crop yields for local farmers."
  },
  {
    english: "entirely",
    french: "entièrement",
    example: "The success of the project depends entirely on securing adequate funding."
  },
  {
    english: "unfortunately",
    french: "malheureusement",
    example: "Unfortunately, we will have to postpone the outdoor concert due to rain."
  },
  {
    english: "primarily",
    french: "principalement",
    example: "This research center is primarily focused on developing renewable energy technologies."
  },
  {
    english: "literally",
    french: "littéralement",
    example: "When he said the box was empty, he meant it literally without exaggeration."
  },
  {
    english: "shortly",
    french: "bientôt",
    example: "The manager will arrive shortly to address your concerns about the project."
  },
  {
    english: "closely",
    french: "étroitement",
    example: "The detective examined the evidence closely before drawing any conclusions."
  },
  {
    english: "accordingly",
    french: "en conséquence",
    example: "The weather forecast predicts rain; accordingly, we should bring umbrellas tomorrow."
  },
  {
    english: "necessarily",
    french: "nécessairement",
    example: "Working longer hours doesn't necessarily lead to increased productivity."
  },
  {
    english: "below",
    french: "ci-dessous",
    example: "Please find the requested information below in the attached document."
  },
  {
    english: "largely",
    french: "largement",
    example: "The success of the campaign was largely due to strong social media engagement."
  },
  {
    english: "apparently",
    french: "apparemment",
    example: "Apparently, the train has been delayed due to technical problems."
  },
  {
    english: "obviously",
    french: "évidemment",
    example: "The cake is obviously burnt; we need to start over with the recipe."
  },
  {
    english: "immediatlely",
    french: "immédiatement, tout de suite",
    example: "When the fire alarm sounded, everyone evacuated the building immediately."
  },
  {
    english: "initially",
    french: "intialement, à l'origine",
    example: "Initially, the company faced challenges, but they eventually became successful."
  },
  {
    english: "basically",
    french: "fondamentalement",
    example: "The two theories are basically similar, with only minor differences in approach."
  },
  {
    english: "consequently",
    french: "par conséquent, donc",
    example: "The bridge was damaged by floods; consequently, it remains closed to traffic."
  },
  {
    english: "increasingly",
    french: "de plus en plus",
    example: "Renewable energy sources are becoming increasingly important in modern society."
  },
  {
    english: "afterwards",
    french: "après",
    example: "We'll have dinner first and afterwards we can watch a movie together."
  },
  {
    english: "openly",
    french: "ouvertement",
    example: "The candidates discussed their policy differences openly during the debate."
  },
  {
    english: "briefly",
    french: "brièvement",
    example: "She spoke briefly about her experiences working in different countries."
  },
  {
    english: "readily",
    french: "facilement",
    example: "Information is now readily available to students through online resources."
  },
  {
    english: "barely",
    french: "à peine",
    example: "We barely made it to the airport in time to catch our flight to Paris."
  },
  {
    english: "wherever",
    french: "partout où",
    example: "Wherever you go in this country, you'll find people who speak at least some English."
  },
  {
    english: "partly",
    french: "partiellement",
    example: "The project was only partly completed when the funding unexpectedly ran out."
  },
  {
    english: "overseas",
    french: "à l'étranger",
    example: "Many students choose to study overseas to gain international experience."
  },
  {
    english: "differently",
    french: "différemment",
    example: "Each culture approaches the concept of time differently in business settings."
  },
  {
    english: "lately",
    french: "dernièrement",
    example: "I've been thinking about changing careers lately after ten years in this field."
  },
  {
    english: "ahead",
    french: "en avance",
    example: "We arrived an hour ahead of schedule due to the light traffic."
  },
  {
    english: "slowly",
    french: "lentement",
    example: "She walked slowly along the beach, enjoying the peaceful sunset views."
  },
  {
    english: "merely",
    french: "simplement",
    example: "This is merely a suggestion; the final decision remains with the committee."
  },
  {
    english: "moreover",
    french: "de plus",
    example: "The proposal is cost-effective; moreover, it addresses all our environmental concerns."
  },
  {
    english: "roughly",
    french: "approximativement",
    example: "The population of the city is roughly two million people according to recent estimates."
  },
  {
    english: "commonly",
    french: "communément",
    example: "This herb is commonly used in Mediterranean cooking for its distinct flavor."
  },
  {
    english: "hardly",
    french: "à peine",
    example: "We could hardly hear the speaker over the noise of the construction outside."
  },
  {
    english: "occasionally",
    french: "occasionnellement",
    example: "She occasionally visits her hometown during the holiday seasons to see family."
  },
  {
    english: "thoroughly",
    french: "complètement",
    example: "The detective thoroughly investigated every aspect of the mysterious disappearance."
  },
  {
    english: "namely",
    french: "à savoir",
    example: "Three countries rejected the proposal, namely France, Germany, and Spain."
  },
  {
    english: "solely",
    french: "uniquement",
    example: "The decision was based solely on the financial data available at that time."
  },
  {
    english: "nicely",
    french: "joliment",
    example: "The children behaved nicely during the entire four-hour train journey."
  },
  {
    english: "surprisingly",
    french: "étonnamment",
    example: "The difficult exam was surprisingly easier than we had all anticipated."
  },
  {
    english: "practically",
    french: "pratiquement",
    example: "The storm has practically destroyed all the crops in the southern region."
  },
  {
    english: "honestly",
    french: "honnêtement",
    example: "Tell me honestly what you think about my presentation before tomorrow's meeting."
  },
  {
    english: "evidently",
    french: "évidemment",
    example: "Evidently, the previous owner had never properly maintained the heating system."
  },
  {
    english: "perfectly",
    french: "parfaitement",
    example: "The tailored suit fits him perfectly for his important business interview."
  },
  {
    english: "instantly",
    french: "instantanément",
    example: "The new smartphone app connects users to medical professionals almost instantly."
  },
  {
    english: "naturally",
    french: "naturellement",
    example: "Children naturally learn languages faster than adults in immersive environments."
  },
  {
    english: "anymore",
    french: "plus",
    example: "She doesn't work at that company anymore after accepting a better position."
  },
  {
    english: "constantly",
    french: "constamment",
    example: "Living near the airport means we're constantly hearing planes overhead."
  },
  {
    english: "hopefully",
    french: "avec espoir",
    example: "The students looked hopefully at the teacher while waiting for their grades."
  },
  {
    english: "strongly",
    french: "fortement",
    example: "We strongly recommend booking tickets in advance during the busy season."
  },
  {
    english: "similarly",
    french: "similairement",
    example: "This medical treatment works similarly to the one previously prescribed."
  },
  {
    english: "spiritually",
    french: "spirituellement",
    example: "Many visitors find this ancient temple spiritually enriching and peaceful."
  },
  {
    english: "firmly",
    french: "fermement",
    example: "She firmly believes that education is the key to solving social inequality."
  },
  {
    english: "virtually",
    french: "virtuellement",
    example: "The technology makes it possible to attend conferences virtually from anywhere."
  },
  {
    english: "purely",
    french: "purement",
    example: "This decision was made purely based on scientific evidence, not politics."
  },
  {
    english: "repeatedly",
    french: "à plusieurs reprises",
    example: "The coach repeatedly emphasized the importance of teamwork during practice."
  },
  {
    english: "externally",
    french: "extérieurement",
    example: "The building looks modest externally but is beautifully designed inside."
  },
  {
    english: "respectively",
    french: "respectivement",
    example: "John, Maria, and Peter scored 85, 92, and 78 on the test, respectively."
  },
  {
    english: "furthermore",
    french: "en outre",
    example: "The proposal is cost-effective; furthermore, it can be implemented immediately."
  },
  {
    english: "presumably",
    french: "probablement",
    example: "She left early, presumably to avoid the heavy traffic during rush hour."
  },
  {
    english: "manually",
    french: "manuellement",
    example: "The antique clock needs to be wound manually every twenty-four hours."
  },
  {
    english: "eventually",
    french: "finalement, en fin de compte",
    example: "After many attempts, they eventually succeeded in climbing the mountain."
  },
  {
    english: "eveywhere",
    french: "partout",
    example: "After the confetti cannon exploded, there were colorful pieces everywhere."
  },
  {
    english: "explicitly",
    french: "explicitement",
    example: "The contract explicitly states that payment must be received before delivery."
  },
  {
    english: "unfortunatly",
    french: "malheureusement",
    example: "Unfortunately, the concert had to be canceled due to severe weather conditions."
  },
  {
    english: "carefully",
    french: "soigneusement",
    example: "She carefully examined each diamond before selecting the perfect engagement ring."
  },
  {
    english: "continually",
    french: "continuellement",
    example: "The river continually erodes the rock face, gradually creating the canyon."
  },
  {
    english: "personally",
    french: "personnellement",
    example: "Personally, I prefer to read paper books rather than using electronic devices."
  },
  {
    english: "considerably",
    french: "considérablement",
    example: "House prices in this neighborhood have increased considerably over the past decade."
  },
  {
    english: "locally",
    french: "localement",
    example: "This restaurant serves dishes prepared with ingredients sourced locally from nearby farms."
  },
  {
    english: "correctly",
    french: "correctement",
    example: "Make sure to follow the instructions correctly to assemble the furniture properly."
  },
  {
    english: "likewise",
    french: "pareillement",
    example: "She wished me good luck on my interview; likewise, I wished her success."
  },
  {
    english: "substantially",
    french: "substantiellement",
    example: "The new highway has substantially reduced commuting times for local residents."
  },
  {
    english: "essentially",
    french: "essentiellement",
    example: "The two proposals are essentially the same despite their different presentations."
  },
  {
    english: "partially",
    french: "partiellement",
    example: "The archaeological site is only partially excavated after three seasons of work."
  },
  {
    english: "strictly",
    french: "strictement",
    example: "Cellphone use is strictly forbidden during the theater performance."
},
{
    english: "formerly",
    french: "autrefois",
    example: "This building was formerly a factory before being converted into luxury apartments."
  },
  {
    english: "officially",
    french: "offficiellement",
    example: "The new shopping center will be officially opened by the mayor next Monday."
  },
  {
    english: "ultimately",
    french: "finalement",
    example: "Ultimately, the decision about which college to attend is entirely yours."
  },
  {
    english: "comparatively",
    french: "comparativement",
    example: "This year's winter has been comparatively mild compared to last year's record cold."
  },
  {
    english: "precisely",
    french: "précisément",
    example: "The surgeon must work precisely when performing this delicate operation."
  },
  {
    english: "reportedly",
    french: "selon les rapports",
    example: "The famous actress has reportedly purchased a vacation home in the south of France."
  },
  {
    english: "centrally",
    french: "centralement",
    example: "The hotel is centrally located with easy access to all major tourist attractions."
  },
  {
    english: "separately",
    french: "séparément",
    example: "For this experiment, each variable must be tested separately to avoid confusion."
  },
  {
    english: "equally",
    french: "également",
    example: "The inheritance was divided equally among all four children in the family."
  },
  {
    english: "potentially",
    french: "potentiellement",
    example: "This new treatment is potentially life-saving for patients with this rare disease."
  },
  {
    english: "inclusive",
    french: "inclusivement",
    example: "The fee covers all services from January to December inclusive of tax."
  },
  {
    english: "internationally",
    french: "internationalement",
    example: "This university is internationally recognized for its research in marine biology."
  },
  {
    english: "broadly",
    french: "largement",
    example: "The theory is broadly accepted among scientists working in this specialized field."
  },
{
    english: "physically",
    french: "physiquement",
    example: "Training for a marathon is physically demanding and requires proper preparation."
  },
  {
    english: "adequately",
    french: "adéquatement",
    example: "The emergency response team was adequately prepared for the natural disaster."
  },
  {
    english: "nearby",
    french: "à proximité",
    example: "There's a convenient grocery store nearby that sells fresh local produce."
  },
  {
    english: "primarily",
    french: "principalement",
    example: "This organization works primarily with children affected by natural disasters."
  },
  {
    english: "annualy",
    french: "annuellement",
    example: "The cultural festival is held annually during the first week of August."
  },
  {
    english: "regularly",
    french: "régulièrement",
    example: "She visits her grandparents regularly every Sunday afternoon without fail."
  },
  {
    english: "legally",
    french: "légalement",
    example: "You must be at least eighteen years old to legally vote in this country."
  },
  {
    english: "freely",
    french: "librement",
    example: "In democratic societies, citizens can freely express their political opinions."
  },
  {
    english: "thickness",
    french: "épaisseur",
    example: "The insulation's thickness directly affects how well the house retains heat."
  },
  {
    english: "extensively",
    french: "largement",
    example: "The subject has been extensively researched by scientists around the world."
  },
  {
    english: "accurately",
    french: "avec précision",
    example: "The GPS system can accurately pinpoint your location within a few meters."
  },
  {
    english: "deliberately",
    french: "délibérément",
    example: "He deliberately avoided mentioning the sensitive topic during the family dinner."
  },
  {
    english: "ably",
    french: "habilement",
    example: "The experienced diplomat ably negotiated the complex international agreement."
  },
  {
    english: "publicly",
    french: "publiquement",
    example: "The company CEO publicly apologized for the data security breach last month."
  },
  {
    english: "rarely",
    french: "rarement",
    example: "This endangered butterfly species is rarely seen outside of protected reserves."
  },
  {
    english: "remotely",
    french: "à distance",
    example: "Many employees now work remotely from home since the pandemic began."
  },
{
    english: "sharply",
    french: "nettement",
    example: "Housing prices have risen sharply in the capital city over the past year."
  },
  {
    english: "socially",
    french: "socialement",
    example: "The program aims to help socially disadvantaged children access quality education."
  },
  {
    english: "suddenly",
    french: "soudainement",
    example: "The power suddenly went out during the severe thunderstorm last night."
  },
  {
    english: "suppesedly",
    french: "supposément",
    example: "The painting was supposedly created by a famous artist, but experts doubt it."
  },
  {
    english: "surely",
    french: "sûrement",
    example: "If we leave now, we will surely arrive before the concert begins."
  },
  {
    english: "unlikely",
    french: "peu probable",
    example: "It seems unlikely that the train will arrive on time given the weather conditions."
  },
  {
    english: "unusually",
    french: "habituellement",
    example: "The summer has been unusually hot, breaking several temperature records."
  },
  {
    english: "utterly",
    french: "complètement",
    example: "After hiking for eight hours, we were utterly exhausted but satisfied."
  },
  {
    english: "wholly",
    french: "entièrement",
    example: "The success of the project is wholly dependent on securing additional funding."
  },
  {
    english: "verbally",
    french: "verbalement",
    example: "The agreement was made verbally, without any written documentation to confirm it."
  },
  {
    english: "exclusively",
    french: "exclusivement",
    example: "This restaurant uses ingredients sourced exclusively from local organic farms."
  },
  {
    english: "dramatically",
    french: "dramatiquement",
    example: "The landscape has changed dramatically since the construction of the dam."
  },
  {
    english: "fairly",
    french: "assez",
    example: "The exam was fairly difficult, but most students managed to pass it."
  },
  {
    english: "actively",
    french: "activement",
    example: "The community is actively involved in planning the new recreation center."
  },
  {
    english: "heavily",
    french: "lourdement",
    example: "The region relies heavily on tourism to support its local economy."
  },
  {
    english: "efficiently",
    french: "efficacement",
    example: "The new software allows us to process customer orders much more efficiently."
  },
  {
    english: "definitely",
    french: " définitivement",
    example: "I will definitely attend your wedding ceremony next month in Bordeaux."
  },
  {
    english: "gradually",
    french: "graduellement",
    example: "After the accident, she gradually regained her strength through physical therapy."
  },
  {
    english: "independently",
    french: "indépendamment",
    example: "The two scientists developed similar theories independently of each other."
  },
  {
    english: "successfully",
    french: "avec succès",
    example: "The team successfully completed the challenging project ahead of schedule."
  },
];

// DOM elements
const adverbList = document.getElementById('adverb-list');
const searchInput = document.getElementById('search-input');
const paginationContainer = document.getElementById('pagination');
const itemsPerPageSelect = document.getElementById('items-per-page-select');

// Pagination state
let currentPage = 1;
let itemsPerPage = 10;
let filteredAdverbs = [...adverbs];
let availableVoices = [];
let selectedVoice = 'auto';

// Initialize voice selection UI
function initVoiceSelection() {
  const voiceSelect = document.createElement('select');
  voiceSelect.id = 'voice-select';
  voiceSelect.style.marginLeft = '10px';
  
  const voicesLabel = document.createElement('label');
  voicesLabel.textContent = 'Voix:';
  voicesLabel.htmlFor = 'voice-select';
  
  const voiceContainer = document.createElement('div');
  voiceContainer.style.marginTop = '10px';
  voiceContainer.appendChild(voicesLabel);
  voiceContainer.appendChild(voiceSelect);
  
  document.querySelector('.items-per-page').appendChild(voiceContainer);
  
  // Ajout de l'option "Auto"
  const defaultOption = document.createElement('option');
  defaultOption.textContent = 'Auto (recommandé)';
  defaultOption.value = 'auto';
  voiceSelect.appendChild(defaultOption);
  
  populateVoiceSelect(voiceSelect);
  
  voiceSelect.addEventListener('change', function() {
    selectedVoice = this.value;
  });
}

// Populate voice selection dropdown
function populateVoiceSelect(voiceSelect) {
  if (!voiceSelect) return;
  
  // Clear existing options except the first "Auto" option
  while (voiceSelect.options.length > 1) {
    voiceSelect.remove(1);
  }
  
  // Add relevant voices (only English and French)
  const relevantVoices = availableVoices.filter(voice => 
    voice.lang.includes('en-') || voice.lang.includes('fr-')
  );
  
  relevantVoices.forEach(voice => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;
    option.value = voice.name;
    voiceSelect.appendChild(option);
  });
}

// Handle search input
function handleSearch() {
  const searchText = searchInput.value.trim().toLowerCase();
  
  if (!searchText) {
    filteredAdverbs = [...adverbs];
  } else {
    // Search in both English and French
    filteredAdverbs = adverbs.filter(adverb => 
      adverb.english.toLowerCase().includes(searchText) ||
      adverb.french.toLowerCase().includes(searchText)
    );
  }
  
  currentPage = 1;
  updateDisplay();
}

// Handle items per page change
function handleItemsPerPageChange() {
  const value = itemsPerPageSelect.value;
  itemsPerPage = value === 'all' ? filteredAdverbs.length : parseInt(value);
  
  currentPage = 1;
  updateDisplay();
}

// Update the display
function updateDisplay() {
  displayAdverbs();
  updatePagination();
}

// Display adverbs for the current page
function displayAdverbs() {
  adverbList.innerHTML = '';
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredAdverbs.length);
  const adverbsToShow = filteredAdverbs.slice(startIndex, endIndex);
  
  if (adverbsToShow.length === 0) {
    adverbList.innerHTML = `
      <li class="adverb-item" style="text-align: center; padding: 2rem;">
        <div style="color: #333; font-size: 18px;">
          No adverbs found matching your search.
        </div>
      </li>
    `;
    return;
  }
  
  adverbsToShow.forEach((adverb, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'adverb-item';
    
    listItem.innerHTML = `
      <div class="adverb-header">
        <div class="adverb-word">
          <span class="adverb-number">${startIndex + index + 1}</span>
          ${adverb.english}
        </div>
        <button class="speak-btn" data-text="${adverb.english}">🔊</button>
      </div>
      <div class="adverb-body">
        <div class="adverb-controls">
          <button class="example-btn control-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span style="font-size: 1.5em; font-weight: 600;">Show Example</span>
          </button>
          <button class="french-btn control-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span style="font-size: 1.5em; font-weight: 600;">Show French</span>
          </button>
        </div>
        <div class="adverb-content">
          <div class="adverb-example">${adverb.example}</div>
          <div class="adverb-french">${adverb.french}</div>
        </div>
      </div>
    `;
    
    adverbList.appendChild(listItem);
  });
  
  // Add event listeners to buttons
  document.querySelectorAll('.example-btn').forEach(button => {
    button.addEventListener('click', function() {
      const exampleDiv = this.closest('.adverb-body').querySelector('.adverb-example');
      const buttonText = this.querySelector('span');
      
      if (exampleDiv.style.display === 'block') {
        exampleDiv.style.display = 'none';
        buttonText.textContent = 'Show Example';
      } else {
        exampleDiv.style.display = 'block';
        buttonText.textContent = 'Hide Example';
      }
    });
  });
  
  document.querySelectorAll('.french-btn').forEach(button => {
    button.addEventListener('click', function() {
      const frenchDiv = this.closest('.adverb-body').querySelector('.adverb-french');
      const buttonText = this.querySelector('span');
      
      if (frenchDiv.style.display === 'block') {
        frenchDiv.style.display = 'none';
        buttonText.textContent = 'Show French';
      } else {
        frenchDiv.style.display = 'block';
        buttonText.textContent = 'Hide French';
      }
    });
  });
  
  document.querySelectorAll('.speak-btn').forEach(button => {
    button.addEventListener('click', function() {
      // Get the adverb word (without the number)
      const adverbWordElement = this.closest('.adverb-header').querySelector('.adverb-word');
      const adverbFullText = adverbWordElement.textContent.trim();
      // Remove the number by finding the text after the first space or just use the full text if no space
      const adverbWord = adverbFullText.includes(' ') ? 
        adverbFullText.substring(adverbFullText.indexOf(' ')).trim() : 
        adverbFullText;
      
      // Get the visible sections (example and French)
      const adverbItem = this.closest('.adverb-item');
      const exampleDiv = adverbItem.querySelector('.adverb-example');
      const frenchDiv = adverbItem.querySelector('.adverb-french');
      
      // First speak the English content
      let englishText = adverbWord;
      if (exampleDiv && exampleDiv.style.display === 'block') {
        englishText += '. ' + exampleDiv.textContent.trim();
      }
      
      speak(englishText, 'en');
      
      // If French is visible, speak it with a French voice after a delay
      if (frenchDiv && frenchDiv.style.display === 'block') {
        // Wait for the English speech to finish before speaking French
        setTimeout(() => {
          const frenchText = frenchDiv.textContent.trim();
          speak(frenchText, 'fr');
        }, englishText.length * 100); // Rough estimate of English speaking time
      }
      
      this.style.transform = 'scale(1.2)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
    });
  });
}

// Update pagination controls
function updatePagination() {
  paginationContainer.innerHTML = '';
  
  if (itemsPerPage >= filteredAdverbs.length || filteredAdverbs.length === 0) {
    paginationContainer.style.display = 'none';
    return;
  }
  
  paginationContainer.style.display = 'flex';
  
  const totalPages = Math.ceil(filteredAdverbs.length / itemsPerPage);
  
  // Previous button
  const prevButton = document.createElement('button');
  prevButton.className = 'page-navigation-btn';
  prevButton.disabled = currentPage === 1;
  prevButton.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg> Prev';
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      updateDisplay();
      adverbList.scrollIntoView({ behavior: 'smooth' });
    }
  });
  paginationContainer.appendChild(prevButton);
  
  // Show page buttons
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);
  
  if (endPage - startPage < 4) {
    if (startPage === 1) {
      endPage = Math.min(totalPages, startPage + 4);
    } else if (endPage === totalPages) {
      startPage = Math.max(1, endPage - 4);
    }
  }
  
  if (startPage > 1) {
    const firstPageButton = document.createElement('button');
    firstPageButton.className = 'page-btn';
    firstPageButton.textContent = '1';
    firstPageButton.addEventListener('click', () => {
      currentPage = 1;
      updateDisplay();
      adverbList.scrollIntoView({ behavior: 'smooth' });
    });
    paginationContainer.appendChild(firstPageButton);
    
    if (startPage > 2) {
      const ellipsis = document.createElement('span');
      ellipsis.textContent = '...';
      ellipsis.style.margin = '0 4px';
      paginationContainer.appendChild(ellipsis);
    }
  }
  
  for (let page = startPage; page <= endPage; page++) {
    const pageButton = document.createElement('button');
    pageButton.className = `page-btn ${page === currentPage ? 'active' : ''}`;
    pageButton.textContent = page;
    pageButton.addEventListener('click', () => {
      currentPage = page;
      updateDisplay();
      adverbList.scrollIntoView({ behavior: 'smooth' });
    });
    paginationContainer.appendChild(pageButton);
  }
  
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const ellipsis = document.createElement('span');
      ellipsis.textContent = '...';
      ellipsis.style.margin = '0 4px';
      paginationContainer.appendChild(ellipsis);
    }
    
    const lastPageButton = document.createElement('button');
    lastPageButton.className = 'page-btn';
    lastPageButton.textContent = totalPages;
    lastPageButton.addEventListener('click', () => {
      currentPage = totalPages;
      updateDisplay();
      adverbList.scrollIntoView({ behavior: 'smooth' });
    });
    paginationContainer.appendChild(lastPageButton);
  }
  
  // Next button
  const nextButton = document.createElement('button');
  nextButton.className = 'page-navigation-btn';
  nextButton.disabled = currentPage === totalPages;
  nextButton.innerHTML = 'Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>';
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateDisplay();
      adverbList.scrollIntoView({ behavior: 'smooth' });
    }
  });
  paginationContainer.appendChild(nextButton);
  
  // Page information
  const pageInfo = document.createElement('div');
  pageInfo.style.marginLeft = 'auto';
  pageInfo.style.fontSize = '14px';
  pageInfo.style.color = '#666';
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, filteredAdverbs.length);
  pageInfo.textContent = `${startItem}-${endItem} of ${filteredAdverbs.length}`;
  paginationContainer.appendChild(pageInfo);
}

// ****** NOUVELLE FONCTION DE SYNTHÈSE VOCALE AMÉLIORÉE ******
function speak(text, lang = 'en') {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    // Create the utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    if (availableVoices.length === 0) {
      availableVoices = window.speechSynthesis.getVoices();
    }
    
    // Détection des appareils iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    // Si l'utilisateur a choisi une voix spécifique
    if (selectedVoice !== 'auto') {
      const specificVoice = availableVoices.find(voice => voice.name === selectedVoice);
      if (specificVoice) {
        utterance.voice = specificVoice;
        // Si la voix est spécifiée, utiliser la langue de la voix
        utterance.lang = specificVoice.lang;
      }
    }
    // Sinon, essayer de choisir la meilleure voix automatiquement
    else if (lang === 'en') {
      // Voix optimisées selon l'appareil
      if (isIOS) {
        // Voix plus naturelles sur iOS
        const iosVoice = availableVoices.find(voice => 
          (voice.name.includes('Samantha') || voice.name.includes('Alex')) && 
          voice.lang.includes('en-')
        );
        if (iosVoice) utterance.voice = iosVoice;
      } else {
        // Pour les autres appareils
        const preferredVoice = availableVoices.find(voice => 
          voice.name.includes('Google') || 
          voice.name.includes('Microsoft') ||
          voice.name.includes('Brian') ||
          voice.name.includes('Natural')
        );
        if (preferredVoice) utterance.voice = preferredVoice;
      }
      
      // Fallback à n'importe quelle voix anglaise
      if (!utterance.voice) {
        const englishVoices = availableVoices.filter(voice => voice.lang.includes('en-'));
        if (englishVoices.length > 0) utterance.voice = englishVoices[0];
      }
    } else if (lang === 'fr') {
      // Optimisation pour les voix françaises
      if (isIOS) {
        const iosFrenchVoice = availableVoices.find(voice => 
          (voice.name.includes('Thomas') || voice.name.includes('Amelie') || voice.name.includes('Marie')) && 
          voice.lang.includes('fr-')
        );
        if (iosFrenchVoice) utterance.voice = iosFrenchVoice;
      } else {
        const frenchVoice = availableVoices.find(voice => 
          voice.name.includes('Google') && voice.lang.includes('fr-') ||
          voice.name.includes('Natural') && voice.lang.includes('fr-')
        );
        if (frenchVoice) utterance.voice = frenchVoice;
      }
      
      // Fallback
      if (!utterance.voice) {
        const frenchVoices = availableVoices.filter(voice => 
          voice.lang.includes('fr-') || 
          voice.name.includes('French') ||
          voice.name.includes('français')
        );
        if (frenchVoices.length > 0) utterance.voice = frenchVoices[0];
      }
      
      utterance.lang = 'fr-FR';
    }
    
    // Ajustements pour rendre la voix plus naturelle selon l'appareil
    if (isIOS) {
      utterance.rate = 0.9;  // Légèrement plus rapide pour iOS
      utterance.pitch = 1.05; // Un peu plus aigu pour les voix iOS
    } else if (isSafari) {
      utterance.rate = 0.85;
      utterance.pitch = 1;
    } else {
      utterance.rate = 0.88;  // Vitesse normale pour les autres navigateurs
      utterance.pitch = 1;
    }
    
    utterance.volume = 1;
    
    // Ajout de pauses naturelles
    const textWithPause = text
      .replace(/\./g, '. ')  // Ajoute un espace après les points
      .replace(/,/g, ', ')   // Ajoute un espace après les virgules
      .replace(/!/g, '! ')   // Ajoute un espace après les points d'exclamation
      .replace(/\?/g, '? '); // Ajoute un espace après les points d'interrogation
    
    utterance.text = " " + textWithPause;
    
    // Ajouter un bug fix pour Safari qui coupe parfois le début
    if (isSafari) {
      utterance.text = "... " + utterance.text;
    }
    
    // Afficher un indicateur visuel pendant la lecture
    const speakButtons = document.querySelectorAll('.speak-btn');
    speakButtons.forEach(btn => {
      btn.style.opacity = '0.7';
    });
    
    // Événement pour restaurer l'apparence du bouton quand la lecture est terminée
    utterance.onend = function() {
      speakButtons.forEach(btn => {
        btn.style.opacity = '1';
      });
    };
    
    // Délai légèrement plus long pour iOS
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, isIOS ? 200 : 150);
  } else {
    // Message si l'API n'est pas supportée
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = '#f44336';
    notification.style.color = 'white';
    notification.style.padding = '12px 24px';
    notification.style.borderRadius = '4px';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';
    notification.textContent = 'Speech not supported in this browser';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 3000);
  }
}

// Voice initialization with improved handling
function initVoices() {
  if ('speechSynthesis' in window) {
    // Traitement spécial pour Chrome qui ne déclenche pas toujours onvoiceschanged
    if (window.chrome) {
      if (speechSynthesis.getVoices().length) {
        availableVoices = speechSynthesis.getVoices();
        const voiceSelect = document.getElementById('voice-select');
        if (voiceSelect) {
          populateVoiceSelect(voiceSelect);
        }
      }
    }
    
    speechSynthesis.onvoiceschanged = function() {
      availableVoices = window.speechSynthesis.getVoices();
      const voiceSelect = document.getElementById('voice-select');
      if (voiceSelect) {
        populateVoiceSelect(voiceSelect);
      }
    };
  }
}

// Initialize all events
function initializeApp() {
  searchInput.addEventListener('input', handleSearch);
  itemsPerPageSelect.addEventListener('change', handleItemsPerPageChange);
  
  // Initialize voices
  initVoices();
  
  // Add voice selection UI after a slight delay to ensure voices are loaded
  setTimeout(() => {
    initVoiceSelection();
  }, 500);
  
  // Initial display
  updateDisplay();
}

// Start the app
document.addEventListener('DOMContentLoaded', initializeApp);