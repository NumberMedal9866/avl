<template>
    <div class="container nav1">
        <nav class="nav">
            <ul>
                <li><router-link to="/" class="nill"><img src="@/assets/images/logoTwo.png" alt=""></router-link></li>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <!-- <li><router-link to="/projects">Work</router-link></li> -->
                <li><router-link to="/tech">Services</router-link></li>
                <!-- <li><router-link to="/Contact">Contact/Info</router-link></li> -->
            </ul>
            <div class="nav-item">
                <div class="nav-item-links">
                    <a href="mailto:info@avlgp.com"><img src="@/assets/images/email.svg" alt=""></a>
                    <a href="tel:+66820780002"><img src="@/assets/images/phone.svg" alt=""></a>
                    <!-- <a href="https://twitter.com/alexander_webdv" target="_blank"><img src="@/assets/images/twitter.svg" alt=""></a>                    -->
                </div>
                <img src="@/assets/images/Sun.svg" class="nav-item-links-theme" alt="" v-if="sdf">
            </div>
        </nav>
    </div>
</template>

<script setup>

</script>