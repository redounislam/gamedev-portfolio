import ProjectData from '@/data/ProjectData.ts'

const PLAY_STORE_BADGE = `
  <a href="https://play.google.com/store/apps/details?id=__PACKAGE__" target="_blank">
    <img src="img/projects/play-store-logo.png" alt="Play Store badge" />
  </a>
`;

function makeGameHtml({description, packageName, videos = [], screenshots = [], youtubeId = null, features = []}) {
  const badge = PLAY_STORE_BADGE.replace('__PACKAGE__', packageName);
  const featuresHtml = features.length
    ? `<div class="paragraph">Main features :<ul>${features.map(f => `<li>${f}</li>`).join('')}</ul></div>`
    : '';
  
  // Handle YouTube video
  const youtubeHtml = youtubeId
    ? `<div class="paragraph center" style="margin: 10px 0;">
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 500px; margin: 0 auto;">
          <iframe 
            src="https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 8px;" 
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </div>
       </div>`
    : '';
  
  // Handle local videos
  const videosHtml = videos.length && !youtubeId
    ? `<div class="paragraph center" style="margin: 10px 0;">
        ${videos.map(src => `
          <video autoplay loop muted playsinline style="max-width: 400px; border-radius: 8px; display: block; margin: 0 auto;">
            <source src="${src}" type="video/mp4">
            Your browser does not support the video tag.
          </video>`).join('')}
       </div>`
    : '';
  
  // Handle screenshots
  const screenshotsHtml = screenshots.length
    ? `<div class="paragraph center" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin: 10px 0;">
        ${screenshots.map(src => `
          <img src="${src}" style="max-width: 300px; border-radius: 8px; object-fit: contain;" alt="Game screenshot" />`).join('')}
       </div>`
    : '';

  return `
    <div class="paragraph">${description}</div>
    ${youtubeHtml}
    ${videosHtml}
    ${screenshotsHtml}
    <div class="paragraph center">${badge}</div>
    ${featuresHtml}
  `;
}



