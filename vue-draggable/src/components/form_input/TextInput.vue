<template>
  <div class="component" ><!-- Text input-->
    <div class="form-group" @click="openDialog">
      <label class="col-md-4 control-label" :for="element.data.id">{{ element.data.labelName }}</label>
      <div :class="element.data.size">
        <input :id="element.data.id"
               name="textinput"
               type="text"
               :placeholder="element.data.placeholder"
               class="form-control input-md"
        >
        <!--<input name="textinput" type="text" placeholder="placeholder" class="form-control input-md">-->
        <span class="help-block">{{ element.data.helpText }}</span>
      </div>
    </div>

    <!-- Form for large width size -->
    <el-dialog title="Text Input" :visible.sync="dialogFormEditVisible">
      <!--<media-edit-form ref="media-edit" :media="this.media"> </media-edit-form>-->
      <text-input-property :element="element" ref="editTextInput"></text-input-property>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">Close</el-button>
        <el-button type="primary" @click="save()">Save</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import TextInputProperty from '../edit_property_form/TextInputProperty'

export default {
  name: 'TextInput',
  props: [
    'element',
    'isEditable',
    'formList',
    'index'
  ],
  components: {
    TextInputProperty
  },
  data () {
    return {
      newElement: JSON.parse(JSON.stringify(this.element)),
      dialogFormEditVisible: false
    }
  },
  methods: {
    openDialog () {
      if (this.isEditable) {
        this.dialogFormEditVisible = true
      }
    },
    closeDialog () {
      this.$refs['editTextInput'].cancel()
      this.dialogFormEditVisible = false
    },
    save () {
      this.$refs['editTextInput'].save()
      this.dialogFormEditVisible = false
      console.log(this.formList)
    }
  }
}
</script>
