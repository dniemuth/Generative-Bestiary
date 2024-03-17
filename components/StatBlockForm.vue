<template>
  <ion-list>
    <ion-item>
      <ion-segment v-model="model">
        <ion-segment-button value="palm">
          <ion-label>PaLM 2</ion-label>
        </ion-segment-button>
        <ion-segment-button value="gpt">
          <ion-label>GPT 3.5</ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-item>
    <ion-item>
      <ion-select
        v-model="size"
        label="Size"
        interface="popover"
        label-placement="floating"
      >
        <ion-select-option value="">Any</ion-select-option>
        <ion-select-option v-for="size in sizes" :key="size">{{
          size
        }}</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-select
        v-model="type"
        label="Type"
        interface="popover"
        label-placement="floating"
      >
        <ion-select-option value="">Any</ion-select-option>
        <ion-select-option v-for="creatureType in types" :key="creatureType">{{
          creatureType
        }}</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-select
        v-model="cr"
        label="Challenge Rating"
        interface="popover"
        label-placement="floating"
      >
        <ion-select-option value="">Any</ion-select-option>
        <ion-select-option v-for="cr in challengeRatings" :key="cr">{{
          cr
        }}</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-textarea
        v-model="details"
        label="Extra Details"
        label-placement="floating"
        placeholder="Add some additional details about the creature"
      ></ion-textarea>
    </ion-item>
    <ion-item>
      <p>{{ stats }}</p>
    </ion-item>
  </ion-list>
  <ion-button @click="generateStats()">Generate Stats</ion-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { cleanPALMResponse } from "../utils/helpers";
const props = defineProps<{
  sizes: string[];
  types: string[];
  challengeRatings: number[];
}>();
console.log({ ...props });

const model = ref("palm");
const size = ref("");
const type = ref("");
const cr = ref("");
const details = ref("");
const stats = ref("");
const monster = useMonster();
const monsterPending = useMonsterPending();

const generateStats = async () => {
  monsterPending.value = true;
  monster.value = {};
  const { data, pending } = await useFetch("/api/monsters", {
    query: {
      cr: cr.value,
      details: details.value,
      model: model.value,
      size: size.value,
      type: type.value,
      limit: 5,
    },
  });
  monsterPending.value = pending.value;

  const monsterData =
    model.value === "palm"
      ? cleanPALMResponse(data.value?.candidates[0]?.content?.parts[0]?.text ?? "")
      : data.value?.choices[0]?.message?.content ?? "";
  console.log(monsterData);
  // const rag =
  //   monsterData?.map((item: { name: string }) => {
  //     console.log(item.name);
  //     return item.name;
  //   }) ?? [];
  // stats.value = rag.toString();
  monster.value = JSON.parse(monsterData);
};
</script>
