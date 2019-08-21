<template>
  <section class="how-it-work container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-4 process-heading">
          <h3>How it Works</h3>
          <p>Our process is very simple and straight foward. All you need is to apply for the product that suit your needs, get verified and if approved, the loan will be disbursed immediately.</p>
          <router-link to="/products" class="products-btn">
            See products &nbsp;&nbsp;
            <i class="fa fa-long-arrow-right"></i>
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="process__wrapper">
            <div class="process-card process-box-1">
              <i class="fa fa-check-square process-icons-1"></i>
              <h5 class="heading-1">Select product</h5>
              <p>We have a robust and wide array of products for you as an investor or consumer.</p>
            </div>
            <div class="process-card process-box-2">
              <i class="fa fa-cubes process-icons-2"></i>
              <h5 class="heading-2">Apply</h5>
              <p>Our application process is simple and can be completed in few minutes.</p>
            </div>
            <div class="process-card process-box-3">
              <i class="fa fa-certificate process-icons-3"></i>
              <h5 class="heading-3">Get verified and approved</h5>
              <p>The risk management department would verify and approve your loan upon your application.</p>
            </div>
            <div class="process-card process-box-4">
              <i class="fa fa-money process-icons-4"></i>
              <h5 class="heading-4">Receive funding</h5>
              <p>Get your credit and pay according to the terms of the loan. Yes, it is that simple.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>template
<script>
export default {
  name: "Process"
};
</script>
<style lang="scss" scoped>
@import "../styles/_colors.scss";
//How it works styles
.how-it-work {
  padding: 4rem 0;
  .process__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    .process-card {
      background-color: #fff;
      vertical-align: baseline;
      text-align: center;
      border-radius: 4px;
      padding: 3rem;
      box-shadow: 0 7px 50px -10px rgba(0, 0, 0, 0.17);
      h5 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.85rem;
        color: #82868a;
      }
    }
    .process-box-2,
    .process-box-4 {
      position: relative;
      top: 30%;
    }
  }
  .process-heading {
    h3 {
      padding-bottom: 0.5rem;
    }
    p {
      font-size: 0.88rem;
      padding-bottom: 1.3rem;
    }
  }
  .products-btn {
    background: $primary-color;
    color: #fff;
    text-decoration: none;
    padding: 0.9rem 2.5rem;
    cursor: pointer;
    border-radius: 3px;
  }
  .process-icons-1 {
    background: #edfaef;
    padding: 25px;
    border-radius: 50px;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    color: $primary-color;
  }
  .process-icons-2 {
    background: #fff4de;
    padding: 25px;
    border-radius: 50px;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    color: #ffa906;
  }
  .process-icons-3 {
    background: #efedfc;
    padding: 25px;
    border-radius: 50px;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    color: #8963fb;
  }
  .process-icons-4 {
    background: #e3f5fe;
    padding: 25px;
    border-radius: 50px;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    color: #3bb7f9;
  }
  .heading-1 {
    color: $primary-color !important;
  }
  .heading-2 {
    color: #ffa906 !important;
  }
  .heading-3 {
    color: #8963fb !important;
  }
  .heading-4 {
    color: #3bb7f9 !important;
  }

  //MEDIA QUERIES
  @media only screen and (max-width: 960px) {
    .process-heading {
      margin-bottom: 3rem;
    }
    .process-box-2,
    .process-box-4 {
      position: relative;
      top: 0 !important;
    }
  }
}
</style>