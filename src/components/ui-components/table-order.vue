<template>
  <div>
    {{ data.index + 1 }}
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    from: String
  },
  created () {}
}
</script>
