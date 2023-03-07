<script>
import axios from 'axios';
import { useAttrs } from 'vue';
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
            const sectionUrl = '/search/movie';
            const completeUrl = mainUrl + sectionUrl;

            const apiKey = '483d15c985307da0fbc47d77970aec89';

            console.log('fetching films done')
            axios.get(completeUrl, {
                params: {
                    api_key: apiKey,
                    language: 'en-US',
                    query: this.store.filmQuery,
                }
            })
            .then((res)=>{
                this.store.filmList = res.data.results
                console.log(this.store.filmList);

            })
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
                v-for="film in store.filmList" :key="film.id"
                :cardTitle="film.title" 
                :cardOriginalTitle="film.original_title" 
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
        grid-template-columns: repeat(6, 1fr);
        gap: 10px;
    }
}

</style>