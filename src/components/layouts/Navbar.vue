<template>
  <div class="navbar__wrapper container-fluid">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <router-link to="/">
          <img src="../../assets/logo.jpg" class="img-fluid navbar-brand nav-logo" alt="Logo" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/team" class="nav-link">Team</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/shareholder" class="nav-link">Shareholder</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact Us</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/_colors.scss";
.navbar__wrapper {
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.17);
  .navbar {
    .nav-logo {
      height: 70px;
    }
    .nav-link {
      color: $primary-color;
      margin-left: 1rem;
      text-transform: uppercase;
      font-size: 0.86rem;
      font-weight: bold;
    }
    .fa-bars {
      background: #fff;
      font-size: 1.7rem;
      color: $primary-color;
      cursor: pointer !important;
      border-radius: 3px;
    }
    .fixed__nav {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }
  }
}
</style>