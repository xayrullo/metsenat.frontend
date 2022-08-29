<template>
  <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <div>
      <p class="text-sm text-gray-700">
        <span class="font-medium">{{ total }}</span>
        tadan
        <span class="font-medium">{{ start }}</span>
        -
        <span class="font-medium">{{ end }}</span>
        ko'rsatilmoqda
      </p>
    </div>
    <div>
      <nav
        v-if="count <= 7"
        class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <a
          class="
            relative
            cursor-pointer
            inline-flex
            items-center
            rounded-l-md
            border border-gray-300
            bg-white
            px-2
            py-2
            text-sm
            font-medium
            text-gray-500
            hover:bg-gray-50
          "
          @click="previousPage"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          v-for="(num, ind) in count"
          :key="ind"
          aria-current="page"
          class="
            relative
            cursor-pointer
            z-10
            inline-flex
            items-center
            border
            px-4
            py-2
            text-sm
            font-medium
          "
          :class="
            page === num
              ? 'border-blue-500 bg-blue-50 text-blue-600'
              : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
          "
          @click="$emit('onChange', { page: num, size: size })"
          >{{ num }}</a
        >
        <a
          class="
            relative
            cursor-pointer
            inline-flex
            items-center
            rounded-r-md
            border border-gray-300
            bg-white
            px-2
            py-2
            text-sm
            font-medium
            text-gray-500
            hover:bg-gray-50
          "
          @click="nextPage"
        >
          <span class="sr-only">Next</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </nav>
      <nav
        v-else
        class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <a
          class="
            relative
            cursor-pointer
            inline-flex
            items-center
            rounded-l-md
            border border-gray-300
            bg-white
            px-2
            py-2
            text-sm
            font-medium
            text-gray-500
            hover:bg-gray-50
          "
          @click="previousPage"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          v-if="beginningPages.first > 1"
          aria-current="page"
          class="
            relative
            cursor-pointer
            z-10
            inline-flex
            items-center
            border
            px-4
            py-2
            text-sm
            font-medium
          "
          :class="
            page === 1
              ? 'border-blue-500 bg-blue-50 text-blue-600'
              : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
          "
          @click="$emit('onChange', { page: 1, size: size })"
          >1</a
        >
        <span
          v-if="beginningPages.first > 2"
          class="
            relative
            inline-flex
            items-center
            border border-gray-300
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            text-gray-700
          "
          >...</span
        >
        <a
          class="
            relative
            cursor-pointer
            inline-flex
            items-center
            border
            px-4
            py-2
            text-sm
            font-medium
          "
          :class="
            page === beginningPages.first
              ? 'border-blue-500 bg-blue-50 text-blue-600'
              : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
          "
          @click="changePage(beginningPages.first)"
          >{{ beginningPages.first }}</a
        >
        <a
          class="
            relative
            cursor-pointer
            hidden
            items-center
            border
            px-4
            py-2
            text-sm
            font-medium
            md:inline-flex
          "
          :class="
            page === beginningPages.second
              ? 'border-blue-500 bg-blue-50 text-blue-600'
              : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
          "
          @click="changePage(beginningPages.second)"
          >{{ beginningPages.second }}</a
        >
        <a
          class="
            relative
            cursor-pointer
            hidden
            items-center
            border
            px-4
            py-2
            text-sm
            font-medium
            md:inline-flex
          "
          :class="
            page === beginningPages.third
              ? 'border-blue-500 bg-blue-50 text-blue-600'
              : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
          "
          @click="changePage(beginningPages.third)"
          >{{ beginningPages.third }}</a
        >
        <span
          v-if="beginningPages.third < count"
          class="
            relative
            inline-flex
            items-center
            border border-gray-300
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            text-gray-700
          "
          >...</span
        >
        <a
          v-if="beginningPages.third < count"
          class="
            cursor-pointer
            relative
            inline-flex
            items-center
            border
            px-4
            py-2
            text-sm
            font-medium
          "
          :class="
            page === count
              ? 'border-blue-500 bg-blue-50 text-blue-600'
              : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
          "
          @click="changePage(count)"
          >{{ count }}</a
        >
        <a
          class="
            cursor-pointer
            relative
            inline-flex
            items-center
            rounded-r-md
            border border-gray-300
            bg-white
            px-2
            py-2
            text-sm
            font-medium
            text-gray-500
            hover:bg-gray-50
          "
          @click="nextPage"
        >
          <span class="sr-only">Next</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PaginationComponent',
  props: {
    total: Number,
    start: Number,
    end: Number,
    page: Number,
    size: Number,
    count: Number
  },
  data () {
    return {
      beginningPages: {
        first: 2,
        second: 3,
        third: 4
      }
    }
  },
  methods: {
    changePage (page) {
      if (page === this.count) {
        this.beginningPages.first = page - 2
        this.beginningPages.second = page - 1
        this.beginningPages.third = page
      } else if (page === 1) {
        this.beginningPages.first = page
        this.beginningPages.second = page + 1
        this.beginningPages.third = page + 2
      } else {
        this.beginningPages.first = page - 1
        this.beginningPages.second = page
        this.beginningPages.third = page + 1
      }
      this.$emit('onChange', { page: page, size: this.size })
    },
    previousPage () {
      if (this.page - 1 >= 1) { this.changePage(this.page - 1) }
    },
    nextPage () {
      if (this.page + 1 <= this.pageCount) { this.changePage(this.page + 1) }
    }
  }
}
</script>
