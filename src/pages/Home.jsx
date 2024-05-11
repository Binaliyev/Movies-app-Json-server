import { Footer, Header, Main } from "../layout"
import movi2 from "../assets/imgs/movie2.jpg"
import movi4 from "../assets/imgs/movie4.jpg"
import movi5 from "../assets/imgs/movie5.jpg"
import movi6 from "../assets/imgs/movie6.jpg"
import { Swiper, SwiperSlide } from "swiper/react"
import logo from "../assets/imgs/Netflix-Logo.wine (1).svg"
import goole from "../assets/icons/Google_Chrome-Logo.wine.svg"
import youtube from "../assets/icons/YouTube-Icon-Full-Color-Logo.wine.svg"
import { motion } from "framer-motion"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules"
import axios from "axios"
import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardHeader, CardMain } from "../utils/components/cards"
import { exportContext } from "../utils/context/Context"
import { useFormik } from "formik"
import * as Yup from "yup"
// import { Button } from "../utils/components/buttons"
export const HomePage = () => {
    const [data, setData] = useState([])
    const [dataR, setDataR] = useState([])
    const [api, setApi] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=b3f9521a608f1fa65b55223e27cadf9c`)
    const [dataS, setDataS] = useState([])
    const { modal, setModal, userEdidInfo, userInfo } = useContext(exportContext)
    const [update, setUpdate] = useState(null)

    const initialValues = {
        username: "",
        email: "",
        password: ""
    }
    const validationSchema = Yup.object({
        username: Yup.string().max(10, "Username must be 10 characters long").min(3, "The username must not exceed 3 letters").matches(/^[a-zA-Z]+$/, "Username must contain only letters"),
        email: Yup.string().email("The email address is incorrect"),
        password: Yup.string().max(10, "The length of the password must be at most 10 characters").min(5, "Password must be at least 5 characters long")
    })
    const handleGetMovies = async () => {
        try {
            const request = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b3f9521a608f1fa65b55223e27cadf9c`)
            if (request.status === 200 || request.status === 201 || request.status === 304) {
                const response = await request.data
                setData([response])
            }
        } catch (error) {
            console.log(error);
        }
    }
    handleGetMovies()
    const handleGetRatingM = async () => {
        try {
            const request = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=b3f9521a608f1fa65b55223e27cadf9c`)
            if (request.status === 200 || request.status === 201 || request.status === 304) {
                const response = await request.data
                setDataR([response])
            }
        } catch (error) {
            console.log(error);
        }
    }
    handleGetRatingM()

    console.log(document.innerWidth);

    const handleSearchGetMovies = async () => {
        try {
            const request = await axios.get(api)
            if (request.status === 200 || request.status === 201 || request.status === 304) {
                const response = await request.data
                setDataS([response])
            }
        } catch (error) {
            console.log(error);
        }
    }
    handleSearchGetMovies()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const { username, email, password } = formik.values
        if (formik.isValid === true) {
            userEdidInfo(username, email, password)
        }
    }
    const handleUesrImgeUpdate = async (event) => {
        const file = new FileReader;
        file.onload = function () {
            setUpdate(file.result);
        }
        file.readAsDataURL(event.target.files[0])
    }
    const handleUserImgEdidSubmit = async () => {
        try {
            if (update && update !== null) {
                const request = await axios.put(`http://localhost:7777/users/${window.localStorage.getItem("user_id")}`, {
                    username: userInfo.username,
                    email: userInfo.email,
                    password: document.cookie,
                    user_img: update
                })
                if (request.status === 200 || request.status === 201 || request.status === 304) {
                    console.log(request.data);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    const formik = useFormik({ initialValues, validationSchema, handleSubmit })
    // https://api.themoviedb.org/3/account/21185181?api_key=b3f9521a608f1fa65b55223e27cadf9c
    // https://api.themoviedb.org/3/search/movie?query=&api_key=b3f9521a608f1fa65b55223e27cadf9c
    // https://api.themoviedb.org/3/account/21185181/rated/tv?language=en-US&page=1&sort_by=created_at.asc?api_key=b3f9521a608f1fa65b55223e27cadf9c
    
    // const date = new Date()
    // console.log(date.toUTCString());
    return modal === true ?
        (<div className="modal-box">
            <div className="icon-edid-box">
                <div className="user-edid-box">
                    <form onSubmit={handleUserImgEdidSubmit}>
                        <label htmlFor="update-img">
                            {update !== null ? (
                                <img src={update} alt="avatar_img" className="modal-avatar" />
                            ) : (
                                <img src={userInfo.user_img} alt="avatar_img" className="modal-avatar" />
                            )}
                        </label>
                        <input type="file" name="img" id="update-img" onChange={handleUesrImgeUpdate} accept=" image/png, image/jpg,  image/svg" multiple style={{ display: "none" }} />
                        <button className="avatar-img-upload-button" type="submit">
                            Update avatar img
                        </button>
                    </form>
                    <form className="modal-form" onSubmit={handleSubmit}>
                        <div className="modal-input-box">
                            <input type="text" placeholder="Username" {...formik.getFieldProps("username")} />
                            {formik.touched.username && formik.errors.username && (
                                <h4>{formik.errors.username}</h4>
                            )}
                        </div>
                        <div className="modal-input-box">
                            <input type="email" placeholder="Email" {...formik.getFieldProps("email")} />
                            {formik.touched.email && formik.errors.email && (
                                <h4>{formik.errors.email}</h4>
                            )}
                        </div>
                        <div className="modal-input-box">
                            <input type="password" placeholder="Password"{...formik.getFieldProps("password")} />
                            {formik.touched.password && formik.errors.password && (
                                <h4>{formik.errors.password}</h4>
                            )}
                        </div>
                        <button className="modal-button" type="submit">Tahrirlash</button>
                    </form>
                </div>
                <svg onClick={() => setModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="modal-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
        </div>) : (
            <>
                <Header />
                <Main>
                    <div className="movies-corusel-box">
                        <div className="img-box">
                            <img src={movi2} alt="" className="movies-img" />
                            <img src={movi4} alt="" className="movies-img" />
                            <img src={movi5} alt="" className="movies-img" />
                            <img src={movi6} alt="" className="movies-img" />
                        </div>
                    </div>
                    <div id="populars">
                        <Swiper
                            effect={`coverflow`}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={3}
                            coverflowEffect={
                                {
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 2.5,
                                }
                            }
                            pagination={{ el: `.pagination`, clickable: true }}
                            navigation={
                                {
                                    nextEl: ".next",
                                    prevEl: ".prev",
                                    clickable: true,
                                }
                            }
                            modules={[EffectCoverflow, Pagination, Navigation]}
                            className="siwiper-corusel"
                        >
                            {data.map((item) => {
                                return item.results.map((movie) => {
                                    return (
                                        <SwiperSlide>
                                            <Link to={`/movie/${movie.id}`}>
                                                <div className="swiper-corusel-card">
                                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie.jpg" />
                                                    <div className="card-text-box">
                                                        <h1>{movie.title}</h1>
                                                        <span>{movie.overview}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    )
                                })
                            })}
                            <div className="slider-controls-box">
                                <button className="border prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icons">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                                {/*  */}
                                <div className="pagination"></div>
                                {/*  */}
                                <button className="border next">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icons">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </Swiper>
                    </div>
                    {/*  */}
                    <div id="rating">
                        <h1 className="rating-title"> Rating loud movies</h1>
                        <div className="rating-movie-box">
                            {dataR.map((item) => {
                                return item.results.map((r) => {
                                    return (
                                        <Link to={`/movie/${r.id}`}>
                                            <Card width={20} height={33} color={"red"}
                                                // initial={{ opacity: 0.1, scale: 0 }}
                                                // whileInView={{ opacity: 1, scale: 1 }}
                                                // transition={{ duration: 0.5 }}
                                                marginY={10}>
                                                <CardHeader width={"100%"} height={22.5} border={10} >
                                                    <img src={`https://image.tmdb.org/t/p/w500/${r.poster_path}`} alt="rating-movie-img" className="rating-movie-img" />
                                                </CardHeader>
                                                <CardMain width={"100%"} height={10} border={10}>
                                                    <h3>{r.original_title}</h3>
                                                    <p>Language: {r.original_language}</p>
                                                    <p>Rating: {r.popularity}</p>
                                                </CardMain>
                                            </Card>
                                        </Link>
                                    )
                                })
                            })}
                        </div>
                    </div>
                    {/*  */}
                    <div id="search">
                        <div className="search-input-box">
                            <input className="search-input border" type="search" onChange={(e) => { setApi(`https://api.themoviedb.org/3/search/movie?query=${e.target.value}&api_key=b3f9521a608f1fa65b55223e27cadf9c`) }} />
                        </div>
                        <div className="search-movie-box">
                            {dataS.map((item) => {
                                return item.results.map((r) => {
                                    return (
                                        <Link to={`/movie/${r.id}`}>
                                            <Card width={20} height={33} color={"red"}
                                                marginY={10}>
                                                <CardHeader width={"100%"} height={22.5} border={10} >
                                                    <img src={`https://image.tmdb.org/t/p/w500/${r.poster_path}`} alt="rating-movie-img" className="search-movie-img" />
                                                </CardHeader>
                                                <CardMain width={"100%"} height={10} border={10}>
                                                    <h3>{r.original_title}</h3>
                                                    <p>Language: {r.original_language}</p>
                                                    <p>Rating: {r.popularity}</p>
                                                </CardMain>
                                            </Card>
                                        </Link>
                                    )
                                })
                            })}
                        </div>
                    </div>
                </Main>
                <Footer>
                    <Link>
                        <motion.img animate={{ y: [0, 15, -15, 0] }} transition={{ duration: 3, repeat: 1 }} src={logo} alt="site-logo" className="footer-logo" />
                    </Link>
                    <div className="url-box">
                        <Link className="url-link" to={"https://www.youtube.com/@Netflix"} >
                            Youtube
                            <img src={youtube} alt="site-icons" width={40} height={40} />
                        </Link>
                        <Link className="url-link" to={"https://play.google.com/store/apps/details?id=com.netflix.mediaclient"} >
                            Google.play
                        </Link>
                        <Link className="url-link" to={"https://www.netflix.com"}>
                            Netflix
                            <img src={goole} alt="site-icons" width={40} height={40} />
                        </Link>
                    </div>
                </Footer>
            </>
        )
}