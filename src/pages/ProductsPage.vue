<template>
  <section class="py-12 px-4 bg-gray-50">
    <h2 class="text-2xl font-bold text-center mb-6">Daftar Produk</h2>

    <div class="flex justify-center mb-4 space-x-2 flex-wrap">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selected = cat"
        class="px-4 py-2 rounded text-sm"
        :class="selected === cat ? 'bg-primary text-white' : 'bg-white border'"
      >
        {{ cat }}
      </button>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        @click="goToDetail(product.id)"
        class="bg-white p-4 rounded shadow hover:shadow-md cursor-pointer transition"
      >
        <div class="h-32 bg-gray-200 mb-2 rounded"></div>
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <p class="text-sm text-gray-500">{{ product.category }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getAllProducts } from '@/api/product'

const products = ref([])
const categories = ref([])
const selected = ref('Semua')
const router = useRouter()

const fetchProducts = async () => {
  try {
    const data = await getAllProducts()
    products.value = data

    const uniqueCategories = [...new Set(data.map(p => p.category))]
    categories.value = ['Semua', ...uniqueCategories]
  } catch (err) {
    console.error('Gagal fetch produk:', err)
  }
}

onMounted(fetchProducts)

const filteredProducts = computed(() =>
  selected.value === 'Semua'
    ? products.value
    : products.value.filter(p => p.category === selected.value)
)

const goToDetail = (id) => {
  router.push(`/products/${id}`)
}
</script>
