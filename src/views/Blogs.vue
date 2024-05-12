<template>
    <div class="container mx-auto px-7 2xl:px-40 pt-32">
        <div>
            <div class="text-center">
                <h1 class="font-bold text-2xl capitalize mb-5">Our Fresh <span class="text-orange-400">BLogs</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div class="mt-8 flex flex-col sm:flex-row sm:justify-between">
                <select class="select select-bordered w-24 sm:w-28 md:w-56 hidden sm:block">
                    <option disabled selected>Filter</option>
                    <option>Sci-fi</option>
                    <option>Drama</option>
                    <option>Action</option>
                </select>

                <label class="input input-bordered flex items-center gap-2 w-full md:w-3/5 order-1">
                    <input type="text" class="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                        class="w-4 h-4 opacity-70">
                        <path fill-rule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clip-rule="evenodd" />
                    </svg>
                </label>

                <select class="select select-bordered w-full mt-2 sm:mt-0 sm:w-28 md:w-56 order-2">
                    <option disabled selected>Filter</option>
                    <option>Sci-fi</option>
                    <option>Drama</option>
                    <option>Action</option>
                </select>
            </div>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-1 mt-20">
            <!-- Pin Post -->
            <div class="col-span-2 md:p-0 lg:pe-7 md:pe-0 md:shadow-none shadow-lg p-8">

                <img src="/images/blog.jpg" class="w-full xl:h-120 lg:h-84 md:h-72 sm:h-80 rounded object-cover" />


                <div class="flex items-center mt-5">
                    <span class="text-sm font-medium">Jan 15, 2024</span>
                    <img src="/images/dot.png" class="w-4 mx-1" />
                    <span class="text-sm font-medium">Ye Myint Soe</span>
                </div>

                <div class="mt-2">
                    <div class="flex justify-between items-center">
                        <h1 class="text-xl font-bold">Higher Order Functions in JavaScript</h1>
                        <router-link :to="{ name: 'blogDetail' }"><img src="/images/diagonal-arrow.png"
                                class="w-4" /></router-link>
                    </div>
                    <p class="mt-2 leading-7">Higher Order Function တွေဆိုတာ တစ်ခြား Function တွေကို Argument အဖြစ် Pass
                        လုပ်လို့ရပြီး Array
                        တွေကို အလွယ်သကူ လိုသလို Manage လုပ်လို့ရတဲ့ ...</p>
                    <div class="mt-5">
                        <div class="badge bg-sky-200 text-sky-800 py-3 me-2 mb-1">programming</div>
                        <div class="badge bg-sky-200 text-sky-800 py-3 me-2 mb-1">javascript</div>
                        <div class="badge bg-sky-200 text-sky-800 py-3 me-2 mb-1">frondend</div>
                    </div>
                </div>
            </div>

            <!-- Latest Posts -->
            <div class="flex items-end lg:block hidden">
                <div>
                    <h2 class="text-xl font-bold mb-6">Latest Posts</h2>
                    <div class="xl:block md:hidden" v-for="(item, index) in items" :key="index">
                        <div>
                            <div class="flex items-center">
                                <span class="text-sm font-medium">{{ item.date }}</span>
                                <img src="/images/dot.png" class="w-4 mx-1" />
                                <span class="text-sm font-medium">{{ item.author }}</span>
                            </div>
                            <div class="mt-2">
                                <div class="flex justify-between items-center">
                                    <h1 class="text-lg font-bold">{{ item.title }}</h1>
                                    <img src="/images/diagonal-arrow.png" class="w-3" />
                                </div>
                                <p class="mt-2 text-sm leading-6">{{ item.description }}</p>
                                <div class="mt-5">
                                    <div v-for="(tag, tagIndex) in item.tags" :key="tagIndex"
                                        class="badge bg-sky-200 text-sky-800 py-3 me-2">{{ tag }}</div>
                                </div>
                            </div>
                            <div v-if="index !== items.length - 1" class="divider mt-2"></div>
                        </div>
                    </div>
                    <div class="xl:hidden lg:block" v-for="(item, index) in items.slice(0, 2)" :key="index">
                        <div>
                            <div class="flex items-center">
                                <span class="text-sm font-medium">{{ item.date }}</span>
                                <img src="/images/dot.png" class="w-4 mx-1" />
                                <span class="text-sm font-medium">{{ item.author }}</span>
                            </div>
                            <div class="mt-2">
                                <div class="flex justify-between items-center">
                                    <h1 class="text-lg font-bold">{{ item.title }}</h1>
                                    <img src="/images/diagonal-arrow.png" class="w-3" />
                                </div>
                                <p class="mt-2 text-sm leading-6">{{ item.description }}</p>
                                <div class="mt-5">
                                    <div v-for="(tag, tagIndex) in item.tags" :key="tagIndex"
                                        class="badge bg-sky-200 text-sky-800 py-3 me-2 mb-1">{{ tag }}</div>
                                </div>
                            </div>
                            <div v-if="index !== items.length - 2" class="divider mt-2"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- All Posts -->
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-10 mt-16">
            <div>
                <img src="/images/blog1.jpg" class="w-full h-60 rounded object-cover" />

                <div class="flex items-center mt-5">
                    <span class="text-xs font-medium">Jan 15, 2024</span>
                    <img src="/images/dot.png" class="w-4 mx-1" />
                    <span class="text-sm font-medium">Ye Myint Soe</span>
                </div>

                <div class="mt-2">
                    <div class="flex justify-between items-center">
                        <h1 class="text-lg font-bold">SSR vs CSR</h1>
                        <img src="/images/diagonal-arrow.png" class="w-3" />
                    </div>
                    <p class="mt-2 text-sm leading-6">Website တွေ Web Application တွေ ရေးကြရာမှာ အရင်ကဆိုရင် CSR
                        အတိုင်းရေးတာ
                        များပေမယ့် ...</p>
                    <div class="mt-3">
                        <div class="badge bg-sky-200 text-sky-800 py-3 me-2 mb-1">programming</div>
                    </div>
                </div>
            </div>
            <div>
                <img src="/images/blog1.jpg" class="w-full h-60 rounded object-cover" />

                <div class="flex items-center mt-5">
                    <span class="text-xs font-medium">Jan 15, 2024</span>
                    <img src="/images/dot.png" class="w-4 mx-1" />
                    <span class="text-sm font-medium">Ye Myint Soe</span>
                </div>

                <div class="mt-2">
                    <div class="flex justify-between items-center">
                        <h1 class="text-lg font-bold">SSR vs CSR</h1>
                        <img src="/images/diagonal-arrow.png" class="w-3" />
                    </div>
                    <p class="mt-2 text-sm leading-6">Website တွေ Web Application တွေ ရေးကြရာမှာ အရင်ကဆိုရင် CSR
                        အတိုင်းရေးတာ
                        များပေမယ့် ...</p>
                    <div class="mt-3">
                        <div class="badge bg-sky-200 text-sky-800 py-3 me-2 mb-1">programming</div>
                    </div>
                </div>
            </div>
            <div>
                <img src="/images/blog1.jpg" class="w-full h-60 rounded object-cover" />

                <div class="flex items-center mt-5">
                    <span class="text-xs font-medium">Jan 15, 2024</span>
                    <img src="/images/dot.png" class="w-4 mx-1" />
                    <span class="text-sm font-medium">Ye Myint Soe</span>
                </div>

                <div class="mt-2">
                    <div class="flex justify-between items-center">
                        <h1 class="text-lg font-bold">SSR vs CSR</h1>
                        <img src="/images/diagonal-arrow.png" class="w-3" />
                    </div>
                    <p class="mt-2 text-sm leading-6">Website တွေ Web Application တွေ ရေးကြရာမှာ အရင်ကဆိုရင် CSR
                        အတိုင်းရေးတာ
                        များပေမယ့် ...</p>
                    <div class="mt-3">
                        <div class="badge bg-sky-200 text-sky-800 py-3 me-2 mb-1">programming</div>
                    </div>
                </div>
            </div>
            <div>
                <img src="/images/blog1.jpg" class="w-full h-60 rounded object-cover" />

                <div class="flex items-center mt-5">
                    <span class="text-xs font-medium">Jan 15, 2024</span>
                    <img src="/images/dot.png" class="w-4 mx-1" />
                    <span class="text-sm font-medium">Ye Myint Soe</span>
                </div>

                <div class="mt-2">
                    <div class="flex justify-between items-center">
                        <h1 class="text-lg font-bold">SSR vs CSR</h1>
                        <img src="/images/diagonal-arrow.png" class="w-3" />
                    </div>
                    <p class="mt-2 text-sm leading-6">Website တွေ Web Application တွေ ရေးကြရာမှာ အရင်ကဆိုရင် CSR
                        အတိုင်းရေးတာ
                        များပေမယ့် ...</p>
                    <div class="mt-3">
                        <div class="badge bg-sky-200 text-sky-800 py-3 me-2 mb-1">programming</div>
                    </div>
                </div>
            </div>
            <div>
                <img src="/images/blog1.jpg" class="w-full h-60 rounded object-cover" />

                <div class="flex items-center mt-5">
                    <span class="text-xs font-medium">Jan 15, 2024</span>
                    <img src="/images/dot.png" class="w-4 mx-1" />
                    <span class="text-sm font-medium">Ye Myint Soe</span>
                </div>

                <div class="mt-2">
                    <div class="flex justify-between items-center">
                        <h1 class="text-lg font-bold">SSR vs CSR</h1>
                        <img src="/images/diagonal-arrow.png" class="w-3" />
                    </div>
                    <p class="mt-2 text-sm leading-6">Website တွေ Web Application တွေ ရေးကြရာမှာ အရင်ကဆိုရင် CSR
                        အတိုင်းရေးတာ
                        များပေမယ့် ...</p>
                    <div class="mt-3">
                        <div class="badge bg-sky-200 text-sky-800 py-3 me-2 mb-1">programming</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const items = [
    {
        date: 'Jan 15, 2024',
        author: 'Ye Myint Soe',
        title: '20 PHP Array Functions You Must Know',
        description: 'ရှုပ်ထွေးလှတဲ့ Data တွေ Manipulate လုပ်ရတဲ့ Project တွေကို Core PHP နဲ့ ပဲရေးရေး၊ Laravel Framework နဲ့ပဲ ရေးရေး ...',
        tags: ['php', 'backend']
    },
    {
        date: 'Jan 15, 2024',
        author: 'Ye Myint Soe',
        title: '20 PHP Array Functions You Must Know',
        description: 'ရှုပ်ထွေးလှတဲ့ Data တွေ Manipulate လုပ်ရတဲ့ Project တွေကို Core PHP နဲ့ ပဲရေးရေး၊ Laravel Framework နဲ့ပဲ ရေးရေး ...',
        tags: ['php', 'backend']
    },
    {
        date: 'Jan 15, 2024',
        author: 'Ye Myint Soe',
        title: '20 PHP Array Functions You Must Know',
        description: 'ရှုပ်ထွေးလှတဲ့ Data တွေ Manipulate လုပ်ရတဲ့ Project တွေကို Core PHP နဲ့ ပဲရေးရေး၊ Laravel Framework နဲ့ပဲ ရေးရေး ...',
        tags: ['php', 'backend']
    },

];
</script>

<style lang="scss" scoped></style>