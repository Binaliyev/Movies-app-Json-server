import axios from "axios";
import { createContext, useState } from "react"
export const exportContext = createContext()
export const Context = ({ children }) => {
    const [userInfo, setUserInfo] = useState({})
    const [modal, setModal] = useState(false)
    const loginUsers = async (email, password) => {
        try {
            const request = await axios.post(`http://localhost:7777/login`, {
                email: email,
                password: password
            })
            if (request.status === 200 || request.status === 201 || request.status === 304) {
                const response = await request.data
                window.localStorage.setItem("user_id", response.user.id)
                window.localStorage.setItem("accessToken", response.accessToken)
                window.location.href = "/"
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const createUsers = async (username, email, password) => {
        try {
            // const UTCDateS = new Date().toUTCString()
            // ${UTCDateS}
            const request = await axios.post(`http://localhost:7777/users`, {
                username: username,
                email: email,
                password: password
            })
            if (request.status === 200 || request.status === 201 || request.status === 304) {
                const response = await request.data
                window.localStorage.setItem("user_id", response.user.id)
                document.cookie = `${password}`
                window.localStorage.setItem("accessToken", response.accessToken)
                window.location.href = "/"
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const signOutUser = async () => {
        window.localStorage.removeItem("accessToken")
        window.localStorage.removeItem("user_id")
        window.location.href = "/"
    }

    const AcountDelete = async () => {
        try {
            const request = await axios.delete(`http://localhost:7777/users/${window.localStorage.getItem("user_id")}`)
            if (request.status === 200 || request.status === 201 || request.status === 304) {
                window.localStorage.removeItem("accessToken")
                window.localStorage.removeItem("user_id")
                window.location.href = "/"
            }
        } catch (error) {
            console.log(error);
        }
    }
    const userInfoGet = async () => {
        try {
            const request = await axios.get(`http://localhost:7777/users/?id=${window.localStorage.getItem("user_id")}`)
            if (request.status === 200 || request.status === 201 || request.status === 304) {
                const response = await request.data
                response.map((item) => {
                    return setUserInfo({
                            username: item.username,
                            email:item.email,
                            user_img: item.user_img? item.user_img: null
                        })
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    userInfoGet()
    const userEdidInfo = async (username, email, password) => {
        try {
            console.log(password);
            const request = await axios.put(`http://localhost:7777/users/${window.localStorage.getItem("user_id")}`, {
                username: username? username : userInfo.username,
                email: email? email : userInfo.email,
                password: password? password: document.cookie,
                user_img: userInfo.user_img

            })
            // console.log(userInfo);
            if (request.status === 200 || request.status === 201 || request.status === 304) {
                alert("Acount edid qilindi tasdiqlang")
                setModal(false)
                if (password !== null || password !== "") {
                    document.cookie = `${password}`
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const initialValues = {
        loginUsers: loginUsers,
        createUsers: createUsers,
        signOutUser: signOutUser,
        AcountDelete:AcountDelete,
        userEdidInfo: userEdidInfo,
        userInfo: userInfo,
        modal: modal,
        setModal: setModal
    }
    return (
        <exportContext.Provider value={initialValues}>
            {children}
        </exportContext.Provider>
    )
}