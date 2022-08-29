<template>
  <div>
    <div v-if="!$route.params.index" class="flex justify-between min-w-full py-8">
      <div>
        <nav
          class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
          aria-label="Tabs"
        >
          <div
            class="
              rounded-l-lg
              group
              relative
              flex-1
              overflow-hidden
              min-w-0
              py-2
              px-4
              text-sm
              font-medium
              text-center
              focus:z-10
              uppercase
              cursor-pointer
              w-96
            "
            aria-current="page"
            :class="
              isActive === 'dashboard'
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'hover:bg-blue-50 text-blue-600 hover:text-blue-700'
            "
            @click="changeNav('dashboard')"
          >
            <span>DASHBOARD</span>
          </div>
          <div
            class="
              group
              relative
              min-w-0
              flex-1
              overflow-hidden
              py-2
              px-4
              text-sm
              font-medium
              text-center
              focus:z-10
              uppercase
              cursor-pointer
            "
            aria-current="page"
            :class="
              isActive === 'sponsors'
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'hover:bg-blue-50 text-blue-600 hover:text-blue-700'
            "
            @click="changeNav('sponsors')"
          >
            <span>HOMIYLAR</span>
          </div>

          <div
            class="
              group
              relative
              rounded-r-lg
              min-w-0
              flex-1
              overflow-hidden
              py-2
              px-4
              text-sm
              font-medium
              text-center
              focus:z-10
              uppercase
              cursor-pointer
            "
            :class="
              isActive === 'students'
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'hover:bg-blue-50 text-blue-600 hover:text-blue-700'
            "
            @click="changeNav('students')"
          >
            <span>TALABALAR</span>
          </div>
        </nav>
      </div>
      <div class="flex rounded-md">
        <div class="relative flex items-stretch flex-grow focus-within:z-10">
          <div
            class="
              absolute
              inset-y-0
              left-0
              pl-3
              flex
              items-center
              pointer-events-none
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
            >
              <path
                d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
              ></path>
            </svg>
          </div>
          <input
            name="filter"
            id="filter"
            class="
              focus:ring-blue-500 focus:border-blue-500
              bg-gray-200
              block
              w-full
              rounded-md
              pl-10
              sm:text-sm
              border-gray-300
            "
            placeholder="Izlash"
          />
        </div>
        <button
          type="button"
          class="
            ml-4
            inline-flex
            items-center
            px-4
            py-2
            border border-blue-300
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-blue-700
            hover:bg-blue-100
            bg-blue-50
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-blue-500
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-blue-700 mr-2"
            stroke-width="0.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"
            ></path>
          </svg>
          Filter
        </button>
      </div>
    </div>
    <div class="">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonitoringView',
  components: {},
  data () {
    return {
      isActive: 'sponsors'
    }
  },
  created () {
    if (this.$route.path.includes(this.isActive) < 1) {
      this.$router.push({
        name: this.isActive
      })
    }
  },
  methods: {
    changeNav (status) {
      this.isActive = status
      if (this.$route.path.includes(this.isActive) < 1) {
        this.$router.push({
          name: this.isActive
        })
      }
    }
  }
}
</script>
