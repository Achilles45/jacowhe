<template>
  <footer class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>Company</h5>
          <p>Jacowhe Global Investment Limited is your company of choice that provides you with robust financial services. It is incorporated with C.A.C RC:1317834.</p>
          <router-link to="/about" class="about">Read more...</router-link>
        </div>
        <div class="col-md-4">
          <h5>Contact Details</h5>
          <h6>
            <i class="fa fa-home"></i>&nbsp; Office Address
          </h6>
          <p>Abighe Street, Omovutotu Lane, Ozoro, Isoko North L.G.A, Delta State, Nigeria.</p>
          <h6>
            <i class="fa fa-envelope"></i>&nbsp; Email Address
          </h6>
          <p>jgiltd.org.ng@gmail.com</p>
          <h6>
            <i class="fa fa-phone"></i>&nbsp; Phone:
          </h6>
          <p>08037530271</p>
          <p>08077316791</p>
          <p>08179993299</p>
        </div>
        <div class="col-md-4">
          <h5>Get Social</h5>
          <a href="https://web.facebook.com/Jacowhe-Global-Investment-Limited-1164061150323194/">
            <i class="fa fa-facebook"></i>
          </a>
        </div>
      </div>
      <hr />
      <p>Copyright &copy; 2019. Jacowhe Global Investment Limited. All rights reserved</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss" scoped>
@import "../../styles/_colors.scss";
footer {
  margin-top: 4rem;
  h5 {
    font-size: 1.1rem;
    font-weight: bold;
    padding-bottom: 01rem;
  }
  p {
    font-size: 0.9rem;
  }
  .about {
    color: $primary-color;
  }
  .fa-facebook {
    color: $primary-color;
    font-size: 1.5rem;
  }
}
</style>