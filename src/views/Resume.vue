<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Redoun Islam</strong>, a dedicated Hyper and Hybrid Casual Game Developer with 5+ years of experience in the mobile gaming industry.
      <br />I've successfully shipped 5 games on both iOS and Android platforms, with several titles amassing over a million installs.
      <br />My expertise lies in rapid prototype development and collaborating with top publishers like Homa, Sunday, Supercent, and Voodoo.
      <br />I thrive in both team environments and solo projects, adapting quickly to market trends and technical challenges.
      <br />
      <br />Currently seeking new opportunities to create innovative gaming experiences that captivate global audiences.
      <br />Feel free to <router-link to="/contact">contact me</router-link> for collaborations or job opportunities.
      <br />
      <br />Beyond development, I'm passionate about game design, AR technology, and mentoring aspiring developers.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Resume Of Redoun Islam 2025.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/AbirNew.jpg" alt="Photo of Redoun Islam" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work Experience</h2>

      <h3>Free Pixel Games Limited (Tap Pocket)</h3>
      <h4>Gameplay Programmer | April 2020 – Present</h4>
      <div>
        • Implemented features in games with over 1M+ installs<br/>
        • Integrated SDKs and ad networks (Firebase, Unity Ads)<br/>
        • Developed AR apps and playable ads with Unity<br/>
        • Prototyped new games and optimized existing titles<br/>
        • Resolved technical issues to meet release deadlines
      </div>
      <div class="tech-stack">C#, Unity3D, Blender, Photon Fusion, SQL Server</div>

      <h3>Manabreak LLC</h3>
      <h4>Game Developer | September 2021 – Present</h4>
      <div>
        • Programmed innovative gameplay mechanics<br/>
        • Managed remote team of 2 developers<br/>
        • Pitched concepts to top publishers (Homa, Sunday, Supercent)<br/>
        • Oversaw full development cycle from ideation to production
      </div>
      <div class="tech-stack">C#, Unity3D, Slack, Git</div>

      <h2>Technical Skills</h2>

      <div class="skill-set">
        <h3>Development</h3>
        <SkillRate name="Unity3D" :rate="5" />
        <SkillRate name="C# Programming" :rate="5" />
        <SkillRate name="Mobile Development" :rate="5" />
        <SkillRate name="AR Development" :rate="4" />
        <SkillRate name="Multiplayer (Photon)" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Tools</h3>
        <SkillRate name="Blender" :rate="3" />
        <SkillRate name="Git" :rate="4" />
        <SkillRate name="Visual Studio" :rate="5" />
        <SkillRate name="Firebase" :rate="4" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Khulna University</h3>
      <h4>Bachelor of Science in Computer Science & Engineering | 2016-2021</h4>
      <div>Specialized in game development and AI applications</div>

      <h2>Certifications</h2>
      <div>
        • The Ultimate Guide to Video Game Optimization (Udemy)<br/>
        • Unity Mobile AR Development (Unity)<br/>
        • The Ultimate Hyper-Casual Guide with Unity (Udemy)<br/>
        • Advanced Mobile Game Development (40-hour program)
      </div>

      <h2>Accomplishments</h2>
      <div>
        • Champion of Brain Jam 2020 & 2021 (Brain Station 23)<br/>
        • Finalist in Global Food Summit Idea Competition 2020<br/>
        • 2nd Runner-up in Grameenphone API Hackathon 2019<br/>
        • Winner of CLUSTER Hackathon 2017<br/>
        • Top-five team in Mobile Game Development Program 2016
      </div>

      <h2>Publications</h2>
      <div>
        "Paddy Leaf Disease Recognition Using Local Threshold Based Segmentation and Deep CNN"<br/>
        Published in International Journal of Intelligent Systems and Applications (IJISA)
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
/* Original styling preserved */
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>