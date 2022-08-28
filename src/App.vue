<template>
  <div id="app" class="max-w-7xl mx-auto">
    <div v-if="$route.path.includes('sign-in') < 1" id="header">
      <div class="relative bg-white">
        <div class="px-4 sm:px-6">
          <div
            class="
              flex
              justify-between
              items-center
              py-6
              md:justify-start md:space-x-10
            "
          >
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <img
                  class="h-8 w-auto sm:h-10"
                  src="https://club.metsenat.uz/img/new-logo.svg"
                  alt=""
                />
              </a>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                class="
                  bg-white
                  rounded-md
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-gray-500 hover:bg-gray-100
                  focus:outline-none
                  focus:ring-2
                  focus:ring-inset
                  focus:ring-blue-500
                "
                aria-expanded="false"
              >
                <span class="sr-only">Open menu</span>
                <!-- Heroicon name: outline/menu -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div
              class="hidden md:flex items-center justify-end md:flex-1 lg:w-0"
            >
              <nav class="hidden md:flex space-x-10">
                <a
                  href="#"
                  class="
                    text-base
                    font-medium
                    text-gray-500
                    hover:text-gray-900
                  "
                >
                  Asosiy
                </a>
                <a
                  href="#"
                  class="
                    text-base
                    font-medium
                    text-gray-500
                    hover:text-gray-900
                  "
                >
                  Grantlar
                </a>
                <a
                  href="#"
                  class="
                    text-base
                    font-medium
                    text-gray-500
                    hover:text-gray-900
                  "
                >
                  Soliq imtiyozlari
                </a>
                <router-link
                  to="/sign-in"
                  class="
                    text-base
                    font-medium
                    text-gray-500
                    hover:text-gray-900
                  "
                >
                  Kirish
                </router-link>
              </nav>
              <button
                class="
                  ml-8
                  whitespace-nowrap
                  inline-flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  border border-transparent
                  rounded-md
                  shadow-sm
                  text-base
                  font-medium
                  text-blue-600
                  border-blue-600
                  hover:border-blue-700 hover:text-blue-700
                "
              >
                Ro'yxatdan o'tish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
@import "@/assets/css/main.css";
</style>
