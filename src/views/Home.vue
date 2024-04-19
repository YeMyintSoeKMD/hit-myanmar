<template>
  <main class="isolate">
    <!-- Hero section -->
    <div class="relative isolate -z-10">
      <svg
        class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true">
        <defs>
          <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1"
            patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
      </svg>
      <div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true">
        <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
      </div>
      <div class="overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 pb-32 pt-20 sm:pt-20 lg:px-8 lg:pt-32">
          <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <div class="w-full md:w-96 xl:w-3/4 m-auto">
                <h1 class="text-5xl font-semibold leading-normal tracking-wider">Start <span
                    class="text-info font-bold">Learning</span> & Define Your <span
                    class="text-orange-400 font-bold">Future</span></h1>
                <p class="mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptates modi magni libero aut!
                  Veritatis quos possimus ad officia repudiandae, saepe sint eos. Ipsam, porro. Hic beatae doloribus
                  rerum.
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
                  <div class="flex items-center ms-5 cursor-pointer" onclick="guide.showModal()">
                    <img src="/images/Play.gif" class="w-16" />
                    <p class="ms-1">Watch Video</p>
                  </div>
                  <dialog ref="modal" id="guide" class="modal" @closed="closeModal">
                    <div class="modal-box p-0">
                        <iframe ref="videoFrame" class="w-full h-96" src="https://www.youtube.com/embed/tZJ1G1hO8H8?si=mco2tvJoJ73EFysu"
                          title="YouTube video player" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <form method="dialog" class="modal-backdrop">
                      <button @click="closeModal">close</button>
                    </form>
                  </dialog>
                </div>
              </div>
            </div>
            <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div
                class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                    alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                    alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
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
            <p class="text-xl leading-8 text-gray-600">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci
              at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
            <div class="mt-12 max-w-xl text-base leading-7 text-gray-700">
              <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                semper sed amet vitae sed turpis id.</p>
              <p class="mt-10">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit
                molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et
                ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
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
      <img
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="" class="aspect-[5/2] w-full object-cover xl:rounded-3xl" />
    </div>

    <!-- Courses section -->
    <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Courses</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Vel dolorem qui facilis soluta sint aspernatur totam cumque.</p>
      </div>
      <Course />
    </div>

    <!-- Values section -->
    <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
          magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
      </div>
      <dl
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
            <img src="/images/faq.png" class="w-96" />
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
        <swiper :spaceBetween="30" :hashNavigation="{
                        watchState: true,
                      }" :navigation="true" :modules="modules" class="mySwiper w-full h-full"
          :slides-per-view="slidesPerView">
          <swiper-slide data-hash="slide1">
            <div class="px-0 md:px-16">
              <img src="/images/quote.png" class="w-10 h-10" />
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
              <img src="/images/quote.png" class="w-10 h-10" />
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
              <img src="/images/quote.png" class="w-10 h-10" />
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
              <img src="/images/quote.png" class="w-10 h-10" />
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
              <img src="/images/quote.png" class="w-10 h-10" />
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
              <img src="/images/quote.png" class="w-10 h-10" />
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

        <div
          class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-80 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg class="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
            <defs>
              <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis molestiae neque reprehenderit
            quisquam quasi laboriosam nobis. Reiciendis laboriosam excepturi necessitatibus dicta! Dolore, quod a!
            Tempore, quia. Molestias, maxime perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto similique alias fugiat maiores provident placeat deserunt at reiciendis ab. Dolor, nisi. Facilis
            enim voluptate, ipsum reiciendis vel cumque amet! Optio?
          </p>
          <div class="flex mt-10">
            <img src="/images/facebook1.png" class="w-10 me-6" />
            <img src="/images/youtube1.png" class="w-10 me-8" />
            <img src="/images/github1.png" class="w-10 me-8" />
            <img src="/images/medium1.png" class="w-10 me-8" />
          </div>
        </div>

        <div class="mx-auto order-first md:order-last">
          <img src="/images/faq1.png" class="w-80" />
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
              <img src="/images/mail.png" class="w-6 me-3" />
              <p class="font-semibold">hitmyanmar@gmail.com</p>
            </div>

            <div class="flex mb-8">
              <img src="/images/phone.png" class="w-6 me-3" />
              <p class="font-semibold">+959 403438913</p>
            </div>

            <div class="flex mb-8">
              <img src="/images/location.png" class="w-6 me-3" />
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
                      <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                        class="block w-full rounded-md border-0 py-2.5 ps-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:leading-6">
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="last-name" class="block leading-6 text-gray-900">Last name</label>
                    <div class="mt-2">
                      <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                        class="block w-full rounded-md border-0 py-2.5 ps-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:leading-6">
                    </div>
                  </div>

                  <div class="sm:col-span-6">
                    <label for="email" class="block leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                      <input id="email" name="email" type="email" autocomplete="email"
                        class="block w-full rounded-md border-0 py-2.5 ps-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:leading-6">
                    </div>
                  </div>

                  <div class="col-span-full">
                    <label for="about" class="block leading-6 text-gray-900">Message</label>
                    <div class="mt-2">
                      <textarea id="about" name="about" rows="3"
                        class="block w-full rounded-md border-0 py-2.5 ps-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:leading-6"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button type="submit"
                class="rounded-md bg-cyan-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500">Send
                Message</button>
            </div>
          </form>
        </div>
      </div>

    </div>



  </main>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Course from '../components/Course.vue';

const modules = [Pagination, Navigation];

let slidesPerView = window.innerWidth <= 760 ? 1 : 2;

window.addEventListener('resize', () => {
  slidesPerView = window.innerWidth <= 760 ? 1 : 2;
});


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


</script>
