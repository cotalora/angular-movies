export interface Movie {
    id: number;
    title: string;
    description: string;
    image: string;
    rating: number;
    duration: string;
    genre: string[],
    releasedDate: Date,
    trailer: string;
    saved?: boolean;
}
