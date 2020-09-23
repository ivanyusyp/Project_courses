import C from '../constans'
import * as authorApi from '../api/authorApi'

export function loadAuthorsActions() {
    return function(dispatch) {
        return authorApi
            .getAuthors()
            .then(authors => {
                dispatch({
                    type: C.LOAD_AUTHOR_SUCCESS,
                    payload: authors,
                })
            })
            .catch(err => {throw err})
    }
}
