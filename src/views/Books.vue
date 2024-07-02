<template>
    <div class="container mx-auto px-8 2xl:px-40 pt-32">
        <div class="grid lg:grid-cols-2 flex items-center">
            <div class="xl:pe-24 lg:pe-5 lg:m-0 mt-12">
                <h1 class="mint xl:text-5xl lg:text-4xl md:text-5xl sm:text-4xl text-3xl tracking-widest">Happy Reading,</h1>
                <h1 class="xl:text-5xl lg:text-4xl md:text-5xl sm:text-4xl text-3xl tracking-wide mt-4 mint">Dar Dar</h1>
                <p class="mt-8 leading-relaxed xl:text-base lg:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, nam,
                    debitis quo sed neque eligendi hic, omnis optio est qui aut fugit quam. Eius voluptatum, minus
                    officia ut nesciunt temporibus?</p>
                <button class="btn rounded-md bg-rose-500 text-white mt-6 flex items-center">
                    <span>Start Reading</span>
                    <svg id="SvgjsSvg1011" width="11" height="11" xmlns="http://www.w3.org/2000/svg" version="1.1"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs">
                        <defs id="SvgjsDefs1012"></defs>
                        <g id="SvgjsG1013"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12" width="11"
                                height="11">
                                <path fill="none" fill-rule="evenodd" stroke="#ffffff" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" d="M1 13 13 1M4 1h9v9"
                                    class="colorStroke000 svgStroke"></path>
                            </svg></g>
                    </svg>
                </button>
            </div>
            <div class="lg:order-last order-first">
                <img src="/images/bookhero.jpg" class="lg:m-0 xl:w-full lg:w-11/12 md:w-3/5 w-11/12 mx-auto object-cover" />
            </div>
        </div>

        <div class="pt-32">
            <div class="grid xl:grid-cols-2 gap-2">

                <div v-for="book in books" :key="book.id" class="grid lg:grid-cols-5 md:grid-cols-3 card card-side bg-base-100 border">
                    <figure class="xl:col-span-2 md:m-0 md:w-full md:shadow-none md:rounded-2xl md:rounded-tr-none md:rounded-br-none my-8 w-4/12 mx-auto shadow-lg rounded">
                        <img :src="book.imageUrl" alt="Book" class="h-full md:border-r" />
                    </figure>
                    <div class="lg:col-span-3 md:col-span-2 card-body gap-0">
                        <h2 class="card-title text-xl">{{ book.title }}</h2>
                        <h4 class="text-sm mt-1">By <span class="text-rose-500 font-semibold">{{ book.author }}</span>
                        </h4>
                        <p class="mt-5 leading-relaxed text-sm text-gray-700">{{ book.description }}</p>
                        <div class="mt-4 flex flex-wrap gap-2">
                            <div v-for="cat in book.category"
                                class="badge bg-teal-100 rounded-md p-3 text-teal-700">{{ cat }}</div>
                        </div>
                        <!-- <p class="text-gray-500 mt-6 text-sm">Type : <span class="font-semibold text-rose-500">{{
                            book.type }}</span></p> -->
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup>
const books = [{
    id: 1,
    title: 'Pinia - State Management Solution for Vue.js',
    author: 'Ye Myint Soe',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe, eaque atque ipsum inventore eius doloribus, possimus optio dicta reprehenderit aperiam aspernatur explicabo minima iste! Officiis corrupti ipsum ullam accusantium?',
    imageUrl: '/images/book.jpg',
    category: ['Web Development', 'Mini Book'],
    type: 'Mini book',

},
{
    id: 2,
    title: 'Pinia',
    author: 'Ye Myint Soe',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe, eaque atque ipsum inventore eius doloribus, possimus optio dicta reprehenderit aperiam aspernatur explicabo minima iste! Officiis corrupti ipsum ullam accusantium?',
    imageUrl: '/images/book.jpg',
    category: ['vue', 'frontend'],
    type: 'Mini book',

},
{
    id: 3,
    title: 'Pinia',
    author: 'Ye Myint Soe',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe, eaque atque ipsum inventore eius doloribus, possimus optio dicta reprehenderit aperiam aspernatur explicabo minima iste! Officiis corrupti ipsum ullam accusantium?',
    imageUrl: '/images/book.jpg',
    category: ['vue', 'frontend'],
    type: 'Mini book',

},
{
    id: 1,
    title: 'Pinia',
    author: 'Ye Myint Soe',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe, eaque atque ipsum inventore eius doloribus, possimus optio dicta reprehenderit aperiam aspernatur explicabo minima iste! Officiis corrupti ipsum ullam accusantium?',
    imageUrl: '/images/book.jpg',
    category: ['vue', 'frontend'],
    type: 'Mini book',

}
];
</script>

<style></style>