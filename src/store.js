import { reactive } from 'vue'

const store = reactive({ 
    onlyFilmList: [],
    genresFilmsList: [],

    onlyTvList: [],
    genresTvList: [],

    filmQuery: 'atta',

    currentCard: undefined,
    currentCast: [],
    currentGenre: 'undefined',
    
})

export default store 