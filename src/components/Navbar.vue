<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <router-link to="/" class="flex items-center font-bold text-xl text-primary">
            <img src="../../public/images/klik-kompi-logo.png" alt="Logo" class="h-15 w-auto mr-2">
          </router-link>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link to="/" class="nav-link">Home</router-link>
            <!-- <router-link to="/services" class="nav-link">Services</router-link> -->
            <a href="https://www.tokopedia.com/klikkompi" class="nav-link">Product</a>
            <a href="https://www.instagram.com/klikkompi/" class="nav-link">About</a>
          </div>
        </div>

        <!-- <div class="hidden sm:flex sm:items-center">
          <router-link to="/login" class="text-sm font-medium text-white bg-primary px-4 py-2 rounded">
            Login
          </router-link>
        </div> -->

        <!-- Mobile menu button -->
        <div class="-mr-2 flex items-center sm:hidden">
          <button @click="toggleMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 focus:outline-none">
            <svg class="h-6 w-6" :class="{ 'hidden': isOpen, 'block': !isOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="h-6 w-6" :class="{ 'block': isOpen, 'hidden': !isOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="sm:hidden px-4 pb-3 space-y-1">
      <router-link to="/" class="mobile-link">Home</router-link>
      <!-- <router-link to="/services" class="mobile-link">Services</router-link> -->
      <a href="https://www.tokopedia.com/klikkompi" class="mobile-link">Product</a>
      <a href="https://www.instagram.com/klikkompi/" class="mobile-link">About</a>
      <!-- <router-link to="/login" class="mobile-link">Login</router-link> -->
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.nav-link {
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: #4B5563;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-link:hover {
  color: #000;
  border-bottom: 2px solid #ad191b;
}
.mobile-link {
  display: block;
  padding: 0.75rem;
  color: #4B5563;
  border-radius: 0.375rem;
  text-decoration: none;
}
.mobile-link:hover {
  background-color: #F3F4F6;
}
</style>
