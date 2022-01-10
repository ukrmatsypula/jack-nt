<template>
  <div class="control">
    <label
      ><slog />
      <text-area :value="value" @input="$emit('input', $event.target.value)">
      </text-area>
    </label>
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
  },
};
</script>

<style></style>
