<template>
  <draggable class="list-group" v-model="formInputList" :options="formInputOptions" @start="isDragging=true" @end="isDragging=false">
    <div v-for="(element, index) in formInputList" :key="index">
      <text-input v-if="element.type === 1" :element="element" :isEditable="false" :formList="formList" :index="index"></text-input>
      <password-input v-if="element.type === 2"></password-input>
      <prepended-text v-if="element.type === 3"></prepended-text>
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import { mapState } from 'vuex'
import TextInput from '@/components/form_input/TextInput'
import PasswordInput from '@/components/form_input/PasswordInput'
import PrependedText from '@/components/form_input/PrependedText'
import TabManage from '@/components/tab_manage/TabManage'

export default {
  name: 'InputForTab',
  components: {
    TextInput,
    PasswordInput,
    PrependedText,
    draggable,
    TabManage
  },
  props: [
    'formList'
  ],
  data () {
    return {
      editable: true,
      isDragging: false,
      delayedDragging: false
    }
  },
  computed: {
    formInputOptions () {
      return {
        animation: 0,
        // group: 'description',
        group: {
          name: 'description',
          pull: 'clone',
          put: false
        },
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    formOptions () {
      return {
        animation: 0,
        // group: 'description',
        group: {
          name: 'description',
          pull: true,
          put: true
        },
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    listString () {
      return JSON.stringify(this.formList, null, 2)
    },
    ...mapState({
      formInputList: state => state.formInputList
    })
  },
  methods: {
    onEndRemove (evt) {
      console.log('test', evt, this.formList)
      var index = evt.newIndex
      this.formList.splice(index, 1)
      this.isDragging = false
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>
