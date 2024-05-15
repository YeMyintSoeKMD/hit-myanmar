<template>

    <div class="col-span-4 shadow-sm rounded-xl pt-10">
        <div class="flex sm:flex-row flex-col sm:justify-between mb-10">
            <div class="flex items-center">
                <h1 class="text-2xl font-semibold">Notifications</h1>
                <span
                    class="bg-orange-50 text-orange-600 h-5 w-5 rounded flex justify-center items-center ms-3">4</span>
            </div>

            <div class="flex items-center sm:mt-0 mt-4">
                <img src="/images/done.png" class="w-5" />
                <p class="text-blue-600 ms-1 font-medium text-sm">Mark all as read</p>
            </div>
        </div>

        <div class="flex ps-5 py-4 mb-1">
            <div class="w-10">
                <div class="bg-orange-50 w-10 h-10 rounded-full flex justify-center items-center">
                    <img src="/images/notification1.png" class="w-8 h-8" />
                </div>
            </div>
            <div class="ms-5">
                <div class="flex items-start">
                    <p class="mb-1 basis-11/12 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam, sit Lorem
                        ipsum dolor sit
                        amet, consectetur adipisicing elit Lorem ipsum dolor sit netur esse neque lorem...</p>
                    <div class="basis-1/12 flex justify-end">

                    </div>
                </div>
                <span class="text-sm text-orange-600">1 hour ago</span>
            </div>
        </div>

        <div class="flex bg-sky-10 ps-5 py-4 mb-1" onclick="my_modal_2.showModal()">
            <div class="w-10">
                <div class="bg-orange-50 w-10 h-10 rounded-full flex justify-center items-center">
                    <img src="/images/notification1.png" class="w-8 h-8" />
                </div>
            </div>
            <div class="ms-5">
                <div class="flex items-start">
                    <p class="mb-1 basis-11/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit Lorem
                        ipsum dolor sit
                        amet, consectetur adipisicing elit Lorem ipsum dolor sit netur esse neque lorem...</p>
                    <div class="basis-1/12 flex justify-end">
                        <img src="/images/dot3.png" class="w-14 -mt-3.5" />
                    </div>
                </div>
                <span class="text-sm text-orange-600">1 hour ago</span>
            </div>
        </div>

        <div class="flex bg-sky-10 ps-5 py-4 mb-1">
            <div class="w-10">
                <div class="bg-orange-50 w-10 h-10 rounded-full flex justify-center items-center">
                    <img src="/images/notification1.png" class="w-8 h-8" />
                </div>
            </div>
            <div class="ms-5">
                <div class="flex items-start">
                    <p class="mb-1 basis-11/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit Lorem
                        ipsum dolor sit
                        amet, consectetur adipisicing elit Lorem ipsum dolor sit netur esse neque lorem...</p>
                    <div class="basis-1/12 flex justify-end">
                        <img src="/images/dot3.png" class="w-14 -mt-3.5" />
                    </div>
                </div>
                <span class="text-sm text-orange-600">1 hour ago</span>
            </div>
        </div>

        <div class="flex bg-sky-10 ps-5 py-4 mb-1">
            <div class="w-10">
                <div class="bg-orange-50 w-10 h-10 rounded-full flex justify-center items-center">
                    <img src="/images/notification1.png" class="w-8 h-8" />
                </div>
            </div>
            <div class="ms-5">
                <div class="flex items-start">
                    <p class="mb-1 basis-11/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit Lorem
                        ipsum dolor sit
                        amet, consectetur adipisicing elit Lorem ipsum dolor sit netur esse neque lorem...</p>
                    <div class="basis-1/12 flex justify-end">
                        <img src="/images/dot3.png" class="w-14 -mt-3.5" />
                    </div>
                </div>
                <span class="text-sm text-orange-600">1 hour ago</span>
            </div>
        </div>

        <div class="flex bg-sky-10 ps-5 py-4 mb-1">
            <div class="w-10">
                <div class="bg-orange-50 w-10 h-10 rounded-full flex justify-center items-center">
                    <img src="/images/notification1.png" class="w-8 h-8" />
                </div>
            </div>
            <div class="ms-5">
                <div class="flex items-start">
                    <p class="mb-1 basis-11/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit Lorem
                        ipsum dolor sit
                        amet, consectetur adipisicing elit Lorem ipsum dolor sit netur esse neque lorem...</p>
                    <div class="basis-1/12 flex justify-end">
                        <img src="/images/dot3.png" class="w-14 -mt-3.5" />
                    </div>
                </div>
                <span class="text-sm text-orange-600">1 hour ago</span>
            </div>
        </div>

        <div>
            <dialog id="my_modal_2" class="modal">
                <div class="modal-box md:w-9/12 w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg mb-1">You have 1 new message</h3>
                    <div class="flex py-4 mb-1">
            <div class="w-10">
                <div class="bg-orange-50 w-10 h-10 rounded-full flex justify-center items-center">
                    <img src="/images/notification1.png" class="w-8 h-8" />
                </div>
            </div>
            <div class="ms-5">
                <div class="flex items-start">
                    <p class="mb-1 basis-11/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit Lorem
                        ipsum dolor sit
                        amet, consectetur adipisicing elit Lorem ipsum dolor sit netur esse neque lorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consectetur enim labore, aliquid deleniti cumque blanditiis porro quasi laudantium iste, animi magnam minima. Deleniti temporibus excepturi quia delectus nesciunt maiores?</p>
                </div>
                <span class="text-sm text-orange-600">1 hour ago</span>
            </div>
        </div>
                </div>
                <form method="dialog" class="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>





    </div>

</template>

<script setup>

</script>

<style lang="scss" scoped></style>