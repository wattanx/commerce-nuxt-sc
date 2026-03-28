<script setup lang="ts">
defineProps<{
  type: "static" | "server-component";
  label: string;
}>();

const { enabled } = useGuide();
</script>

<template>
  <div class="relative">
    <slot />
    <div
      v-if="enabled"
      class="absolute inset-0 pointer-events-none z-10 border-2 rounded-md"
      :class="
        type === 'static'
          ? 'bg-blue-500/10 border-blue-500/40'
          : 'bg-purple-500/10 border-purple-500/40'
      "
    >
      <span
        class="absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded"
        :class="
          type === 'static'
            ? 'bg-blue-500 text-white'
            : 'bg-purple-500 text-white'
        "
      >
        {{ label }}
      </span>
    </div>
  </div>
</template>
