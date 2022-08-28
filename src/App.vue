<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <div>
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
                v-if="isToken"
                class="hidden md:flex items-center justify-end md:flex-1 lg:w-0"
              >
                <div class="flex rounded-md shadow-sm">
                  <div
                    class="
                      relative
                      flex
                      items-stretch
                      flex-grow
                      focus-within:z-10
                    "
                  >
                    <input
                      name="name"
                      id="name"
                      readonly
                      value="Shohrux"
                      class="
                        focus:ring-blue-500 focus:border-blue-500
                        block
                        w-full
                        rounded-none rounded-l-md
                        pl-10
                        sm:text-sm
                        border-gray-300
                      "
                    />
                  </div>
                  <button
                    type="button"
                    class="
                      -ml-px
                      relative
                      inline-flex
                      items-center
                      space-x-2
                      px-4
                      py-2
                      border border-gray-300
                      text-sm
                      font-medium
                      rounded-r-md
                      text-gray-700
                      bg-gray-50
                      hover:bg-gray-100
                      focus:outline-none
                      focus:ring-1
                      focus:ring-blue-500
                      focus:border-blue-500
                    "
                  >
                    <svg
                      class="w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <button
                  type="button"
                  class="
                    ml-4
                    relative
                    inline-flex
                    items-center
                    space-x-2
                    px-4
                    py-2
                    border border-gray-300
                    text-sm
                    font-medium
                    rounded-r-md rounded-l-md
                    text-gray-700
                    bg-gray-50
                    hover:bg-gray-100
                    focus:outline-none
                    focus:ring-1
                    focus:ring-blue-500
                    focus:border-blue-500
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                  >
                    <path
                      d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"
                    ></path>
                    <path d="m11 16 5-4-5-4v3.001H3v2h8z"></path>
                  </svg>
                </button>
              </div>
              <div
                v-else
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
      <router-view class="max-w-7xl mx-auto"/>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isToken: true
    }
  }
}
</script>
<style>
@import "@/assets/css/main.css";
</style>
