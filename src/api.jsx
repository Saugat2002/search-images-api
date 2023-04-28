import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID F_2ZwSkb5T82iuYhkBy9D8dQ7KnkrErQd7RHDOiUH50',
        },
        params: {
            query: term,
        }
    })
    return response.data.results
}

export default searchImages
