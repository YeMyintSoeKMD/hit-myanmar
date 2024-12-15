<template>
  <div>
    <div class="container mx-auto px-8 2xl:px-40 pt-32">

      <!--      card section-->
      <section class="w-full h-auto space-y-5 lg:space-y-20">
<!--        title and types-->
        <div>
          <h1 class="text-2xl font-semibold">Select a service</h1>

          <!--        consultation types-->
          <div class="mt-4 sm:flex justify-center">
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
        </div>

<!--          available time on this week-->
        <div class="space-y-5">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 class="text-xl font-medium">Available Time on this Week</h1>
            <div class=" sm:flex gap-2 justify-end ">
              <select class="select select-bordered select-sm w-full sm:w-auto my-1">
                <option disabled="" selected="">Today</option>
                <option>Lorem ipsum dolor sit amet.</option>
                <option>Drama</option>
                <option>Action</option>
              </select>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg hover:bg-info hover:text-white hover:border-info">9:00 AM</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg hover:bg-info hover:text-white hover:border-info">9:00 AM</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg hover:bg-info hover:text-white hover:border-info">9:00 AM</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg hover:bg-info hover:text-white hover:border-info">9:00 AM</a>
            <a href="" class="text-sm border border-gray-300 text-gray-400 py-1 px-3 rounded-lg hover:bg-info hover:text-white hover:border-info">9:00 AM</a>


          </div>
        </div>

<!--        application form-->
        <div class="">
          <form>
            <div class="space-y-12">
              <div class="pb-8">
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-6">
                    <label for="email" class="block leading-6 text-gray-900"
                    >Email address</label
                    >
                    <div class="mt-2">
                      <input
                          id="email"
                          name="email"
                          type="email"
                          autocomplete="email"
                          class="block w-full rounded-md border-0 py-2.5 ps-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-6">
                    <label for="email" class="block leading-6 text-gray-900"
                    >Phone</label
                    >
                    <div class="mt-2">
                      <input
                          id="email"
                          name="email"
                          type="email"
                          autocomplete="email"
                          class="block w-full rounded-md border-0 py-2.5 ps-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:leading-6"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-6">
                    <h1 class="font-semibold">Appointment Date & Time</h1>
                    <p class="font-semibold text-orange-400">19 Feb, 5:30PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 flex items-center gap-x-6">
              <button
                  type="submit"
                  class="rounded-md bg-cyan-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
              >
                Schedule One to One
              </button>
            </div>
          </form>
        </div>
      </section>


    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>