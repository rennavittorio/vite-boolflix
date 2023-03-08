<script>
import axios from 'axios';
// import { useAttrs } from 'vue';
import store from '../store';

import AppCard from './AppCard.vue';
import AppDetailedCard from './AppDetailedCard.vue';

export default {
    components: {
        AppCard,
        AppDetailedCard,
    },

    data(){
        return {
            store,
        }
    },

    methods: {
        fetchFilms(){
            const mainUrl = 'https://api.themoviedb.org/3';
            const sectionUrl = ['/search/movie', '/search/tv'];

            const apiKey = '483d15c985307da0fbc47d77970aec89';

            console.log('fetching films done')

            sectionUrl.forEach((el) => {
                const completeUrl = mainUrl + el;
                axios.get(completeUrl, {
                    params: {
                        api_key: apiKey,
                        language: 'en-US',
                        query: this.store.filmQuery,
                    }
                })
                .then((res)=>{
                    this.store.filmList = res.data.results
                    if(el === '/search/movie'){
                        this.store.onlyFilmList = res.data.results;
                        // console.log('only films:', this.store.onlyFilmList);
                    } else {
                        this.store.onlyTvList = res.data.results;
                        // console.log('only tv:', this.store.onlyTvList);
                    }
    
                })
                
            });
        },

        setFlag(film){
            let filmFlag = '';
            switch(film.original_language){
                case 'it':
                    filmFlag = '/images/it-flag.svg';
                    break;
                case 'en':
                    filmFlag = '/images/uk-flag.png';
                    break;
                default:
                    filmFlag = '/images/rest-flag.png';
            }

            return filmFlag;
        },

        convertedVote(film){
            return Math.floor(film.vote_average / 2);
        },
    },

    watch: {
        filmQuerySet(){
            this.fetchFilms();
        }
    },

    computed: {
        allFilmList(){
            // return this.store.onlyFilmList.concat(this.store.onlyTvList)
            return [...this.store.onlyFilmList, ...this.store.onlyTvList]
        },
        filmQuerySet(){
            return this.store.filmQuery;
        },

    },

    created() {
        this.fetchFilms()

    }
}

</script>

<template>

    <main class="main">

        <div class="container">

            <div class="grid">

                <AppCard 
                v-for="film in allFilmList" :key="film.id"
                :currentCard="film"
                :cardImg="film.poster_path !== null ? `https://image.tmdb.org/t/p/w500${film.poster_path}` : '/images/img-not-found.png'"
                :filmType="film.title !== undefined ? 'film' : 'tv series'"
                :cardTitle="film.title !== undefined ? film.title : film.name" 
                :cardOriginalTitle="film.original_title || film.original_name" 
                :cardLang="setFlag(film)"
                :maxRank="convertedVote(film)" />

            </div>

            <AppDetailedCard
            :class="['hover-card', store.currentCard !== undefined ? 'active' : '']"
            />

        </div>

    </main>


</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/_variables' as *;

.main {
    background-color: $main-grey;

    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        padding: 20px 0;
    }

}


.hover-card {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;


    &.active {
        display: block;
    }
}

</style>