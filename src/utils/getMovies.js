export const getMovies = (search = "", page = 1) => {
    return fetch(`https://crossorig.in/https://yts.am/api/v2/list_movies.json?limit=20&sort_by=year&page=${page}&query_term=${search}`)
            .then(res => res.json())
            .catch((err) => {
                throw new Error(`fetch movies failed ${err}`);
            });
}