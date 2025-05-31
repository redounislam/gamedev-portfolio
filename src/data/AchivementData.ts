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
interface AchievementParams {
  description: string;
  image?: string;  // The ? makes this property optional
  details?: string[];
}
function makeAchievementHtml({description, image = "", details = []}: AchievementParams) {
  const detailsHtml = details.length
    ? `<div class="paragraph">Details:<ul>${details.map(d => `<li>${d}</li>`).join('')}</ul></div>` 
    : '';

  return `
    <div class="paragraph">${description}</div>
    ${image ? `<div class="paragraph center"><img src="${image}" style="max-width: 300px;" /></div>` : ''}
    ${detailsHtml}
  `;
}

export default [
  // Achievements Section with corrected image paths

    new ProjectData(
    "achievement-5",
    "Grameenphone API Hackathon",
    "img/Award/Gp02.jpg",
    makeAchievementHtml({
      description: "2nd Runner up in Grameenphone API Hackathon 2019",
      details: [
        "Created a consultancy platform where rural students can ask for one-to-one help from their desired teacher",
        "Integrated Grameenphone's payment module"
      ],
      image: "img/Award/GP.jpg"
    }),
    "#00BFFF" , true , true 
  ),

new ProjectData(
  "achievement-1",
  "Brain Jam Champion (2021)",
  "video/CountingMario.gif", // Assuming you have a GIF for this
  `
    <div class="paragraph">
        <strong>Brain Jam Champion (2021)</strong> - Winner of Brain Jam 2021 organized by Brain Station 23
    </div>
    <div class="paragraph">
        Theme: Drag N Drop Link
    </div>
    <div class="paragraph center">
        <a href="https://example.com/brain-jam-2021" target="_blank"><img src="img/projects/itchio-logo.png" alt="Event Website" /></a>
    </div>
    
    <div class="paragraph center">
        <img src="video/CountingMario.gif" alt="Brain Jam 2021" style="max-width: 100%;" />
    </div>
  `,
  "#4B0082"
),

new ProjectData(
  "achievement-2",
  "Brain Jam Champion (2020)",
  "video/Fallooon.gif", // Using the same GIF as your game jam project
  `
    <div class="paragraph">
        <strong>Brain Jam Champion (2020)</strong> - Winner of Brain Jam 2020 organized by Brain Station 23
    </div>
    <div class="paragraph">
        Theme: Calculation Link
    </div>
    <div class="paragraph center">
        <a href="https://example.com/brain-jam-2020" target="_blank"><img src="img/projects/itchio-logo.png" alt="Event Website" /></a>
    </div>
    
    <div class="paragraph center">
        <img src="video/Fallooon.gif" alt="Brain Jam 2020" style="max-width: 100%;" />
    </div>
  `,
  "#4B0082"
),
  new ProjectData(
    "achievement-3",
    "Global Food Summit Finalist",
    "img/Award/GFS.jpg",
    makeAchievementHtml({
      description: "Finalist in Global Food Summit Idea & Research Competition 2020",
      details: [
        "Presented research on Paddy Leaf Disease Recognition Using Local Threshold Based Segmentation and Deep CNN"
      ],
      image: "img/Award/GFS02.jpg"
    }),
    "#228B22"
  ),

  new ProjectData(
    "achievement-4",
    "Get In The Ring - EasyLin",
    "img/Award/GIR.jpg",
    makeAchievementHtml({
      description: "Co-founder of EasyLin selected for fully-funded Global Meet Up 2021 in Montréal, Canada",
      details: [
        "Selected based on the merit of research possibilities of EasyLin"
      ],
      image: "img/Award/GIR2.jpg"
    }),
    "#FF4500"
  ),



  new ProjectData(
    "achievement-6",
    "KU CLUSTER Hackathon Winner",
    "img/Award/KU01",
    makeAchievementHtml({
      description: "Winner of HACKATHON CLUSTER 2017 organized by CLUSTER and CSE Discipline, Khulna University",
      details: [
        "Created a game opposite of Blue Whale where you complete social tasks to level up and earn points"
      ],
      image: "img/Award/KU01"
    }),
    "#9370DB"
  ),



];