<template>
  <div>
    Render HTML Tabs
  </div>
</template>

<script>
export default {
  name: 'RenderHtml',
  props: [
    'formList'
  ],
  created () {
    console.log(this.formList)
  },
  watch: {
    formList (newValue, oldValue) {
      console.log(this)
      console.log(newValue, oldValue)
    }
  }
}
</script>
