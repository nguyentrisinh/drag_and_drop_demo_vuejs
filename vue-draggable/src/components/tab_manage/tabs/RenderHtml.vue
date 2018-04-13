<template>
  <div>
    <h3>Rendered source of your form:</h3>
    <textarea id="render"
              class="col-md-12"
              style="height: 400px; max-width: 100%"
              v-model="htmlRender"
    ></textarea>
  </div>
</template>

<script>

export default {
  name: 'RenderHtml',
  props: [
    'formList'
  ],
  data () {
    return {
      htmlRender: ''
    }
  },
  created () {
    this.htmlRender = this.convertIntoString(this.formList)
  },
  methods: {
    renderTextInputObject (textInputObject) {
      var isRequireString = ''
      if (textInputObject.data.isRequire) {
        isRequireString = 'required=" "'
      }
      var textInputHtmlHeader = '\n<!-- Text input-->\n<div class="form-group">\n'
      var textInputLabel = '  <label class="col-md-4 control-label" for="' + textInputObject.data.id + '">' + textInputObject.data.labelName + '</label>  \n'
      var textInputColumn = '  <div class="' + textInputObject.data.size + '">\n'
      var textInputInput = '  <input id="' + textInputObject.data.id + '" name="' + textInputObject.data.id + '" type="text" ' +
        'placeholder="' + textInputObject.data.placeholder + '" class="form-control input-md" ' + isRequireString + '>\n'
      var textInputHelp = '  <span class="help-block">' + textInputObject.data.helpText + '</span>  \n'
      var textInputEnding = '  </div>\n</div>\n'
      var content = textInputHtmlHeader + textInputLabel + textInputColumn + textInputInput + textInputHelp + textInputEnding
      return content
    },
    renderPasswordInputObject (passwordInputObject) {
      var isRequireString = ''
      if (passwordInputObject.data.isRequire) {
        isRequireString = 'required=" "'
      }
      var passwordInputHtmlHeader = '\n<!-- Password input-->\n<div class="form-group">\n'
      var passwordInputLabel = '  <label class="col-md-4 control-label" for="' + passwordInputObject.data.id + '">' + passwordInputObject.data.labelName + '</label>  \n'
      var passwordInputColumn = '  <div class="' + passwordInputObject.data.size + '">\n'
      var passwordInputInput = '  <input id="' + passwordInputObject.data.id + '" name="' + passwordInputObject.data.id + '" type="password" ' +
        'placeholder="' + passwordInputObject.data.placeholder + '" class="form-control input-md" ' + isRequireString + '>\n'
      var passwordInputHelp = '  <span class="help-block">' + passwordInputObject.data.helpText + '</span>  \n'
      var passwordInputEnding = '  </div>\n</div>\n'
      var content = passwordInputHtmlHeader + passwordInputLabel + passwordInputColumn + passwordInputInput + passwordInputHelp + passwordInputEnding
      return content
    },
    renderPrependTextObject (prependTextObject) {
      var isRequireString = ''
      if (prependTextObject.data.isRequire) {
        isRequireString = 'required=" "'
      }
      var prependTextHtmlHeader = '\n<!-- Text input-->\n<div class="form-group">\n'
      var prependTextLabel = '  <label class="col-md-4 control-label" for="' + prependTextObject.data.id + '">' + prependTextObject.data.labelName + '</label>  \n'
      var prependTextColumn = '  <div class="' + prependTextObject.data.size + '">\n'
      var prependTextInputGroup = '    <div class="input-group">\n      <span class="input-group-addon">' + prependTextObject.data.prependText + '</span>\n'
      var prependTextInput = '      <input id="' + prependTextObject.data.id + '" name="' + prependTextObject.data.id + '" type="text" ' +
        'placeholder="' + prependTextObject.data.placeholder + '" class="form-control input-md" ' + isRequireString + '>\n    </div>\n'
      var prependTextHelp = '    <span class="help-block">' + prependTextObject.data.helpText + '</span>  \n'
      var prependTextEnding = '  </div>\n</div>\n'
      var content = prependTextHtmlHeader + prependTextLabel + prependTextColumn + prependTextInputGroup + prependTextInput + prependTextHelp + prependTextEnding
      return content
    },
    convertIntoString (formList) {
      // console.log(formList, 'RenderHTML')
      var content = '<form class="form-horizontal">\n<fieldset>\n\n<!-- Form Name -->\n<legend>Form Name</legend>\n'

      for (var index in formList) {
        var object = formList[index]
        if (object.type === 1) {
          var textInputString = this.renderTextInputObject(object)
          content += textInputString
        } else if (object.type === 2) {
          var passwordInputString = this.renderPasswordInputObject(object)
          content += passwordInputString
        } else if (object.type === 3) {
          var prependTextString = this.renderPrependTextObject(object)
          content += prependTextString
        }
      }

      content += '\n</fieldset>\n</form>\n'
      return content
    }
  },
  watch: {
    // formList (newValue, oldValue) {
    //   console.log(this)
    //   console.log(newValue, oldValue, 'RenderHTML')
    // }
    formList: {
      handler: function (newValue, oldValue) {
        this.htmlRender = this.convertIntoString(newValue)
      },
      deep: true
    }
  }
}
</script>
