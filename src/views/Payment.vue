<template>
    <div class="container mx-auto px-7 2xl:px-40 pt-32">
        <div class="xl:h-4/5 flex items-center justify-center">
            <div class="grid lg:grid-cols-2">

                <div class="lg:pe-20">
                    <router-link :to="{ name: 'coursedetail' }">
                        <div class="flex items-center cursor-pointer">
                            <img src="/images/back-arrow.png" class="w-5" />
                            <p class="font-medium ms-1">
                                Back
                            </p>
                        </div>
                    </router-link>


                    <div class="card bg-info text-white mt-16 shadow-sm">
                        <div class="card-body">
                            <h2 class="card-title font-bold">Professional Fullstack Developer</h2>
                            <p class="font-medium">180000 MMK</p>
                        </div>
                    </div>

                    <div class="mt-10 flex items-start">
                        <img src="/images/dot.png" class="w-12" />
                        <p class="leading-loose font-semibold text-lg">
                            ငွေလွှဲပြီးသွားပြီဆိုရင်တော့ “ငွေလွှဲပြေစာ မှတဆင့် ငွေလွှဲထားတဲ့ Screen Shoot လေးကို”
                            ထည့်သွင်း၍ ပေးပို့အတည်ပြုနိုင်ပါတယ်။ အကူညီလိုအပ်ပါက 09794461888 သို့ ဆက်သွယ်နိုင်ပါသည်။
                            (Office Hour: 9:00 AM to 8:00 PM)
                        </p>
                    </div>

                </div>

                <div>
                    <p class="font-semibold text-xl">‌ငွေလွှဲပြေစာ ထည့်ရန်</p>

                    <div class="mt-10">
                        <input type="file" class="hidden" ref="fileInput" @change="handleFileSelect">
                        <div v-if="!imageUrl" @click="triggerFileInput"
                            class="cursor-pointer border-dashed border-2 border-info py-10 rounded-md flex flex-col items-center">
                            <img src="/images/gallery.png" class="w-6 mb-3" />
                            <p>Upload your bank slip here</p>
                        </div>

                        <div v-show="imageUrl" class="flex items-end justify-center">
                            <img :src="imageUrl" class="w-60" />
                            <button class="btn btn-error btn-sm text-white ms-10" @click="deleteImage">Delete</button>
                        </div>

                    </div>

                    <div class="mt-10">
                        <p class="font-semibold text-xl">ငွေလွှဲထားသော ဘဏ်ရွေးရန်</p>

                        <div class="flex flex-wrap gap-3 mt-7">

                            <label class="cursor-pointer md:w-64 w-full">
                                <input type="radio" class="peer sr-only" id="kPay" value="kPay" name="payment" />
                                <div for="kPay"
                                    class="md:w-64 w-full max-w-xl rounded-md bg-white px-3 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                                    <div class="flex flex-col gap-1">
                                        <div class="card card-side bg-base-100">
                                            <figure><img src="/images/kpay.png" alt="Movie" class="w-16" /></figure>
                                            <div class="card-body p-5 gap-0">
                                                <h2 class="card-title">Ye Myint Soe</h2>
                                                <p>(09403438913)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label class="cursor-pointer md:w-64 w-full">
                                <input type="radio" class="peer sr-only" id="kPay" value="kPay" name="payment" />
                                <div for="kPay"
                                    class="md:w-64 w-full max-w-xl rounded-md bg-white px-3 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                                    <div class="flex flex-col gap-1">
                                        <div class="card card-side bg-base-100">
                                            <figure><img src="/images/wavepay.png" alt="Movie" class="w-16" />
                                            </figure>
                                            <div class="card-body p-5 gap-0">
                                                <h2 class="card-title">Ye Myint Soe</h2>
                                                <p>(09403438913)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label class="cursor-pointer md:w-64 w-full">
                                <input type="radio" class="peer sr-only" id="kPay" value="kPay" name="payment" />
                                <div for="kPay"
                                    class="md:w-64 w-full max-w-xl rounded-md bg-white px-3 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                                    <div class="flex flex-col gap-1">
                                        <div class="card card-side bg-base-100">
                                            <figure><img src="/images/ayapay.png" alt="Movie" class="w-16" />
                                            </figure>
                                            <div class="card-body p-5 gap-0">
                                                <h2 class="card-title">Ye Myint Soe</h2>
                                                <p>(09403438913)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>

                        <div class="mt-7">
                            <button class="btn btn-info w-full text-white text-xl font-bold">Purchase Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

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

const deleteImage = () => {
    imageUrl.value = null;
};


</script>

<style lang="scss" scoped></style>