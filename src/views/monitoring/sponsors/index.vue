<template>
    <div>
      <x-table :fields="fields" :items="items">
        <template #order="item">
          <x-table-order :data="item"/>
        </template>
        <template #sum="{ item }">
          {{ $tools.currency(item.sum) }} <span class="text-gray-400">UZS</span>
        </template>
        <template #spent="{ item }">
          {{ $tools.currency(item.spent) }} <span class="text-gray-400">UZS</span>
        </template>
        <template #created_at="{ item }">
          {{ $tools.getDate(item.created_at) }}
        </template>
        <template #get_status_display="{ item }">
          <div v-if="item.get_status_display === 'Moderatsiyada'" class="text-yellow-500">{{item.get_status_display}}</div>
          <div v-else-if="item.get_status_display === 'Yangi'" class="text-blue-500">{{item.get_status_display}}</div>
          <div v-else-if="item.get_status_display === 'Tasdiqlangan'" class="text-green-500">{{item.get_status_display}}</div>
          <div v-else class="text-gray-500">{{item.get_status_display}}</div>
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
  name: 'SponsorsComponent',
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
          key: 'phone',
          label: 'TEL. RAQAMI',
          tdClass: 'text-center'
        },
        {
          key: 'sum',
          label: 'HOMIYLIK SUMMASI',
          tdClass: 'text-center'
        },
        {
          key: 'spent',
          label: 'SARFLANGAN SUMMA',
          tdClass: 'text-center'
        },
        {
          key: 'created_at',
          label: 'SANA',
          tdClass: 'text-center'
        },
        {
          key: 'get_status_display',
          label: 'HOLATI',
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
    this.fetchSponsors()
  },
  computed: {
    ...mapGetters({
      items: 'getSponsors',
      pending: 'pendingSponsor'
    })
  },
  methods: {
    fetchSponsors () {
      this.$store.dispatch('getSponsors')
    },
    showDetail (item) {
      this.$router.push({
        path: `/monitoring/sponsors/${item.id}`
      })
    }
  }
}
</script>
