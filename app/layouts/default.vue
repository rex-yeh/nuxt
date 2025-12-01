<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Sticky Navbar -->
    <header class="bg-white shadow sticky top-0 z-50">
      <nav
        class="container mx-auto px-4 py-4 flex items-center justify-between"
      >
        <!-- Logo -->
        <NuxtLink to="/" class="text-3xl font-bold text-blue-600">
          MyShop
        </NuxtLink>

        <!-- Desktop Menu -->
        <ul class="hidden lg:flex space-x-8 text-gray-700 font-medium">
          <li><NuxtLink to="/" class="hover:text-blue-600">首頁</NuxtLink></li>
          <li>
            <NuxtLink to="/products" class="hover:text-blue-600"
              >所有商品</NuxtLink
            >
          </li>

          <!-- Mega Menu -->
          <li class="relative group">
            <div class="cursor-pointer hover:text-blue-600 font-semibold">
              商品分類 ▼
            </div>

            <div
              class="absolute hidden group-hover:flex gap-10 bg-white shadow-xl p-6 rounded-lg mt-3 w-[600px] border z-50"
            >
              <div v-for="cat in categories" :key="cat.title">
                <h3 class="font-bold mb-3">{{ cat.title }}</h3>
                <NuxtLink
                  v-for="item in cat.items"
                  :key="item.text"
                  class="block py-1 hover:text-blue-600"
                  :to="item.to"
                >
                  {{ item.text }}
                </NuxtLink>
              </div>
            </div>
          </li>

          <li>
            <NuxtLink to="/sale" class="hover:text-blue-600">限時優惠</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:text-blue-600"
              >聯絡我們</NuxtLink
            >
          </li>
        </ul>

        <!-- Right side icons -->
        <div class="hidden lg:flex space-x-6 text-2xl items-center">
          <!-- Search -->
          <input
            type="text"
            placeholder="搜尋商品"
            class="w-60 border px-3 py-2 rounded"
          />

          <!-- Login -->
          <NuxtLink to="/login" class="hover:text-blue-600 text-xl">
            <i class="fa-solid fa-user"></i>
          </NuxtLink>

          <!-- Cart -->
          <NuxtLink to="/cart" class="hover:text-blue-600 relative text-xl">
            <i class="fa-solid fa-cart-shopping"></i>
            <span
              class="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full"
            >
              {{ cartCount }}
            </span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button class="lg:hidden" @click="mobileMenu = !mobileMenu">
          <i class="fa-solid fa-bars text-2xl"></i>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div v-if="mobileMenu" class="lg:hidden bg-white border-t p-5 space-y-3">
        <NuxtLink class="block py-2" to="/">首頁</NuxtLink>
        <NuxtLink class="block py-2" to="/products">所有商品</NuxtLink>
        <NuxtLink class="block py-2" to="/sale">限時優惠</NuxtLink>
        <NuxtLink class="block py-2" to="/contact">聯絡我們</NuxtLink>

        <p class="mt-3 font-semibold">分類</p>

        <NuxtLink
          v-for="cat in categories"
          :key="cat.title"
          class="block"
          :to="cat.items[0].to"
        >
          {{ cat.title }}
        </NuxtLink>
      </div>
    </header>

    <!-- Main Slot -->
    <main class="flex-1 container mx-auto px-4 py-8">
      <slot />
    </main>

    <footer class="bg-white border-t py-6 text-center">
      © 2025 MyShop — All Rights Reserved
    </footer>
  </div>
</template>

<script setup>
const mobileMenu = ref(false);
const cartCount = ref(2);

const categories = [
  {
    title: "電子產品",
    items: [
      { text: "手機", to: "/category/phone" },
      { text: "筆電", to: "/category/laptop" },
      { text: "耳機", to: "/category/audio" },
    ],
  },
  {
    title: "居家生活",
    items: [
      { text: "家俱", to: "/category/furniture" },
      { text: "廚具", to: "/category/kitchen" },
      { text: "收納", to: "/category/storage" },
    ],
  },
  {
    title: "運動戶外",
    items: [
      { text: "運動用品", to: "/category/sport" },
      { text: "露營", to: "/category/camp" },
      { text: "單車", to: "/category/bike" },
    ],
  },
];
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
</style>
