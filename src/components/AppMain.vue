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
            let genreSelected = this.store.currentGenre;
            const apiKey = '483d15c985307da0fbc47d77970aec89';

            console.log('fetching FILMS done')

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
                    if(el === '/search/movie'){
                        this.store.onlyFilmList = res.data.results;
                        // console.log('only films:', this.store.onlyFilmList);
                    }
                    if (el === '/search/tv'){
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
            return [...this.store.onlyFilmList, ...this.store.onlyTvList].sort((a,b) => ((a.name || a.title) > (b.name || b.title)) ? 1 : ((a.name || a.title) < (b.name || b.title) ? -1 : 0))
        },
        filmQuerySet(){
            return this.store.filmQuery;
        },
        castToFive(){
            return this.store.currentCast.slice(0, 5)
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

            <div :class="['grid', store.currentCard !== undefined ? 'blurred' : '' ]">

                <AppCard
                v-for="film in allFilmList" :key="film.id"
                :currentCard="film"
                :cardImg="film.poster_path !== null ? `https://image.tmdb.org/t/p/w500${film.poster_path}` : '/images/img-not-found.png'"
                :filmType="film.title !== undefined ? 'film' : 'tv series'"
                :cardTitle="film.title !== undefined ? film.title : film.name" 
                :cardOriginalTitle="film.original_title || film.original_name" 
                :cardLang="setFlag(film)"
                :maxRank="convertedVote(film)" 
                :class="['card-filtered', film.genre_ids.includes(store.currentGenre) || store.currentGenre === 'undefined' ? '' : 'not-shown' ]"
                />

            </div>

            <AppDetailedCard
            :cardImg="store.currentCard === undefined ? '/images/img-not-found.png' : `https://image.tmdb.org/t/p/w500${store.currentCard.poster_path}` || '/images/img-not-found.png'"
            :cardTitle="store.currentCard === undefined ? 'ph' : store.currentCard.title || store.currentCard.name"
            :cardOverview="store.currentCard === undefined ? 'ph' : store.currentCard.overview"
            :cardCast="castToFive"
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


        &.blurred {
            filter: blur(5px) brightness(0.5);
        }

        .card-filtered.not-shown {
            display: none;
        }
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