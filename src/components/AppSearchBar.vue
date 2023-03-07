<script>
import axios from 'axios';
import store from '../store';

export default {
    data(){
        return {
            store,
            currentQuery: '',
        }
    },

    methods: {
        setQuery(){
            if (this.currentQuery.trim() !== ''){
                this.store.filmQuery = this.currentQuery;
                console.log('query set:', this.store.filmQuery);
                this.currentQuery = '';
            } else {
                this.currentQuery = '';
                alert('pls insert a valid query')
            }
        }
    },
}

</script>

<template>

    <div class="searchbar">
        {{ currentQuery }}
        <input 
        type="text" placeholder="insert here..."
        v-model="currentQuery"
        @keyup.enter="setQuery()"
        >
    </div>

</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/_variables' as *;

.searchbar {

    input {
        padding: 10px;
        border-color: $main-red;
        background-color: #000;
        color: $main-light;
    }

}

</style>