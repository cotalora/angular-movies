import { Movie } from "../interfaces/movie.interface";

export const movies: Movie[] = [
    {
        id: 1,
        title: 'Tenet',
        description: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
        image: '../../../../assets/images/images/Tenet.webp',
        rating: 7.8,
        duration: '2h 30min',
        genre: ['Action', 'Sci-Fi'],
        releasedDate: new Date('09/03/2020'),
        trailer: 'https://www.youtube.com/embed/LdOM0x0XDMo?si=v8X1gxCFnHIXBC9o&amp;controls=0'
    },
    {
        id: 2,
        title: 'Spider-Man: Into the Spider-Verse',
        description: 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
        image: '../../../../assets/images/images/Spider_Man.webp',
        rating: 8.4,
        duration: '1h 57min',
        genre: ['Action', 'Animation', 'Adventure'],
        releasedDate: new Date('12/14/2018'),
        trailer: 'https://www.youtube.com/embed/tg52up16eq0?si=9tZYc8d1FttUXtyN&amp;controls=0'
    },
    {
        id: 3,
        title: 'Knives Out',
        description: 'A detective investigates the death of a patriarch of an eccentric, combative family.',
        image: '../../../../assets/images/images/Knives_Out.webp',
        rating: 7.9,
        duration: '2h 10min',
        genre: ['Comedy', 'Crime', 'Drama'],
        releasedDate: new Date('11/27/2019'),
        trailer: 'https://www.youtube.com/embed/qGqiHJTsRkQ?si=FTVpUqrkLo5M5kgs&amp;controls=0'
    },
    {
        id: 4,
        title: 'Guardians of the Galaxy',
        description: 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
        image: '../../../../assets/images/images/Guardians_of_The_Galaxy.webp',
        rating: 8,
        duration: '2h 1min',
        genre: ['Action', 'Adventure', 'Comedy'],
        releasedDate: new Date('08/01/2014'),
        trailer: 'https://www.youtube.com/embed/d96cjJhvlMA?si=jZRJyZaZbaZwpoiF&amp;controls=0'
    },
    {
        id: 5,
        title: 'Avengers: Age of Ultron',
        description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
        image: '../../../../assets/images/images/Avengers.webp',
        rating: 7.3,
        duration: '2h 21min',
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        releasedDate: new Date('05/01/2015'),
        trailer: 'https://www.youtube.com/embed/tmeOjFno6Do?si=ZwFZ7oDqUd4uCniZ&amp;controls=0'
    }
]
