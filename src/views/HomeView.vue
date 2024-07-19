<template>
  <div class="container mx-auto mt-10 pb-20">
    <h1 class="text-gray-700 text-2xl my-3.5">Rick and Morty Finder</h1>
    <div class="w-20">

      <img src="../assets/logo.svg" alt="logo" class="w-full h-auto mb-10">
    </div>
    <hr class="mb-10">


    <SearchForm @search="searchCharacters" />

    <div v-if="characters.length > 0">
      <select
        id="options"
        v-model="selectedOption"
        @change="handleSelectChange"
        class="block w-full bg-white border border-gray-300 h-8 mb-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option v-for="status in statuses" :key="status" :value="status">
          {{ formatLabel(status) }}
        </option>
      </select>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </div>

    <div class="mx-auto text-center pt-10">
      <p class="text-sm">Technical Test Culqi - 2024</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { fetchCharacters } from '@/services/api'
import SearchForm from '@/components/SearchForm.vue'
import CharacterCard from '@/components/CharacterCard.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    SearchForm,
    CharacterCard
  },
  setup() {
    const VALID_STATUS = ['all', 'alive', 'dead', 'unknown']

    const formatLabel = (status: string) => {
      const labels: { [key: string]: string } = {
        'all': 'All',
        'alive': 'Alive',
        'dead': 'Dead',
        'unknown': 'Unknown'
      }
      return labels[status] || status
    }

    const statuses = VALID_STATUS

    const selectedOption = ref('all')

    const initialCharacters = ref<any[]>([])
    const characters = ref<any[]>([])

    const searchCharacters = async (name: string) => {
      try {
        const data = await fetchCharacters(name)
        initialCharacters.value = data.results
        characters.value = data.results
      } catch (error) {
        initialCharacters.value = []
        characters.value = []
        console.error('Error fetching characters:', error)
      }
    }

    const handleSelectChange = (event: Event) => {
      const target = event.target as HTMLSelectElement
      const selectedStatus = target.value.toLowerCase()
      characters.value = selectedStatus === 'all'
        ? initialCharacters.value
        : initialCharacters.value.filter(char => char.status.toLowerCase() === selectedStatus)

      console.log('Selected option:', target.value, characters.value)
    }

    return {
      initialCharacters,
      characters,
      selectedOption,
      statuses,
      handleSelectChange,
      formatLabel,
      searchCharacters
    }
  }
})
</script>
