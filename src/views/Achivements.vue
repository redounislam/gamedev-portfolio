<template>
  <div>
    <h1>Awards</h1>

    <div style="margin-bottom: 30px;">
     A snapshot of awards, competition wins, and standout projects across gaming, tech, and research
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
