<template>
  <div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
              <div class="card-header">
                <h3 class="text-center font-weight-light my-4">Welcome!</h3>
              </div>
              <div class="card-body">
                <div class="small mb-3 text-muted">
                  To finish setting up your account, please create a password
                  below.
                </div>
                <form @submit.prevent="handleLogin">
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputPassword"
                      type="password"
                      placeholder="****************"
                    />
                    <label for="inputPassword">New Password</label>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-between mt-4 mb-0"
                  >
                    <input
                      class="btn btn-primary"
                      type="submit"
                      :value="loading ? 'Loading' : 'Save'"
                      :disabled="loading"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
import { ref } from 'vue';
import { supabase } from '../utils/supabase';

export default {
  setup() {
    const loading = ref(false);
    // const password = ref('');

    const handleLogin = async () => {
      console.log(supabase.auth.user());
      try {
        loading.value = true;
        const { user, error } = await supabase.auth.api.getUser(
          'ACCESS_TOKEN_JWT'
        );
        if (error) throw error;
        console.log(user);
      } catch (error) {
        console.log(error.error_description || error.message);
      } finally {
        loading.value = false;
      }
    };

    return {
      loading,
      handleLogin
    };
  }
};
</script> -->
