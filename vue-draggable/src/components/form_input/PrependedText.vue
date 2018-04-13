<template>
  <div class="component"><!-- Prepended text-->
    <div class="form-group">
      <label class="col-md-4 control-label" for="prependedtext">Prepended Text</label>
      <div class="col-md-4">
        <div class="input-group">
          <span class="input-group-addon">prepend</span>
          <!--<input id="prependedtext" name="prependedtext" class="form-control" placeholder="placeholder" type="text">-->
          <input name="prependedtext" class="form-control" placeholder="placeholder" type="text">
        </div>
        <p class="help-block">help</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrependedText'
}
</script>
