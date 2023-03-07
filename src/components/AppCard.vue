<script>
import axios from 'axios';
import store from '../store';

export default {
    data(){
        return {
            store,
        }
    }
}

</script>

<template>

    <div class="card">
        <img src="/images/the-whale-ph.jpg" alt="" class="poster">
        <h3 class="title">title...</h3>
        <h5 class="original-title">original title...</h5>
        <p class="language">ita...</p>
        <p class="ranking">5...</p>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/_variables' as *;

.card {
    padding: 10px;

    .poster {
        width: 232px;
    }

}

</style>