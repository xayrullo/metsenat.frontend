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
      ],
      items: [
        {
          id: 586,
          full_name: 'Falonchiyev Pistonchi',
          phone: '+998 (90) 000-12-36',
          sum: 50000000,
          payment_type: [
            {
              id: 44,
              title: 'Naqd pul'
            }
          ],
          firm: '',
          spent: 0,
          created_at: '2022-08-15T17:46:55.760537+05:00',
          get_status_display: 'Moderatsiyada'
        },
        {
          id: 585,
          full_name: "Yuldoshev Mirjalol Komil o'g'li",
          phone: '+998 (99) 581 21 21',
          sum: 50000000,
          payment_type: [
            {
              id: 45,
              title: 'Plastik karta'
            }
          ],
          firm: '',
          spent: 0,
          created_at: '2022-08-14T07:42:54.497846+05:00',
          get_status_display: 'Moderatsiyada'
        }
      ]
    }
  }
}
</script>
