import axios from 'axios';
const getUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
}
const getPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data)
}

export {
    getPosts,
    getUsers
}