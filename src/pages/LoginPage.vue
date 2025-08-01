<template>
  <section class="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center w-[100vw]">
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border dark:border-gray-700">
      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-6">Sign in to your account</h1>
      <div v-if="generalError" class="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">{{ generalError }}</div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input type="text" id="username" v-model="username" placeholder="yourusername" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
          <p v-if="errors.username" class="text-red-500 text-sm mt-1">{{ errors.username }}</p>
        </div>

        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" id="password" v-model="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
          <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
        </div>

        <button type="submit" :disabled="isPending" class="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50">
          {{ isPending ? 'Signing in...' : 'Sign in' }}
        </button>

        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?
          <router-link to="/register" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Sign up </router-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
// Vue tools
import { ref, inject } from 'vue';

// Vue Router
import { useRouter } from 'vue-router';

// Cookies js
import Cookies from 'js-cookie';

// Import useLogin composable
// import { useLogin } from '../../composable/auth/useLogin';

// AuthContext equivalent
const setIsAuthenticated = inject('setIsAuthenticated') as (value: boolean) => void;

const router = useRouter();

// Form state
const username = ref('');
const password = ref('');
const errors = ref<Record<string, string>>({});
const generalError = ref('');

// Login mutation
// const { mutate: login, isPending } = useLogin();

// const handleLogin = () => {
//   errors.value = {};
//   generalError.value = '';

//   login(
//     { username: username.value, password: password.value },
//     {
//       onSuccess: (data) => {
//         // Set token to cookie
//         Cookies.set('token', data.data.token);

//         // Set user to cookie
//         Cookies.set(
//           'user',
//           JSON.stringify({
//             id: data.data.id,
//             name: data.data.name,
//             username: data.data.username,
//             email: data.data.email,
//           })
//         );

//         // Update auth context
//         setIsAuthenticated(true);

//         // Redirect
//         router.push('/dashboard');
//       },
//       onError: (error: any) => {
//         if (error.response?.data?.errors) {
//           errors.value = error.response.data.errors;
//         }

//         generalError.value = error.response?.data?.message || 'Terjadi kesalahan saat login';
//       },
//     }
//   );
// };
</script>