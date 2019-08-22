<template>
  <section class="investor">
    <Navbar />
    <section class="investor__heading">
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-12 text-right">
              <h4>Become an Investor</h4>
              <p>Let your money work for you!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="investor__contents container-fluid">
      <div class="container">
        <div class="row mb-2">
          <div
            class="col-12 text-center"
          >Making investments into Jacowhe Global Investment Limited is one of the best investments decision you will ever make. The importance of investing in secured investment vehicles can't be over over emphasized. We have very competitive investments products through which you can grow your money through interests and other incomes. The good news is that you don't have to break the bank to be able to invest. There is an opportunity for everyone. I'd to good to have onboard as an exteemed shareholder.</div>
        </div>
        <div class="row mt-5">
          <div class="col-md-6">
            <h4>Why Do We Need Shareholders</h4>
            <p>Jacowhe Global Investment Limited has been opoerating on partner's fund since inception to date. Due to the need for expansion and in pursuant of our vision of becoming one of the leading financial institution in the near future, hence this invitation to the public to invest in shares.</p>
            <p>Investing on shares will increase the capital base/working capital of the company with a view of fulfilling and exceeding the CBN(Central Bank Of Nigeria) statutory requirements.</p>
            <p>In summary, we need shareholders for the following reasons:</p>
            <p>
              <i class="fa fa-check-square"></i>&nbsp; On the ongoing concern(continuity of the orgnization to infinity)
            </p>
            <p>
              <i class="fa fa-check-square"></i>&nbsp; Expansion model
            </p>
            <p>
              <i class="fa fa-check-square"></i>&nbsp; Investment in medium and long term investments
            </p>
            <p>
              <i class="fa fa-check-square"></i>&nbsp; Acquisition of more assets for the company
            </p>
            <p>
              <i class="fa fa-check-square"></i>&nbsp; Make provision for reserve from profits as required by status(Law)
            </p>
            <p>
              <i class="fa fa-check-square"></i>&nbsp; In pursuant of the company's vision of becoming one of the leading financial institution in the near future
            </p>
          </div>
          <div class="col-md-6">
            <img src="../assets/products.png" class="img-fluid shareholder-img" alt />
            <p>
              <i class="fa fa-check-square"></i>&nbsp; Micro Economic Empowerment in line with the United Nation's tenets of Sustainable Developmental Goals.
            </p>
            <p>
              <i class="fa fa-check-square"></i>&nbsp; Human Capital Development.
            </p>
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
  name: "Shareholder",
  components: {
    Navbar,
    Footer
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/_colors.scss";
.investor__heading {
  width: 100%;
  background: linear-gradient(rgba(4, 9, 30, 0.9), rgba(4, 9, 30, 0.9)),
    url("../assets/investor2.jpg");
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
.investor__contents {
  margin-top: 4rem;
  h4 {
    font-weight: bold;
    padding-bottom: 0.5rem;
    padding-top: 1rem;
  }
  p {
    font-size: 0.88rem;
  }
}
.shareholder-img {
  margin: 2.5rem 0;
}
</style>