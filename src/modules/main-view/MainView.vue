<template>
  <div class="main-view">
    <h1>{{ welcome }}</h1>
    <CardGeneral :data="paper" />
  </div>
</template>

<script lang="ts" setup>
  /* imports */
  import { ref } from "vue";
  import { usePapersStore } from "../../store/modules/papers";
  import CardGeneral from "../../components/card-general/CardGeneral.vue";

  // Instance to store
  const paper = usePapersStore().paper;

  /* access var */
  const welcome = ref("Thank you for considering participating to this paper");
</script>
<style scoped lang="scss" src="./MainView.scss"></style>
