<template>
    <div>
        <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="course in courses" :key="course.id" class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img :src="course.imageUrl" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time :datetime="course.datetime" class="mr-8">{{ course.date }}</time>
              <!-- <div class="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                  <circle cx="1" cy="1" r="1" />
                </svg>
               
              </div> -->
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
              <!-- <router-link :to="{name:'coursedetail'}"> -->
                <span class="absolute inset-0" />
                {{ course.title }}
              <!-- </router-link> -->
            </h3>

            
            <!-- <span class="button-line2">
            <span class="button-line"></span></span> -->
            <div class="w-full h-full flex items-center justify-center absolute top-0 left-0">
                <router-link :to="{name:'coursedetail'}">
                    <button class="articlebutton opacity-0">Course Detail<span></span></button>
                </router-link>
            </div>
          </article>
        </div>
    </div>
</template>

<script setup>
const courses = [
{
  id: 1,
  title: 'Professional Fullstack Developer Class',
  href: 'https://www.htetnandar.com',
  description:
  'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  imageUrl:
  'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
  date: '180000 MMK',
  datetime: '2020-03-16',
},{
  id: 2,
  title: 'Professional Frontend Developer Class',
  href: '#',
  description:
  'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  imageUrl:
  'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
  date: '180000 MMK',
  datetime: '2020-03-16',
},
{
  id: 3,
  title: 'Professional Backend Developer Class',
  href: '#',
  description:
  'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  imageUrl:
  'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
  date: '180000 MMK',
  datetime: '2020-03-16',
}
// More posts...
]

</script>

<style lang="scss" scoped>

</style>