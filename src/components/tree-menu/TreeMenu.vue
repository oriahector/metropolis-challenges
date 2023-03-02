<template>
  <div>
    <a class="label" :class="{ rotate: hideShow }" @click="toggle">
      <Arrow v-if="nodes?.length"></Arrow>
      {{ label }}
    </a>
    <div v-if="hideShow" class="child">
      <TreeMenu
        v-for="(item, i) in nodes"
        :key="`${item}_${i}`"
        :label="item.label"
        :nodes="item.nodes"
      ></TreeMenu>
    </div>
  </div>
</template>

<script lang="ts" setup>
  /* imports */
  import { ref } from "vue";
  import Arrow from "@/assets/images/Arrow.svg?component";

  /* access var */
  const hideShow = ref(false);

  /* Interfaces and types */
  interface Nodes {
    label: string;
    nodes?: Array<Nodes>;
  }

  /* Props */
  defineProps<{ label: string; nodes?: Array<Nodes> }>();

  /* Methods */
  const toggle = () => {
    hideShow.value = !hideShow.value;
  };
</script>

<style scoped lang="scss" src="./TreeMenu.scss"></style>
