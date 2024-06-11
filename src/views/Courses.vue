<template>
  <div class="container mx-auto px-8 2xl:px-40 pt-32">
    <div class="grid gird-cols-1">
      <div>
        <h1 class="font-semibold text-2xl capitalize">Find your favorite courses !!</h1>
        <!-- selectboxes  -->
        <div class="mt-4 sm:flex gap-2 justify-end hidden">
          <select class="select select-bordered select-sm w-full sm:w-auto my-1">
            <option disabled selected>Categories</option>
            <option>Lorem ipsum dolor sit amet.</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <select class="select select-bordered select-sm w-full sm:w-auto my-1">
            <option disabled selected>Types</option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <select class="select select-bordered select-sm w-full sm:w-auto my-1">
            <option disabled selected>Paid or Free</option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
        </div>
        <!-- search input  -->
        <div class="sm:block flex justify-between items-center sm:mt-0 mt-10">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:mt-1 basis-11/12">
          <label class="input input-bordered flex items-center gap-2 w-full">
            <input type="text" class="grow" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
              <path fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd" />
            </svg>
          </label>
        </div>
        <div class="border rounded-md p-1 cursor-pointer sm:hidden ms-2" onclick="my_modal_3.showModal()">
          <img src="/images/filter.png" class="w-10"/>
        </div>
        </div>

        <!-- filter modal box -->
<dialog id="my_modal_3" class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div class="mt-5 flex flex-wrap gap-2">
          <select class="select select-bordered select-sm my-1">
            <option disabled selected>Categories</option>
            <option>Lorem ipsum dolar amist</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <select class="select select-bordered select-sm my-1">
            <option disabled selected>Types</option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <select class="select select-bordered select-sm my-1">
            <option disabled selected>Paid or Free</option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <select class="select select-bordered select-sm my-1">
            <option disabled selected>Tags</option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>

          
        </div>
  </div>
</dialog>

        <!-- tags -->
        <div class="mt-4 sm:flex justify-center hidden">
          <div class="flex flex-wrap gap-2">
            <a href="" class="text-sm border border-info bg-info text-white py-1 px-3 rounded-lg">All Courses</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">UI/UX</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">PHP</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">Laravel</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">Vue</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">Inertia</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">UI/UX</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">PHP</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">Laravel</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">Vue</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">Inertia</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">UI/UX</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">PHP</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">Laravel</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">Vue</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">Inertia</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">UI/UX</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">PHP</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">Laravel</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">Vue</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg">Inertia</a>
          </div>
        </div>
        <!-- courses  -->
        <div class="sm:mt-16 mt-12 max-w-7xl">
          <Course />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Course from '../components/Course.vue'
</script>

<style lang="scss" scoped></style>