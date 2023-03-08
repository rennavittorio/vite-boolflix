<script>
import axios from 'axios';
import store from '../store';

export default {
    data(){
        return {
            store,
        }
    },

    methods: {
        resetCurrentCard(){
            this.store.currentCard = undefined;
            console.log('current id from x:', this.store.currentCard)
        }
    }
}

</script>

<template>

    <div class="detailed-card">
        <div class="img-wrapper">
            <img src="/images/the-whale-ph.jpg" alt="">
        </div>
        <div class="text-wrapper">
            <h1 class="title">
                Title...
            </h1>
            <p class="description">
                Description...
            </p>
            <ul>Cast
                <li>Cast member...</li>
            </ul>
        </div>
        <div class="btn-esc"
        @click="resetCurrentCard()">
            x
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/_variables' as *;

.detailed-card {
    width: 50%;
    aspect-ratio: 1/1;
    border-radius: 20px;
    background-color: $main-light;
    color: $main-dark;
    box-shadow: 10px 5px 20px $main-dark;

    position: relative;


    .img-wrapper {
        width: 100%;
        aspect-ratio: 16 / 5;
        border-radius: 20px;

        img {
            width: 100%;
            border-radius: 20px 20px 0 0;
            aspect-ratio: 16/5;
            object-fit: cover;
            object-position: center;
        }
    }

    .text-wrapper {
        padding: 20px;
    }


    .btn-esc {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 700;
        color: $main-light;
        cursor: pointer;
        background-color: $main-red;
    }
}

</style>