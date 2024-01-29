<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-holder">
                <div class="footer-logo">
                    <img src="@/assets/images/logoTwo.png" alt="">
                    <span>© 2022 AVL network Co., LTD. All Rights Reserved.</span>
                </div>
                <div class="footer-ul">
                    <ul>
                        <li class="first">Links</li>
                        <router-link to="/about">About</router-link>
                        <router-link to="/services">Services</router-link>
                        <!-- <router-link to="/tech">Tech Stack</router-link> -->
                        <router-link to="/contact">Contact</router-link>
                    </ul>
                    <ul>
                        <li class="first">Elsewhere</li>
                        <li><a href="mailto:info@avlgp.com">Email</a></li>
                        <li><a href="tel:+66820780002">Phone</a></li>
                        <li @click="sfds()"><p href="#">Tax Id</p></li>
                    </ul>
                </div>
            </div>
            
        </div>
          <div class="effectt">
            <div ref="blob" class="blobb alt"></div>
          </div>
        <!-- <img src="@/assets/image/blur.png" alt="" class="blurry"> -->
    </footer>
    
</template>

<script setup>
 const sfds = () =>{
    alert('Tax Identification Number: 0105565005522')
 }
</script>

<style lang="scss" scoped>

    .hide{
        width: max-content;
        display: none;
    }
</style>