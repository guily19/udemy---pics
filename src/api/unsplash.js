import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0b42d16e8246fbce664babfce42318abc131e8190a54c8b958e478b8066e190a'
    }
})