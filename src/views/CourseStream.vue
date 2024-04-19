<template>
    <div class="container mx-auto px-8 2xl:px-40 pt-32">
        <div class="grid lg:grid-cols-4">
            <div class="lg:col-span-3">
                <div class="lg:pe-10">
                    <video controls class="rounded-lg w-full">
                        <source src="/images/video1.mp4" type="video/mp4" />
                    </video>

                    <div class="sm:flex justify-between mt-5">
                        <div>
                            <h1 class="text-xl font-bold mb-2">Professional Fullstack Developer Class</h1>
                            <p class="text-base font-semibold">Chapter 1 - Introduction to HTML</p>
                        </div>
                        <div>
                            <button class="btn btn-success text-white sm:mt-0 mt-3 ">
                                <img src="/images/complete.png" class="w-6" />Complete
                            </button>
                        </div>
                    </div>

                    <div class="border rounded-md mt-5 p-5 lg:mb-0 mb-5">
                        <h1 class="text-xl font-bold mb-2">Description</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla incidunt nostrum nam
                            laudantium
                            dolor
                            commodi eaque magni at aperiam a quasi deleniti nobis, dolorum facilis blanditiis unde modi
                            doloribus.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div class="border rounded-md p-4 pb-8 mb-5">
                    <h1 class=" font-bold">Your Progress</h1>
                    <div class="mt-4">
                        <div class="progress-container h-1.5 relative rounded-lg bg-gray-200"
                            :data-percentage="percentage">
                            <div class="progress h-1.5 relative rounded-lg bg-info w-0 transition duration-200"
                                :style="{ width: `${percentage}%` }"></div>
                            <div class="percentage bg-info rounded-md shadow-md text-white text-xs p-1 absolute top-4 left-0 -translate-x-1/2 w-8 text-center transition duration-200 after:bg-info after:absolute after:-top-1 after:left-1/2 after:transform after:-translate-x-1/2 after:rotate-45 after:h-2.5 after:w-2.5 after:z-[-1]"
                                :style="{ left: `${percentage}%` }">{{
                                percentage
                            }}%</div>
                        </div>
                        <div class="flex justify-between text-xs text-gray-400 mt-1">
                            <h2>0%</h2>
                            <h2>100%</h2>
                        </div>
                    </div>
                </div>
                <div class="join join-vertical w-full">
                    <div class="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" checked="checked" />
                        <div class="collapse-title text-md font-bold">
                            Introduction to HTML
                        </div>
                        <div class="collapse-content px-0 font-medium">
                            <div class="flex items-center px-3 py-2 hover:bg-base-300">
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <input type="checkbox" checked="checked"
                                            class="checkbox checkbox-info w-5 h-5" />
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
                    <div class="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" />
                        <div class="collapse-title text-md font-bold">
                            Introduction to HTML
                        </div>
                        <div class="collapse-content px-0 font-medium">
                            <div class="flex items-center px-3 py-2 hover:bg-base-300">
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <input type="checkbox" checked="checked"
                                            class="checkbox checkbox-info w-5 h-5" />
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
                    <div class="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" />
                        <div class="collapse-title text-md font-bold">
                            Introduction to HTML
                        </div>
                        <div class="collapse-content px-0 font-medium">
                            <div class="flex items-center px-3 py-2 hover:bg-base-300">
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <input type="checkbox" checked="checked"
                                            class="checkbox checkbox-info w-5 h-5" />
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
                    <div class="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" />
                        <div class="collapse-title text-md font-bold">
                            Introduction to HTML
                        </div>
                        <div class="collapse-content px-0 font-medium">
                            <div class="flex items-center px-3 py-2 hover:bg-base-300">
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <input type="checkbox" checked="checked"
                                            class="checkbox checkbox-info w-5 h-5" />
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
</template>

<script setup>
import { ref, onMounted } from 'vue';

const percentage = ref(70);
function setPercentage(newPercentage) {
    percentage.value = newPercentage;
}

onMounted(() => {
    setPercentage(percentage.value);
});



</script>

<style lang="scss" scoped></style>