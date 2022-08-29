<template>
    <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
      <!-- Modal header -->
      <div
        class="
          flex
          items-start
          justify-between
          p-5
          border-b
          rounded-t
          dark:border-gray-600
        "
      >
        <h3
          class="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white"
        >
          Tahrirlash
        </h3>
        <button
          type="button"
          class="
            text-gray-400
            bg-transparent
            hover:bg-gray-200 hover:text-gray-900
            rounded-lg
            text-sm
            p-1.5
            ml-auto
            inline-flex
            items-center
            dark:hover:bg-gray-600 dark:hover:text-white
          "
          data-modal-toggle="default-modal"
          @click="onClose()"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div class="p-6 space-y-6">
        <div>
          <div>
            <nav
              class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
              aria-label="Tabs"
            >
              <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
              <div
                class="
                  rounded-l-lg
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
                  isActive === 'physical'
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'hover:bg-gray-50 text-gray-500 hover:text-gray-700'
                "
                @click="changeNav('physical')"
              >
                <span>Jismoniy shaxs</span>
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
                  isActive === 'legal'
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'hover:bg-gray-50 text-gray-500 hover:text-gray-700'
                "
                @click="changeNav('legal')"
              >
                <span>Yuridik shaxs</span>
              </div>
            </nav>
          </div>
          <div class="mt-6">
            <form class="space-y-6" @submit.prevent="onSubmit">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 capitalize"
                >
                  F.I.SH (Familiya Ism Sharifingiz)
                </label>
                <div class="mt-1">
                  <input
                    id="name"
                    name="name"
                    v-model="sponsor.full_name"
                    placeholder="Abdullayev Abdulla Abdulla o'g'li"
                    required
                    class="
                      appearance-none
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      placeholder-gray-400
                      focus:outline-none focus:ring-blue-500 focus:border-blue-500
                      sm:text-sm
                    "
                  />
                </div>
              </div>
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">
                  TELEFON RAQAM
                </label>
                <div class="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    v-model="sponsor.phone"
                    required
                    v-mask="'+998## ###-##-##'"
                    plaseholder="+99800 000-00-00"
                    class="
                      appearance-none
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      placeholder-gray-400
                      focus:outline-none focus:ring-blue-500 focus:border-blue-500
                      sm:text-sm
                    "
                  />
                </div>
              </div>
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">
                  HOLATI
                </label>
                <div class="mt-1">
                  <select
                    id="status"
                    name="status"
                    v-model="sponsor.get_status_display"
                    class="
                      shadow-sm
                      focus:ring-blue-500 focus:border-blue-500
                      block
                      w-full
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  >
                    <option>Moderatsiyada</option>
                    <option>Yangi</option>
                    <option>Tasdiqlangan</option>
                  </select>
                </div>
              </div>
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">
                  HOMIYLIK SUMMASI
                </label>
                <div class="mt-1">
                  <select
                    id="status"
                    name="status"
                    v-model="sponsor.sum"
                    class="
                      shadow-sm
                      focus:ring-blue-500 focus:border-blue-500
                      block
                      w-full
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  >
                    <option
                      v-for="(tariff, index) in tariffs"
                      :key="index"
                      :value="tariff.summa"
                    >
                      {{ tariff.summa }}
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">
                  TO'LOV TURI
                </label>
                <div class="mt-1">
                  <select
                    id="status"
                    name="status"
                    v-model="sponsor.payment_type"
                    class="
                      shadow-sm
                      focus:ring-blue-500 focus:border-blue-500
                      block
                      w-full
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  >
                    <option
                      v-for="(type, index) in payment_typies"
                      :key="index"
                      :value="type.id"
                    >
                      {{ type.title }}
                    </option>
                  </select>
                </div>
              </div>

              <div v-if="isActive === 'legal'">
                <label for="name" class="block text-sm font-medium text-gray-700">
                  TASHKILOT NOMI
                </label>
                <div class="mt-1">
                  <input
                    id="firm"
                    name="firm"
                    v-model="sponsor.firm"
                    required
                    plaseholder="Orient group"
                    class="
                      appearance-none
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      placeholder-gray-400
                      focus:outline-none focus:ring-blue-500 focus:border-blue-500
                      sm:text-sm
                    "
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        class="
          mt-1
          flex
          space-x-2
          justify-end
          p-6
          border-t border-gray-200
          rounded-b
        "
      >
        <button
          data-modal-toggle="default-modal"
          type="submit"
          @click="onSubmit"
          class="
            text-white
            bg-blue-700
            hover:bg-blue-800
            focus:ring-4 focus:ring-blue-300
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            text-center
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
          "
        >
          Saqlash
        </button>
      </div>
    </div>
  </template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FormModal',
  props: {
    data: Object
  },
  data () {
    return {
      isActive: 'physical',
      sponsor: {
        full_name: '',
        phone: '',
        sum: null,
        payment_type: null,
        firm: '',
        spent: null,
        comment: '',
        get_status_display: ''
      }
    }
  },
  created () {
    if (this.data) {
      this.sponsor = {
        full_name: this.data.full_name,
        phone: this.data.phone,
        sum: this.data.sum,
        payment_type: this.data.payment_type,
        firm: this.data.firm,
        spent: this.data.spent,
        comment: this.data.comment,
        get_status_display: this.data.get_status_display,
        id: this.data.id
      }
    }
    if (this.data.firm) this.isActive = 'legal'
  },
  computed: {
    ...mapGetters({
      tariffs: 'getTariffs',
      payment_typies: 'getPaymentTypies'
    })
  },
  methods: {
    onSubmit () {
      console.log('submitted')
      const _sponsor = { ...this.sponsor }
      delete _sponsor.id
      this.$store
        .dispatch('updateSponsor', {
          id: this.sponsor.id,
          data: _sponsor
        })
        .then((res) => {
          if (res) {
            this.onClose('success')
          }
        })
    },
    changeNav (status) {
      this.isActive = status
    },
    onClose (e) {
      this.$emit('close')
      this.$root.$emit('student-edit-modal', e)
    }
  }
}
</script>
