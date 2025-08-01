<template>
    <Navbar />
    <section class="py-12 px-4 max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold text-primary text-center mb-10">Layanan Kami</h1>

        <div class="grid gap-6 md:grid-cols-3">
        <div class="bg-white rounded shadow p-6">
            <div class="text-primary text-4xl mb-4">
            🛒
            </div>
            <h2 class="text-xl font-semibold mb-2">Penjualan Produk</h2>
            <p class="text-gray-600 mb-4">
            Kami menyediakan berbagai macam sparepart PC, laptop, mini PC, dan merchandise berkualitas.
            </p>
            <router-link to="/products" class="inline-block bg-primary text-white px-4 py-2 rounded">
            Lihat Produk
            </router-link>
        </div>

        <div class="bg-white rounded shadow p-6">
            <div class="text-primary text-4xl mb-4">
            🛠️
            </div>
            <h2 class="text-xl font-semibold mb-2">Servis & Perbaikan</h2>
            <p class="text-gray-600 mb-4">
            Kami menerima jasa perbaikan dan servis untuk berbagai jenis perangkat PC dan laptop.
            </p>
            <router-link to="/contact" class="inline-block bg-primary text-white px-4 py-2 rounded">
            Hubungi Kami
            </router-link>
        </div>

        <div class="bg-white rounded shadow p-6">
            <div class="text-primary text-4xl mb-4">
            💼
            </div>
            <h2 class="text-xl font-semibold mb-2">Konsultasi IT</h2>
            <p class="text-gray-600 mb-4">
            Dapatkan konsultasi profesional untuk kebutuhan IT, mulai dari rakitan hingga jaringan.
            </p>
            <router-link to="/contact" class="inline-block bg-primary text-white px-4 py-2 rounded">
            Konsultasi Sekarang
            </router-link>
        </div>
        </div>
    </section>
</template>



<script setup>
import Navbar from '../components/Navbar.vue'
</script>