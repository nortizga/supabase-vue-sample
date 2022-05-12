<script setup>
import { supabase } from '../utils/supabase';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

onMounted(async () => {
  const route = useRoute();
  const router = useRouter();
  const token = route?.params?.access_token?.split('=')[1].split('&')[0];

  if (token.length) {
    try {
      const { user, error } = await supabase.auth.api.getUser(token);
      if (error) throw error;

      const isAuthenticated = user?.aud;
      if (isAuthenticated) {
        router.push('/setPassword');
      }
    } catch (error) {
      console.log(error.error_description || error.message);
    }
  }
});
</script>

<template>
  <h1>Login</h1>
</template>
