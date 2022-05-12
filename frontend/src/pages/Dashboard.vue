<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import Footer from '../components/Footer.vue';
import { onMounted } from 'vue';

onMounted(() => {
  const sidebarToggle = document.querySelector('#sidebarToggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', event => {
      event.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem(
        'sb|sidebar-toggle',
        document.body.classList.contains('sb-sidenav-toggled')
      );
    });
  }
});
</script>
<template>
  <div>
    <Navbar />
    <Sidebar />
  </div>
</template>
