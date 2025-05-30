<template>
  <div>
    <h1>Awards</h1>

    <div style="margin-bottom: 30px;">
      And here are some other stuff I've made or heavily contributed to, which are totally different than the stuff from earlier.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/OtherProjectsList.vue";
import otherProjectsData from "@/data/AchivementData.ts";

export default Vue.extend({
  name: "Achivements",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
