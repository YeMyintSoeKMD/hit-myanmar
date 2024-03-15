<template>
    <div class="container mx-auto px-2 2xl:px-40 pt-32">
        <div class="grid gird-cols-1">
        <div>
            <h1 class="font-bold text-2xl capitalize text-center">Search among <span class="text-orange-400">58340</span> courses and<br/> find your favorite course</h1>
          
            <div class="mt-8 w-full flex justify-center">
                    <div class="join w-1/2 border">
                        <select class="select select-bordered join-item">
                            <option disabled selected>Filter</option>
                            <option>Sci-fi</option>
                            <option>Drama</option>
                            <option>Action</option>
                        </select>
                    
                        <input class="input input-bordered join-item w-full" placeholder="Search"/>      
                    </div>
            </div>
         
            <div class="mt-8 flex justify-center">
                <div>
                    <span class="border border-info bg-info text-white px-6 py-2 rounded-md me-5">All Programme</span>

                    <span class="border border-gray-300 text-gray-400 px-6 py-2 rounded-md me-5">UI/UX</span>

                    <span class="border border-gray-300 text-gray-400 px-6 py-2 rounded-md me-5">PHP</span>

                    <span class="border border-gray-300 text-gray-400 px-6 py-2 rounded-md me-5">Laravel</span>

                    <span class="border border-gray-300 text-gray-400 px-6 py-2 rounded-md me-5">Vue</span>

                    <span class="border border-gray-300 text-gray-400 px-6 py-2 rounded-md me-5">Inertia</span>
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