<template>
    <div class="col-span-4">
        <h1 class="text-2xl font-bold">Public profile</h1>

        <div class="mt-16">
            <div class="flex flex-col mb-4">
                <label class="text-lg font-medium mb-2">Full Name</label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full" value="Htet Nandar Bo" />
            </div>

            <div class="flex flex-col mb-4">
                <label class="text-lg font-medium mb-2">Email</label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full"
                    value="htetnandarbo8@gmail.com" />
            </div>

            <div class="flex flex-col mb-4">
                <label class="text-lg font-medium mb-2">Image Preview</label>
                <div class="border">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        class="w-60 py-5 m-auto" />
                </div>
            </div>

            <div class="flex flex-col mb-4">
                <label class="text-lg font-medium mb-2">Change Image</label>
                <input type="file"
                    class="file-input file-input-bordered w-full file:bg-white file:text-gray-700 file:border-0 file:border-r file:border-inherit hover:file:bg-violet-100" />
            </div>

            <div class="mt-8">
                <button class="btn btn-info text-white text-lg px-10">Save</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>