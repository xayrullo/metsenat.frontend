<template>
    <div>
      <div>
        <div class="relative bg-gray-50">
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
              <div class="flex justify-start lg:w-0 lg:flex-1 text-gray-900">
                <router-link :to="{ name: 'students-list' }">
                  <i class="bx bx-left-arrow-alt text-2xl cursor-pointer"></i>
                </router-link>
                <span v-if="$route.params.index === 'new'" class="pt-1 mx-3">
                  Talaba qo'shish
                </span>
                <span v-else class="pt-1 mx-3">
                  {{student.full_name}}
                </span>
                <span v-if="student.get_status_display === 'Moderatsiyada' && $route.params.index !== 'new'" class="pt-1 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">{{student.get_status_display}}</span>
                <span v-else-if="student.get_status_display === 'Yangi' && $route.params.index !== 'new'" class="pt-1 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">{{student.get_status_display}}</span>
                <span v-else-if="student.get_status_display === 'Tasdiqlangan' && $route.params.index !== 'new'" class="pt-1 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">{{student.get_status_display}}</span>
                <span v-else-if="$route.params.index !== 'new'" class="pt-1 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">{{student.get_status_display}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-lg">
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5">
              <div class="sm:flex sm:items-start sm:justify-between">
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Homiy haqida
                  </h3>
                  <div class="mt-2 max-w-xl text-sm text-gray-500">
                    <div class="flex mt-2">
                      <div class="mr-4 flex-shrink-0">
                        <img
                          class="inline-block h-10 w-10 rounded-md"
                          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Shavkat_Mirziyoyev.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h4 class="text-sm font-bold text-gray-800">
                          {{ student.full_name }}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    mt-5
                    sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center
                  "
                >
                  <button
                    type="button"
                    class="
                      inline-flex
                      items-center
                      px-3
                      border border-transparent
                      shadow-sm
                      font-medium
                      rounded-md
                      text-blue-600
                      bg-blue-50
                      hover:bg-blue-100
                      sm:text-sm
                    "
                    @click="openFormModal(student)"
                  >
                    <i
                      class="bx bx-edit-alt text-xl mr-2"
                    ></i>
                    Tahrirlash
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-2 mt-2">
                <div class="col-span-1">
                  <div class="text-gray-400 text-xs">TELEFON RAQAM</div>
                  <div class="text-gray-800">{{ student.phone }}</div>
                </div>
                <div class="col-span-1">
                  <div class="text-gray-400 text-xs">HOMIYLIK SUMMASI</div>
                  <div class="text-gray-800">
                    {{ $tools.currency(student.sum) }}
                    <span class="text-gray-400">UZS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
import { mapGetters } from 'vuex'
import formModal from './sponsor-modal.vue'
export default {
  name: 'StudentDetail',
  data () {
    return {}
  },
  mounted () {
    if (this.$route.params.index !== 'new') this.fetchStudent()
  },
  computed: {
    ...mapGetters({
      student: 'getStudentById',
      pending: 'pendingStudent'
    })
  },
  methods: {
    fetchStudent () {
      this.$store.dispatch('getStudentById', { id: this.$route.params.index })
    },
    openFormModal (data) {
      this.$modal.show(
        formModal,
        { data: { ...data } },
        {
          height: 'auto',
          maxWidth: 600,
          width: window.innerWidth <= 550 ? window.innerWidth - 10 : 550,
          scrollable: true
        }
      )
      this.$root.$once('form-modal', (item) => {
        if (item === 'success') {
          this.fetchStudent()
        }
      })
    }
  }
}
</script>
