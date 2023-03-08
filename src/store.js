import { reactive } from 'vue'

const store = reactive({ 
    onlyFilmList: [],
    onlyTvList: [],
    filmQuery: 'atta',

    currentCard: undefined,
    
})

export default store 