<script setup>
import Footer from '../components/Footer.vue';
</script>

<template>
  <div id="layoutSidenav">
    <div id="layoutSidenav_nav">
      <nav class="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
          <div class="nav">
            <div class="sb-sidenav-menu-heading">Core</div>
            <router-link class="nav-link" to="/dashboard">
              <div class="sb-nav-link-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              Dashboard</router-link
            >
            <div class="sb-sidenav-menu-heading">Interface</div>
            <a
              class="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
              Layouts
              <div class="sb-sidenav-collapse-arrow">
                <i class="fas fa-angle-down"></i>
              </div>
            </a>
            <div
              class="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav class="sb-sidenav-menu-nested nav">
                <a class="nav-link" href="layout-static.html"
                  >Static Navigation</a
                >
                <a class="nav-link" href="layout-sidenav-light.html"
                  >Light Sidenav</a
                >
              </nav>
            </div>
            <div
              class="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            >
              <nav
                class="sb-sidenav-menu-nested nav accordion"
                id="sidenavAccordionPages"
              ></nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div id="layoutSidenav_content">
      <main>
        <div class="container-fluid px-4">
          <h1 class="mt-4">Title</h1>
          <div class="card mb-4">
            <div class="card-body">Text</div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <Footer />
</template>
