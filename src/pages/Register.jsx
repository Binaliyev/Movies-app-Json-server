import { Link } from "react-router-dom"
import { Button } from "../utils/components/buttons/Button"
import { Card, CardFooter, CardHeader, CardMain } from "../utils/components/cards"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { useContext } from "react"
import { exportContext } from "../utils/context/Context"
import { Main } from "../layout"
export const RegisterPage = () => {
    const { createUsers } = useContext(exportContext)
    const initialValues = {
        username: "",
        email: "",
        password: ""
    }
    const validationSchema = Yup.object({
        username: Yup.string().max(10, "Username must be 10 characters long").min(3, "The username must not exceed 3 letters").required("Username is required").matches(/^[a-zA-Z]+$/, "Username must contain only letters"),
        email: Yup.string().email("The email address is incorrect").required("Email is required"),
        password: Yup.string().max(10, "The length of the password must be at most 10 characters").min(5, "Password must be at least 5 characters long").required("Password is required ")
    })
    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            const { username, email, password } = formik.values
            if (formik.isValid === true) {
                createUsers(username, email, password)
            }
        } catch (error) {
            console.log(error);
        }
    }
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
                    height={46}
                    marginX={"auto"}
                    marginY={150}
                >
                    <CardHeader
                        width={20}
                        height={7}
                        marginX={`auto`}
                        border={10}
                        textColor={`black`}
                        marginY={20}
                        color={`#000000`}
                    >
                        <h1 className="auth-card-header-text">Register</h1>
                    </CardHeader>
                    <CardMain
                        width={20}
                        height={24}
                        marginY={50}
                        marginX={`auto`}
                        border={10}
                        color={`#000000`}
                    >
                        <form onSubmit={handleSubmit} >
                            {formik.touched.username && formik.errors.username && (
                                <span className="error-text">{formik.errors.username}</span>
                            )}
                            <input className="border form-inputs" type="text" placeholder="Username" {...formik.getFieldProps("username")} />
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
                        height={9}
                        marginY={70}
                        marginX={`auto`}
                        border={10}
                        color={`#000000`}
                    >
                        <div className="auth-text-button-box">
                            <Link to={"/"} className="auth-text" >Do you have an account? Login </Link>
                        </div>
                    </CardFooter>
                </Card>
            </Main>
        )
        :
        (
            <Main>
                <Card
                    initial={{ opacity: 0.1, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 2 }}
                    color={"linear-gradient( blue, blueviolet, red )"}
                    width={30}
                    height={46}
                    marginX={"auto"}
                    marginY={150}
                >
                    <CardHeader
                        width={27}
                        height={7}
                        marginX={`auto`}
                        border={10}
                        textColor={`black`}
                        marginY={20}
                        color={`#000000`}
                    >
                        <h1 className="auth-card-header-text">Register</h1>
                    </CardHeader>
                    <CardMain
                        width={27}
                        height={24}
                        marginY={50}
                        marginX={`auto`}
                        border={10}
                        color={`#000000`}
                    >
                        <form onSubmit={handleSubmit} >
                            {formik.touched.username && formik.errors.username && (
                                <span className="error-text">{formik.errors.username}</span>
                            )}
                            <input className="border form-inputs" type="text" placeholder="Username" {...formik.getFieldProps("username")} />
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
                        height={9}
                        marginY={70}
                        marginX={`auto`}
                        border={10}
                        color={`#000000`}
                    >
                        <div className="auth-text-button-box">
                            <Link to={"/"} className="auth-text" >Do you have an account? Login </Link>
                            {/* <Button variant={"border"} >
                            Google Authfication <span className="google-text">G</span>
                        </Button> */}
                        </div>
                    </CardFooter>
                </Card>
            </Main>
        )
}