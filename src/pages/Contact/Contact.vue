<template>
    <div class="logo-mob">
        <img src="@/assets/images/logoThree.png" alt="">
    </div>
    <div class="contact-header container">
        <h1>Get in touch</h1>
        <span>Let's work together.</span>
            <div class="effectt">
                <div ref="blob al" class="blobb al"></div>
            </div>
    </div>
    <div class="header-line"></div>
    <div class="container">
        <div class="message">
            <div class="message-nav">
                <img src="@/assets/images/mac.svg" alt="">
                <p>Our contact information</p>
            </div>
            <div class="message-main">
                <form @submit.prevent="handleSubmit" ref="form">
                    <div class="message-main-input">
                        <span>Email:</span>
                        <span>info@artcosgrp.com</span>
                    </div>
                    <div class="message-main-input">
                        <span>Number:</span>
                        <span>+66820780002</span>
                    </div>
                    <div class="message-main-input">
                        <span>Tax Id Number:</span>
                        <span>0105565005522</span>
                    </div>
                    <span class="message-main-address">Address:</span>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.8869259157639!2d100.56511820732361!3d13.7321468298223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f028e9e1de7%3A0xb100bede8f20a1ad!2s25%20Sukhumvit%20Rd%2C%20Khwaeng%20Khlong%20Tan%2C%20Khet%20Khlong%20Toei%2C%20Krung%20Thep%20Maha%20Nakhon%2010110%2C%20Thailand!5e0!3m2!1sen!2s!4v1703347367752!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </form>
            </div>
        </div>
    </div>
    <div class="header-line"></div>

</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const form = ref(null);

const handleSubmit = () => {
    setTimeout(() => {
        emailjs.sendForm('service_g5afzjp', 'template_dbx3kjh', form.value, 'D9IhY7x-ylH7EhbZQ')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            alert("Your From has been submitted, please wait for me to get in touch with you")
        })
        .catch((error) => {
            console.log('FAILED...', error.text);
        });
        // form.value=''
        // window.location.reload()
    }, 2000);
}
</script>

<style lang="scss" scoped>

</style>