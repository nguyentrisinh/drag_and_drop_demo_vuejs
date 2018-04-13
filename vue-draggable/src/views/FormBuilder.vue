<template>
  <div class="" id="test">
    <div class="row">
      <div class="col-md-6">
        <h2>Drag & Drop components</h2>
        <hr/>
        <tab-manage :formList="formList"></tab-manage>
        <!--<form class="form-horizontal" id="components" role="form">-->
          <!--<draggable class="dragArea" v-model="formInputList" :options="formInputOptions" @start="isDragging=true" @end="isDragging=false">-->
              <!--<div v-for="(element, index) in formInputList" :key="index">-->
                <!--<text-input v-if="element.type === 1"></text-input>-->
                <!--<password-input v-if="element.type === 2"></password-input>-->
                <!--<prepended-text v-if="element.type === 3"></prepended-text>-->
              <!--</div>-->
          <!--</draggable>-->
        <!--</form>-->
      </div>

      <div class="col-md-6">
        <div class="clearfix">
          <h2>Your Form</h2>
          <hr>
          <div id="build" ref="build">
            <form id="target" class="form-horizontal">
              <fieldset>
                <div class="component"
                     data-title="Form Name"
                     data-trigger="manual"
                     data-html="true"
                ><!-- Form Name -->
                  <legend>Form Name</legend>
                </div>
                <draggable class="dragArea" v-model="formList" :options="formOptions" @end="onEndRemove" @add="onAdd">
                    <div v-for="(element, index) in formList" :key="index" style="margin-top: 10px;">
                      <text-input v-if="element.type === 1" :element="element" :isEditable="true" :formList="formList" :index="index"></text-input>
                      <password-input v-if="element.type === 2"></password-input>
                      <prepended-text v-if="element.type === 3"></prepended-text>
                    </div>
                </draggable>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { mapState } from 'vuex'
import TextInput from '@/components/form_input/TextInput'
import PasswordInput from '@/components/form_input/PasswordInput'
import PrependedText from '@/components/form_input/PrependedText'
import TabManage from '@/components/tab_manage/TabManage'

export default {
  name: 'FormBuilder',
  components: {
    TextInput,
    PasswordInput,
    PrependedText,
    draggable,
    TabManage
  },
  data () {
    return {
      editable: true,
      isDragging: false,
      delayedDragging: false,
      formList: []
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
      console.log(evt)
      var index = evt.newIndex
      this.formList.splice(index, 1)
      this.isDragging = false
    },
    onAdd (evt) {
      if (evt.from.className === 'list-group') {
        var newIndex = evt.newIndex
        var oldIndex = evt.oldIndex
        var oldElement = this.formInputList[oldIndex]
        var newElement = JSON.parse(JSON.stringify(oldElement))
        // const payload = {
        //   type: 'update_form_list',
        //   data: {
        //     element: oldElement,
        //     newIndex: newIndex
        //   }
        // }
        // this.$store.dispatch(payload)
        this.formList.splice(newIndex, 1, newElement)
        console.log(oldElement, newIndex, 'list-group')
      }
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
    },
    formList (newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  }
}
</script>
