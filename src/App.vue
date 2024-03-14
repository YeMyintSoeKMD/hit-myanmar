<template>
  <div class="bg-white">
    <!-- Header -->
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <main class="isolate">
      <!-- Hero section -->
      <div class="relative isolate -z-10">
        <svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
        </svg>
        <div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
          <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
        </div>
        <div class="overflow-hidden">
          <div class="mx-auto max-w-7xl px-6 pb-32 pt-20 sm:pt-20 lg:px-8 lg:pt-32">
            <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <div class="w-full md:w-96 xl:w-3/4 m-auto">
                 <h1 class="text-5xl font-semibold leading-normal tracking-wider">Start <span class="text-info font-bold">Learning</span> & Define Your <span class="text-orange-400 font-bold">Future</span></h1>
                 <p class="mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptates modi magni libero aut! Veritatis quos possimus ad officia repudiandae, saepe sint eos. Ipsam, porro. Hic beatae doloribus rerum.
                 </p>
                 <div class="mt-5">
                  <div class="flex mb-2">
                    <img src="/images/right.png" class="w-5 h-5 me-2" />
                    <p class="text-sm font-semibold">Skilled and experienced coaches</p>
                  </div>
                  <div class="flex">
                    <img src="/images/right.png" class="w-5 h-5 me-2" />
                    <p class="text-sm font-semibold">Supportive 1:1 coaching</p>
                  </div>
                 </div>

                 <div class="mt-8 flex items-center">
                  <button class="btn btn-info text-white">Get Started</button>
                  <div class="flex items-center ms-7">
                   <img src="/images/video-play-button2.gif" class="w-14"/>
                   <p class="ms-3">Watch Video</p>
                  </div>
                 </div>
                </div>
              </div>                
              <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                      <div class="relative">
                      <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                      <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                  </div>
                  <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div class="relative">
                      <img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                      <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div class="relative">
                      <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                      <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                  </div>
                  <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                      <div class="relative">
                      <img src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                      <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div class="relative">
                      <img src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                      <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- About section -->
      <div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About</h2>
          <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p class="text-xl leading-8 text-gray-600">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
              <div class="mt-12 max-w-xl text-base leading-7 text-gray-700">
                <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
                <p class="mt-10">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
              </div>
            </div>
            <div class="lg:flex lg:flex-auto lg:justify-center">
              <dl class="w-64 space-y-8 xl:w-80">
                <div v-for="stat in stats" :key="stat.label" class="flex flex-col-reverse gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">{{ stat.label }}</dt>
                  <dd class="text-5xl font-semibold tracking-tight text-gray-900">{{ stat.value }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <!-- Image section -->
      <div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="" class="aspect-[5/2] w-full object-cover xl:rounded-3xl" />
      </div>

      <!-- Courses section -->
      <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Courses</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">Vel dolorem qui facilis soluta sint aspernatur totam cumque.</p>
        </div>
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
              <a :href="course.href">
                <span class="absolute inset-0" />
                {{ course.title }}
              </a>
            </h3>
          </article>
        </div>
      </div>

      <!-- Values section -->
      <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
        </div>
        <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div v-for="value in values" :key="value.name">
            <dt class="font-semibold text-gray-900">{{ value.name }}</dt>
            <dd class="mt-1 text-gray-600">{{ value.description }}</dd>
          </div>
        </dl>
      </div>

      <!-- FAQ section -->
      <div class="relative isolate -z-10 mt-32 sm:mt-48">
        <!-- <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg class="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
            <defs>
              <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="50%" class="overflow-visible fill-gray-50">
              <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
          </svg>
        </div> -->
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">Quick Answers</p>
          </div>
          <div class="mx-auto mt-16 grid sm:grid-cols-1 md:grid-cols-2 items-center">
            <div class="mx-auto">
              <!-- <img src="/images/faq1.png" class="w-80"/> -->
              <img src="/images/faq.png" class="w-96"/>
            </div>

            <div>
              <div class="collapse collapse-plus bg-white border border-info rounded-lg mb-3">
                  <input type="radio" name="my-accordion-3" checked="checked" /> 
                  <div class="collapse-title text-base font-medium">
                    Click to open this one and close others
                  </div>
                  <div class="collapse-content"> 
                    <p>hello</p>
                  </div>
              </div>

              <div class="collapse collapse-plus bg-white border border-info rounded-lg mb-3">
                  <input type="radio" name="my-accordion-3" /> 
                  <div class="collapse-title text-base font-medium">
                    Click to open this one and close others
                  </div>
                  <div class="collapse-content"> 
                    <p>hello</p>
                  </div>
              </div>
              <div class="collapse collapse-plus bg-white border border-info rounded-lg mb-3">
                  <input type="radio" name="my-accordion-3" /> 
                  <div class="collapse-title text-base font-medium">
                    Click to open this one and close others
                  </div>
                  <div class="collapse-content"> 
                    <p>hello</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonial section -->
      <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Testimonials</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">Our Student's Reviews</p>
        </div>
        <div class="relative mt-16 grid grid-cols-1 text-center">
          <swiper
    :spaceBetween="30"
    :hashNavigation="{
      watchState: true,
    }"
   
    :navigation="true"
    :modules="modules"
    class="mySwiper w-full h-full"
    :slides-per-view="slidesPerView"
  >
    <swiper-slide data-hash="slide1">
      <div class="px-0 md:px-16">
        <img src="/images/quote.png" class="w-10 h-10"/>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corporis aliquid pariatur, similique in natus dolor ipsum dolores quas
          placeat iusto repellat velit assumenda iste cumque modi omnis! Quod, dolor dolore.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corporis aliquid pariatur, similique in natus dolor ipsum dolores quas
          placeat iusto repellat velit assumenda iste cumque modi omnis! Quod, dolor dolore.
        </p>
        <div class="flex flex-col items-end mt-6">
          <img src="/images/student.jpg" class="w-16 h-16 rounded-full object-cover" />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide data-hash="slide2">
      <div class="px-0 md:px-16">
        <img src="/images/quote.png" class="w-10 h-10"/>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corporis aliquid pariatur, similique in natus dolor ipsum dolores quas
          placeat iusto repellat velit assumenda iste cumque modi omnis! Quod, dolor dolore.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corporis aliquid pariatur, similique in natus dolor ipsum dolores quas
          placeat iusto repellat velit assumenda iste cumque modi omnis! Quod, dolor dolore.
        </p>
        <div class="flex flex-col items-end mt-6">
          <img src="/images/student.jpg" class="w-16 h-16 rounded-full object-cover" />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide data-hash="slide3">
      <div class="px-0 md:px-16">
        <img src="/images/quote.png" class="w-10 h-10"/>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corporis aliquid pariatur, similique in natus dolor ipsum dolores quas
          placeat iusto repellat velit assumenda iste cumque modi omnis! Quod, dolor dolore.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corporis aliquid pariatur, similique in natus dolor ipsum dolores quas
          placeat iusto repellat velit assumenda iste cumque modi omnis! Quod, dolor dolore.
        </p>
        <div class="flex flex-col items-end mt-6">
          <img src="/images/student.jpg" class="w-16 h-16 rounded-full object-cover" />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide data-hash="slide4">
      <div class="px-0 md:px-16">
        <img src="/images/quote.png" class="w-10 h-10"/>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corporis aliquid pariatur, similique in natus dolor ipsum dolores quas
          placeat iusto repellat velit assumenda iste cumque modi omnis! Quod, dolor dolore.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corporis aliquid pariatur, similique in natus dolor ipsum dolores quas
          placeat iusto repellat velit assumenda iste cumque modi omnis! Quod, dolor dolore.
        </p>
        <div class="flex flex-col items-end mt-6">
          <img src="/images/student.jpg" class="w-16 h-16 rounded-full object-cover" />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide data-hash="slide5">
      <div class="px-0 md:px-16">
        <img src="/images/quote.png" class="w-10 h-10"/>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corporis aliquid pariatur, similique in natus dolor ipsum dolores quas
          placeat iusto repellat velit assumenda iste cumque modi omnis! Quod, dolor dolore.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corporis aliquid pariatur, similique in natus dolor ipsum dolores quas
          placeat iusto repellat velit assumenda iste cumque modi omnis! Quod, dolor dolore.
        </p>
        <div class="flex flex-col items-end mt-6">
          <img src="/images/student.jpg" class="w-16 h-16 rounded-full object-cover" />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide data-hash="slide6">
      <div class="px-0 md:px-16">
        <img src="/images/quote.png" class="w-10 h-10"/>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corporis aliquid pariatur, similique in natus dolor ipsum dolores quas
          placeat iusto repellat velit assumenda iste cumque modi omnis! Quod, dolor dolore.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corporis aliquid pariatur, similique in natus dolor ipsum dolores quas
          placeat iusto repellat velit assumenda iste cumque modi omnis! Quod, dolor dolore.
        </p>
        <div class="flex flex-col items-end mt-6">
          <img src="/images/student.jpg" class="w-16 h-16 rounded-full object-cover" />
        </div>
      </div>
    </swiper-slide>
  </swiper>

          <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-80 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg class="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
              <defs>
                <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" class="overflow-visible fill-gray-50">
                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
            </svg>
          </div>
        </div>
        
      </div>

      <!-- Founder section -->
      <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Instructor</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">About Instructor</p>
        </div>
        <div class="mt-16 md:mt-0 grid sm:grid-cols-1 md:grid-cols-2 flex items-center">
          
          <div class="mt-10 md:mt-0">
            <p class="leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis molestiae neque reprehenderit quisquam quasi laboriosam nobis. Reiciendis laboriosam excepturi necessitatibus dicta! Dolore, quod a! Tempore, quia. Molestias, maxime perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto similique alias fugiat maiores provident placeat deserunt at reiciendis ab. Dolor, nisi. Facilis enim voluptate, ipsum reiciendis vel cumque amet! Optio?
            </p>
            <div class="flex mt-10">
              <img src="/images/facebook1.png" class="w-10 me-6"/>
              <img src="/images/youtube1.png" class="w-10 me-8"/>
              <img src="/images/github1.png" class="w-10 me-8"/>
              <img src="/images/medium1.png" class="w-10 me-8"/>
            </div>
          </div>

          <div class="mx-auto order-first md:order-last">
            <img src="/images/faq1.png" class="w-80"/>
          </div>

          <!-- <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-80 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg class="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
            <defs>
              <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="50%" class="overflow-visible fill-gray-50">
              <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
          </svg>
        </div> -->
        </div>
        
      </div>

      <!-- Contact section -->
      <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">Let's discuss on something
          cool together</p>
        </div>
        <div class="mt-16 grid sm:grid-cols-1 md:grid-cols-2 flex items-center">
          
          <div class="mt-10 md:mt-0">
            <div>
            <div class="flex mb-8">
              <img src="/images/mail.png" class="w-6 me-3"/>
              <p class="font-semibold">hitmyanmar@gmail.com</p>
            </div>
             
            <div class="flex mb-8">
              <img src="/images/phone.png" class="w-6 me-3"/>
              <p class="font-semibold">+959 403438913</p>
            </div>
             
            <div class="flex mb-8">
              <img src="/images/location.png" class="w-6 me-3"/>
              <p class="font-semibold">Thar Du Street, Kyi Myin Daing</p>
            </div>
            </div>
          </div>

          <div class="">
            <form>
  <div class="space-y-12">
    <div class="pb-8">
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block leading-6 text-gray-900">First name</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-2.5 ps-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block leading-6 text-gray-900">Last name</label>
          <div class="mt-2">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-2.5 ps-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-6">
          <label for="email" class="block leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-2.5 ps-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:leading-6">
          </div>
        </div>

        <div class="col-span-full">
          <label for="about" class="block leading-6 text-gray-900">Message</label>
          <div class="mt-2">
            <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-2.5 ps-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:leading-6"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="submit" class="rounded-md bg-cyan-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500">Send Message</button>
  </div>
