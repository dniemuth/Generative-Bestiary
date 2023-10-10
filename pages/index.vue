<template>
  <ion-split-pane when="md" content-id="main">
    <ion-menu content-id="main">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> Menu Content </ion-content>
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
        Main View Content
        <div>{{ data }}</div>
      </ion-content>
    </div>
  </ion-split-pane>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/hello");
</script>
