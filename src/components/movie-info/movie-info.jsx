import React from 'react'
import './movie-info.scss'

const MovieInfo = () => {
    return (
        <div className='movieinfo'>
            <img src='/image1.svg' alt='movie' />
            <div className='movieinfo-descr'>
                <h1>Movie Title</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    facilis ab hic magnam rem? Repellat accusamus tempore
                    maiores asperiores aliquid nihil earum. Quas, enim dolorem,
                    laboriosam molestiae impedit dicta exercitationem deserunt.
                </p>
            </div>
        </div>
    )
}

export default MovieInfo
