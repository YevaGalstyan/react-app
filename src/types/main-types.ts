export type AppState = {
    defaultMovies: [],
    movies: Movie[];
    movie: Movie | null
}

export type Movie = {
    id: string;
    title: string;
    description: string;
    year: number;
    country: string;
    rating: number;
    genres: string[];
    actors: string[];
    imageUrl: string;
    videoUrl: string;
}

export type Filter = {
    country: string,
    genre: string,
    actor: string,
    yearStart: number,
    yearEnd: number,
    ratingStart: number,
    ratingEnd: number
}

export const movieGenres: string[] = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'Animation'];