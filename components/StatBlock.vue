<template>
  <ion-spinner v-if="monsterPending" />
  <div v-if="monster.name" style="padding: 2rem">
    <h2>{{ monster?.name }}</h2>
    <p class="italic">
      {{ monster?.size }} {{ monster?.type }}, {{ monster?.alignment }}
    </p>
    <hr />
    <div>
      <p>
        <strong>Armor Class </strong>
        {{ monster?.armor_class }}
      </p>
      <p>
        <strong>Hit Points </strong>
        {{ monster?.hit_points }}
      </p>
      <p>
        <strong>Speed </strong>
        <span v-for="key in speedKeys" :key="key">
          {{ key.charAt(0).toUpperCase() }}{{ key.slice(1) }}
          {{ monster?.speed[key] }}ft.
        </span>
      </p>
    </div>
    <hr />
    <div class="abilities">
      <div v-for="ability in abilityKeys" :key="ability" class="ability">
        <p class="font-bold">
          <strong>{{ EAbilities[ability] }}</strong>
        </p>
        <p>
          {{ monster[ability] }} ({{ monster[ability] > 9 ? "+" : ""
          }}{{ modifierCalc(monster[ability]) }})
        </p>
      </div>
    </div>
    <hr />
    <div>
      <p><strong>Saving Throws</strong> {{ savingThrows.join(", ") }}</p>
      <p><strong>Skills</strong> {{ skills.join(", ") }}</p>
      <p>
        <strong>Damage Vulnerabilities</strong>
        {{ monster.damage_vulnerabilities }}
      </p>
      <p>
        <strong>Damage Resistances</strong> {{ monster.damage_resistances }}
      </p>
      <p><strong>Damage Immunities</strong> {{ monster.damage_immunities }}</p>
      <p>
        <strong>Condition Immunities</strong> {{ monster.condition_immunities }}
      </p>
      <p><strong>Senses</strong> {{ monster.senses }}</p>
      <p><strong>Languages</strong> {{ monster.languages }}</p>
      <p><strong>Challange Rating</strong> {{ monster.cr }}</p>
    </div>
    <hr />
    <div>
      <p v-for="ability in monster.special_abilities" :key="ability">
        <strong>{{ ability.name }}.</strong> {{ ability.desc }}
      </p>
    </div>
    <h3>Actions</h3>
    <hr />
    <p v-for="action in monster.actions" :key="action.name">
      <strong>{{ action.name }}.</strong> {{ action.desc }}
    </p>
    <h3>Legendary Actions</h3>
    <hr />
    <p>{{ monster.legendary_desc }}</p>
    <p v-for="action in monster.legendary_actions" :key="action.name">
      <strong>{{ action.name }}.</strong> {{ action.desc }}
    </p>
  </div>
</template>

<script setup>
// import monster from "../utils/examples.json";
import { EAbilities } from "../utils/constants";
import { modifierCalc, profCalc } from "../utils/helpers";

const monster = useMonster();
const monsterPending = useMonsterPending();

const speedKeys = computed(
  () => Object.keys(monster?.value?.speed ?? {}) ?? []
);
const abilityKeys = computed(() => Object.keys(EAbilities) ?? []);
const skillKeys = computed(
  () => Object.keys(monster?.value?.skills ?? {}) ?? []
);
const pb = computed(() => profCalc(monster?.value?.cr ?? 0));
const savingThrows = computed(() =>
  abilityKeys?.value.map((save) => {
    const saveModifier = monster?.value[`${save}_save`]
      ? modifierCalc(monster?.value[save]) + pb.value
      : modifierCalc(monster?.value[save]);
    return `${EAbilities[save]} ${saveModifier > 0 ? "+" : ""}${saveModifier}`;
  })
);
const skills = computed(() =>
  skillKeys?.value.map((skill) => `${skill} +${monster?.value?.skills[skill]}`)
);
</script>

<style scoped>
hr {
  background: red;
}
.italic {
  font-style: italic;
}
.abilities {
  display: flex;
}
.ability {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
</style>
