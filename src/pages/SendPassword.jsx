import { Link } from "react-router-dom"
import { Button } from "../utils/components/buttons/Button"
import { Card, CardFooter, CardHeader, CardMain } from "../utils/components/cards"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { useContext } from "react"
import { exportContext } from "../utils/context/Context"

export const SendPage = () => {
    // const {  } = useContext(exportContext)
    const initialValues = {
        send: ""
    }
    const validationSchema = Yup.object({
        send: Yup.string().email("The email address is incorrect").required("Email is required"),
    })
    const handleSubmit = async (event) => {
        event.preventDefault()
        const { send } = formik.values
        if (formik.isValid === true) {
           
        }
    }
    const formik = useFormik({ initialValues, validationSchema, handleSubmit })
    return (
        <>
            <Card
                initial={{ opacity: 0.1, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 2 }}
                width={30}
                height={35}
                marginX={"auto"}
                marginY={150}
                color={`linear-gradient( blue, blueviolet, red )`}
            >
                <CardHeader
                    width={27}
                    height={7}
                    marginX={`auto`}
                    border={10}
                    marginY={20}
                    color={`#000000`}
                >
                    <h1 className="auth-card-header-text">Send Password</h1>
                </CardHeader>
                <CardMain
                    width={27}
                    height={13}
                    marginY={50}
                    marginX={`auto`}
                    border={10}
                    color={`#000000`}
                >
                    <div className="send-input-button-box">
                        {formik.touched.send && formik.errors.send && (
                            <span className="error-text">{formik.errors.send}</span>
                        )}
                        <input className="border form-inputs" type="email" placeholder="Enter you Email" {...formik.getFieldProps("send")} />
                        <Button variant={"border"} type={"submit"}>Submit</Button>
                    </div>
                </CardMain>
                <CardFooter
                    width={27}
                    height={8}
                    marginY={70}
                    marginX={`auto`}
                    border={10}
                    color={`#000000`}
                >
                    <Link to={"/"} className="auth-text-sendBack">Go back</Link>
                </CardFooter>
            </Card>
        </>
    )
}