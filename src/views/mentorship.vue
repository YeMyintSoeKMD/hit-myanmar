<template>
  <div>
    <div class="container mx-auto px-8 2xl:px-40 pt-32">
<!--      hero section-->
      <section class="grid lg:grid-cols-2 flex items-center">
        <div class="xl:pe-24 lg:pe-5 lg:m-0 mt-12">
          <h1 class=" xl:text-5xl lg:text-4xl md:text-5xl sm:text-4xl text-3xl font-semibold tracking-widest">Success begins with the right mentor</h1>
          <p class="mt-8 leading-relaxed xl:text-base lg:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, nam,
            debitis quo sed neque eligendi hic, omnis optio est qui aut fugit quam. Eius voluptatum, minus
            officia ut nesciunt temporibus?</p>
          <button class="btn rounded-md bg-rose-500 text-white mt-6 flex items-center">
            <span>Start Consulting</span>
            <svg id="SvgjsSvg1011" width="11" height="11" xmlns="http://www.w3.org/2000/svg" version="1.1"
                 xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs">
              <defs id="SvgjsDefs1012"></defs>
              <g id="SvgjsG1013"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12" width="11"
                                      height="11">
                <path fill="none" fill-rule="evenodd" stroke="#ffffff" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2" d="M1 13 13 1M4 1h9v9"
                      class="colorStroke000 svgStroke"></path>
              </svg></g>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-2 w-4/5 lg:order-last order-first">
          <div class="h-80 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" class="w-full h-full object-cover">
          </div>
          <div class="h-80 translate-y-10 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" class="w-full h-full object-cover">
          </div>
          <div class="h-40 translate-x-10  rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" class="w-full h-full object-cover">
          </div>
          <div class="w-5/6 h-40 translate-y-10 translate-x-10  rounded-xl overflow-hidden ">
            <img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" class="w-full h-full object-cover">
          </div>
        </div>
      </section>

<!--      card section-->
      <section class="w-full h-auto pt-32">
        <h1 class="text-4xl font-semibold">Choose from a variety of categories</h1>

<!--        cards-->
      <div class="grid grid-cols-3 gap-5 pt-10">
        <div class="  p-3 border border-gray-300 rounded-xl">
<!--          icons-->
          <div class="w-16 h-16 overflow-hidden rounded-xl">
            <img src="https://hitmyanmar.com/images/logo.png" alt="">
          </div>
<!--          content-->
          <div class="mt-4">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <span class="text-xs font-medium line-through text-gray-500">190000 MMK</span>
                <img src="/images/dot.png" class="w-4 mx-1">
                <span class="text-base font-semibold text-orange-600">100000 MMK</span>
              </div>

              <a href="/coursedetail" class="">
                <img src="/images/diagonal-arrow.png" class="w-4">
              </a>
            </div>
            <h1 class="text-lg font-semibold mt-1">Personal Development</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda consequatur dolore eos esse inventore ipsam, iure maxime neque nesciunt odio perferendis possimus quo sed unde ut vitae voluptate voluptatem.</p>
            <div class="flex justify-end items-center">
              <router-link :to="{ name: 'applicationForm' }" class="btn rounded-md bg-rose-500 text-white mt-6 flex items-center">
                <span> Consult Now</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="  p-3 border border-gray-300 rounded-xl">
<!--          icons-->
          <div class="w-16 h-16 overflow-hidden rounded-xl">
            <img src="https://hitmyanmar.com/images/logo.png" alt="">
          </div>
<!--          content-->
          <div class="mt-4">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <span class="text-xs font-medium line-through text-gray-500">190000 MMK</span>
                <img src="/images/dot.png" class="w-4 mx-1">
                <span class="text-base font-semibold text-orange-600">100000 MMK</span>
              </div>

              <a href="/coursedetail" class="">
                <img src="/images/diagonal-arrow.png" class="w-4">
              </a>
            </div>
            <h1 class="text-lg font-semibold mt-1">Personal Development</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda consequatur dolore eos esse inventore ipsam, iure maxime neque nesciunt odio perferendis possimus quo sed unde ut vitae voluptate voluptatem.</p>
            <div class="flex justify-end items-center">
              <router-link :to="{ name: 'applicationForm' }" class="btn rounded-md bg-rose-500 text-white mt-6 flex items-center">
                <span> Consult Now</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="  p-3 border border-gray-300 rounded-xl">
