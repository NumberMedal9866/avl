<template>
            <div class="logo-mob">
                <img src="@/assets/images/logoMob.svg" alt="">
            </div>
    <div class="projects">
        <div class="projects-title container">
            <h1>Our services</h1>
            <span>What our company can offer you, to solve your problems</span>
            <div class="effectt">
                <div ref="blob al" class="blobb al"></div>
            </div>
        </div>
        <div class="header-line"></div>
            <div class="card-holder container top">
                <div class="card dop">
                    <div class="card-info">
                        <!-- <img src="@/assets/images/Subbi.svg" alt=""> -->
                        <h3>CYBERSECURITY & PRIVACY</h3>
                        <p>Our IT solutions carve the path for organizations to modernize infrastructure and optimize workflow like never before. This service provides a wide variety of technological capabilities to boost efficiencies, enhance security and allow infinite scalability for future growth. With this resource and our expertise, we’ll help maximize your organization’s productivity.</p>
                        <a href="https://vuecinephile.vercel.app/#/" target="_blank">Visit site</a>
                    </div>
                    <img src="@/assets/images/security.svg" alt="" class="card-info-img proj">
                </div>
                <div class="card dop">
                    <div class="card-info">
                        <!-- <img src="@/assets/images/Subbi.svg" alt=""> -->
                        <h3>INFRASTRUCTURE MANAGEMENT</h3>
                        <p>In today’s hyperconnected world, organizations are challenged in more ways than ever to stay ahead of the curve. This comprehensive service is designed to fit your unique needs without disrupting productivity or workflow. With our end-to-end solutions, forestgroup is sure to help your organization succeed.</p>
                        <a href="https://pearmarket.vercel.app/#/" target="_blank">Visit site</a>
                    </div>
                    <img src="@/assets/images/infrastructure.svg" alt="" class="card-info-img proj">
                </div>
                <div class="card dop">
                    <div class="card-info">
                        <!-- <img src="@/assets/images/Subbi.svg" alt=""> -->
                        <h3>NETWORK SERVICES</h3>
                        <p>Enabling your workforce with top-notch technologies isn’t just important, but imperative for business success. This customizable solution allows your team to work seamlessly and collaboratively in a protected space. No matter what IT services you need, forestgroup will be there to support you every step of the way.</p>
                        <a href="https://pearmarket.vercel.app/#/" target="_blank">Visit site</a>
                    </div>
                    <img src="@/assets/images/internet.svg" alt="" class="card-info-img proj">
                </div>
            </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
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
    padding: 20px;
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
 .projects-title{
    position: relative;
    overflow-x: clip;
 }
 .dop{
    img{
        width: 300px;
    }
 }
</style>