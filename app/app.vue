<script setup>
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "ja",
  },
});

const title = "Demo Store";
const description = "A simple e-commerce shop built with Nuxt UI.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
});
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="font-bold text-lg"> Demo Store </NuxtLink>
      </template>

      <template #right>
        <CartButton />
        <UColorModeButton />
        <LoginButton />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">Built by wattanx • © {{ new Date().getFullYear() }}</p>
      </template>
      <template #right>
        <UButton
          to="https://github.com/wattanx/commerce-nuxt-sc"
          target="_blank"
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          external
        />
      </template>
    </UFooter>
  </UApp>
</template>
