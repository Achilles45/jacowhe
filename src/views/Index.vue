<template>
  <div class="index__wrapper">
    <Topnav />
    <Navbar />
    <Carousel />
    <!--Why us section
    ======================-->
    <section class="why-us container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center why-title">
            <h3>Why you should use our products</h3>
            <p>Our products and services are designed with you in mind. We are your partner of choice!</p>
          </div>
        </div>
        <div class="why__wrapper">
          <div class="why-cards">
            <i class="fa fa-shopping-basket why-icons"></i>
            <h5>Inclusive Products</h5>
            <p>It doesen't matter if you want to build a house, go on medical trips, get working capital, buy a car or other assets, celebrate marriages etc. We have got you covered as we offer a wide range of products that suits all your needs.</p>
          </div>
          <div class="why-cards">
            <i class="fa fa-comments why-icons"></i>
            <h5>24/7 Customer support</h5>
            <p>We don't leave you only because you got a credit. Our support team is always handy to make sure you are provided with relevant assistance and your queries are answerd.</p>
          </div>
          <div class="why-cards">
            <i class="fa fa-shield why-icons"></i>
            <h5>Security</h5>
            <p>For investors and other esteemed customers, we operate with security in mind. We make sure all our operations and technologies are encrypt with relevant technologies to make sure that you and all your transactions are secured. Let's grow together!</p>
          </div>
        </div>
      </div>
    </section>
    <!--End of why section
    =========================-->
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/layouts/Navbar.vue";
import Topnav from "@/components/Topnav.vue";
import Carousel from "@/components/Carousel.vue";
export default {
  name: "index",
  components: {
    Navbar,
    Topnav,
    Carousel
  }
};
</script>
<style scoped lang="scss">
@import "../styles/_colors.scss";
.why-us {
  margin-top: 4rem;
  h3 {
    font-weight: bold;
    color: #242424;
  }
  .why__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-top: 4rem;
    margin-bottom: 2rem;
    text-align: center;
    .why-cards {
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.17);
      padding: 1.5rem 2rem;
      border-radius: 4px;
      .why-icons {
        font-size: 2rem;
        padding: 1rem 0;
        color: $primary-color;
      }
      h5 {
        font-weight: 600;
        color: #3d3d3d;
        font-size: 1.1rem;
      }
      p {
        font-size: 0.85rem;
      }
    }
  }
}
</style>