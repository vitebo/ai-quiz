<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

defineProps({
  placeholder: {
    type: String,
    required: false,
    default: undefined,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>

<template>
  <input
    type="text"
    class="input input-bordered w-full max-w-xs"
    :placeholder="placeholder"
    :value="modelValue"
    @input="handleInput"
  />
</template>
