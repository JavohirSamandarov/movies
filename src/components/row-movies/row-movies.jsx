import { movies } from '../../constants'
import RowMoviesItem from '../row-movies-item/row-movies-item'
import './row-movies.scss'

const RowMovies = () => {
    return (
        <div className='rowmovies'>
            <div className='rowmovies__top'>
                <div className='rowmovies__top-title'>
                    <img src='/tranding.svg' alt='tranding' />
                    <h1>Trending</h1>
                </div>
                <div className='hr' />
                <a href='#'>See more</a>
            </div>
            <div className='rowmovies__lists'>
                {movies.map((movie, idx) => (
                    <RowMoviesItem key={idx} movie={{ ...movie, index: idx }} />
                ))}
            </div>
        </div>
    )
}

export default RowMovies
