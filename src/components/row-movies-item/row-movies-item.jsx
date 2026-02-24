import './row-movies-item.scss'

const RowMoviesItem = ({ movie, onOpen, isLoading }) => {
    if (isLoading) {
        return (
            <div className='movieitem skeleton'>
                <div className='skeleton-img'></div>
                <div className='skeleton-text title'></div>
                <div className='skeleton-text descr'></div>
            </div>
        )
    }

    return (
        <div className='movieitem' onClick={() => onOpen(movie.id)}>
            <div className='movieitem-poster'>
                <img src={movie.poster_path} alt={movie.title} loading='lazy' />
            </div>
            <h2>
                {movie.name.length > 18
                    ? `${movie.name.slice(0, 18)}...`
                    : movie.name}
            </h2>
            <div className='movieitem-descr'>
                <img src='/date.svg' alt='' />
                <p>{movie.release_date}</p>
                <div className='dot' />
                <p>{movie.vote_average.toFixed(1)}</p>
                <img src='/star.svg' alt='' />
            </div>
        </div>
    )
}

export default RowMoviesItem
