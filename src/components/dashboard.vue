<template>
  <div>
    <div>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div
          class="
            relative
            rounded-lg
            border border-gray-300
            bg-white
            px-6
            py-5
            shadow-sm
            flex
            items-center
            space-x-3
            hover:border-gray-400
          "
        >
          <div class="flex-shrink-0 bg-blue-50 rounded-md">
            <i class="bx bx-money text-blue-600 text-3xl py-1 px-2"></i>
          </div>
          <div class="flex-1 min-w-0">
            <a href="#" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true"></span>
              <p class="text-sm text-gray-500 truncate">Jami so'ralgan summa</p>
              <p class="text-gray-900 font-bold text-xl">{{ $tools.currency(dashboard.total_must_pay)}} <span class="font-medium text-gray-500">UZS</span></p>
            </a>
          </div>
        </div>
        <div
          class="
            relative
            rounded-lg
            border border-gray-300
            bg-white
            px-6
            py-5
            shadow-sm
            flex
            items-center
            space-x-3
            hover:border-gray-400
          "
        >
          <div class="flex-shrink-0 bg-yellow-50 rounded-md">
            <i class="bx bx-money text-yellow-600 text-3xl py-1 px-2"></i>
          </div>
          <div class="flex-1 min-w-0">
            <a href="#" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true"></span>
              <p class="text-sm text-gray-500 truncate">To'lanishi kerak summa</p>
              <p class="font-bold text-xl text-gray-900">{{ $tools.currency(dashboard.total_need)}} <span class="font-medium text-gray-500">UZS</span></p>
            </a>
          </div>
        </div>
        <div
          class="
            relative
            rounded-lg
            border border-gray-300
            bg-white
            px-6
            py-5
            shadow-sm
            flex
            items-center
            space-x-3
            hover:border-gray-400
          "
        >
          <div class="flex-shrink-0 bg-red-50 rounded-md">
            <i class="bx bx-money text-red-400 text-3xl py-1 px-2"></i>
          </div>
          <div class="flex-1 min-w-0">
            <a href="#" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true"></span>
              <p class="text-sm text-gray-500 truncate">Jami to'langan summa</p>
              <p class="font-bold text-xl text-gray-900">{{ $tools.currency(dashboard.total_paid)}} <span class="font-medium text-gray-500">UZS</span></p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DashboardComponent',
  data () {
    return {}
  },
  mounted () {
    this.fetchDashboard()
  },
  computed: {
    ...mapGetters({
      dashboard: 'getDashboard'
    })
  },
  methods: {
    fetchDashboard () {
      this.$store.dispatch('getDashboard')
    }
  }
}
</script>
