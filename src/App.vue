<template>
  <div class="tree-menu">
    <TreeMenu :label="tree.label" :nodes="tree.nodes"></TreeMenu>
  </div>
  <div class="wrapper">
    <Logo alt="Frontiers logo" class="logo"></Logo>
    <router-view />
  </div>
</template>

<script setup lang="ts">
  /* imports */
  import Logo from "@/assets/images/Icon.svg?component";
  import TreeMenu from "@/components/tree-menu/TreeMenu.vue";
  import { useTreeStore } from "@/store/modules/tree";

  // Instance to store
  const tree = useTreeStore().tree;
</script>

<style lang="scss" src="./styles/main.scss"></style>
