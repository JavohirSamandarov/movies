import React from 'react'
import './hero.scss'
import MovieService from '../../services/movie-service'
import Spinner from '../spinner/spinner'
import Error from '../error/error'

class Hero extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {},
            loading: true,
            error: false,
        }
        this.movieService = new MovieService()
        this.getMovie()
    }

    getMovie = () => {
        this.movieService
            .getRandomMovie()
            .then((res) => this.setState({ movie: res }))
            .catch(() => this.setState({ error: true }))
            .finally(() => this.setState({ loading: false }))
    }

    render() {
        const { movie, loading, error } = this.state

        const errorContent = error ? <Error /> : null
        const loadingContent = error ? <Spinner /> : null
        const content = !(error || loading) ? <Content movie={movie} /> : null

        return (
            <div className='hero'>
                <div className='hero__info'>
                    <h2>FIND MOVIES</h2>
                    <h1>TV shows and more</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Atque eum ab minus, facere fugit qui
                        exercitationem ipsa non aliquid, cumque quo dolorum
                        iusto ratione, ullam dicta quis dolores. Deserunt,
                        officiis.
                    </p>
                    <button className='btn btn-primary'>Details</button>
                </div>
                <div className='hero__movie'>
                    {errorContent}
                    {loadingContent}
                    {content}
                </div>
            </div>
        )
    }
}

export default Hero

const Content = ({ movie }) => {
    return (
        <>
            <img src={movie.backdrop_path} alt='img' />
            <div className='hero__movie-descr'>
                <h2>{name}</h2>
                <p>
                    {movie.description && movie.description.length >= 250
                        ? `${movie.description.slice(0, 250)}...`
                        : movie.description}
                </p>
                <div>
                    <button className='btn btn-secondary'>Random movie</button>
                    <button className='btn btn-primary '>Details</button>
                </div>
            </div>
        </>
    )
}
