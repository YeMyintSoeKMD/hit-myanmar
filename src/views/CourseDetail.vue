<template>

  <div class="container mx-auto px-7 2xl:px-40 pt-32">

    <div class="grid grid-cols-1 lg:grid-cols-3">
      <div class="col-span-2 lg:pe-6">
        <img src="/images/course1.jpg" class="w-full object-cover rounded-md shadow-lg" />
        <h1 class="font-bold text-3xl my-5">Professional Fullstack Developer Class</h1>
        <p class="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ex animi voluptas incidunt? Aliquam quod
          voluptatibus dolores ipsum veritatis, libero molestiae tenetur neque provident, fuga eum odio labore
          blanditiis. Tenetur?
        </p>
      </div>

      <div class="shadow-lg p-6 mt-10 lg:mt-0">
        <div class="pb-2">
          <h3 class="font-bold text-lg mb-4">This course includes:</h3>
          <div class="flex items-center mt-3">
            <img src="/images/video.png" class="w-5 me-3" />
            <p class="text-sm">22 hours on-demand video</p>
          </div>

          <div class="flex items-center mt-3">
            <img src="/images/coding.png" class="w-5 me-3" />
            <p class="text-sm">19 coding exercises</p>
          </div>

          <div class="flex items-center mt-3">
            <img src="/images/article.png" class="w-5 me-3" />
            <p class="text-sm">15 articles</p>
          </div>

          <div class="flex items-center mt-3">
            <img src="/images/mobile.png" class="w-5 me-3" />
            <p class="text-sm">Access on mobile and TV</p>
          </div>

          <div class="flex items-center mt-3">
            <img src="/images/infinity.png" class="w-5 me-3" />
            <p class="text-sm">Full lifetime access</p>
          </div>

          <div class="flex items-center mt-3">
            <img src="/images/certificate.png" class="w-5 me-3" />
            <p class="text-sm"> Certificate of completion</p>
          </div>
        </div>

        <div class="divider divider-neutral h-1"></div>

        <div>
          <h1 class="font-semibold text-2xl">180,000 MMK</h1>
          <router-link :to="{ name: 'payment' }" class="btn btn-info text-white w-full mt-3 text-lg rounded-md">Enroll
            Now</router-link>
        </div>
      </div>
    </div>

    <!-- What you will learn -->
    <div class="mt-32 border border-info p-5 rounded-md">
      <h1 class="font-bold text-3xl mb-6">What you'll learn</h1>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="flex items-center mb-4">
          <img src="/images/right.png" class="w-6 me-3" />
          <p>You will learn how to leverage the power of Python to solve tasks.</p>
        </div>

        <div class="flex items-center mb-4">
          <img src="/images/right.png" class="w-6 me-3" />
          <p>You will learn how to leverage the power of Python to solve tasks.</p>
        </div>

        <div class="flex items-center mb-4">
          <img src="/images/right.png" class="w-6 me-3" />
          <p>You will learn how to leverage the power of Python to solve tasks.</p>
        </div>

        <div class="flex items-center mb-4">
          <img src="/images/right.png" class="w-6 me-3" />
          <p>You will learn how to leverage the power of Python to solve tasks.</p>
        </div>

        <div class="flex">
          <button class="font-bold text-orange-400">See more</button>
          <img src="/images/down-arrow.png" class="w-6" />
        </div>

      </div>

    </div>

    <!-- Course content -->
    <div class="mt-14">
      <h1 class="font-bold text-3xl mb-6">Course Content</h1>
      <div>
        <div class="collapse collapse-arrow bg-white border border-info rounded-md mb-3">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div class="collapse-title text-base font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatem alias enim veniam dolore esse
              ipsam, sint consectetur. Ipsa numquam ipsum et obcaecati alias officiis omnis fuga libero nisi eius?</p>
          </div>
        </div>

        <div class="collapse collapse-arrow bg-white border border-info rounded-md mb-3">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-base font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-white border border-info rounded-md mb-3">
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

    <!-- Description -->
    <div class="mt-14">
      <h1 class="font-bold text-3xl mb-6">Description</h1>
      <div>
        <p class="mb-3">
          Become a Python Programmer and learn one of employer's most requested skills of 2023!

          This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy!
          Whether you have never programmed before, already know basic syntax, or want to learn about the advanced
          features of Python, this course is for you! In this course we will teach you Python 3.
        </p>

        <p class="mb-3">
          With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned!
          This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to
          create a Python project portfolio!
        </p>

        <p class="mb-3 font-semibold text-gray-300">
          Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel
          files, Scraping websites for informations, working with image files, and much more!
        </p>

        <div class="flex">
          <button class="font-bold text-orange-400">See more</button>
          <img src="/images/down-arrow.png" class="w-6" />
        </div>
      </div>
    </div>

    <!-- Featured review -->
    <div class="mt-14 border border-info p-5 rounded-md">
      <h1 class="font-bold text-3xl mb-6">Featured Review</h1>
      <div>
        <div class="flex items-center">
          <img src="/images/student.jpg" class="w-20 h-20 rounded-full object-cover me-3" />
          <div>
            <h4 class="font-bold">Htet Nandar Bo</h4>
            <p class="text-sm text-gray-500">2 years ago</p>
          </div>
        </div>

        <p class="text-justify mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus est harum natus culpa perferendis ipsam enim beatae
          doloremque amet temporibus voluptatem libero officiis, ipsum,
          odio labore totam. Inventore, quae est? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, nobis
          nihil, consequuntur libero in inventore maxime blanditiis ipsa labore illum optio voluptatibus voluptatum!
          Expedita fugiat, voluptatibus repellendus necessitatibus veritatis praesentium!
        </p>
      </div>

    </div>
  </div>



</template>

<script setup>

</script>

<style lang="scss" scoped></style>