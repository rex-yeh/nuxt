<template>
  <div>

    <!-- Hero -->
    <section
      class="h-72 md:h-96 bg-cover bg-center rounded-lg shadow-lg mb-10"
      style="background-image: url('https://picsum.photos/1200/500?random=18')"
    >
      <div class="h-full w-full bg-black/40 flex items-center justify-center rounded-lg">
        <h1 class="text-white text-4xl md:text-5xl font-bold">本季熱門精選</h1>
      </div>
    </section>

    <!-- Carousel -->
    <h2 class="text-2xl font-bold mb-3">🔥 熱銷輪播</h2>

    <Swiper
      :slides-per-view="1"
      :space-between="10"
      :breakpoints="{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }"
    >
      <SwiperSlide v-for="i in 5" :key="i">
        <img :src="`https://picsum.photos/400/30${i}`" class="rounded-lg shadow w-full" />
      </SwiperSlide>
    </Swiper>

    <!-- Hot Categories -->
    <h2 class="text-2xl font-bold mt-10 mb-5">⭐ 熱門分類</h2>

    <div class="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
      <div class="cursor-pointer group" v-for="c in hotCategories" :key="c.text">
        <i :class="`${c.icon} text-4xl group-hover:text-blue-600`"></i>
        <p class="mt-2">{{ c.text }}</p>
      </div>
    </div>

    <!-- Product Cards -->
    <h2 class="text-2xl font-bold mt-10 mb-3">🎁 精選商品</h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="p in 8"
        :key="p"
        class="bg-white shadow rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition cursor-pointer"
      >
        <img :src="`https://picsum.photos/300/30${p}`" class="w-full" />

        <div class="p-3">
          <h3 class="font-semibold">商品 {{ p }}</h3>
          <p class="text-gray-500 text-sm">高品質好物</p>

          <div class="flex justify-between items-center mt-3">
            <span class="font-bold text-blue-600">$1990</span>
            <el-button type="primary" size="small">加入購物車</el-button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"

const hotCategories = [
  { text: "手機", icon: "fa-solid fa-mobile-screen" },
  { text: "筆電", icon: "fa-solid fa-laptop" },
  { text: "服飾", icon: "fa-solid fa-shirt" },
  { text: "運動", icon: "fa-solid fa-dumbbell" },
  { text: "單車", icon: "fa-solid fa-bicycle" },
  { text: "居家", icon: "fa-solid fa-couch" }
]
</script>
