<template>
    <div class="container mx-auto px-8 2xl:px-40 pt-32">
        <div class="grid lg:grid-cols-5 grid-cols-1">
            <div class="hidden lg:block">
                <div class="avatar">
                    <div class="w-28 rounded-full ring-neutral-200 ring-1 ring-offset-4">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>

                <h2 class="font-semibold text-xl mt-1">Htet Nandar Bo</h2>

                <ul class="menu w-56 rounded-box px-0 mt-5">
                    <li class="py-2">
                        <router-link :to="{ name: 'profileCourses' }" class="px-2">
                            <img src="/images/graduation.png" class="w-6 me-1" />
                            My Courses
                        </router-link>
                    </li>
                    <li class="py-2">
                        <router-link :to="{ name: 'profileCertificates' }" class="px-2">
                            <img src="/images/profile-certificate.png" class="w-6 me-1" />
                            Certificates
                        </router-link>
                    </li>
                    <li class="py-2">
                        <router-link :to="{ name: 'profileEdit' }" class="px-2">
                            <img src="/images/profile.png" class="w-6 me-1" />
                            Edit Profile
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'profileMessages' }" class="px-2 py-4">
                            <img src="/images/messages.png" class="!w-6 me-1" />
                            Messages
                        </router-link>
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

            <div class="block lg:hidden flex items-center mb-10">
                <div class="avatar" @click="toggleMenu">
                    <div class="w-14 rounded-full cursor-pointer">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>

                    <ul class="menu bg-white shadow-lg w-56 p-0 [&_li>*]:rounded-none absolute top-16 z-10"
                        :class="{ 'hidden': !menuVisible }">
                        <li>
                            <router-link :to="{ name: 'profileCourses' }" class="px-2 py-4">
                                <img src="/images/graduation.png" class="!w-6 me-1" />
                                My Courses
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'profileCertificates' }" class="px-2 py-4">
                                <img src="/images/profile-certificate.png" class="!w-6 me-1" />
                                Certificates
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'profileEdit' }" class="px-2 py-4">
                                <img src="/images/profile.png" class="!w-6 me-1" />
                                Edit Profile
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'profileMessages' }" class="px-2 py-4">
                                <img src="/images/profile.png" class="!w-6 me-1" />
                                Messages
                            </router-link>
                        </li>
                        <li>
                            <a class="px-2 py-4">
                                <img src="/images/setting.png" class="!w-6 me-1" />
                                Setting
                            </a>
                        </li>
                        <li>
                            <a class="px-2 py-4">
                                <img src="/images/logout.png" class="!w-6 me-1" />
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="font-semibold text-xl mt-1 ms-2">Htet Nandar Bo</h2>
                </div>
            </div>

            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const menuVisible = ref(false);
const toggleMenu = () => {
    menuVisible.value = !menuVisible.value;
}
</script>

<style lang="scss" scoped></style>