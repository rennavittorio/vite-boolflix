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
  <div>

    <div class="container">

        <div class="row">

            <div class="logo-wrapper">
                <img src="/images/netflix-logo.jpg" alt="netflix-logo">
            </div>

            <div class="searchbar">
                <input type="text" placeholder="insert here...">
            </div>

        </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/_variables' as *;

* {
    background-color: #000;
    color: $main-light;
}

.container {

    .row {
        justify-content: space-between;
        align-items: center;
    }
}
.logo-wrapper {
    width: 75px;
}

.searchbar {

    input {
        padding: 10px;
        border-color: $main-red;
    }
    
}

</style>