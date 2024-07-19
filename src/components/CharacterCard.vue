<template>
  <div class="max-w-sm  overflow-hidden shadow-xl">
    <img :src="character.image" alt="Character image" class="w-full">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ character.name }}</div>
      <p class="text-gray-700 text-base">
        Status: {{ character.status }}
      </p>
      <p class="text-gray-700 text-base">
        Gender:
        <span v-if="character.gender === 'Female'" class="emoji">♀️</span>
        <span v-else-if="character.gender === 'Male'" class="emoji">♂️</span>
        <span v-else>Unknown</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'CharacterCard',
  props: {
    character: {
      type: Object as PropType<{ name: string; status: string; image: string; gender: string  }>,
      required: true
    }
  }
});
</script>
<style scoped>
.emoji {
  font-size: 2rem; /* Ajusta el tamaño según lo necesites */
}
</style>