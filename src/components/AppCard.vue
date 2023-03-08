<script>
import axios from 'axios';
import store from '../store';

export default {
    props: {
        cardImg: {
            type: String,
            required: true,
        },
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
        maxRank: {
            type: Number,
            required: true,
        },
        currentCard: {
            type: Object,
            required: true,
        }
        
    },

    data(){
        return {
            store,
        }
    },

    methods: {
        setCurrentCard(currentCard){
            this.store.currentCard = currentCard;
            console.log('current currentCard:', this.store.currentCard);

            this.fetchCast();
        },

        fetchCast(){
            // https://api.themoviedb.org/3/tv/559969/credits?api_key=483d15c985307da0fbc47d77970aec89
            // https://api.themoviedb.org/3/movie/559969/credits?api_key=483d15c985307da0fbc47d77970aec89
            const mainUrl = 'https://api.themoviedb.org/3';
            let sectionUrl = ''
            if (this.store.currentCard.title !== undefined){
                sectionUrl = '/movie'
            } else {
                sectionUrl = '/tv'
            }
            const filmId = `/${this.store.currentCard.id}`;
            const CREDITS_CONST = '/credits'
            const apiKey = '483d15c985307da0fbc47d77970aec89';

            axios.get(`${mainUrl}${sectionUrl}${filmId}${CREDITS_CONST}`, {
                params: {
                    api_key: apiKey,
                }
            })
            .then((res)=>{
                this.store.currentCast = res.data.cast;
                console.log('res cast', res.data.cast);
            })
        },
    }
}

</script>

<template>

    <div class="card"
    @click="setCurrentCard(currentCard)"
    >
        <div class="img-wrapper">
            <img :src="cardImg" alt="" class="poster">
        </div>
        <div class="text-wrapper">
            <h3 class="title"> {{ cardTitle }} </h3>
            <h5 class="original-title"> {{ cardOriginalTitle }} </h5>
            <div class="language"> 
                <img :src="cardLang" alt="">
            </div>
            <div class="ranking">
                <font-awesome-icon icon="fa-solid fa-star" 
                :class="['rank-icon', n <= maxRank ? 'full' : '']" 
                v-for="n in 5" />
            </div>
        </div>
        <h3 class="film-type"> {{ filmType }} </h3>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/_variables' as *;

.card {
    // padding: 15px;
    position: relative;

    * {
        margin-bottom: 5px;
    }

    &:hover .img-wrapper img {
        filter: opacity(0.25) brightness(0.5) saturate(50%);

    }

    &:hover .text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 10px;
        color: #fff;
    }

    &:hover .ranking {
        display: flex;
        gap: 5px;
    }
        

    .img-wrapper {


        .poster {
            width: 100%;
            aspect-ratio: 3/4;
            object-fit: cover;
            object-position: center;
        }
    }

    .text-wrapper {
        position: absolute;
        width: 75%;
        padding: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
    }

    .title {
        font-size: 1rem;
    }

    .original_title, .language, .ranking {
        font-size: 0.75rem;

    }

    .ranking {
        display: none;

        .rank-icon {
            color: black;
        }

        .rank-icon.full {
            color: gold;
        }
    }
        

    .language img {
        width: 30px;
        border-radius: 50%;
        aspect-ratio: 1/1;
        object-fit: cover;
        object-position: center;
    }

    .film-type {
        background-color: $main-red;
        color: $main-light;
        font-size: 0.75rem;
        text-transform: uppercase;
        min-width: 100px;
        padding: 10px;
        text-align: center;

        position: absolute;
        bottom: 20px;
        left: 0px;
    }


}

</style>