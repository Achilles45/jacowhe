<template>
  <section class="products">
    <Navbar />
    <section class="products__heading">
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-12 text-right">
              <h4>Our Products</h4>
              <p>We offer a broad range of products!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="products__contents container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6 col-sm-12 col-xs-12 text-center products-title">
            <h4>Products that makes us standout.</h4>
            <p>The company has a wide array of products to offer you in order to serve you better. Our pricing is also very competitive.</p>
          </div>
          <div class="col-md-3"></div>
        </div>
        <div class="products-wrapper">
          <div class="products-cards">
            <i class="fa fa-home product-icons"></i>
            <h6>Housing</h6>
            <p>Build that house of your dreams without breaking the bank</p>
          </div>
          <div class="products-cards">
            <i class="fa fa-car product-icons"></i>
            <h6>Assets</h6>
            <p>Let's help you acquire assets that bring more income to you</p>
          </div>
          <div class="products-cards">
            <i class="fa fa-truck product-icons"></i>
            <h6>Supplies</h6>
            <p>We can supply you with inventory/materials while you focus on your core business</p>
          </div>
          <div class="products-cards">
            <i class="fa fa-check-square product-icons"></i>
            <h6>Project Financing</h6>
            <p>You have a feasible and profitable project, come to us today. Let's work together</p>
          </div>
          <div class="products-cards">
            <i class="fa fa-cogs product-icons"></i>
            <h6>Maintenance</h6>
            <p>Accessing credit to repair your assets should not be a problem at all</p>
          </div>
          <div class="products-cards">
            <i class="fa fa-graduation-cap product-icons"></i>
            <h6>Education</h6>
            <p>Don't make excuses of not having your dream education because of money. Come to us</p>
          </div>
          <div class="products-cards">
            <i class="fa fa-bed product-icons"></i>
            <h6>Medical</h6>
            <p>Health is wealth. Taking care of it is the most important investment to make</p>
          </div>
          <div class="products-cards">
            <i class="fa fa-close product-icons"></i>
            <h6>Emergency</h6>
            <p>The raining days some times come uneen. Let's help you wither the storm</p>
          </div>
          <div class="products-cards">
            <i class="fa fa-money product-icons"></i>
            <h6>Salary Advance</h6>
            <p>If you are a salary earner, you can get an overdraft that is competitive in price</p>
          </div>
          <div class="products-cards">
            <i class="fa fa-cubes product-icons"></i>
            <h6>Micro Empowerment</h6>
            <p>Access credit to help you grow your trade easily. it's for SMEs</p>
          </div>
          <div class="products-cards">
            <i class="fa fa-briefcase product-icons"></i>
            <h6>Micro Classics</h6>
            <p>This is targeted at civil and public servants only</p>
          </div>
          <div class="products-cards">
            <i class="fa fa-users product-icons"></i>
            <h6>Marriages</h6>
            <p>We want you to have the best marriage ceremony ever. We truly care</p>
          </div>
          <div class="products-cards">
            <i class="fa fa-leaf product-icons"></i>
            <h6>Agriculture</h6>
            <p>Let's help you extract value from the agricultural value chain</p>
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
  name: "Products",
  components: {
    Navbar,
    Footer
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/_colors.scss";
.products__heading {
  width: 100%;
  background: linear-gradient(rgba(4, 9, 30, 0.9), rgba(4, 9, 30, 0.9)),
    url("../assets/products.png");
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
.products__contents {
  padding: 4.2rem 0;
  .products-title {
    h4 {
      font-size: 1.8rem;
    }
    p {
      padding-bottom: 1.5rem;
    }
  }
}
.products-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 25px;
  .products-cards {
    background-color: #fff;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.14);
    padding: 1.8rem;
    border-radius: 3px;
    .product-icons {
      color: $primary-color;
      font-size: 2rem;
      padding-bottom: 0.5rem;
    }
    h6 {
      font-weight: bold;
    }
    p {
      font-size: 0.85rem;
    }
  }
}
</style>