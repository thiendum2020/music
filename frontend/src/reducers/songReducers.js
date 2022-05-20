import {
    GET_ALL_SONGS_PUBLISHED_REQUEST,
    GET_ALL_SONGS_PUBLISHED_SUCCESS,
    GET_ALL_SONGS_PUBLISHED_FAIL
} from '../constants/songConstants'

export const publishedSongsReducer = (state = { publishedSongs: [] }, action) => {
    switch (action.type) {
        case GET_ALL_SONGS_PUBLISHED_REQUEST:
            return {
                loading: true,
            }
        case GET_ALL_SONGS_PUBLISHED_SUCCESS:
            return {
                loading: false,
                publishedSongs: action.payload
            }
        case GET_ALL_SONGS_PUBLISHED_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}