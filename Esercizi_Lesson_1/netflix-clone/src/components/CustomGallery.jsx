import { Component } from 'react';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CustomGallery extends Component {

    state = {
        films: {
            Search: []
        },
        isLoading: true,
        isError: false
    }

    fetchMovie = () => {
        const url = `http://www.omdbapi.com/?apikey=6be9af59&s=${this.props.saga}`
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    console.log('sei qui')
                    return response.json()
                } else {
                    throw new Error('Errore')
                }
            })
            .then((arrayOfFilms) => {
                this.setState({
                    films: arrayOfFilms,
                    isLoading: false
                })

            })
            .catch((err) => {
                console.log('non ci siamo', err)
                this.setState({
                    isLoading: false,
                    isError: true,
                })
            })
    }

    componentDidMount = () => {
        this.fetchMovie()
    }


    render() {
        return (
            <>
                <h4> {this.props.saga}</h4>
                <Row className="mb-4" xs={1} sm={2} lg={4} xl={6}>

                    {
                        this.state.isLoading &&
                        <div className='w-100 d-flex justify-content-center'>
                            <Spinner animation="border" role="status" className='text-light'>
                                <span className='visually-hidden'>Loading...</span>
                            </Spinner>
                        </div>
                    }
                    {
                        this.state.isError && <Alert className="border-0 text-light" style={{ backgroundColor: '#221f1f' }}> Something went wrong!</Alert>

                    }


                    {this.state.films.Search.map((film) => (
                        <Col className="mb-2 text-center px-1" key={film.imbdID}>
                         <Link to={`/movie-details/${film.imbdID}`}>
                            <img className="img-fluid" src={film.Poster} alt="cover" />
                         </Link>
                            <p className='text-light'> {film.Title}</p>
                        </Col>
                    ))}
                </Row>

            </>
        )
    }
}

export default CustomGallery
