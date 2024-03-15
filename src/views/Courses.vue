<template>
    <div class="container mx-auto px-8 2xl:px-40 pt-32">
        <div class="grid gird-cols-1">
        <div>
            <h1 class="font-bold text-2xl capitalize text-center">Search among <span class="text-orange-400">58340</span> courses and<br/> find your favorite course</h1>
          
            <div class="mt-8 flex flex-col sm:flex-row sm:justify-between">
              <select class="select select-bordered w-24 sm:w-28 md:w-48 hidden sm:block">
                <option disabled selected>Filter</option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
              </select>  

              <label class="input input-bordered flex items-center gap-2 w-full md:w-3/5 order-1">
                <input type="text" class="grow" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
              </label>

              <select class="select select-bordered w-full mt-2 sm:mt-0 sm:w-28 md:w-48 order-2">
                <option disabled selected>Filter</option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
              </select> 
            </div>
         
            <div class="mt-8 flex justify-center">
                <div class="flex flex-wrap">
                    <a href="" class="border border-info bg-info text-white px-6 py-2 rounded-md me-5 mb-3">All Programme</a>

                    <a href="" class="border border-gray-300 text-gray-400 px-6 py-2 rounded-md me-5 mb-3">UI/UX</a>

                    <a href="" class="border border-gray-300 text-gray-400 px-6 py-2 rounded-md me-5 mb-3">PHP</a>

                    <a href="" class="border border-gray-300 text-gray-400 px-6 py-2 rounded-md me-5 mb-3">Laravel</a>

                    <a href="" class="border border-gray-300 text-gray-400 px-6 py-2 rounded-md me-5 mb-3">Vue</a>

                    <a href="" class="border border-gray-300 text-gray-400 px-6 py-2 rounded-md me-5 mb-3">Inertia</a>
                </div>
            </div>  

            <div class="mt-16 max-w-7xl px-6">
              <Course/>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import Course from '../components/Course.vue'
</script>

<style lang="scss" scoped>

</style>