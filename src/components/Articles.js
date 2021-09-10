import React, {useState} from 'react';
import { connect } from 'react-redux'
import getData from '../httpUtils';
import './Articles.css' 

function Articles(props) {
    const[initData, setInitData] = useState(true);
    if(initData){
        props.getData();
        setInitData(false);
    }
    const get_list_items = function () {
        if (props.articles.length > 0) { 
            return props.articles.map((article, index) => 
            { return <li key={index}>{article.title}</li> } 
        )}
        else { return '<li>no articles</li>' };
    }
    return (<ul>{get_list_items()}</ul>);
}

const mapStateToProps = function (state) {
    return {
        test: 'test',
        articles: state.articles
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        getData: ()=>getData(dispatch)
    }
}

const ArticlesList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles) 

export default ArticlesList