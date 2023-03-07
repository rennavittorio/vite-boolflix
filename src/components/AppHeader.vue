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

    <header class="header">
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

    </header>

</template>

<style lang="scss" scoped>
@use '../style/general.scss';
@use '../style/partials/_variables' as *;

.header, input {
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