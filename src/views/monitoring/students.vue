<template>
  <div>
    <div class="flex justify-end">
      <button type="button" class="inline-flex items-center px-4 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600">
        <i class="bx bx-plus text-white text-xl mr-2" @click="newStudent()"></i>
        Talaba qo'shish
      </button>
    </div>
    <x-table :fields="fields" :items="items">
      <template #order="item">
        <x-table-order :data="item"/>
      </template>
      <template #type="{ item }">
        {{ item.type === 1 ? 'Bakalavr' : 'Magistr' }}
      </template>
      <template #institute="{ item }">
        {{ item.institute.name }}
      </template>
      <template #given="{ item }">
        {{ $tools.currency(item.given) }} <span class="text-gray-400">UZS</span>
      </template>
      <template #contract="{ item }">
        {{ $tools.currency(item.contract) }} <span class="text-gray-400">UZS</span>
      </template>
      <template #action="{ item }">
        <i class="bx bx-show-alt text-blue-600 text-5xl cursor-pointer" @click="showDetail(item)"></i>
      </template>
    </x-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'StudentsComponent',
  data () {
    return {
      fields: [
        {
          key: 'order',
          label: '#',
          tdClass: 'w-10 text-center'
        },
        {
          key: 'full_name',
          label: 'F.I.SH',
          tdClass: ''
        },
        {
          key: 'type',
          label: 'TALABALIK TURI',
          tdClass: 'text-center'
        },
        {
          key: 'institute',
          label: 'OTM',
          tdClass: 'text-center'
        },
        {
          key: 'given',
          label: 'AJRATILGAN SUMMA',
          tdClass: 'text-center'
        },
        {
          key: 'contract',
          label: 'KONTRAKT MIQDORI',
          tdClass: 'text-center'
        },
        {
          key: 'action',
          label: 'AMALLAR',
          tdClass: 'text-center'
        }
      ]
    }
  },
  mounted () {
    this.fetchStudents()
  },
  computed: {
    ...mapGetters({
      items: 'getStudents',
      pending: 'pendingSponsor'
    })
  },
  methods: {
    fetchStudents () {
      this.$store.dispatch('getStudents')
    }
  }
}
</script>
