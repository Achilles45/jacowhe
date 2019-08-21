<template>
  <div class="carousel__wrapper">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/picture1.jpeg" alt="First slide" />
          <div class="carousel-caption">
            <h2 class="animated zoomIn animate3d">Helping You Achieve a Better Financial Future</h2>
            <p
              class="animated zoomIn animate3d"
            >Jacowhe Global Investment Limited is your partner of choice that helps you grow your finances and live your dreams. We provide you with customised and well priced products!</p>
            <router-link to="/products" class="carousel-btn animated zoomIn animate3d">See Products</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/image4.jpg" alt="Second slide" />
          <div class="carousel-caption">
            <h2 class="animated slideInLeft animate3d">Grow Your Investment Portfolio with us Today!</h2>
            <p
              class="animated slideInRight animate3d"
            >Don't put all your eggs in one basket. We have a well researched plan for our investors to investment and earn a competitive interest monthly. Don't miss this opportunity.</p>
            <router-link to="/contact" class="carousel-btn animated zoomIn animate3d">Invest Now</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/image1.jpg" alt="Third slide" />
          <div class="carousel-caption">
            <h2
              class="animated slideInDown animate3d"
            >Our Products and Services are highy Customized</h2>
            <p
              class="animated slideInDown animate3d"
            >We have designed our products and services with our customers in mind. Our plans are affordable and higly competitive.</p>
            <router-link to="/products" class="carousel-btn animated zoomIn animate3d">See Products</router-link>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel"
};
</script>
<style lang="scss" scoped>
@import "../styles/_colors.scss";
.carousel__wrapper {
  .carousel-inner {
    position: relative;
  }
  .carousel-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }
  .carousel-img {
    width: auto;
    height: 100%;
    max-height: 520px;
    display: block !important;
    width: 100vw;
  }
  .animate3d {
    animation-duration: 5s;
  }
  .carousel-caption {
    position: absolute;
    top: 25%;
    transform: translateX(-50%, -50%);
    width: 50%;
    margin: 0 auto;
    text h2 {
      font-weight: 800;
      font-size: 2.5rem;
      padding-bottom: 1rem;
      letter-spacing: 0.4px;
    }
    p {
      letter-spacing: 1px;
      font-size: 0.8rem;
      padding-bottom: 0.8rem;
    }
    .carousel-btn {
      color: #fff;
      background: $primary-color;
      padding: 1rem 3rem;
      text-align: center;
      font-size: 0.8rem;
      text-decoration: none;
      border-radius: 3px;
    }
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 50px;
    width: 50px;
    background-color: rgba(0, 0, 0, 0.3) !important;
    background-size: 40%, 40%;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
}

//MEDIA QUERIES
@media only screen and (max-width: 960px) {
  .carousel__wrapper {
    .carousel-img {
      width: auto;
      height: 100%;
      max-height: 600px;
      display: block;
    }
    .carousel-caption {
      position: absolute;
      top: 20%;
      width: 60%;
      margin-right: 1.1rem;
      transform: translateX(-50%, -50%);
      text-align: center;
      h2 {
        font-size: 1.5rem;
        padding-bottom: 1.5rem;
      }
      p {
        font-size: 0.8rem;
        padding-bottom: 1.5rem;
      }
    }
  }
}
</style>