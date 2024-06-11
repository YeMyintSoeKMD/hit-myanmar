<template>
    <div class="col-span-4 xl:bg-rose-500 lg:bg-green-500 md:bg-blue-200 sm:bg-yellow-200 bg-violet-500">
        <div class="md:flex justify-between items-center">
            <h1 class="text-2xl font-bold">My Courses</h1>
            <label class="input input-bordered flex items-center gap-2 rounded-2xl !h-10 md:mt-0 mt-5">
                <input type="text" class="grow" placeholder="Search my courses" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                    class="w-4 h-4 opacity-70">
                    <path fill-rule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clip-rule="evenodd" />
                </svg>
            </label>
        </div>
        <div role="tablist" class="tabs tabs-bordered mt-8">
            <input type="radio" name="my_tabs_1" role="tab" class="tab !w-max sm:text-base text-xs sm:p-8 p-3"
                aria-label="In Progress" checked />
            <div role="tabpanel" class="tab-content pt-10">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4">

                    <div class="cursor-pointer mb-10">
                        <router-link :to="{ name: 'coursestream' }">
                            <div>
                                <img src="/images/course1.jpg" class="w-full rounded-2xl" />
                                <h1 class="text-lg font-medium mt-4 xl:h-16 lg:h-24 md:h-16">Professional Fullstack Developer Class Professional Fullstack Developer Class </h1>
                                <progress class="progress w-full h-1" value="40" max="100"></progress>
                                <div class="flex justify-between text-sm">
                                    <p class="font-medium">35%</p>
                                    <p class="text-gray-500">8hr 20min / 21hr 5min</p>
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <div class="cursor-pointer mb-10">
                        <router-link :to="{ name: 'coursestream' }">
                            <div>
                                <img src="/images/course1.jpg" class="w-full rounded-2xl" />
                                <h1 class="text-lg font-medium mt-4 xl:h-16 lg:h-24 md:h-16">Professional Fullstack Developer Class</h1>
                                <progress class="progress w-full h-1" value="40" max="100"></progress>
                                <div class="flex justify-between text-sm">
                                    <p class="font-medium">35%</p>
                                    <p class="text-gray-500">8hr 20min / 21hr 5min</p>
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <div class="cursor-pointer mb-10">
                        <router-link :to="{ name: 'coursestream' }">
                            <div>
                                <img src="/images/course1.jpg" class="w-full rounded-2xl" />
                                <h1 class="text-lg font-medium mt-4 xl:h-16 lg:h-24 md:h-16">Professional Fullstack Developer Class</h1>
                                <progress class="progress w-full h-1" value="40" max="100"></progress>
                                <div class="flex justify-between text-sm">
                                    <p class="font-medium">35%</p>
                                    <p class="text-gray-500">8hr 20min / 21hr 5min</p>
                                </div>
                            </div>
                        </router-link>
                    </div>

                </div>
            </div>

            <input type="radio" name="my_tabs_1" role="tab" class="tab !w-max sm:text-base text-xs sm:p-8 p-3"
                aria-label=" Completed" />
            <div role="tabpanel" class="tab-content p-10">Tab content 2</div>

            <input type="radio" name="my_tabs_1" role="tab" class="tab !w-max sm:text-base text-xs sm:p-8 p-3"
                aria-label="Not Started" />
            <div role="tabpanel" class="tab-content p-10">Tab content 3</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>