<template>
  <nav
    class="sb-topnav navbar navbar-expand navbar-dark bg-dark justify-content-between"
  >
    <div>
      <a class="navbar-brand px-2" href="#">Start Bootstrap</a>

      <button
        class="btn btn-link btn-md order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        href="#!"
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          id="navbarDropdown"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          ><i class="fas fa-user fa-fw"></i
        ></a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdown"
        >
          <li>
            <router-link class="dropdown-item" to="/">Logout</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
