<template>
  <ion-split-pane when="md" content-id="main">
    <ion-menu content-id="main">
      <StatBlockForm :challengeRatings="CHALLENGE_RATINGS" :sizes="SIZES" :types="CREATURE_TYPES" />
    </ion-menu>

    <div class="ion-page" id="main">
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
          <ion-title>Main View</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <StatBlock />
      </ion-content>
    </div>
  </ion-split-pane>
</template>

<script setup lang="ts">
import StatBlockForm from '../components/StatBlockForm.vue';
import StatBlock from '../components/StatBlock.vue';
import { CHALLENGE_RATINGS, CREATURE_TYPES, SIZES } from '../utils/constants';
const { data } = await useFetch("/api/hello");
</script>
