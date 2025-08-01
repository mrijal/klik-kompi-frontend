<template>
  <div>
    <Navbar />
    <div class="bg-custom">
        <BannerSection />
        <ServiceSection />
        <ProductSection />
        <FooterSection />
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import BannerSection from '../components/Landing/BannerSection.vue'
import ServiceSection from '../components/Landing/ServiceSection.vue'
import ProductSection from '../components/Landing/ProductSection.vue'
import FooterSection from '../components/Landing/FooterSection.vue'
</script>
