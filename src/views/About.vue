<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Redoun Islam</strong>, a dedicated Hyper and Hybrid Casual Game Developer with 5+ years of experience.<br/>
        I specialize in rapid prototype development and have successfully shipped 5 games on iOS and Android, with several titles amassing over <strong>a million installs.</strong>
      </div>

<div style="margin-top: 20px;">
  I've collaborated with top publishers like <strong>Homa, Sunday,</strong> and <strong>Supercent</strong> on <router-link to="/game-projects">game projects</router-link>, and developed <router-link to="/other-projects">innovative gameplay mechanics</router-link>. See my <router-link to="/resume">full resume</router-link> for details.
</div>

      <div style="margin-top: 40px;">
         You can reach me at <a href="mailto:abir.cse.ku@gmail.com">abir.cse.ku@gmail.com</a>, call me at <a href="tel:+8801731316865">+880 1731316865</a>, or connect <router-link to="/contact">through here</router-link>.
      </div>
    </div>

    <div class="photo">
      <img src="img/Abir.png" alt="Avatar of Redoun Islam" />
    </div>

    <div style="clear:both"></div>
  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}
</style>