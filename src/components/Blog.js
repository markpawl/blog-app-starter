import { Provider } from 'react-redux'
import ArticleEntry from './ArticleEntry';
import ArticlesList from './Articles';
import store from '../store/Store'
import './Blog.css'

function Blog(props) {
    
    const addArticle = (article) => {
        let action = { type: 'addArticle', article: { 'title': article } };
        store.dispatch(action)
    }

    return (
        <Provider store={store}>
            <div className='box' >
                <span>Articles</span>
                <ArticlesList />
                <ArticleEntry id='addnew' addArticle={addArticle} />
            </div>
        </Provider>);
}

export default Blog