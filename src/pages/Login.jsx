import { Link, useNavigate } from "react-router-dom"
import { Button } from "../utils/components/buttons/Button"
import { Card, CardFooter, CardHeader, CardMain } from "../utils/components/cards"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { useContext } from "react"
import { exportContext } from "../utils/context/Context"
import { Main } from "../layout"


export const LoginPage = () => {
    const { loginUsers } = useContext(exportContext)
    const initialValues = {
        email: "",
        password: ""
    }
    const validationSchema = Yup.object({
        email: Yup.string().email("The email address is incorrect").required("Email is required"),
        password: Yup.string().max(10, "The length of the password must be at most 10 characters").min(5, "Password must be at least 5 characters long").required("Password is required ")
    })
    const handleSubmit = async (event) => {
        event.preventDefault()
        const { email, password } = formik.values
        if (formik.isValid === true) {
            loginUsers(email, password)
        }
    }

    // if (window.innerWidth < 500) {
    //     alert("kichik")
    // }else{
    //     alert("katta")
    // }
    const formik = useFormik({ initialValues, validationSchema, handleSubmit })
    return window.innerWidth <= 500 ?
        (
            <Main>
                <Card
                    initial={{ opacity: 0.1, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 2 }}
                    color={"linear-gradient( blue, blueviolet, red )"}
                    width={22}
                    height={39}
                    marginX={"auto"}
                    marginY={150}
                >
                    <CardHeader
                        width={20}
                        height={7}
                        marginX={`auto`}
                        border={10}
                        marginY={20}
                        color={`#000000`}
                    >
                        <h1 className="auth-card-header-text">Login</h1>
                    </CardHeader>
                    <CardMain
                        width={20}
                        height={17}
                        marginY={50}
                        marginX={`auto`}
                        border={10}
                        color={`#000000`}
                    >
                        <form onSubmit={handleSubmit} >
                            {formik.touched.email && formik.errors.email && (
                                <span className="error-text">{formik.errors.email}</span>
                            )}
                            <input className="border form-inputs" type="email" placeholder="Email" {...formik.getFieldProps("email")} />
                            {formik.touched.password && formik.errors.password && (
                                <span className="error-text">{formik.errors.password}</span>
                            )}
                            <input className="border form-inputs" type="password" placeholder="Password" {...formik.getFieldProps("password")} />
                            <Button variant={"border"} type={"submit"}> Submit</Button>
                        </form>
                    </CardMain>
                    <CardFooter
                        width={20}
                        height={10}
                        marginY={70}
                        marginX={`auto`}
                        border={10}
                        color={`#000000`}
                    >
                        <div className="auth-text-button-box">
                            <Link to={"/register"} className="auth-text" >Don't have an account? Register </Link>
                        </div>
                    </CardFooter>
                </Card>
            </Main>
        )
        :
        (
            <>
                <Main>
                    <Card
                        initial={{ opacity: 0.1, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1.1 }}
                        transition={{ duration: 2 }}
                        color={"linear-gradient( blue, blueviolet, red )"}
                        width={30}
                        height={39}
                        marginX={"auto"}
                        marginY={150}
                    >
                        <CardHeader
                            width={27}
                            height={7}
                            marginX={`auto`}
                            border={10}
                            marginY={20}
                            color={`#000000`}
                        >
                            <h1 className="auth-card-header-text">Login</h1>
                        </CardHeader>
                        <CardMain
                            width={27}
                            height={17}
                            marginY={50}
                            marginX={`auto`}
                            border={10}
                            color={`#000000`}
                        >
                            <form onSubmit={handleSubmit} >
                                {formik.touched.email && formik.errors.email && (
                                    <span className="error-text">{formik.errors.email}</span>
                                )}
                                <input className="border form-inputs" type="email" placeholder="Email" {...formik.getFieldProps("email")} />
                                {formik.touched.password && formik.errors.password && (
                                    <span className="error-text">{formik.errors.password}</span>
                                )}
                                <input className="border form-inputs" type="password" placeholder="Password" {...formik.getFieldProps("password")} />
                                <Button variant={"border"} type={"submit"}> Submit</Button>
                            </form>
                        </CardMain>
                        <CardFooter
                            width={27}
                            height={10}
                            marginY={70}
                            marginX={`auto`}
                            border={10}
                            color={`#000000`}
                        >
                            <div className="auth-text-button-box">
                                <Link to={"/register"} className="auth-text" >Don't have an account? Register </Link>
                            </div>
                        </CardFooter>
                    </Card>
                </Main>
            </>
        )
}