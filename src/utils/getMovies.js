export const getMovies = (url) => {
    return fetch(url)
            .then(res => res.json())
            .catch((err) => {
                throw new Error(`fetch movies failed ${err}`);
            });
}