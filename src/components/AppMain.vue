<script>
import axios from 'axios';
// import { useAttrs } from 'vue';
import store from '../store';

import AppCard from './AppCard.vue';

export default {
    components: {
        AppCard,
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
                    console.log('whole list', this.store.filmList);
                    if(el === '/search/movie'){
                        this.store.onlyFilmList = res.data.results;
                        console.log('only films:', this.store.onlyFilmList);
                    } else {
                        this.store.onlyTvList = res.data.results;
                        console.log('only tv:', this.store.onlyTvList);
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
    },

    watch: {
        filmQuerySet(){
            this.fetchFilms();
        }
    },

    computed: {
        filmQuerySet(){
            return this.store.filmQuery;
        },

        reducedSeriesList(){
            return this.store.onlyTvList.splice(0,5);
        },

        reducedFilmList(){
            return this.store.onlyFilmList.splice(0,5);
        }
    },

    created() {
        this.fetchFilms()

    }
}

</script>

<template>

    <main class="main">

        <div class="container">
            <h1>Tv series</h1>
            <div class="grid">

                <AppCard 
                v-for="film in reducedSeriesList" :key="film.id"
                :filmType="film.title !== undefined ? 'film' : 'tv series'"
                :cardTitle="film.title !== undefined ? film.title : film.name" 
                :cardOriginalTitle="film.original_title !== undefined ? film.original_title : film.original_name" 
                :cardLang="setFlag(film)" 
                :cardRank="film.vote_average" />

            </div>
        </div>

        <div class="container">
            <h1>Films</h1>
            <div class="grid">

                <AppCard 
                v-for="film in reducedFilmList" :key="film.id"
                :filmType="film.title !== undefined ? 'film' : 'tv series'"
                :cardTitle="film.title !== undefined ? film.title : film.name" 
                :cardOriginalTitle="film.original_title !== undefined ? film.original_title : film.original_name" 
                :cardLang="setFlag(film)" 
                :cardRank="film.vote_average" />

            </div>
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
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
    }
}

</style>