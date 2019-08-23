<template>
  <section class="team">
    <Navbar />
    <section class="team__heading">
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-12 text-right">
              <h4>Management</h4>
              <p>We have highly qualified people!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="team__contents container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <p>Jacowhe Global Investment Limited has a formidable team of Directors who are Professionals in different sphere of Human endeavours ranging from Accountancy, Administration, Finance, Law, Enterpreneurship, Medical, Marketing, Clergy e.t.c. The board is headed by a chairman whose primary duty is to coordinate the activities of:</p>
          </div>
        </div>
        <div class="row mt-5 mb-5">
          <div class="col-md-2"></div>
          <div class="col-md-4">
            <p>
              <i class="fa fa-check-square"></i>&nbsp;&nbsp; Evaluation and Apraisal Committee
            </p>
            <p>
              <i class="fa fa-check-square"></i>&nbsp;&nbsp; Approval Committee
            </p>
            <p>
              <i class="fa fa-check-square"></i>&nbsp;&nbsp; Monitoring Committee
            </p>
            <p>
              <i class="fa fa-check-square"></i>&nbsp;&nbsp; Risk and Asset Management Committee
            </p>
            <p>
              <i class="fa fa-check-square"></i>&nbsp;&nbsp; Project Committee
            </p>
          </div>
          <div class="col-md-4">
            <p>
              <i class="fa fa-check-square"></i>&nbsp;&nbsp; Funds Management Committee
            </p>
            <p>
              <i class="fa fa-check-square"></i>&nbsp;&nbsp; Audit Committee
            </p>
            <p>
              <i class="fa fa-check-square"></i>&nbsp;&nbsp; Legal Committee
            </p>
            <p>
              <i class="fa fa-check-square"></i>&nbsp;&nbsp; Management Committee
            </p>
          </div>
          <div class="col-md-2"></div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <P>
              We therefore seek your unalloyed support and co-operation to positively make an impact on our economy.
              <br />
              <br />Elder Owhebuteme J. O.
              <br />
              <small>Managing Director, Jacowhe Global Investment Limited</small>
            </P>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </section>
</template>
<script>
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";
export default {
  name: "Team",
  components: {
    Navbar,
    Footer
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/_colors.scss";
.team__heading {
  width: 100%;
  background: linear-gradient(rgba(4, 9, 30, 0.9), rgba(4, 9, 30, 0.9)),
    url("../assets/picture1.jpeg");
  background-position: center;
  background-repeat: no-repeat !important;
  padding: 8rem 0;
  color: #fff;
  h4 {
    color: #fff;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: 1px;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.17);
  }
}
.team__contents {
  margin-top: 3rem;
}
</style>