<template>
  <section class="contact">
    <Navbar />
    <div class="contact__wrapper container-fluid">
      <div class="container">
        <div class="row heading">
          <div class="col-md-12 text-right">
            <h4>Contact Us!</h4>
            <p>Reach out to us today!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="contact__details container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <h4>
              Do you Need any assitance?
              <br />Talk to us now!
            </h4>
            <p>We promise top notch customer support. Reach out to us for any queries and the customer support team will get back in less than 24 hours.</p>
            <br />
            <h5>
              <i class="fa fa-home contact-icons"></i>&nbsp;&nbsp; Head Office
            </h5>
            <p>Abighe Street, Omovutotu Lane, Ozoro, Isoko North L.G.A, Delta State, Nigeria.</p>
            <h5>
              <i class="fa fa-envelope"></i>&nbsp;&nbsp; Support Email
            </h5>
            <p>jgiltd.org.ng@gmail.com</p>
            <h5>
              <i class="fa fa-phone contact-icons"></i>&nbsp;&nbsp; Phone
            </h5>
            <div class="phone-wrapper d-flex justity-content-between pr-2">
              <p>08037530271</p>&nbsp;&nbsp;
              <p>08077316791</p>&nbsp;&nbsp;
              <p>08179993299</p>&nbsp;&nbsp;
            </div>
            <h5>
              <i class="fa fa-tags"></i>&nbsp;&nbsp; Working Hours
            </h5>
            <p>
              Mondays to Fridays
              <br />9.00am to 5.00pm
            </p>
          </div>
          <div class="col-md-7">
            <img src="../assets/girl1.png" class="img-fluid" alt />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>
<script>
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";
export default {
  name: "Contact",
  components: {
    Navbar,
    Footer
  }
};
</script>
<style lang="scss" scoped>
.contact__wrapper {
  background: linear-gradient(rgba(4, 9, 30, 0.9), rgba(4, 9, 30, 0.9)),
    url("../assets/world_map.png");
  padding: 8rem 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100% !important;
  color: #fff;
  .heading {
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
.contact__details {
  padding: 4rem 0;
  background: #fafafa;
  h4 {
    text-transform: capitalize;
    font-size: 1.8rem;
    font-weight: 800;
    color: #3d3d3d;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.17);
  }
  h5 {
    font-weight: 600;
    padding-top: 1rem;
    font-size: 0.9rem;
  }
  p {
    font-size: 0.88rem;
  }
}
</style>