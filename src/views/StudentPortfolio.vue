<template>
  <div class="container mt-5 mx-auto px-8 2xl:px-40">
    <!-- Hero -->
    <div class="flex flex-col items-center py-20">
      <div class="avatar mb-6">
        <div class="w-40 rounded-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>

      <div class="text-center lg:w-1/2">
        <div class="text-2xl font-semibold mb-4">
          <h1 class="text-orange-500 mb-1">Hello, I'am Htet Nandar Bo</h1>
          <h2>Fullstack Developer</h2>
        </div>
        <p class="text-sm mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem
          temporibus ipsa id laboriosam ea, tempora quisquam corrupti quis modi, excepturi
          rerum architecto, ut distinctio dignissimos consequuntur commodi sint! Impedit?
        </p>
        <button
          class="btn border-orange-500 bg-orange-500 text-white mx-1.5 hover:text-black"
        >
          Get In Touch
        </button>
        <button class="btn border-orange-500 bg-white mx-1.5">Download CV</button>
      </div>
    </div>

    <!-- About Me -->
    <div class="grid md:grid-cols-2 py-20 lg:px-20">
      <div class="md:block flex items-center justify-center">
        <div>
          <div class="flex md:justify-start justify-center items-center">
            <div class="ping me-2"></div>
            <h1 class="text-2xl font-medium uppercase">About Me</h1>
          </div>
          <h2 class="text-3xl font-bold mt-4 text-teal-700">Let's Work Together</h2>
        </div>
      </div>
      <div class="place-self-center md:mt-0 mt-9">
        <p
          class="leading-relaxed text-sm font-normal text-gray-600 md:text-start text-center"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo maxime voluptates
          nostrum nam eaque velit veritatis iste autem libero. Et minima accusamus quae
          eveniet architecto accusantium quaerat obcaecati nulla odio. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Assumenda omnis aut fugiat aperiam
          necessitatibus sed non officia nam eaque neque. Ex ut dicta atque ratione
          adipisci nisi recusandae inventore quia! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit.
        </p>
      </div>
    </div>

    <!-- Skills -->
    <div class="grid md:grid-cols-2 py-20 lg:px-20">
      <div class="md:block flex items-center justify-center">
        <div>
          <div class="flex md:justify-start justify-center items-center">
            <div class="ping me-2"></div>
            <h1 class="text-2xl font-medium uppercase">Skills</h1>
          </div>
          <h2 class="text-3xl font-bold mt-4 text-teal-700">Key Expertise</h2>
        </div>
      </div>

      <div class="flex flex-wrap items-center md:mt-0 mt-9">
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >HTML</span
        >
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >CSS</span
        >
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >Javascript</span
        >
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >PHP</span
        >
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >Java</span
        >
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >Python</span
        >
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >TypeScript</span
        >
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >React</span
        >
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >Vue</span
        >
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >Laravel</span
        >
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >Spring</span
        >
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >Express . js</span
        >
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >CakePHP</span
        >
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >MySQL</span
        >
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >PostgreSQL</span
        >
        <span
          class="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm my-1"
          >SQL</span
        >
      </div>
    </div>

    <!-- Experience -->
    <div class="py-20">
      <div class="flex justify-center">
        <div>
          <div class="flex justify-center items-center relative">
            <div class="ping absolute top-0 left-6"></div>
            <h1 class="text-2xl font-medium uppercase">Experience</h1>
          </div>
          <h2 class="text-3xl font-bold mt-4 text-teal-700">
            Work Experience in this field.
          </h2>
        </div>
      </div>

      <ul class="timeline timeline-snap-icon timeline-vertical mt-20">
        <li v-for="(item, index) in timelineItems" :key="index">
          <hr v-if="index !== 0" style="width: 3px" />
          <div
            v-if="index % 2 === 0"
            class="md:block hidden timeline-start timeline-box rounded-lg !me-4 !mb-7"
            style="place-self: start end"
          >
            {{ item.date }}
          </div>
          <div
            v-else
            class="md:timeline-start timeline-end timeline-box rounded-lg !me-4 md:ms-0 ms-4 p-7 !mb-7 cursor-default hover:border-white hover:shadow-lg transition duration-400 hover:-translate-y-1"
          >
            <h1 class="font-semibold text-lg">
              {{ item.title }}<span class="md:hidden"> ({{ item.date }})</span>
            </h1>

            <h2 class="text-sm mt-1">{{ item.position }}</h2>
            <p class="mt-3 leading-relaxed text-gray-500">
              {{ item.description }}
            </p>
          </div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 512 512"
              id="circle"
            >
              <path
                d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"
                stroke="black"
                stroke-width="20"
                fill="none"
              ></path>
            </svg>
          </div>
          <div
            v-if="index % 2 === 0"
            class="timeline-end timeline-box rounded-lg ms-4 p-7 !mb-7 cursor-default hover:border-white hover:shadow-lg transition duration-400 hover:-translate-y-1"
          >
            <h1 class="font-semibold text-lg">
              {{ item.title }}<span class="md:hidden"> ({{ item.date }})</span>
            </h1>
            <h2 class="text-sm mt-1">{{ item.position }}</h2>
            <p class="mt-3 leading-relaxed text-gray-500">
              {{ item.description }}
            </p>
          </div>
          <div
            v-else
            class="md:block hidden timeline-end timeline-box rounded-lg ms-4 !mb-7"
            style="place-self: start start"
          >
            {{ item.date }}
          </div>
          <hr style="width: 3px" />
        </li>
      </ul>
    </div>

    <!-- Projects -->
    <div class="py-20">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <div class="md:mb-0 mb-9 md:block flex items-center justify-center">
          <div>
            <div class="flex items-center md:justify-start justify-center">
              <div class="ping me-2"></div>
              <h1 class="text-2xl font-medium uppercase">Projects</h1>
            </div>
            <h2 class="text-3xl font-bold mt-4 text-teal-700">Explore My Projects</h2>
          </div>
        </div>

        <div
          class="card rounded-lg cursor-pointer shadow-md p-5 relative hover:shadow-lg transition duration-400 hover:-translate-y-1"
        >
          <h3 class="font-bold text-xl">Title</h3>
          <p class="leading-relaxed tracking-wider text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit consectetur adipisicing elit consectetur
            adipisicing elit.
          </p>

          <div
            class="card__arrow absolute bottom-0 right-0 flex items-center justify-center bg-rose-500 p-1.5 transition duration-200 rounded-tl-lg rounded-br-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="15"
              width="15"
              class="transition duration-200"
            >
              <path
                fill="#fff"
                d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
              ></path>
            </svg>
          </div>
        </div>

        <div
          class="card rounded-lg cursor-pointer shadow-md p-5 relative hover:border-white hover:shadow-lg transition duration-400 hover:-translate-y-1"
        >
          <h3 class="font-bold text-xl">Title</h3>
          <p class="leading-relaxed tracking-wider text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit consectetur adipisicing elit consectetur
            adipisicing elit.
          </p>

          <div
            class="card__arrow absolute bottom-0 right-0 flex items-center justify-center bg-rose-500 p-1.5 transition duration-200 rounded-tl-lg rounded-br-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="15"
              width="15"
              class="transition duration-200"
            >
              <path
                fill="#fff"
                d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
              ></path>
            </svg>
          </div>
        </div>

        <div
          class="card rounded-lg cursor-pointer shadow-md p-5 relative hover:border-white hover:shadow-lg transition duration-400 hover:-translate-y-1"
        >
          <h3 class="font-bold text-xl">Title</h3>
          <p class="leading-relaxed tracking-wider text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit consectetur adipisicing elit consectetur
            adipisicing elit.
          </p>

          <div
            class="card__arrow absolute bottom-0 right-0 flex items-center justify-center bg-rose-500 p-1.5 transition duration-200 rounded-tl-lg rounded-br-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="15"
              width="15"
              class="transition duration-200"
            >
              <path
                fill="#fff"
                d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
              ></path>
            </svg>
          </div>
        </div>

        <div
          class="card rounded-lg cursor-pointer shadow-md p-5 relative hover:border-white hover:shadow-lg transition duration-400 hover:-translate-y-1"
        >
          <h3 class="font-bold text-xl">Title</h3>
          <p class="leading-relaxed tracking-wider text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit consectetur adipisicing elit consectetur
            adipisicing elit.
          </p>

          <div
            class="card__arrow absolute bottom-0 right-0 flex items-center justify-center bg-rose-500 p-1.5 transition duration-200 rounded-tl-lg rounded-br-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="15"
              width="15"
              class="transition duration-200"
            >
              <path
                fill="#fff"
                d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
              ></path>
            </svg>
          </div>
        </div>

        <div
          class="card rounded-lg cursor-pointer shadow-md p-5 relative hover:border-white hover:shadow-lg transition duration-400 hover:-translate-y-1"
        >
          <h3 class="font-bold text-xl">Title</h3>
          <p class="leading-relaxed tracking-wider text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit consectetur adipisicing elit consectetur
            adipisicing elit.
          </p>

          <div
            class="card__arrow absolute bottom-0 right-0 flex items-center justify-center bg-rose-500 p-1.5 transition duration-200 rounded-tl-lg rounded-br-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="15"
              width="15"
              class="transition duration-200"
            >
              <path
                fill="#fff"
                d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div class="grid md:grid-cols-2 py-20 md:px-20">
      <div class="md:mb-0 mb-9 md:block flex items-center justify-center">
        <div>
          <div class="flex items-center md:justify-start justify-center">
            <div class="ping me-2"></div>
            <h1 class="text-2xl font-medium uppercase">Contact</h1>
          </div>
          <h2 class="text-3xl font-bold mt-4 text-teal-700">Let's Build Together</h2>
        </div>
      </div>
      <div class="place-self-center">
        <div class="flex flex-col gap-5">
          <div class="flex gap-4 items-center">
            <svg
              class="w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="mail"
            >
              <path
                fill="rgb(239 68 68)"
                d="M27,26H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H27a3,3,0,0,1,3,3V23A3,3,0,0,1,27,26ZM5,8A1,1,0,0,0,4,9V23a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1Z"
              ></path>
              <path
                fill="rgb(239 68 68)"
                d="M16,17a1,1,0,0,1-.55-.17l-12-8A1,1,0,0,1,4.55,7.17l12,8A1,1,0,0,1,16,17Z"
              ></path>
              <path
                fill="rgb(239 68 68)"
                d="M16,17a1,1,0,0,1-.56-1.83l12-8a1,1,0,0,1,1.11,1.66l-12,8A1,1,0,0,1,16,17Z"
              ></path>
            </svg>
            <h2>htetnandarbo8@gmail.com</h2>
          </div>
          <div class="flex gap-4 items-center">
            <svg
              class="w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="phone"
            >
              <path
                fill="rgb(239 68 68)"
                d="M27.308,20.649l-2.2-2.2a3.521,3.521,0,0,0-4.938-.021,2.152,2.152,0,0,1-2.729.267A15.026,15.026,0,0,1,13.3,14.562a2.181,2.181,0,0,1,.284-2.739A3.521,3.521,0,0,0,13.553,6.9l-2.2-2.2a3.514,3.514,0,0,0-4.961,0l-.633.634c-3.3,3.3-3.053,10.238,3.813,17.1,4.14,4.141,8.307,5.875,11.686,5.875a7.5,7.5,0,0,0,5.418-2.061l.634-.634A3.513,3.513,0,0,0,27.308,20.649ZM25.894,24.2l-.634.634c-2.6,2.6-8.339,2.125-14.276-3.813S4.571,9.34,7.171,6.74L7.8,6.107a1.511,1.511,0,0,1,2.133,0l2.2,2.2a1.511,1.511,0,0,1,.021,2.11,4.181,4.181,0,0,0-.531,5.239,17.01,17.01,0,0,0,4.713,4.706,4.179,4.179,0,0,0,5.231-.517,1.512,1.512,0,0,1,2.118.013l2.2,2.2A1.51,1.51,0,0,1,25.894,24.2Z"
              ></path>
            </svg>
            <h2>09 - 123456789</h2>
          </div>
          <div class="flex gap-4 items-center">
            <svg
              class="w-7"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 8.467 8.467"
              id="location-pointer"
            >
              <path
                fill="rgb(239 68 68)"
                d="M4.232.793c-.498 0-1.08.145-1.556.522s-.824 1-.824 1.861c0 .911.572 1.799 1.117 2.48.545.682 1.09 1.159 1.09 1.159.1.088.249.088.349 0 0 0 .545-.477 1.09-1.159.545-.681 1.117-1.569 1.117-2.48 0-.862-.348-1.484-.824-1.861S4.73.793 4.232.793Zm0 .53c.395 0 .872.121 1.23.406.36.284.624.721.624 1.447 0 .676-.478 1.514-1 2.148-.443.538-.649.727-.852.93-.19-.196-.433-.412-.853-.93-.518-.638-1-1.472-1-2.148 0-.726.264-1.163.623-1.447.36-.285.834-.407 1.228-.407zm0 .534c-.727 0-1.322.597-1.322 1.325 0 .727.595 1.322 1.322 1.322.728 0 1.325-.595 1.325-1.322a1.33 1.33 0 0 0-1.325-1.325zm0 .53c.442 0 .796.353.796.795a.79.79 0 0 1-.796.792.788.788 0 0 1-.792-.792.79.79 0 0 1 .792-.795zM2.904 6.148a.23.23 0 0 0-.017.003c-.574.059-1.009.145-1.303.273-.147.064-.28.126-.36.299a.397.397 0 0 0-.005.298c.037.091.099.152.162.2.252.19.613.265 1.105.338.492.073 1.099.115 1.746.115.648 0 1.254-.042 1.746-.115.493-.073.855-.148 1.108-.338a.47.47 0 0 0 .162-.198.403.403 0 0 0-.006-.3c-.08-.174-.212-.235-.36-.3-.293-.127-.726-.213-1.3-.272-.337-.028-.418.465-.055.527.459.047.844.122 1.066.2-.154.056-.38.111-.693.157-.458.068-1.043.11-1.668.11-.624 0-1.209-.042-1.667-.11a3.724 3.724 0 0 1-.695-.156 5.587 5.587 0 0 1 1.07-.201c.345-.052.298-.527-.036-.53z"
                color="#000"
                font-family="sans-serif"
                font-weight="400"
                overflow="visible"
                paint-order="fill markers stroke"
                style="
                  line-height: normal;
                  font-variant-ligatures: normal;
                  font-variant-position: normal;
                  font-variant-caps: normal;
                  font-variant-numeric: normal;
                  font-variant-alternates: normal;
                  font-feature-settings: normal;
                  text-indent: 0;
                  text-align: start;
                  text-decoration-line: none;
                  text-decoration-style: solid;
                  text-decoration-color: #000;
                  text-transform: none;
                  text-orientation: mixed;
                  shape-padding: 0;
                  isolation: auto;
                  mix-blend-mode: normal;
                "
              ></path>
            </svg>
            <h2>Yangon</h2>
          </div>
        </div>

        <div class="flex gap-8 mt-10">
          <a href="#">
            <svg
              class="w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="github"
            >
              <path
                fill="#000"
                d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"
              ></path>
            </svg>
          </a>
          <a href="#">
            <svg
              class="w-10"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="none"
              viewBox="0 0 48 48"
              id="linkedin"
            >
              <rect width="48" height="48" fill="#117EB8" rx="24"></rect>
              <path
                fill="#fff"
                d="M37.325 35.325C35.75 35.2875 34.2125 35.2875 32.6375 35.325 32.3 35.325 32.225 35.25 32.225 34.9125 32.225 32.1375 32.225 29.325 32.225 26.55 32.225 25.9125 32.1875 25.275 32 24.675 31.4375 22.725 29.1875 22.0125 27.575 23.325 26.7125 24 26.375 24.9375 26.375 26.0625 26.375 28.6875 26.375 31.3125 26.375 33.9375 26.375 34.275 26.3375 34.6125 26.375 34.9875 26.4125 35.2875 26.2625 35.3625 26 35.325 24.3875 35.325 22.8125 35.325 21.2 35.325 20.9 35.325 20.825 35.25 20.825 34.95 20.8625 32.5875 20.8625 30.225 20.8625 27.825 20.8625 24.9 20.8625 21.975 20.825 19.0875 20.825 18.75 20.9 18.675 21.2 18.675 22.8125 18.675 24.3875 18.675 26 18.675 26.3 18.675 26.375 18.75 26.375 19.05 26.375 19.65 26.375 20.25 26.375 20.9625 26.4875 20.85 26.525 20.8125 26.5625 20.775 28.025 18.6375 30.0875 18.0375 32.525 18.4125 35.3375 18.8625 37.1375 20.8125 37.5875 23.8125 37.7 24.525 37.7375 25.2375 37.7375 25.95 37.7375 28.95 37.7375 31.9125 37.7375 34.9125 37.7375 35.2125 37.6625 35.325 37.325 35.325zM17.825 27C17.825 29.625 17.825 32.25 17.825 34.875 17.825 35.2125 17.75 35.325 17.4125 35.325 15.8375 35.2875 14.2625 35.325 12.6875 35.325 12.3875 35.325 12.3125 35.25 12.3125 34.95 12.3125 29.6625 12.3125 24.3375 12.3125 19.05 12.3125 18.7875 12.3875 18.675 12.6875 18.675 14.3 18.675 15.9125 18.675 17.525 18.675 17.8625 18.675 17.9 18.7875 17.9 19.0875 17.825 21.7125 17.825 24.3375 17.825 27zM18.0875 14.325C17.7125 15.825 16.175 16.6875 14.4125 16.3875 12.5375 16.0875 11.4875 14.25 12.1625 12.45 12.6125 11.325 13.7 10.65 15.0875 10.6875 17.1875 10.65 18.575 12.3375 18.0875 14.325z"
              ></path>
            </svg>
          </a>
          <a href="#">
            <svg
              class="w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="126.445 2.281 589 589"
              id="facebook"
            >
              <circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"></circle>
              <path
                fill="#fff"
                d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="text-center px-0 mx-0 pt-4 pb-3 border-t tracking-wide">
    &copy; copyright 2022 , Made by
    <a href="hitmyanmar.com" class="font-bold text-rose-500">hitmyanmar.com</a>
  </div>
</template>

<script setup>
import { ref } from "vue";

const timelineItems = ref([
  {
    date: "2023 - 2024",
    title: "UX Designer",
    position: "Vivo - Senior Designer",
    description:
      "The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
  },
  {
    date: "2023 - 2024",
    title: "UX Designer",
    position: "Vivo - Senior Designer",
    description:
      "The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
  },
  {
    date: "2023 - 2024",
    title: "UX Designer",
    position: "Vivo - Senior Designer",
    description:
      "The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,",
  },
]);
</script>

<style>
.ping {
  --uib-size: 28px;
  --uib-speed: 2s;
  --uib-color: rgb(239 68 68);
  position: relative;
  height: var(--uib-size);
  width: var(--uib-size);
}

.ping::before,
.ping::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: var(--uib-color);
  animation: pulse7132 var(--uib-speed) linear infinite;
  transform: scale(0);
  opacity: 0;
}

.ping::after {
  animation-delay: calc(var(--uib-speed) / -2);
}

@keyframes pulse7132 {
  0% {
    transform: scale(0);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.card:hover .card__arrow {
  background: #111;
}

.card:hover .card__arrow svg {
  transform: translateX(3px);
}
</style>
