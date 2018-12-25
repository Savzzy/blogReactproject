import jsonPlaceholder from '../apis/jsonPlaceholsers';

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({ type: "FETCH_POST", payload: response.data });
    }
}

