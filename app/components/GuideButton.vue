<script setup lang="ts">
const { enabled, toggle } = useGuide();
</script>

<template>
  <UButton
    icon="i-lucide-layers"
    :variant="enabled ? 'solid' : 'ghost'"
    color="neutral"
    aria-label="Toggle Guide"
    @click="toggle"
  />
</template>
