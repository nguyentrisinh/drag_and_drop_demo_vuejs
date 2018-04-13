<template>
  <div class="component"><!-- Password input-->
    <div class="form-group">
      <label class="col-md-4 control-label" for="passwordinput">Password Input</label>
      <div class="col-md-4">
        <!--<input id="passwordinput" name="passwordinput" type="password" placeholder="placeholder" class="form-control input-md">-->
        <input name="passwordinput" type="password" placeholder="placeholder" class="form-control input-md">
        <span class="help-block">help</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PasswordInput'
}
</script>
