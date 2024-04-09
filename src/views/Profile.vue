<template>
    <div class="container mx-auto px-8 2xl:px-40 pt-32">
        <div class="grid grid-cols-5">
            <div>
                <div class="avatar">
                    <div class="w-28 rounded-full ring-neutral-200 ring-1 ring-offset-4">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>

                <h2 class="font-semibold text-xl mt-1">Htet Nandar Bo</h2>

                <ul class="menu w-56 rounded-box px-0 mt-5">
                    <li class="py-2">
                        <a class="px-2 font-medium">
                            <img src="/images/graduation.png" class="w-6 me-1" />
                            My Courses
                        </a>
                    </li>
                    <li class="py-2">
                        <a class="px-2">
                            <img src="/images/profile-certificate.png" class="w-6 me-1" />
                            Certificates
                        </a>
                    </li>
                    <li class="py-2">
                        <a class="px-2">
                            <img src="/images/profile.png" class="w-6 me-1" />
                            Edit Profile
                        </a>
                    </li>
                    <li class="py-2">
                        <a class="px-2">
                            <img src="/images/setting.png" class="w-6 me-1" />
                            Setting
                        </a>
                    </li>
                    <li class="py-2">
                        <a class="px-2">
                            <img src="/images/logout.png" class="w-6 me-1" />
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-span-4">
                <div class="flex justify-between items-center">
                    <h1 class="text-2xl font-bold">My Courses</h1>
                    <label class="input input-bordered flex items-center gap-2 rounded-2xl !h-10">
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
                    <input type="radio" name="my_tabs_1" role="tab" class="tab text-base !w-28 p-0"
                        aria-label="In Progress" checked />
                    <div role="tabpanel" class="tab-content p-10">
                        <div class="flex flex-wrap">

                            <div class="basis-64 me-4 cursor-pointer mb-10">
                                <router-link :to="{ name: 'coursestream' }">
                                    <div>
                                        <img src="/images/course1.jpg" class="w-full rounded-2xl" />
                                        <h1 class="text-lg font-medium mt-2">Professional Fullstack Developer Class</h1>
                                        <progress class="progress w-56 h-1" value="40" max="100"></progress>
                                        <div class="flex justify-between text-sm">
                                            <p class="font-medium">35%</p>
                                            <p class="text-gray-500">8hr 20min / 21hr 5min</p>
                                        </div>
                                    </div>
                                </router-link>
                            </div>

                            <div class="basis-64 me-4 cursor-pointer mb-10">
                                <router-link :to="{ name: 'coursestream' }">
                                    <div>
                                        <img src="/images/course1.jpg" class="w-full rounded-2xl" />
                                        <h1 class="text-lg font-medium mt-2">Professional Fullstack Developer Class</h1>
                                        <progress class="progress w-56 h-1" value="40" max="100"></progress>
                                        <div class="flex justify-between text-sm">
                                            <p class="font-medium">35%</p>
                                            <p class="text-gray-500">8hr 20min / 21hr 5min</p>
                                        </div>
                                    </div>
                                </router-link>
                            </div>

                            <div class="basis-64 me-4 cursor-pointer mb-10">
                                <router-link :to="{ name: 'coursestream' }">
                                    <div>
                                        <img src="/images/course1.jpg" class="w-full rounded-2xl" />
                                        <h1 class="text-lg font-medium mt-2">Professional Fullstack Developer Class</h1>
                                        <progress class="progress w-56 h-1" value="40" max="100"></progress>
                                        <div class="flex justify-between text-sm">
                                            <p class="font-medium">35%</p>
                                            <p class="text-gray-500">8hr 20min / 21hr 5min</p>
                                        </div>
                                    </div>
                                </router-link>
                            </div>

                        </div>
                    </div>

                    <input type="radio" name="my_tabs_1" role="tab" class="tab text-base !w-28 p-0"
                        aria-label="Completed" />
                    <div role="tabpanel" class="tab-content p-10">Tab content 2</div>

                    <input type="radio" name="my_tabs_1" role="tab" class="tab text-base !w-28 p-0"
                        aria-label="Not Started" />
                    <div role="tabpanel" class="tab-content p-10">Tab content 3</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>