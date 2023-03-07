<script>
import axios from 'axios';
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
    }
}

</script>

<template>

    <main class="main">

        <div class="container">
            <div class="grid">

                <AppCard />
                <AppCard />
                <AppCard />

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