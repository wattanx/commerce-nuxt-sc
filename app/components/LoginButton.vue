<script setup lang="ts">
const { loggedIn, user, clear } = useUserSession()
</script>

<template>
  <div class="flex items-center gap-2">
    <template v-if="loggedIn">
      <UAvatar
        :src="user?.avatarUrl"
        :alt="user?.name || user?.login"
        size="sm"
      />
      <UButton
        label="Logout"
        variant="ghost"
        color="neutral"
        @click="clear()"
      />
    </template>
    <UButton
      v-else
      to="/auth/github"
      icon="i-simple-icons-github"
      label="Login"
      color="neutral"
      variant="ghost"
      external
    />
  </div>
</template>
