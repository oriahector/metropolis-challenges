<template>
  <div class="card-author">
    <div class="card-author__container">
      <div class="card-author__text">
        <h3>{{ authordata.fullName }}</h3>
        <p
          v-for="(affiliation, i) in authordata.affiliations"
          :key="i"
          class="card-author__affiliations light"
        >
          {{ affiliation.name }}, {{ affiliation.country }}
        </p>
        <p class="card-author__info">
          <span> {{ authordata.publications }}</span> Publications
          <span> {{ authordata.views }}</span> Views
          <span> {{ authordata.followers }}</span> Followers
        </p>
      </div>
      <img
        v-if="authordata.pictureUrl && authorImg"
        :src="authordata.pictureUrl"
        class="card-author__img"
        alt="author Profile img"
        @error="imageLoadError()"
      />
      <div v-else class="card-author__img card-author__img--no-img">
        {{ getInitials(authordata.fullName) }}
      </div>
    </div>
    <a class="card-author__link" @click="goToProfile(authordata.profileUrl)">
      <Link></Link>
      View profile
    </a>
  </div>
</template>

<script lang="ts" setup>
  /* imports */
  import { ref, watch } from "vue";
  import Link from "@/assets/images/Link.svg?component";

  /* Interfaces and types */
  interface Affiliation {
    name: string;
    country: string;
    city: string;
  }

  interface AuthorData {
    pictureUrl: string;
    profileUrl: string;
    fullName: string;
    followers: number;
    views: number;
    publications: number;
    affiliations: Array<Affiliation>;
  }

  /* Props */
  const props = defineProps<{ authordata: AuthorData }>();

  /* access var */
  const authorImg = ref(true);

  /* Methods */
  const goToProfile = (url: string) => {
    window.open(url, "_blank");
  };

  const getInitials = (name: string) => name.match(/\b(\w)/g)?.join("");

  const imageLoadError = () => {
    authorImg.value = false;
  };

  /* Watch */
  watch(
    () => props.authordata,
    () => {
      authorImg.value = true;
    }
  );
</script>

<style scoped lang="scss" src="./CardAuthor.scss"></style>
