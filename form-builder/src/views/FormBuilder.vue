<template>
  <div>
    <div class="container">
      <div class="row clearfix">
        <!-- Building Form. -->
        <div class="span6">
          <div class="clearfix">
            <h2>Your Form</h2>
            <hr>
            <div id="build">
              <form id="target" class="form-horizontal">
              </form>
            </div>
          </div>
        </div>
        <!-- / Building Form. -->

        <!-- Components -->
        <div class="span6">
          <h2>Drag & Drop components</h2>
          <hr>
          <div class="tabbable">
            <ul class="nav nav-tabs" id="formtabs">
              <!-- Tab nav -->
            </ul>
            <form class="form-horizontal" id="components">
              <fieldset>
                <div class="tab-content">
                  <!-- Tabs of snippets go here -->
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <!-- / Components -->

      </div>
    </div> <!-- /container -->
  </div>
</template>

<script>
export default {
  name: 'FormBuilder'
}
</script>
