import React from 'react';
import axios from 'axios';


export default class PostService {
    static async getAll(limit = 10, page = 1) {
            const respose = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            return respose;
    }

    static async getById(id) {
        const respose = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return respose;
}

static async getCommentsByPostId(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return response;
}
}

