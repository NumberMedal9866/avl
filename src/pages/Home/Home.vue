<template>
            <div class="logo-mob">
                <img src="@/assets/images/logoThree.png" alt="">
            </div>
    <header class="headerr container">
        <div class="container">
            <div class="title">
                <h1>AVL NETWORKS CO., LTD</h1>
                <h1>RESPONSIBLE CORPORATION</h1>
                <img src="@/assets/images/logoTwo.png" alt="">
                <div class="effectt">
                    <div ref="blob al" class="blobb al"></div>
                </div>
            </div>
            <div class="title-ad">
                <div class="title-ad-f title-ad-s">
                    <span>AVL NETWORKS</span>
                    <img src="@/assets/images/handshake.svg" alt="">
                </div>
                <div class="title-ad-s">
                    <!-- <span>RESPONSIBLE CORPORATION</span> -->
                    <h3>RESPONSIBLE CORPORATION</h3>
                <div class="effectt">
                    <div ref="blob al" class="blobb al"></div>
                </div>
                </div>
            </div>
            <p>AVL networks provides a variety of innovative and comprehensive IT solutions. We deliver quality services in the most efficient way, and our experts will work collaboratively with you to customize our offerings to your particular needs. Book a meeting with one of our consultants to hear more about how we can assist your operation.</p>
            <div class="btn-holder">
                <div><router-link to="/services">See our services</router-link></div>
                <div><router-link to="/contact">Our info</router-link></div>
            </div>
            <!-- <img class="avatar" src="@/assets/images/logoTwo.png" alt="">   -->
        </div>
    </header>
    <!-- тут я удалииииллллл -->
    <section class="container"> 
        <div class="container">
            <h2 class="work">About us</h2>
            <div class="card-holder">
                <div class="card hidden">
                    <div class="card-info">
                        <!-- <img src="@/assets/images/Subbi.svg" alt=""> -->
                        <h3>What we do</h3>
                        <p>AVL networks operates in the markets of digital, industrial, and construction products. Despite its relatively short existence, the company holds a significant position in the market, contributing to the rapid development of the country's economy. The main focus lies in supplying equipment, materials, spare parts, and special equipment to businesses of varying sizes. Our operations extend to countries like China, South Korea, Taiwan, Thailand, UAE, CIS, USA, and EU member states. Notably, we maintain no direct or indirect associations with countries included in the sanctions list (OFAC).</p>
                        <!-- <a href="https://vuecinephile.vercel.app/#/" target="_blank">Visit site</a> -->
                        <router-link to="/services">Our services ➔</router-link>
                    </div>
                    <img src="@/assets/images/logo.png" alt="" class="card-info-img proj">
                </div>
                <div class="card hidden">
                    <div class="card-info">
                        <!-- <img src="@/assets/images/Subbi.svg" alt=""> -->
                        <h3>Thriving in Digital Appliance Innovation</h3>
                        <p class="alter uno">The production and sale of digital and home appliances stand as promising sectors in our activities. This domain is highly competitive, encompassing personal computers, smartphones, tablets, laptops, and other high-tech equipment integral to modern life. Beyond product supply, our company offers comprehensive transportation services for goods worldwide via any mode of transport. While we cover a broad spectrum of transport services, our primary focus remains on delivering cargo according to the most convenient and cost-effective scheme for the cargo owner. Additionally, we specialize in sourcing necessary products or partners, installation, supervision, and technical support for supplied products. As a young but rapidly evolving company, we've forged partnerships with major manufacturers. Our core ethos centers on being customer-oriented, constantly striving for improvement in this direction. Our team's reality reflects a multitude of successfully completed orders, a robust base of loyal customers, collaborations with industry leaders, and an unwavering commitment to service quality.</p>
                        <p class="alter dos">
                        We excel in digital and home appliances, offering competitive products like computers, smartphones, tablets, and more. Our focus is on global transportation services, ensuring efficient and cost-effective delivery. Additionally, we specialize in product sourcing, installation, and technical support. With strong partnerships and a customer-first approach, we've built a track record of successful orders and loyal customers.
                        </p>
                        <router-link to="/services">Our services ➔</router-link>
                    </div>
                    <!-- <img src="@/assets/images/pearlogo.png" alt="" class="card-info-img project"> -->
                </div>

            </div>
        </div>
    </section>
    <section class="container">
        <div class="container">
            <h2 class="work gap">Our contact information</h2>
            <div class="message">
                <div class="message-nav">
                    <img src="@/assets/images/mac.svg" alt="">
                    <p>Our contact information</p>
                </div>
                <div class="message-main">
                    <form @submit.prevent="handleSubmit" ref="form">
                        <div class="message-main-input">
                            <span>Email:</span>
                            <span>info@avlgp.com</span>
                        </div>
                        <div class="message-main-input">
                            <span>Number:</span>
                            <span>+66 820 780 002</span>
                        </div>
                        <div class="message-main-input">
                            <span>Tax Id Number:</span>
                            <span>0105566117715</span>
                        </div>
                        <span class="message-main-address">Address:</span>
                        <!-- <iframe class="fir" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.8869259157639!2d100.56511820732361!3d13.7321468298223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f028e9e1de7%3A0xb100bede8f20a1ad!2s25%20Sukhumvit%20Rd%2C%20Khwaeng%20Khlong%20Tan%2C%20Khet%20Khlong%20Toei%2C%20Krung%20Thep%20Maha%20Nakhon%2010110%2C%20Thailand!5e0!3m2!1sen!2s!4v1703347367752!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <iframe class="nd" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.8869259157639!2d100.56511820732361!3d13.7321468298223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f028e9e1de7%3A0xb100bede8f20a1ad!2s25%20Sukhumvit%20Rd%2C%20Khwaeng%20Khlong%20Tan%2C%20Khet%20Khlong%20Toei%2C%20Krung%20Thep%20Maha%20Nakhon%2010110%2C%20Thailand!5e0!3m2!1sen!2s!4v1703347367752!5m2!1sen!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
                        <iframe class="fir" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.3772974210397!2d100.60040077174995!3d13.695583957275005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ff1b7af3635%3A0xf4aa4c8643dbcbef!2zMzAgU29pIFN1a2h1bXZpdCA2Miwg4LmB4LiC4Lin4LiH4Lie4Lij4Liw4LmC4LiC4LiZ4LiH4LmD4LiV4LmJIEtoZXQgUGhyYSBLaGFub25nLCBLcnVuZyBUaGVwIE1haGEgTmFraG9uIDEwMjYwLCBUaGFpbGFuZA!5e0!3m2!1sen!2s!4v1706510817073!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <iframe class="nd" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.3772974210397!2d100.60040077174995!3d13.695583957275005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ff1b7af3635%3A0xf4aa4c8643dbcbef!2zMzAgU29pIFN1a2h1bXZpdCA2Miwg4LmB4LiC4Lin4LiH4Lie4Lij4Liw4LmC4LiC4LiZ4LiH4LmD4LiV4LmJIEtoZXQgUGhyYSBLaGFub25nLCBLcnVuZyBUaGVwIE1haGEgTmFraG9uIDEwMjYwLCBUaGFpbGFuZA!5e0!3m2!1sen!2s!4v1706510817073!5m2!1sen!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <div class="header-line"></div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';

const observer = ref(null); // Initialize the observer as null

// Define a function to initialize the Intersection Observer
const initializeObserver = () => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
};

// Call the initializeObserver function when the component is mounted
onMounted(() => {
  initializeObserver();
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.value.observe(el));
});

// Clean up the observer when the component is unmounted
onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>

<style lang="scss" scoped>
    .sdf{
        color: red;
    }
     .projects{
    &-title{
        margin-bottom: 60px;
        span{
            color: #80808080;
            font-family: I4;
            font-weight: 400;
            font-size: 24px;
            letter-spacing: -0.456px;
            // @include media(500){
            //     font-size: 16px;
            // }
        }
    }
 }
 .top{
    margin-top: 60px;
 }
 .proj{
    position: inherit;
    width: 315px;
    margin-left: 100px;
    padding: 30px;
    border-radius: 32px;
    border: 1px solid #383737;
 }
 .project{
    position: inherit;
    width: 280px;
    // height: 200px;
    margin-left: 100px;
    padding: 60px;
    border-radius: 32px;
    border: 1px solid #383737;
    background: white;
 }
</style>