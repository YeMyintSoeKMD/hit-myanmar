<template>
  <div class="xl:ms-8 md:mx-8 mx-2 pb-10">
    <div class="grid xl:grid-cols-4">
      <div class="xl:col-span-3">
        <div class="xl:pe-3">
          <div class="flex items-center py-8">
            <div class="w-6 me-3 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="left-arrow">
                <path
                  d="M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"
                ></path>
              </svg>
            </div>
            <h1 class="font-semibold text-lg">Professional Fullstack Developer Class</h1>
          </div>
          <video controls class="rounded-lg w-full mt-1">
            <source src="/images/video1.mp4" type="video/mp4" />
          </video>

          <div class="sm:flex justify-between mt-5">
            <div>
              <h1 class="text-xl font-bold mb-2">
                Professional Fullstack Developer Class
              </h1>
              <p class="text-base font-semibold">Chapter 1 - Introduction to HTML</p>
            </div>
            <div>
              <button class="btn btn-success text-white sm:mt-0 mt-3">
                <img src="/images/complete.png" class="w-6" />Complete
              </button>
            </div>
          </div>

          <div class="border rounded-md mt-5 p-5 xl:mb-0 mb-5 md:mx-0 mx-5">
            <h1 class="text-xl font-bold mb-2">Description</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla incidunt
              nostrum nam laudantium dolor commodi eaque magni at aperiam a quasi deleniti
              nobis, dolorum facilis blanditiis unde modi doloribus.
            </p>
          </div>
        </div>
      </div>

      <div class="xl:col-span-1">
        <div class="xl:fixed xl:top-0 xl:right-0 xl:w-1/4">
          <div
            class="md:absolute md:top-0 md:right-0 xl:relative hidden z-40 md:flex md:items-center md:justify-end pe-8 py-6"
          >
            <div class="avatar flex flex-col items-end me-7">
              <div class="w-12 rounded-full cursor-pointer">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <router-link
              :to="{ name: 'profileNotifications' }"
              class="noti-btn w-12 h-12 relative flex items-center justify-center rounded-full cursor-pointer border-0 transition duration-300"
            >
              <svg viewBox="0 0 448 512" class="bell w-6">
                <path
                  d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
                ></path>
              </svg>
              <span
                class="w-4 h-4 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs absolute top-2 right-1.5"
                >1</span
              >
            </router-link>
          </div>

          <div class="overflow-hidden md:mx-0 mx-5">
            <div
              class="border rounded-md xl:border-r-0 xl:rounded-tl-md xl:rounded-bl-md p-8 ps-6 pt-4 mb-5"
            >
              <h1 class="font-bold">Your Progress</h1>
              <div class="mt-4">
                <div
                  class="progress-container h-1.5 relative rounded-lg bg-gray-200"
                  :data-percentage="percentage"
                >
                  <div
                    class="progress h-1.5 relative rounded-lg bg-info w-0 transition duration-200"
                    :style="{ width: `${percentage}%` }"
                  ></div>
                  <div
                    class="percentage bg-info rounded-md shadow-md text-white text-xs p-1 absolute top-4 left-0 -translate-x-1/2 w-8 text-center transition duration-200 after:bg-info after:absolute after:-top-1 after:left-1/2 after:transform after:-translate-x-1/2 after:rotate-45 after:h-2.5 after:w-2.5 after:z-[-1]"
                    :style="{ left: `${percentage}%` }"
                  >
                    {{ percentage }}%
                  </div>
                </div>
                <div class="flex justify-between text-xs text-gray-400 mt-1">
                  <h2>0%</h2>
                  <h2>100%</h2>
                </div>
              </div>
            </div>
            <div
              class="xl:h-[calc(100vh-theme('spacing.56'))] join block join-vertical w-full xl:rounded-tr-none rounded-md xl:rounded-br-none overflow-y-auto hide-scrollbar"
            >
              <div
                class="ps-2 pe-4 collapse collapse-arrow join-item border rounded-md xl:border-r-0 xl:rounded-tl-md xl:rounded-bl-md"
              >
                <input type="checkbox" checked="checked" />
                <div class="collapse-title text-md font-bold">Introduction to HTML</div>
                <div class="collapse-content px-0 font-medium">
                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked="checked"
                          class="checkbox checkbox-info w-5 h-5"
                        />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>
                </div>
              </div>
              <div
                class="ps-2 pe-4 collapse collapse-arrow join-item border rounded-md xl:border-r-0 xl:rounded-tl-md xl:rounded-bl-md"
              >
                <input type="checkbox" />
                <div class="collapse-title text-md font-bold">Introduction to HTML</div>
                <div class="collapse-content px-0 font-medium">
                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked="checked"
                          class="checkbox checkbox-info w-5 h-5"
                        />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>
                </div>
              </div>
              <div
                class="ps-2 pe-4 collapse collapse-arrow join-item border rounded-md xl:border-r-0 xl:rounded-tl-md xl:rounded-bl-md"
              >
                <input type="checkbox" />
                <div class="collapse-title text-md font-bold">Introduction to HTML</div>
                <div class="collapse-content px-0 font-medium">
                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked="checked"
                          class="checkbox checkbox-info w-5 h-5"
                        />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>
                </div>
              </div>
              <div
                class="ps-2 pe-4 collapse collapse-arrow join-item border rounded-md xl:border-r-0 xl:rounded-tl-md xl:rounded-bl-md"
              >
                <input type="checkbox" />
                <div class="collapse-title text-md font-bold">Introduction to HTML</div>
                <div class="collapse-content px-0 font-medium">
                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked="checked"
                          class="checkbox checkbox-info w-5 h-5"
                        />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>
                </div>
              </div>
              <div
                class="ps-2 pe-4 collapse collapse-arrow join-item border rounded-md xl:border-r-0 xl:rounded-tl-md xl:rounded-bl-md"
              >
                <input type="checkbox" />
                <div class="collapse-title text-md font-bold">Introduction to HTML</div>
                <div class="collapse-content px-0 font-medium">
                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked="checked"
                          class="checkbox checkbox-info w-5 h-5"
                        />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>

                  <div class="flex items-center px-3 py-2 hover:bg-base-300">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox checkbox-info w-5 h-5" />
                      </label>
                    </div>
                    <p class="text-sm ms-2"><a href="">01 - What is HTML?</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const percentage = ref(70);
function setPercentage(newPercentage) {
  percentage.value = newPercentage;
}

onMounted(() => {
  setPercentage(percentage.value);
});
</script>

<style scoped>
.bell path {
  fill: #605f5f;
}

.noti-btn:hover .bell {
  animation: bellRing 0.9s both;
}

/* bell ringing animation keyframes*/
@keyframes bellRing {
  0%,
  100% {
    transform-origin: top;
  }

  15% {
    transform: rotateZ(10deg);
  }

  30% {
    transform: rotateZ(-10deg);
  }

  45% {
    transform: rotateZ(5deg);
  }

  60% {
    transform: rotateZ(-5deg);
  }

  75% {
    transform: rotateZ(2deg);
  }
}

.noti-btn:active {
  transform: scale(0.8);
}
</style>