<!--          icons-->
          <div class="w-16 h-16 overflow-hidden rounded-xl">
            <img src="https://hitmyanmar.com/images/logo.png" alt="">
          </div>
<!--          content-->
          <div class="mt-4">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <span class="text-xs font-medium line-through text-gray-500">190000 MMK</span>
                <img src="/images/dot.png" class="w-4 mx-1">
                <span class="text-base font-semibold text-orange-600">100000 MMK</span>
              </div>

              <a href="/coursedetail" class="">
                <img src="/images/diagonal-arrow.png" class="w-4">
              </a>
            </div>
            <h1 class="text-lg font-semibold mt-1">Personal Development</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda consequatur dolore eos esse inventore ipsam, iure maxime neque nesciunt odio perferendis possimus quo sed unde ut vitae voluptate voluptatem.</p>
            <div class="flex justify-end items-center">
              <router-link :to="{ name: 'applicationForm' }" class="btn rounded-md bg-rose-500 text-white mt-6 flex items-center">
                <span> Consult Now</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      </section>

<!--      reviews section-->
      <section class="w-full h-auto pt-32">
        <h1 class="text-4xl font-semibold mb-10">Reviews</h1>

        <!--        reviewers-->
        <div class="carousel w-full h-60 border border-gray-300 rounded-2xl ">
          <div id="item1" class="carousel-item w-full h-full">
            <div class="flex gap-x-20 w-full h-full">
<!--              img part-->
              <div class="flex justify-center items-center w-1/5 h-full">
                <div class="w-40 h-40 overflow-hidden rounded-full">
                  <img src="/images/yms.jpg" alt="" class="w-full h-full object-cover">
                </div>
              </div>
<!--              review content part-->
              <div class="flex flex-col justify-around w-4/5 h-full">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem consequatur est ex, fugit illo itaque iusto labore laborum libero, minus mollitia, non quia quibusdam quis sed suscipit temporibus vel.</p>
                <p>Allen Hein</p>
              </div>
            </div>
          </div>
          <div id="item2" class="carousel-item w-full h-full ">
            <div class="flex gap-x-20 w-full h-full">
              <!--              img part-->
              <div class="flex justify-center items-center w-1/5 h-full">
                <div class="w-40 h-40 overflow-hidden rounded-full">
                  <img src="/images/yms.jpg" alt="" class="w-full h-full object-cover">
                </div>
              </div>
              <!--              review content part-->
              <div class="flex flex-col justify-around w-4/5 h-full">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem consequatur est ex, fugit illo itaque iusto labore laborum libero, minus mollitia, non quia quibusdam quis sed suscipit temporibus vel.</p>
                <p>Sa Yar</p>
              </div>
            </div>
          </div>
          <div id="item3" class="carousel-item w-full h-full">
            <div class="flex gap-x-20 w-full h-full">
              <!--              img part-->
              <div class="flex justify-center items-center w-1/5 h-full">
                <div class="w-40 h-40 overflow-hidden rounded-full">
                  <img src="/images/yms.jpg" alt="" class="w-full h-full object-cover">
                </div>
              </div>
              <!--              review content part-->
              <div class="flex flex-col justify-around w-4/5 h-full">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem consequatur est ex, fugit illo itaque iusto labore laborum libero, minus mollitia, non quia quibusdam quis sed suscipit temporibus vel.</p>
                <p>Sa Yar Ma</p>
              </div>
            </div>
          </div>
          <div id="item4" class="carousel-item w-full h-full">
            <div class="flex gap-x-20 w-full h-full">
              <!--              img part-->
              <div class="flex justify-center items-center w-1/5 h-full">
                <div class="w-40 h-40 overflow-hidden rounded-full">
                  <img src="/images/yms.jpg" alt="" class="w-full h-full object-cover">
                </div>
              </div>
              <!--              review content part-->
              <div class="flex flex-col justify-around w-4/5 h-full">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem consequatur est ex, fugit illo itaque iusto labore laborum libero, minus mollitia, non quia quibusdam quis sed suscipit temporibus vel.</p>
                <p>Thu Ta Ye Yint</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full justify-center gap-2 py-2">
          <a href="#item1" class="btn btn-xs">1</a>
          <a href="#item2" class="btn btn-xs">2</a>
          <a href="#item3" class="btn btn-xs">3</a>
          <a href="#item4" class="btn btn-xs">4</a>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>