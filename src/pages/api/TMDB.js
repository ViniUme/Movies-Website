/* eslint-disable import/no-anonymous-default-export */
const API_KEY = 'c945acef578ef380a52477b252704a79';
const API_BASE = 'https://api.themoviedb.org/3/';

const Request = async (link) => {
    let url = `${API_BASE}${link}`;
    let response = await fetch(url);

    response = response.json();
    return response;
}

export default {

    GetRandomMovie: async (id) => {
        return await Request(`movie/${id}?api_key=${API_KEY}`)
    },

    GetListMovies: async () => {
        
        const list =[
            {
                name: 'trending',
                title: 'Trending',
                list: await Request(`trending/movie/week?api_key=${API_KEY}`)
            },
            {
                name: 'disney',
                title: 'Disney Movies',
                list: await Request(`discover/movie?sort_by=popularity.desc&with_companies=2&api_key=${API_KEY}`)
            },
            {
                name: 'lucasfilm',
                title: 'Lucasfilm',
                list: await Request(`discover/movie?sort_by=popularity.desc&with_companies=1&api_key=${API_KEY}`)
            },
            {
                name: 'fox',
                title: 'Fox Movies',
                list: await Request(`discover/movie?sort_by=popularity.desc&with_companies=25&api_key=${API_KEY}`)
            }
        ]

        return list;
    }
}