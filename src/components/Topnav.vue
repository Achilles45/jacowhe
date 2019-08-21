<template>
  <div class="top__nav d-none d-lg-block container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <i class="fa fa-map-marker"></i>&nbsp;&nbsp; Abighe Street, Omovutotu Lane, Ozoro, Isoko North L.G.A, Delta State.
        </div>
        <div class="col-md-2">
          <i class="fa fa-phone"></i>&nbsp;&nbsp; 08037530271
        </div>
        <div class="col-md-3">
          <i class="fa fa-envelope"></i>&nbsp;&nbsp; jgiltd.org.ng@gmail.com
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Topnav"
};
</script>
<style scoped lang="scss">
@import "../styles/_colors.scss";
.index__wrapper {
  .top__nav {
    background: $primary-color;
    color: #fff;
    padding: 0.8rem 0;
    font-size: 0.8rem;
  }
}
</style>