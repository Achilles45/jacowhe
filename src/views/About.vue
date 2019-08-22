<template>
  <div class="about">
    <Navbar />
    <div class="about__wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 about-heading text-right">
            <h4>About Us</h4>
            <p>Your financial partner of choice!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="about__contents mt-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <p
              class="intro"
            >Jacowhe Global Investment Limited is a finance company fully incorporated by the Corporate Affairs Commission "RC: 1317834" in line with the provisions of the Companies and Allied Matters Act 1990. We exist to provide top notch financial services to our exteemed customers. The company offers a wide range of financial services or products ranging from consumer poducts, retail products, wealth creation through investments, project financing, to human capital development and much more. We know how difficult it is to get credit for your day-to-day life or business and we exist to become that partner of choice that helps you grow and live the life of your dreams.</p>
            <p
              class="intro"
            >Our vision is to delivering materials and financial services to all stakeholders in a convenient platform.</p>
            <p
              class="intro"
            >Our mission is to imbibe the core values of creativity and innovation by empowering and upgrading all stakeholders.</p>
          </div>
        </div>
      </div>
    </div>
    <section class="why-us container-fluid">
      <div class="container">
        <div class="row mt-5">
          <div class="col-12 text-center">
            <h4>What makes us different</h4>
            <p>Our core mantra is innovation. We want to really serve you and not just appear to.</p>
          </div>
        </div>
        <div class="why__wrapper">
          <div class="why-cards">
            <i class="fa fa-coffee why-icons"></i>
            <h5>Convenience</h5>
            <p>All our operations are carried out in such a way that it is convenient for our customers. Our in-house team of technology experts has automated the whole process to make it easy and transparent. Almost completely paperless.</p>
          </div>
          <div class="why-cards">
            <i class="fa fa-money why-icons"></i>
            <h5>Affordable</h5>
            <p>Our products are priced with our end users in mind. They are all affordable and very competitive in the market.</p>
          </div>
          <div class="why-cards">
            <i class="fa fa-clone why-icons"></i>
            <h5>Flexible</h5>
            <p>We understand the market so our model gives room for much flexibility. Also, our re-payment plans are also very customized for our exteemed customers</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/_colors.scss";
.about__wrapper {
  width: 100%;
  background: linear-gradient(rgba(4, 9, 30, 0.9), rgba(4, 9, 30, 0.9)),
    url("../assets/about.webp");
  background-position: center;
  background-repeat: no-repeat !important;
  padding: 8rem 0;
  color: #fff;
  .about-heading {
    h4 {
      color: #fff;
      text-transform: uppercase;
      font-size: 2.5rem;
      font-weight: 800;
      letter-spacing: 1px;
      text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.17);
    }
  }
}
.intro {
  font-size: 0.9rem;
  // color: #82868a;
  // letter-spacing: 0.5px;
  // line-height: 1.5;
}
.why-us {
  h4 {
    font-weight: 400;
  }
  .why__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    margin: 2rem 0;
    .why-cards {
      background-color: #fff;
      text-align: center;
      border-radius: 4px;
      padding: 1rem 3rem;
      box-shadow: 0 7px 50px -10px rgba(0, 0, 0, 0.17);
      margin-bottom: 3rem;
      h5 {
        font-size: 1.1rem;
        font-weight: bold;
        color: #3d3d3d;
      }
      p {
        font-size: 0.85rem;
        color: #82868a;
      }
      .why-icons {
        font-size: 1.8rem;
        padding-bottom: 0.8rem;
        color: $primary-color;
        padding-top: 1.2rem;
      }
    }
  }
}
</style>