<script>
import axios from 'axios';
import store from '../store';

export default {
    props: {
        filmType: {
            type: String,
            required: true,
        },
        cardTitle: { //title
            type: String,
            required: true,
        },
        cardOriginalTitle: { //original_title
            type: String,
            required: true,
        },
        cardLang: { //original_language
            type: String,
            required: true,
        },
        cardRank: { //vote_average
            type: Number,
            required: true,
        },
        
    },

    data(){
        return {
            store,
        }
    }
}

</script>

<template>

    <div class="card">
        <div class="img-wrapper">
            <img src="/images/the-whale-ph.jpg" alt="" class="poster">
        </div>
        <h3 class="film-type"> {{ filmType }} </h3>
        <h3 class="title"> {{ cardTitle }} </h3>
        <h5 class="original-title"> {{ cardOriginalTitle }} </h5>
        <div class="language"> 
            <img :src="cardLang" alt="">
        </div>
        <p class="ranking"> {{ cardRank.toFixed(0) }} </p>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/_variables' as *;

.card {
    padding: 15px;

    .img-wrapper {


        .poster {
            width: 100px;
        }
    }

    .title {
        font-size: 1rem;
        color: $main-light;
    }

    .original_title, .language, .ranking, .film-type {
        font-size: 0.75rem;
    }

    .language img {
        width: 30px;
        aspect-ratio: 4/3;
        object-fit: cover;
        object-position: center;
    }


}

</style>