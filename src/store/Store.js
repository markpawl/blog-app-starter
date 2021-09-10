import { createStore } from 'redux'

const initialState = { articles: [] } 

function reducer(state = initialState, action = { type: 'none' }) {
    switch (action.type) {
        case 'setList':
            return { articles: [...action.list] }
        case 'addArticle':
            return { articles: [...state.articles, action.article] }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store 