export default [
  // Hyper Casual Games Section
  new ProjectData(
    "hypercasual-1",
    "Duo Crime Squad",
    "img/projects/duo-crime-squad-icon.gif",
    makeGameHtml({
      description: `Fast paced twin-stick shooter, kill enemies, survive and upgrade!`,
      packageName: "com.manabreak.duocrimesquad",
      videos: ["video/duo-crime-squad.mp4"],
      features: [
        "Twin-stick shooter gameplay",
        "Enemy waves and bosses",
        "Upgrades and power-ups",
      ],
    }),
    "#FF6347", true, false),
 

  new ProjectData(
    "hypercasual-2",
    "Race Ballista",
    "img/projects/race-ballista-icon.gif",
    makeGameHtml({
      description: `Endless running race with ballista shooting mechanics.`,
      packageName: "com.manabreak.raceballista",
      videos: ["video/race-ballista.mp4"],
      features: [
        "Endless runner",
        "Shoot targets while racing",
        "Unlock new ballistas",
      ],
    }),
    "#4682B4"
  ),

new ProjectData(
  "hypercasual-4",
  "Dino Water 3D",
  "video/Dww1.webp",
  makeGameHtml({
    description: `Manage your dinosaurs and grow your water park.`,
    packageName: "com.fpg.dinowater3d",
    screenshots: [
      "video/Dww1.webp", 
      "video/Dww2.webp",
      "video/Dww3.webp"
    ],
  }),
  "#228B22"
),

new ProjectData(
  "hypercasual-5",
  "Jurassic Sea Attack",
  "img/projects/squishy-fishy-icon.gif",
  makeGameHtml({
    description: `Tap to swim your fish avoiding obstacles and enemies.`,
    packageName: "com.tappocket.squishyfishy",
    youtubeId: "Y6WvV3oACOM", // Extracted from the YouTube URL
    features: [
      "Exciting underwater adventure",
      "Simple tap controls",
      "Various sea creatures to avoid",
      "Upgradeable fish abilities"
    ]
  }),
  "#00CED1" , false , true
),

  new ProjectData(
    "hypercasual-6",
    "Artillery Frenzy",
    "img/projects/artillery-frenzy-icon.gif",
    makeGameHtml({
      description: `Strategic artillery shooting game with multiplayer.`,
      packageName: "com.manabreak.artilleryfrenzy",
      videos: ["video/artillery-frenzy.mp4"],
      features: [
        "Multiplayer artillery battles",
        "Upgradeable weapons",
      ],
    }),
    "#DAA520", true, false),

  new ProjectData(
    "hypercasual-10",
    "Taxi Rush",
    "img/projects/taxi-rush-icon.gif",
    makeGameHtml({
      description: `Drive fast, pick up passengers and avoid traffic jams!`,
      packageName: "com.manabreak.taxirush",
      videos: ["video/taxi-rush.mp4"],
    }),
    "#FF8C00", false , true
  ),

    new ProjectData(
    "hypercasual-9",
    "Road Master",
    "img/projects/road-master-icon.gif",
    makeGameHtml({
      description: `Traffic control and road management game with unique challenges.`,
      packageName: "com.manabreak.roadmaster",
      videos: ["video/road-master.mp4"],
    }),
    "#2E8B57"
  ),

  new ProjectData(
    "hypercasual-7",
    "Survival Grounds",
    "img/projects/survival-grounds-icon.gif",
    makeGameHtml({
      description: `Fight to survive waves of enemies with upgrades and teamwork.`,
      packageName: "com.manabreak.survivalgrounds",
      videos: ["video/survival-grounds.mp4"],
    }),
    "#8B0000"
  ),

  new ProjectData(
    "hypercasual-8",
    "Survivor Hero",
    "img/projects/survivor-hero-icon.gif",
    makeGameHtml({
      description: `Shoot and survive in a challenging arena shooter.`,
      packageName: "com.manabreak.survivorhero",
      videos: ["video/survivor-hero.mp4"],
    }),
    "#FF4500"  , true , false
  ),



  // Game Jam projects (unchanged)
  new ProjectData("gamejam-1", "Fallooon", "video/Fallooon.gif", `
    <div class="paragraph">
        <strong>Fallooon</strong> is a game created during a game jam.
    </div>
    <div class="paragraph center">
        <a href="https://abir160201.itch.io/fallooon" target="_blank"><img src="img/projects/itchio-logo.png" alt="Itch.io badge" /></a>
    </div>
    
    <div class="paragraph center">
        <img src="video/Fallooon.gif" alt="Fallooon gameplay" style="max-width: 100%;" />
    </div>
    `, "#ff5e5e"),
    
    new ProjectData("gamejam-2", "Counting Mario", "video/CountingMario.gif", `
    <div class="paragraph">
        <strong>Counting Mario</strong> is a game created during a game jam.
    </div>
    <div class="paragraph center">
        <a href="https://abir160201.itch.io/countingmario1" target="_blank"><img src="img/projects/itchio-logo.png" alt="Itch.io badge" /></a>
    </div>
    
    <div class="paragraph center">
        <img src="video/CountingMario.gif" alt="Counting Mario gameplay" style="max-width: 100%;" />
    </div>
    `, "#5e8cff"),
    
    new ProjectData("gamejam-3", "Reckless Artillery", "video/Artillary.gif", `
    <div class="paragraph">
        <strong>Reckless Artillery</strong> is a game created during a game jam.
    </div>
    <div class="paragraph center">
        <a href="https://abir160201.itch.io/reckless-artillery0001" target="_blank"><img src="img/projects/itchio-logo.png" alt="Itch.io badge" /></a>
    </div>
    
    <div class="paragraph center">
        <img src="video/Artillary.gif" alt="Reckless Artillery gameplay" style="max-width: 100%;" />
    </div>
    `, "#5eff9e"),

     new ProjectData("gamejam-5", "Turbo Tag", "video/Turbo_Tag_Snip.gif", `
    <div class="paragraph">
        <strong>Turbo Tag</strong> is a fast-paced multiplayer game created for the Crazy Games Game Jam.
    </div>
    <div class="paragraph center">
        <a href="https://www.crazygames.com/preview/a3692ced-1328-408f-aff2-5ed75accc41e" target="_blank">
            <img src="/img/projects/Crazy Game.png" alt="Crazy Games badge" style="height: 150px;"/>
        </a>
    </div>
    <div class="paragraph center">
        <img src="video/Turbo_Tag_Snip.gif" alt="Reckless Artillery gameplay" style="max-width: 100%;" />
    </div>
    
    <div class="paragraph">
        Game features:
        <ul>
            <li>Fast-paced multiplayer tag gameplay</li>
            <li>Power-ups and special abilities</li>
            <li>Colorful, competitive arena</li>
            <li>Created for Crazy Games Game Jam</li>
        </ul>
    </div>
    `, "#FF6B00", true)
];