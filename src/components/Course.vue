<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-10 mt-16">
    <div v-for="course in courses" :key="course.id">
      <img :src="course.imageUrl" class="w-full h-60 rounded object-cover" />



      <div class="mt-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <span class="text-xs font-medium line-through text-gray-500">{{ course.price }}</span>
            <img src="/images/dot.png" class="w-4 mx-1" />
            <span class="text-lg font-bold text-orange-600">{{ course.discountPrice }}</span>
          </div>
          <router-link :to="{ name: 'courseDetail' }"><img src="/images/diagonal-arrow.png" class="w-4" /></router-link>
        </div>
        <h1 class="text-xl font-bold mt-1">{{ course.title }}</h1>
        <div class="badge bg-sky-200 text-sky-800 py-3 me-2 mb-1 mt-2">{{ course.tag }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const courses = [
  {
    id: 1,
    title: 'Professional Fullstack Developer Class',
    href: 'https://www.htetnandar.com',
    imageUrl:
      '/images/blog1.jpg',
    price: '190000 MMK',
    discountPrice: '100000 MMK',
    datetime: '2020-03-16',
    tag: 'fullstack'
  },
  {
    id: 1,
    title: 'Professional Fullstack Developer Class',
    href: 'https://www.htetnandar.com',
    imageUrl:
      '/images/blog1.jpg',
    price: '190000 MMK',
    discountPrice: '100000 MMK',
    datetime: '2020-03-16',
    tag: 'fullstack'
  }, {
    id: 1,
    title: 'Professional Fullstack Developer Class',
    href: 'https://www.htetnandar.com',
    imageUrl:
      '/images/blog1.jpg',
    price: '190000 MMK',
    discountPrice: '100000 MMK',
    datetime: '2020-03-16',
    tag: 'fullstack'
  }
  // More posts...
]

</script>

<style lang="scss" scoped></style>