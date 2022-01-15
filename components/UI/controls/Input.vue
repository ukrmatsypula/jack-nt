<template>
  <div class="control">
    <label><slot /></label>
    <input
      :type="type"
      v-bind="$attrs"
      :value="value"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    required: {
      type: Boolean,
      default: true,
    }
  },
};
</script>

<style></style>
