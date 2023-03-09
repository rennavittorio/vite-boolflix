<script>
import axios from 'axios';
import store from '../store';

import AppSearchBar from './AppSearchBar.vue';
import AppGenreFilter from './AppGenreFilter.vue';

export default {
    components: {
        AppSearchBar,
        AppGenreFilter,
    },

    data(){
        return {
            store,
        }
    },

    methods: {
        fecthGenres(){
            const mainUrl = 'https://api.themoviedb.org/3/genre';
            const sectionUrl = ['/movie', '/tv'];
            const finalUri = '/list'

            const apiKey = '483d15c985307da0fbc47d77970aec89';

            console.log('fetching GENRES done')

            sectionUrl.forEach((el) => {
                const completeUrl = mainUrl + el + finalUri;
                axios.get(completeUrl, {
                    params: {
                        api_key: apiKey,
                    }
                })
                .then((res)=>{
                    if(el === '/movie'){
                        this.store.genresFilmsList = res.data.genres;
                        // console.log('genres films:', this.store.genresFilmsList);
                    } else {
                        this.store.genresTvList = res.data.genres;
                        // console.log('genres tv:', this.store.genresTvList);
                    }
    
                })
                
            });
        },

        setCurrentGenre(){
            console.log(this.store.currentGenre);
        }
    },

    computed: {
        allGenresList(){
            let allGenresDuplicateList = [...this.store.genresFilmsList, ...this.store.genresTvList];
            let idsList = allGenresDuplicateList.map(genre => genre.id);
            let filteredGenreList = allGenresDuplicateList.filter(({ id }, index) => !idsList.includes(id, index + 1))
            return filteredGenreList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        }
    },

    created(){
        this.fecthGenres();
    }

}

</script>

<template>

    <header class="header">
        <div class="container">
    
            <div class="row">
    
                <div class="logo-wrapper">
                    <img src="/images/netflix-logo.jpg" alt="netflix-logo">
                </div>

                <AppGenreFilter
                @change="setCurrentGenre()"
                :genreList="allGenresList" 
                />

                <AppSearchBar />
    
            </div>
    
        </div>

    </header>

</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/_variables' as *;

.header {
    background-color: #000;
    color: $main-light;
}

.container {


    .row {
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
    }
}
.logo-wrapper {
    width: 75px;
    margin-right: auto;
}

</style>