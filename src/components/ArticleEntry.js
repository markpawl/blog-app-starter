import React, {useState} from 'react';
import './ArticleEntry.css'

function ArticleEntry(props){
    const[article, setArticle] = useState('');
    const handleChange = (event)=>{ setArticle(event.target.value);}
    const addArticle = () => {
        if(article && article.length > 0){
            props.addArticle(article)
            setArticle('');
        }
    }
    return (
        <div className="addnew">
            <button onClick={addArticle}>Add</button>
            <input type='text' value={article} onChange={handleChange} 
             placeholder='enter text and click "Add"' />
        </div>
    );
}

export default ArticleEntry