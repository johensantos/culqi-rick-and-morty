<template>
  <form @submit.prevent="onSubmit" class="mb-4">
    <div class="mb-4">
      <label for="characterName" class="block text-gray-700 text-sm font-bold mb-2">
        Character Name:
      </label>
      <input
        v-model="characterName"
        id="characterName"
        type="text"
        required
        minlength="4"
        maxlength="20"
        placeholder="Find a Character"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SearchForm',
  emits: ['search'],
  setup(props, { emit }) {
    const characterName = ref('');

    const onSubmit = () => {
      if (characterName.value.length < 4 || characterName.value.length > 20) {
        alert('Character name must be between 4 and 20 characters.');
        return;
      }
      emit('search', characterName.value);
    };

    return {
      characterName,
      onSubmit
    };
  }
});
</script>
