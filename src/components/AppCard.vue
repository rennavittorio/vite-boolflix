<script>
import axios from 'axios';
import store from '../store';

export default {
    props: {    
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
            type: String,
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
        <h3 class="title"> {{ cardTitle }} </h3>
        <h5 class="original-title"> {{ cardOriginalTitle }} </h5>
        <p class="language"> {{ cardLang }} </p>
        <p class="ranking"> {{ cardRank.toFixed(0) }} </p>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/_variables' as *;

.card {
    padding: 10px;

    .img-wrapper {


        .poster {
            width: 100px;
        }
    }

    .title {
        font-size: 1rem;
        color: $main-light;
    }

    .original_title, .language, .ranking {
        font-size: 0.75rem;
    }


}

</style>