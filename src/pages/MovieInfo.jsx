import { Link, useParams } from "react-router-dom"
import { Main } from "../layout"
import axios from "axios"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
export const MovieInfo = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [dataC, setDataC] = useState([])

    const handleGetInfo = async () => {
        try {
            const request = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b3f9521a608f1fa65b55223e27cadf9c`)
            if (request.status === 200 || request.status === 201 || request.status === 304) {
                const response = await request.data
                setData([response])
            }
        } catch (error) {
            console.log(error);
        }

    }
    handleGetInfo()

    const handleGetActyors = async () => {
        try {
            const request = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=b3f9521a608f1fa65b55223e27cadf9c`)
            if (request.status === 200 || request.status === 201 || request.status === 304) {
                const response = await request.data
                setDataC([response])
            }
        } catch (error) {
            console.log(error);
        }

    }
    handleGetActyors()

    // https://api.themoviedb.org/3/movie/${id}/credits?api_key=b3f9521a608f1fa65b55223e27cadf9c
    // https://api.themoviedb.org/3/movie/top_rated?api_key=b3f9521a608f1fa65b55223e27cadf9c
    return (
        <Main>
            {data.map((item) => {
                return (
                    <div className="movie-info-box" key={item.id}>
                        <div className="img-back-link-box">
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path ? item.poster_path : item.backdrop_path}`} alt="movie-img" className="info-movie-img" />
                            <Link className="back-link" to={"/"}>Go back</Link>
                        </div>
                        <div className="movie-title-box">
                            <h1>{item.original_title}</h1>
                            <p>{item.overview}</p>
                            <h4><span>Genres:</span> {item.genres.map((g) => {
                                return `${g.name},`
                            })}</h4>
                            <h4><span>Movie language:</span> {item.original_language}</h4>
                            <h4><span>Country:</span> {item.production_countries.map((c) => {
                                return `${c.name},`
                            })}</h4>
                            <h4><span>Movie Companies:</span> {item.production_companies.map((co) => {
                                return `${co.name},`
                            })} </h4>
                            <h4><span>Movie popular:</span> {item.popularity} </h4>
                            <div className="actors-card-box">
                                <Swiper
                                    loop={true}
                                    slidesPerView={2}
                                    pagination={{
                                        type: "progressbar"
                                    }}
                                    navigation={true}
                                    modules={[Navigation, Pagination]}
                                    className="movie-info-swioer"
                                >
                                    {dataC.map((a) => {
                                        return a.cast.map((cr) => {
                                            return (
                                                <SwiperSlide>
                                                    <div className="actyor-info-card-box">
                                                        {cr.profile_path ? (
                                                            <img src={`https://image.tmdb.org/t/p/w500/${cr.profile_path}`} alt="actyors_img" className="actyors-img" />
                                                        )
                                                            :
                                                            (
                                                                <h3 className="img-now-text">Bu actyorning surati yo'q</h3>
                                                            )
                                                        }
                                                        <div className="actyor-info-text-box">
                                                            <h3 className="actyor-name">{cr.name}</h3>
                                                            <h6 className="actyor-info">{`${cr.name} played the role ${cr.character} in this movie.`}</h6>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })

                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Main>
    )
}