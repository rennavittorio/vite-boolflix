import { reactive } from 'vue'

const store = reactive({ 
    filmList: [],
    onlyFilmList: [],
    onlyTvList: [],
    filmQuery: 'm'
    
})

export default store 