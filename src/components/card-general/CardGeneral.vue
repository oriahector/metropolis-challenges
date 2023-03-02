<template>
  <div class="card-general">
    <p class="card-general__type">{{ data.type }}</p>
    <h2>{{ data.title }}</h2>
    <p class="card-general__authors bold relative">
      Authors:
      <template v-for="(author, i) in data.authors" :key="i">
        <span class="card-general__author" @click="requestAuthor(author, i)">
          <span v-if="i == data.authors.length - 1"
            ><span>and </span
            ><span class="underline">{{ author.fullName }}</span></span
          >
          <span v-else class="underline">{{ author.fullName }},</span
          ><sup>{{ author.affiliations.length }}</sup>
          <CardAuthor
            v-if="authorOpened && i === authorIndex"
            v-click-outside="() => (authorOpened = false)"
            :authordata="authorInfo"
          ></CardAuthor
        ></span>
      </template>
    </p>
    <div class="card-general__editors relative">
      <p class="bold">
        Editor
        <span class="card-general__author" @click="requestEditor"
          ><span class="underline">{{ data.editor.fullName }}</span
          ><sup> {{ data.editor.affiliations.length }}</sup>
          <CardAuthor
            v-if="editorOpened"
            v-click-outside="() => (editorOpened = false)"
            :authordata="data.editor"
          ></CardAuthor
        ></span>
      </p>
      <p class="bold">
        Yourself
        <span class="card-general__author" @click="requestYourself"
          ><span class="underline">{{ data.yourself.fullName }}</span
          ><sup> {{ data.yourself.affiliations.length }}</sup>
          <CardAuthor
            v-if="yourselfOpened"
            v-click-outside="() => (yourselfOpened = false)"
            :authordata="data.yourself"
          ></CardAuthor
        ></span>
      </p>
    </div>
    <div class="card-general__affiliation relative">
      <a @click="collapsibleOpen = !collapsibleOpen">
        Affiliations <Arrow :class="{ open: collapsibleOpen }"></Arrow>
      </a>
      <Transition>
        <div v-if="collapsibleOpen">
          <template
            v-for="(affiliation, idx) in data.editor.affiliations"
            :key="idx"
          >
            <p>
              <sup>{{ idx + 1 }}</sup
              >{{ affiliation.name }}, {{ affiliation.city }},
              {{ affiliation.country }}
            </p>
          </template>
        </div>
      </Transition>
    </div>
    <p class="semi-bold">Journal {{ data.journal }}</p>
  </div>
</template>

<script lang="ts" setup>
  /* imports */
  import { ref } from "vue";
  import CardAuthor from "@/components/card-author/CardAuthor.vue";
  import Arrow from "@/assets/images/Arrow.svg?component";

  /* access var */
  const collapsibleOpen = ref(false);
  const authorOpened = ref(false);
  const editorOpened = ref(false);
  const yourselfOpened = ref(false);
  const authorInfo = ref();
  const authorIndex = ref();
  /* Interfaces and types */
  interface Author {
    id: number;
    fullName: string;
    role: string;
    publications: number;
    views: number;
    followers: number;
    pictureUrl: string;
    profileUrl: string;
    affiliations: Array<Affiliation>;
  }

  interface Affiliation {
    name: string;
    country: string;
    city: string;
    id: number;
  }

  interface Paper {
    type: string;
    title: string;
    journal: string;
    section: string;
    editor: Author;
    yourself: Author;
    authors: Array<Author>;
  }

  /* Props */
  defineProps<{ data: Paper }>();

  /* Methods */
  const requestEditor = () => {
    authorOpened.value = false;
    editorOpened.value = !editorOpened.value;
  };

  const requestYourself = () => {
    authorOpened.value = false;
    yourselfOpened.value = !yourselfOpened.value;
  };

  const requestAuthor = (author: object, i?: number | null) => {
    yourselfOpened.value = false;
    authorOpened.value = false;
    editorOpened.value = false;
    authorInfo.value = author;
    authorIndex.value = i;
    authorOpened.value = !authorOpened.value;
  };
</script>

<style scoped lang="scss" src="./CardGeneral.scss"></style>
