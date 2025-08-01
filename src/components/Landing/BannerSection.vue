<template>
  <div class="w-full border-b-2 border-red-700">
    <Swiper :pagination="true" class="h-full">
      <!-- <SwiperSlide v-for="n in 3" :key="n"> -->
      <SwiperSlide>
        <div class="h-full bg-gray-300 flex items-center justify-center text-3xl font-bold">
          <img src="../../../public/images/Spanduk Klik Koompi.png" alt="">
        </div>
      </SwiperSlide>
      <!-- <SwiperSlide>
        <div class="h-full bg-gray-300 flex items-center justify-center text-3xl font-bold">
          Banner Slide {{ n }}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="h-full bg-gray-300 flex items-center justify-center text-3xl font-bold">
          Banner Slide {{ n }}
        </div>
      </SwiperSlide> -->
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
</script>
