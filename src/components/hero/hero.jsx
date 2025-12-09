import './hero.scss'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero__info'>
                <h2>FIND MOVIES</h2>
                <h1>TV shows and more</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque eum ab minus, facere fugit qui exercitationem ipsa non
                    aliquid, cumque quo dolorum iusto ratione, ullam dicta quis
                    dolores. Deserunt, officiis.
                </p>
                <button className='btn btn-primary'>Details</button>
            </div>
            <div className='hero__movie'>
                <img src='/image1.svg' alt='img' />
                <div className='hero__movie-descr'>
                    <h2>Madellin</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis odio, eos dolorum suscipit eaque debitis, facilis
                        fuga ab perferendis repellat maxime saepe, modi
                        aspernatur id. Eveniet dolore sequi saepe assumenda.
                    </p>
                    <div>
                        <button className='btn btn-secondary'>
                            Random movie
                        </button>
                        <button className='btn btn-primary '>Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
