import { reactive } from 'vue'

const store = reactive({ 
    filmList: [],
    onlyFilmList: [],
    onlyTvList: [],
    filmQuery: 'atta'
    
})

export default store 