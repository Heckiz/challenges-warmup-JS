import axios from 'axios';

// constantes
const dataInicial = {
    posts: [],
    postSelected:[]
}

// types
const GET_ALL_POSTS = 'GET_ALL_POSTS'
const GET_POST = 'GET_POST'
const CREATE_POST = 'CREATE_POST'
const DELETE_POST = 'DELETE_POST'
const EDIT_POST = 'EDIT_POST'


// reducer
export default function reducers(state = dataInicial, action) {
    switch (action.type) {
        case GET_ALL_POSTS:
            return { ...state, posts: action.payload };
        case GET_POST:
            return { ...state, postSelected: action.payload };
        case CREATE_POST:
            return { ...state, posts: action.payload };
        case DELETE_POST:
            return { ...state, posts: action.payload };
        case EDIT_POST:
            return { ...state, posts: action.payload };
        default:
            return state
    }
}

// actions

export const getPosts = () => async (dispatch) => {
    try {
        const res = await axios.get('posts');
        dispatch({

            type: GET_ALL_POSTS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getPost = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`posts/${id}`)
        dispatch({
            type: GET_POST,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (data) => async (dispatch) => {
    try {
        const res = await axios.post('posts', data)
        dispatch({
            type: CREATE_POST,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`posts/${id}`)
        dispatch({
            type: DELETE_MOVEMENT,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const editPost = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`posts/${id}`, data)
        dispatch({
            type: EDIT_POST,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}