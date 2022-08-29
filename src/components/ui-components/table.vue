<template>
  <table class="table text-gray-400 border-separate text-sm w-full">
    <thead class="text-gray-500">
      <tr>
        <th v-for="(th, index) in fields" :key="index" class="p-3" :class="th.class">{{th.label}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, ind) in items" :key="ind" class="bg-white">
        <td v-for="(td, index) in fields" :key="index" class="p-3 text-gray-800" :class="index === fields.length - 1 ? `${td.tdClass} border-radius` : td.tdClass">
          <slot :name="td.key" v-bind:index="ind" v-bind:item="item">
            {{item[td.key]}}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'TableComponent',
  props: {
    fields: Array,
    items: Array
  },
  data () {
    return {}
  },
  created () {}
}
</script>
<style scoped>
.border-radius {
  border-radius: 0 0.625rem 0.625rem 0 !important;
}
.table {
  border-spacing: 0 15px;
}

i {
  font-size: 1rem !important;
}

.table tr {
  border-radius: 20px;
}

/* tr td:nth-child(n + 5),
tr th:nth-child(n + 5) {
  border-radius: 0 0.625rem 0.625rem 0;
} */

tr td:nth-child(1),
tr th:nth-child(1) {
  border-radius: 0.625rem 0 0 0.625rem;
}
</style>
