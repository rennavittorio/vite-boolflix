import { reactive } from 'vue'

const store = reactive({ 
    onlyFilmList: [],
    onlyTvList: [],
    filmQuery: 'atta',

    currentCard: undefined,
    currentCast: [],
    
})

export default store 