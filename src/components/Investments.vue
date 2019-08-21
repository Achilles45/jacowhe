<template>
  <section class="investments container-fluid">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <h3>Grow your investment portfolio</h3>
          <p>Let your money work for you. Jacowhe Global Investment Limited has designed very attractive and competitive investment vehicles that you can take advantage of today to earn extra income. This is your chance to invest in and grow your investment portfolio.</p>
          <router-link to="/contact" class="contact-btn">
            Contact Us &nbsp;&nbsp;
            <i class="fa fa-long-arrow-right"></i>
          </router-link>
        </div>
        <div class="col-"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Investments"
};
</script>
<style lang="scss" scoped>
@import "../styles/_colors.scss";
.investments {
  background: $primary-color;
  margin-top: 3rem;
  color: #fff;
  padding: 6rem 0;
  h3 {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 1.2px;
    padding-bottom: 1rem;
  }
  p {
    padding-bottom: 1.5rem;
  }
  .contact-btn {
    background: none;
    border-radius: 3px;
    padding: 0.8rem 2.5rem;
    text-decoration: none;
    border: 1px solid #fff;
    color: #fff;
    &:hover {
      background: #fff;
      color: $primary-color;
      transition: all ease-in-out 0.5s;
    }
  }
}
</style>