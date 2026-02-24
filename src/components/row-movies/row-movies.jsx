import React from 'react'
import MovieInfo from '../movie-info/movie-info'
import RowMoviesItem from '../row-movies-item/row-movies-item'
import './row-movies.scss'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import MovieService from '../../services/movie-service.js'

class RowMovies extends React.Component {
    state = {
        open: false,
        movies: [],
        loading: true,
        movieId: null,
    }
    movieService = new MovieService()

    componentDidMount() {
        this.getTrandingMovies()
    }

    onClose = () => {
        this.setState({ open: false })
    }

    onOpen = (id) => this.setState({ open: true, movieId: id })

    getTrandingMovies = () => {
        this.setState({ loading: true })
        this.movieService
            .getTrandingMovies()
            .then((res) => this.setState({ movies: res, loading: false }))
            .catch(() => this.setState({ loading: false }))
    }

    render() {
        const { open, movies, loading, movieId } = this.state

        const skeletons = [...Array(10)].map((_, index) => (
            <RowMoviesItem key={index} isLoading={true} />
        ))
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
                    {loading
                        ? skeletons
                        : movies.map((movie) => (
                              <RowMoviesItem
                                  key={movie.id}
                                  movie={movie}
                                  onOpen={this.onOpen}
                                  isLoading={false}
                              />
                          ))}
                </div>

                <Modal open={open} onClose={this.onClose}>
                    <MovieInfo movieId={movieId} />
                </Modal>
            </div>
        )
    }
}

export default RowMovies