</form>
          </div>
        </div>
        
      </div>
    
    </main>

    <!-- Footer -->
    <footer class="mx-auto mt-32 max-w-7xl overflow-hidden px-6 pb-20 sm:pb-24 lg:px-8">
      <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        <div v-for="item in footerNavigation.main" :key="item.name" class="pb-6">
          <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
        </div>
      </nav>
      <div class="mt-10 flex justify-center space-x-10">
        <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <p class="mt-10 text-center text-xs leading-5 text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>

import { defineComponent, h, ref } from 'vue'
// import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
// import {Link, useForm } from '@/Composables/modules.js'
// import { post } from '@/Composables/httpMethods.js'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const modules = [Pagination, Navigation];

let slidesPerView = window.innerWidth <= 760 ? 1 : 2;

window.addEventListener('resize', () => {
  slidesPerView = window.innerWidth <= 760 ? 1 : 2;
});

const navigation = [
{ name: 'Product', href: '#' },
{ name: 'Features', href: '#' },
{ name: 'Resources', href: '#' },
{ name: 'Company', href: '#' },
]
const stats = [
{ label: 'Happy Students', value: '20k' },
{ label: 'Active Users', value: '11k' },
{ label: 'Classes', value: '2k+' },
]
const values = [
{
  name: 'Be world-class',
  description:
  'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
},
{
  name: 'Share everything you know',
  description:
  'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
},
{
  name: 'Always learning',
  description:
  'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
},
{
  name: 'Be supportive',
  description:
  'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
},
{
  name: 'Take responsibility',
  description:
  'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
},
{
  name: 'Enjoy downtime',
  description:
  'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
},
]
const team = [
{
  name: 'Michael Foster',
  role: 'Co-Founder / CTO',
  imageUrl:
  'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
},
// More people...
]
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
const footerNavigation = {
main: [
  { name: 'Blog', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Press', href: '#' },
  { name: 'Accessibility', href: '#' },
  { name: 'Partners', href: '#' },
],
social: [
  {
  name: 'Facebook',
  href: '#',
  icon: defineComponent({
      render: () =>
      h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
          'fill-rule': 'evenodd',
          d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
          'clip-rule': 'evenodd',
          }),
      ]),
  }),
  },
  {
  name: 'Instagram',
  href: '#',
  icon: defineComponent({
      render: () =>
      h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
          'fill-rule': 'evenodd',
          d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
          'clip-rule': 'evenodd',
          }),
      ]),
  }),
  },
  {
  name: 'Twitter',
  href: '#',
  icon: defineComponent({
      render: () =>
      h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
          d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
          }),
      ]),
  }),
  },
  {
  name: 'GitHub',
  href: '#',
  icon: defineComponent({
      render: () =>
      h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
          'fill-rule': 'evenodd',
          d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
          'clip-rule': 'evenodd',
          }),
      ]),
  }),
  },
  {
  name: 'YouTube',
  href: '#',
  icon: defineComponent({
      render: () =>
      h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
          'fill-rule': 'evenodd',
          d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
          'clip-rule': 'evenodd',
          }),
      ]),
  }),
  },
],
}

const mobileMenuOpen = ref(false)
</script>
<style scoped>
  article::before{
			content:'View Course';

			width:100%;
			height:100%;
			background-color:rgb(0, 0, 0,0.7);
			color:#fff;
      font-size: 30px;
      font-weight: 500;

			position:absolute;
			top:0;
			left:0;

			display:flex;
			justify-content:center;
			align-items:center;

			transform:scale(8);
			opacity:0;

			transition:all 0.5s;

		}

    article:hover::before{
			transform:scale(1);
			opacity:1;
		}
</style>