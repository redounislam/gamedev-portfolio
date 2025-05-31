import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("research-1", "Rice Leaf Disease Research", "img/projects/paper.png", `
    <div class="paragraph">
      <strong>Rice Leaf Disease Recognition Using Local Threshold Based Segmentation and Deep CNN</strong>
      <div class="research-meta">
        <span class="research-journal">International Journal of Intelligent Systems and Applications</span>
        <span class="research-stats">Cited by 51+ | 4000+ reads</span>
      </div>
    </div>

    <div class="paragraph">
      <h3>Research Abstract</h3>
      <p>This paper presents an innovative approach to paddy leaf disease recognition combining local threshold-based segmentation with deep convolutional neural networks. The method achieved superior accuracy in identifying common rice diseases like bacterial leaf blight, brown spot, and leaf smut.</p>
    </div>

    <div class="paragraph">
      <h3>Key Contributions</h3>
      <ul class="research-contributions">
        <li>Novel hybrid approach combining image segmentation and deep learning</li>
        <li>Improved accuracy over traditional methods (92.3% accuracy)</li>
        <li>Practical solution for agricultural disease detection</li>
        <li>Published in peer-reviewed Q2 journal</li>
      </ul>
    </div>

    <div class="paragraph">
      <h3>Citation</h3>
      <div class="citation-box">
        Islam, R., et al. "Rice Leaf Disease Recognition using Local Threshold Based Segmentation and Deep CNN." 
        <em>International Journal of Intelligent Systems and Applications (IJISA)</em>, vol. 13, no. 5, 2021, pp. 45-57. 
        DOI: 10.5815/ijisa.2021.05.04
      </div>
    </div>

    <div class="paragraph center">
      <a href="https://www.researchgate.net/publication/355031837_Rice_Leaf_Disease_Recognition_using_Local_Threshold_Based_Segmentation_and_Deep_CNN" 
         target="_blank" 
         class="research-button">
        <i class="fas fa-file-pdf"></i> View Full Paper
      </a>
      <a href="https://doi.org/10.5815/ijisa.2021.05.04" 
         target="_blank" 
         class="research-button secondary">
        <i class="fas fa-external-link-alt"></i> Journal Page
      </a>
    </div>

    <style>
      .research-meta {
        margin: 10px 0;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      
      .research-journal {
        font-style: italic;
        color: #555;
        font-size: 0.95em;
      }
      
      .research-stats {
        font-size: 0.85em;
        color: #666;
      }
      
      .research-contributions li {
        margin-bottom: 8px;
        position: relative;
        padding-left: 20px;
      }
      
      .research-contributions li:before {
        content: "•";
        color: #00cc99;
        font-weight: bold;
        position: absolute;
        left: 0;
      }
      
      .citation-box {
        background: #f5f5f5;
        padding: 15px;
        border-radius: 8px;
        font-family: monospace;
        font-size: 0.9em;
        line-height: 1.5;
      }
      
      .research-button {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 20px;
        background-color: #00cc99;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        font-weight: bold;
        transition: all 0.3s;
        margin: 5px;
      }
      
      .research-button.secondary {
        background-color: #333;
      }
      
      .research-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      }
      
      .research-button i {
        font-size: 0.9em;
      }
      
      h3 {
        color: #333;
        margin-top: 20px;
        border-bottom: 1px solid #eee;
        padding-bottom: 5px;
      }
    </style>
    `, "#333", true, true),

    new ProjectData("project-6", "Gameplay Mechanics", "video/gameplay.gif", `
    <div class="paragraph">
      <strong>Gameplay Mechanics</strong> showcase various interactive systems and simulations I've developed.
    </div>

    <div class="project-section">
      <div class="video-container">
        <video autoplay loop muted playsinline width="100%">
          <source src="video/wrapping.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="project-info">
        <h3>Gift Wrapping Simulation</h3>
        <p>Dynamic gift wrapping simulation using runtime mesh coloring and OBI Cloth physics for realistic fabric behavior.</p>
      </div>
    </div>

    <div class="divider"></div>

    <div class="project-section">
      <div class="video-container">
        <video autoplay loop muted playsinline width="100%">
          <source src="video/Plant shooter.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="project-info">
        <h3>Procedural Vine Shooter</h3>
        <p>Created using Ivy Studio for procedural vine generation, resulting in a satisfying shooter with dynamically growing vines.</p>
      </div>
    </div>

    <div class="divider"></div>

    <div class="project-section">
      <div class="video-container">
        <video autoplay loop muted playsinline width="100%">
          <source src="video/WallRunStart.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="project-info">
        <h3>Line-Based Movement System</h3>
        <p>Line renderer-based drawing system where the player follows the drawn path and triggers actions upon reaching points.</p>
      </div>
    </div>

    <div class="divider"></div>

    <div class="project-section">
      <div class="video-container">
        <video autoplay loop muted playsinline width="100%">
          <source src="video/Obi Rope.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="project-info">
        <h3>Obi Rope Simulation</h3>
        <p>A stylized rope physics simulation created using Obi Rope, demonstrating realistic movement and interactions.</p>
      </div>
    </div>

    <style>
      .project-section {
        display: flex;
        gap: 20px;
        margin: 25px 0;
        align-items: center;
      }
      
      .video-container {
        width: 270px;
        height: 280px;
        flex-shrink: 0;
      }
      
      .video-container video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
      
      .project-info {
        flex-grow: 1;
      }
      
      .project-info h3 {
        font-size: 20px;
        margin-bottom: 10px;
        color: #333;
      }
      
      .project-info p {
        font-size: 14px;
        line-height: 1.5;
        color: #666;
        margin-bottom: 15px;
      }
      
      .divider {
        height: 1px;
        background-color: #dcdcdc;
        margin: 20px 0;
        width: 100%;
      }
      
      @media (max-width: 768px) {
        .project-section {
          flex-direction: column;
        }
        
        .video-container {
          width: 100%;
          height: auto;
          aspect-ratio: 0.96;
        }
      }
    </style>
    `, "#c10606", true, false)
];