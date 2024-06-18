<template>
  <div>
    <div class="flex min-h-full flex-col justify-center px-6 sm:pt-24 pt-14 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>

      <div
        class="mt-10 sm:mx-auto sm:w-full sm:max-w-max shadow-md p-4 sm:p-14 bg-white rounded-md"
      >
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block font-medium leading-6 text-gray-900"
              >Email</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-info sm:text-sm sm:leading-6 focus:outline-none indent-4"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block font-medium leading-6 text-gray-900"
                >Password</label
              >
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-info focus:outline-none sm:text-sm sm:leading-6 indent-4"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input type="checkbox" class="checkbox me-3 w-5 h-5 rounded-md" />
              <label for="remember" class="text-sm leading-6 text-gray-900"
                >Remember me</label
              >
            </div>
            <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-sm text-indigo-600 hover:text-indigo-500"
                >Forgot password?</a
              >
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="btn btn-info w-full min-h-10 h-10 rounded-md text-white font-medium text-base"
            >
              Sign In
            </button>
          </div>
        </form>

        <div class="mt-10 text-center text-sm text-gray-700">
          <div class="divider font-medium">Or continue with</div>
        </div>

        <div class="flex sm:flex-wrap justify-between">
          <button
            class="btn bg-white flex border w-49 sm:max-w-max sm:px-12 py-2 rounded-md sm:me-3 mb-3 sm:mb-0"
          >
            <img src="/images/google.png" class="w-6 h-6 me-4" />
            <p class="font-medium sm:block hidden">Google</p>
          </button>

          <button
            class="btn bg-white flex border w-49 sm:max-w-max sm:px-12 sm:py-2 rounded-md"
          >
            <img src="/images/github2.png" class="w-6 h-6 me-4" />
            <p class="font-medium sm:block hidden">Github</p>
          </button>
        </div>
      </div>

      <div>
        <p class="mt-8 text-center text-sm text-gray-500">
          Don't have an account?
          <router-link
            :to="{ name: 'signup' }"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >Sign up</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
