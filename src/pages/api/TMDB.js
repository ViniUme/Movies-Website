/* eslint-disable import/no-anonymous-default-export */
const APY_KEY = 'c945acef578ef380a52477b252704a79';
const APY_BASE = 'https://api.themoviedb.org/3/';

const Request = async (link) => {
    let url = `${APY_BASE}${link}`;
    let response = await fetch(url);

    response = response.json();
    return response;
}

export default {
    GetListMovies: async () => {
        
        const list =[{
            name: 'trending',
            title: 'Trending',
            list: await Request(`trending/movie/week?api_key=${APY_KEY}`)
        }]
        return list;
    }
}