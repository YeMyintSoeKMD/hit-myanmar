<template>
    <div class="col-span-4">
        <h1 class="text-2xl font-bold">Public profile</h1>

        <div class="mt-14">
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
                <div class="border py-5">
                    <div v-show="!imageUrl">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            class="w-60 m-auto" />
                    </div>
                    <div v-show="imageUrl">
                        <img :src="imageUrl" class="w-60 m-auto" />
                    </div>
                    <input type="file" class="hidden" ref="fileInput" @change="handleFileSelect">
                    <div @click="triggerFileInput" class="w-32 cursor-pointer m-auto">
                        <p
                            class="py-2 px-4 rounded-md text-sm font-semibold bg-orange-50 text-orange-600 hover:bg-orange-100 mt-5">
                            Change Image</p>
                    </div>
                </div>
            </div>

            <div class="form-control">
                <label class="cursor-pointer label justify-start">
                    <input type="checkbox" class="checkbox checkbox-info" v-model="showPasswordFields" />
                    <span class="label-text ms-3">Change Password</span>
                </label>

                <transition name="fade">
                    <div v-if="showPasswordFields" class="flex flex-col mt-4">
                        <input type="password" placeholder="Type your old password"
                            class="input input-bordered w-full mb-4" />
                        <input type="password" placeholder="Type your new password"
                            class="input input-bordered w-full mb-4" />
                        <button
                            class="w-20 py-2 rounded-md text-sm font-semibold bg-orange-50 text-orange-600 hover:bg-orange-100 mt-5">Update</button>
                    </div>
                </transition>
            </div>

            <div class="mt-8">
                <button class="btn btn-info text-white text-lg px-10">Save</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const fileInput = ref();
const imageUrl = ref();

const triggerFileInput = () => {
    if (fileInput.value) {
        fileInput.value.click();
    }
};

const handleFileSelect = (event) => {

    const selectedFile = event.target.files[0];

    if (selectedFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imageUrl.value = e.target.result;
        };
        reader.readAsDataURL(selectedFile);
    }
};

const showPasswordFields = ref(false);


watchEffect(() => {
    if (showPasswordFields.value) {
        showPasswordFields.value = true;
    }
});


</script>

<style scoped>
.fade-enter-from {
    opacity: 0;
    transform: translateY(-50px);
}

.fade-enter-active {
    transition: all 0.3s;
}

.fade-leave-active {
    transition: all 0.3s;
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(-50px);
}
</style>