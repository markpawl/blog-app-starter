export default function getData(dispatch) {
    fetch('articles.json')
        .then(response => response.json())
        .then(data => {
            let action = { type: 'setList', list: data };
            dispatch(action);
          }
        )
}