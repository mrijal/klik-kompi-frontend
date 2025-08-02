<template>
  <section class="py-12 text-center">
    <h2 class="text-3xl font-bold mb-6 text-primary ">Layanan Kami</h2>
    <div class="container justify-center mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div v-for="(service, i) in services" :key="i" class="p-6 rounded-xl shadow border-1 border-red-700 bg-white flex flex-col h-full justify-between gap-2">
            <div class="flex justify-content-center items-center gap-3 mb-4">
                <img :src="service.icon" alt="" class="w-16 h-16">
                <h3 class="text-lg font-semibold">{{ service.title }}</h3>
            </div>
            <p class="text-gray-600 text-justify">{{ service.desc }}</p>
            <router-link :to="service.url" class="inline-block bg-primary text-white px-4 py-2 rounded">
            Lihat Layanan
            </router-link>
        </div>
        </div>
    </div>
    <!-- <router-link to="/services" class="mt-6 inline-block bg-primary text-white px-4 py-2 rounded">Selengkapnya</router-link> -->
  </section>
</template>

<script setup>
const services = [
  { 
    title: 'Jual Produk', 
    desc: 'Kami menjual produk yang berkualitas untuk keperluan komputer dan laptop kamu, mulai dari bekas berkualitas sampai yang terbaru.', 
    icon: '../../../public/images/icon-jual.png',
    url: 'https://www.tokopedia.com/klikkompi'
  },
  { 
    title: 'Servis & Perbaikan', 
    desc: 'Laptop atau komputermu rusak? terasa ngelag? atau ingin sekadar diberikan perawatan? Kami siap membantu.', 
    icon: '../../../public/images/icon-service.png',
    url: 'https://wa.me/62895321169875?text=Hallo%20saya%20mau%20informasi%20lebih%20lanjut%20tentang%20service%20di%20klik%20kompi'
  },
  { 
    title: 'Konsultasi', 
    desc: 'Ingin mendapatkan solusi terbaik untuk kebutuhan IT Anda? mulai dari konsultasi rakit pc, beli laptop sampai kebutuhan perusahaan, Tim kami siap membantu.', 
    icon: '../../../public/images/icon-consult.png',
    url: 'https://wa.me/62895321169875?text=Hallo%20Saya%20mau%20konsultasi%20ke%20klikkompi'
  }
]
</script>
