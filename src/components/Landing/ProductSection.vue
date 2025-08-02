<template>
  <section class="py-12 container mx-auto">
    <h2 class="text-3xl font-bold text-center mb-6 text-primary">Produk Unggulan</h2>
    <!-- <div class="flex justify-center mb-4 space-x-2">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selected = cat"
        class="px-4 py-2 rounded capitalize text-sm"
        :class="selected === cat ? 'bg-primary text-white' : 'bg-white border'"
      >
        {{ cat }}
      </button>
    </div> -->

    <!-- Hallo test -->

    <div class="grid grid-cols-2 md:grid-cols-6 gap-4 px-4 flex justify-center">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="bg-white p-4 rounded shadow"
      >
        <div class="h-32 bg-gray-200 mb-2 rounded overflow-hidden">
            <img :src="product.image" alt="" class="w-full h-full object-cover">
        </div>
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <p class="text-sm text-gray-500">{{ product.category }}</p>
      </div>
    </div>

    <router-link to="https://www.tokopedia.com/klikkompi" class="mt-6 block text-center">
      <span class="inline-block bg-primary text-white px-4 py-2 rounded">Lihat Semua Produk</span>
    </router-link>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// const categories = ['Sparepart PC', 'Sparepart Laptop', 'Mini PC', 'Merchandise', 'RAM']
// const selected = ref(categories[0])
const products = ref([])

const filteredProducts = computed(() =>
  products.value
)

console.log(products.value)

onMounted(async () => {
  try {
    const res = await fetch(`https://klik-kompi-backend-production.up.railway.app/api/products`)
    const data = await res.json()
    products.value = data
  } catch (err) {
    console.error('Failed to fetch products:', err)
  }
})
</script>
