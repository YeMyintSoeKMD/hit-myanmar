<template>
    <div class="container mx-auto px-7 2xl:px-40 pt-32">
        <div class="flex justify-center">
            <div class="lg:w-2/3 w-full">
                <h1 class="text-2xl font-semibold">Higher Order Functions in JavaScript</h1>
                <div class="flex justify-between items-center mb-5">
                    <div class="flex items-center mt-5">
                        <img src="/images/yms.jpg" class="w-6 h-6 rounded-full me-2" />
                        <p class="text-sm text-gray-600"><span>Ye Myint Soe</span><span class="mx-2">|</span><span>Jan
                                15,
                                2024</span><span class="mx-2">|</span><span>5
                                minute
                                read</span></p>
                    </div>
                    <div class="flex">
                        <img src="/images/save.png" class="w-6 ms-4 cursor-pointer" />

                        <div class="dropdown cursor-pointer">
                            <img tabindex="0" src="/images/share.png" class="w-5 ms-4" />

                            <ul tabindex="0"
                                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a> <img src="/images/link.png" class="w-5 me-2" />
                                        <span class="text-sm">Copy Link</span></a></li>
                                <li><a> <img src="/images/facebook2.png" class="w-5 me-2" />
                                        <span class="text-sm">Share on Facebook</span></a></li>
                                <li><a> <img src="/images/linkedin1.png" class="w-5 me-2" />
                                        <span class="text-sm">Share on LinkedIn</span></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <img src="/images/blog.jpg" class="rounded w-full md:h-96 h-64 object-cover my-10" />
                <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos veniam alias ipsam
                    qui
                    corporis
                    mollitia consectetur delectus temporibus animi ullam adipisci, magnam harum totam nostrum
                    consequuntur
                    excepturi non nesciunt eius. Reprehenderit reiciendis sit consectetur voluptates ducimus architecto
                    quia
                    a expedita beatae amet esse mollitia deleniti vel nesciunt, quidem voluptatum est quam similique
                    labore
                    omnis perspiciatis consequuntur. Recusandae repudiandae laborum minima soluta officiis sit
                    voluptatibus
                    nihil. Dolor, laborum doloribus! Aliquid culpa, perferendis vitae nobis officiis quod modi possimus
                    amet
                    sint explicabo suscipit ducimus hic, cumque quasi labore quia ratione ad! Facilis incidunt quos
                    libero
                    architecto facere deserunt unde non sed?</p>
                <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos veniam alias ipsam
                    qui
                    corporis
                    mollitia consectetur delectus temporibus animi ullam adipisci, magnam harum totam nostrum
                    consequuntur
                    excepturi non nesciunt eius. Reprehenderit reiciendis sit consectetur voluptates ducimus architecto
                    quia
                    a expedita beatae amet esse mollitia deleniti vel nesciunt, quidem voluptatum est quam similique
                    labore
                    omnis perspiciatis consequuntur. Recusandae repudiandae laborum minima soluta officiis sit
                    voluptatibus
                    nihil. Dolor, laborum doloribus! Aliquid culpa, perferendis vitae nobis officiis quod modi possimus
                    amet
                    sint explicabo suscipit ducimus hic, cumque quasi labore quia ratione ad! Facilis incidunt quos
                    libero
                    architecto facere deserunt unde non sed?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos veniam alias ipsam qui corporis
                    mollitia consectetur delectus temporibus animi ullam adipisci, magnam harum totam nostrum
                    consequuntur
                    excepturi non nesciunt eius. Reprehenderit reiciendis sit consectetur voluptates ducimus architecto
                    quia
                    a expedita beatae amet esse mollitia deleniti vel nesciunt, quidem voluptatum est quam similique
                    labore
                    omnis perspiciatis consequuntur. Recusandae repudiandae laborum minima soluta officiis sit
                    voluptatibus
                    nihil. Dolor, laborum doloribus! Aliquid culpa, perferendis vitae nobis officiis quod modi possimus
                    amet
                    sint explicabo suscipit ducimus hic, cumque quasi labore quia ratione ad! Facilis incidunt quos
                    libero
                    architecto facere deserunt unde non sed?</p>

                <div class="mt-10">
                    <h2 class="font-medium mb-3">Leave Comment</h2>
                    <textarea placeholder="Write a comment..."
                        class="textarea textarea-bordered textarea-md w-full"></textarea>
                    <button class="btn btn-info h-10 min-h-0 text-white mt-1">Submit</button>
                </div>

                <div class="mt-10">
                    <h2 class="mb-5 font-medium">Comments (3)</h2>
                    <div class="mb-4">
                        <div class="flex items-start">
                            <div class="avatar me-2">
                                <div class="w-10 rounded-full">
                                    <img alt="Tailwind CSS chat bubble component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div class="chat-bubble bg-gray-100 text-gray-900">
                                <h3 class="font-semibold">Htet Nandar Bo</h3>
                                <p>It was said that you would, destroy the Sith, not join them.</p>
                            </div>
                        </div>
                        <div class="text-sm font-medium text-gray-600 ms-16 mt-1">
                            <span class="me-4">3 min</span>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="flex items-start">
                            <div class="avatar me-2">
                                <div class="w-10 rounded-full">
                                    <img alt="Tailwind CSS chat bubble component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div class="chat-bubble bg-gray-100 text-gray-900">
                                <h3 class="font-semibold">Htet Nandar Bo</h3>
                                <p>It was said that you would, destroy the Sith, not join them.</p>
                            </div>
                        </div>
                        <div class="text-sm font-medium text-gray-600 ms-16 mt-1">
                            <span class="me-4">3 min</span>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="flex items-start">
                            <div class="avatar me-2">
                                <div class="w-10 rounded-full">
                                    <img alt="Tailwind CSS chat bubble component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div class="chat-bubble bg-gray-100 text-gray-900">
                                <h3 class="font-semibold">Htet Nandar Bo</h3>
                                <p>It was said that you would, destroy the Sith, not join them.</p>
                            </div>
                        </div>
                        <div class="text-sm font-medium text-gray-600 ms-16 mt-1">
                            <span class="me-4">3 min</span>
                        </div>
                    </div>
                </div>

                <div class="mt-10">
                    <h1 class="font-medium mb-8 text-xl">Explore Related Posts</h1>
                    <div class="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10">
                        <div class="flex">
                            <img src="/images/blog1.jpg" class="w-28 rounded object-cover" />
                            <div class="ms-3">
                                <p class="font-medium">Lorem ipsum dolor, sit amet abdcafie consectetur adipisicing
                                    elit.
                                </p>
                                <div class="flex items-center text-gray-500 mt-1">
                                    <span class="text-xs font-medium">Jan 15, 2024</span>
                                    <img src="/images/dot.png" class="w-4 mx-1" />
                                    <span class="text-sm font-medium">Ye Myint Soe</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <img src="/images/blog1.jpg" class="w-28 rounded object-cover" />
                            <div class="ms-3">
                                <p class="font-medium">Lorem ipsum dolor, sit amet abdcafie consectetur adipisicing
                                    elit.
                                </p>
                                <div class="flex items-center text-gray-500 mt-1">
                                    <span class="text-xs font-medium">Jan 15, 2024</span>
                                    <img src="/images/dot.png" class="w-4 mx-1" />
                                    <span class="text-sm font-medium">Ye Myint Soe</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <img src="/images/blog1.jpg" class="w-28 rounded object-cover" />
                            <div class="ms-3">
                                <p class="font-medium">Lorem ipsum dolor, sit amet abdcafie consectetur adipisicing
                                    elit.
                                </p>
                                <div class="flex items-center text-gray-500 mt-1">
                                    <span class="text-xs font-medium">Jan 15, 2024</span>
                                    <img src="/images/dot.png" class="w-4 mx-1" />
                                    <span class="text-sm font-medium">Ye Myint Soe</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <img src="/images/blog1.jpg" class="w-28 rounded object-cover" />
                            <div class="ms-3">
                                <p class="font-medium">Lorem ipsum dolor, sit amet abdcafie consectetur adipisicing
                                    elit.
                                </p>
                                <div class="flex items-center text-gray-500 mt-1">
                                    <span class="text-xs font-medium">Jan 15, 2024</span>
                                    <img src="/images/dot.png" class="w-4 mx-1" />
                                    <span class="text-sm font-medium">Ye Myint Soe</span>
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

</script>

<style lang="scss" scoped></style>