export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items,
    };
}

export function fetchBooks(url){
    return(dispatch) => {
        fetch(url)
            .then((response) => {
                dispatch(itemsIsLoading(true));
                if(!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((json) => dispatch(itemsFetchDataSuccess(json)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}