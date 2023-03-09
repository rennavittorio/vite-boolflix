<script>
import axios from 'axios';
import store from '../store';

export default {
    props: {
        genreList: {
            type: Array,
            required: true,
        }
    },
    data(){
        return {
            store,
        }
    },
}

</script>

<template>

    <select v-model="store.currentGenre" class="genre-filter">
        <option value="undefined" selected>-- select one --</option>
        <option v-for="genre in genreList" :key="genre.id"
        :value="genre.id"
        >
            {{ genre.name }}
        </option>
    </select>

</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/_variables' as *;

.genre-filter {
    background-color: $main-dark;
    color: $main-light;
    border: 2px solid $main-red;
}

</style>