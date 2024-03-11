import { useRouter } from "next/router";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useEffect, useState, useContext } from "react";
import { Dropdown } from "react-bootstrap";
import Profile from '../profileNavbar.js'; // Importing the profile component
import { FullContext } from "../../_app";

export default function profile_credentials() {
    const { isConnected, token } = useContext(FullContext);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [passwordOld, setPasswordInit] = useState("**********");
    const [passwordNew, setPasswordNew] = useState("");
    const [passwordNewConf, setPasswordNewConf] = useState("");
    const [passwordEdit, setPasswordEdit] = useState("");
    const [answer, setAnswer] = useState("");
    const router = useRouter();


    const message = (isPositive) => {
        let message;
        if (isPositive) {
            message = "Informations modified successfully ✅";
        } else {
            message = "Something went wrong, Please try again later ! ⛔"
        }
        return (
            <div className="h-25 w-25 bg-light rounded border-light d-flex flex-column justify-content-center align-items-center">
                {message}
                <button
                    type="button"
                    onClick={() => closePopup(isPositive)}
                    className={`btn ${isPositive ? 'btn-success' : 'btn-danger'} mt-4`}
                > close</button>
            </div>
        );

    }
    const failed = (
        <div className="h-25 w-25 bg-light rounded border-light d-flex flex-column justify-content-center align-items-center">
            <p className="text-danger font-weight-bold h4"></p><button type="button" onClick={() => closePopup(false)} className="btn btn-danger mt-4" > close</button></div>);


    const [messageOfRegistration, setMessageOfRegistration] = useState(message(true))

    const handleFormSubmit = async () => {

        let name = `${fname} ${lname}`;

        if (name.length < 5 || email.length < 3 || email.indexOf("@") < 0 || email.indexOf(".") < 0 || email.lastIndexOf(".") < email.indexOf("@") || passwordOld.length < 4 || answer.length < 3) {
            alert("please, enter your informations correctly !");
            return 0;
        }
        console.log(token);
        try {
            const updatedData = new FormData();
            updatedData.append("token", token);
            updatedData.append("name", name);
            updatedData.append("email", email);
            updatedData.append("oldPassword", passwordOld);
            updatedData.append("NewPassword", passwordNew);
            updatedData.append("recovery", answer);

            const response = await fetch(
                "http://" + process.env.NEXT_PUBLIC_BACKEND_IP_ADDR + ":8000/users/update/",
                {
                    method: "POST",
                    body: updatedData,
                }
            );


        } catch (error) {
            console.error("Error during registration:", error.message);
        }
    };


    useEffect(() => {
        //verify connection
        isConnected ? null : router.push("/");
        
        const fetchData = async () => {
            // Get user information
            try {
                const tokens = new FormData();
                tokens.append("token", token);

                const response = await fetch(
                    "http://" + process.env.NEXT_PUBLIC_BACKEND_IP_ADDR + ":8000/users/get/",
                    {
                        method: "POST",
                        body: tokens,
                    }
                );

                const data = await response.json();
                console.log(data);
                setFname(data.name.substring(0, data.name.indexOf(" ")));
                setLname(data.name.substring(data.name.indexOf(" "), data.name.length));
                setEmail(data.email)
                setAnswer(data.recovery)

            } catch (error) {
                console.error("Error during registration:", error.message);
            }
        };

        fetchData(); // Call the async function

    }, []); // Dependencies array is empty since it should run only once


    const Input = (setterFunc, holder, id, label, showPen) => {
        return (<div className="form-group">
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <div className="input-group align-items-center">
                <input className="form-control text-dark" value={holder} id={id} name={id} type="text" readOnly={showPen} onChange={(e) => { setterFunc(e.target.value) }} />
                <span className="input-group-append">
                    {showPen &&
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => {
                                document.querySelector("#" + id).readOnly = !document.querySelector("#" + id).readOnly || false; // Use id directly without curly braces
                                if (id == "password") {
                                    setPasswordEdit((prev) => !prev);
                                    document.querySelector("#" + id).readOnly = passwordEdit;
                                    setPasswordInit("");
                                    setPasswordNew("");
                                    setPasswordNewConf("");
                                }
                            }}
                        >
                            <i className="bi bi-pencil"></i>
                        </button>
                    }
                </span>
            </div>
        </div >)
    };

    return (<>
        <Profile />
        <div className="d-flex row w-100 justify-content-center text-light" style={{ minHeight: "calc( 100vh - 200px )" }}>
            <form className="mx-1 mx-md-4 ">
                <div className="row">
                    <div className="col">
                        {Input(setFname, fname, "fname", "First name", true)}
                    </div>
                    <div className="col {selectedQuestion || 'Select your question'}">
                        {Input(setLname, lname, "lname", "Last name", true)}

                    </div>
                </div>
                <div className="form-group">
                    {Input(setEmail, email, "email", "Email", true)}

                </div>
                <div className="form-group">
                    {Input(setPasswordInit, passwordOld, "password", "Password", true)}
                    {passwordEdit ? Input(setPasswordNew, passwordNew, "new_password", "New Password", false) : null}
                    {passwordEdit ? Input(setPasswordNewConf, passwordNewConf, "conf_password", "Confirm Password", false) : null}

                </div>

                {Input(setAnswer, answer, "recovery", "Recovery question", true)}


                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button
                        type="button"
                        className="btn border-light btn-lg inverse-hover"
                        onClick={handleFormSubmit}
                    >
                        Register
                    </button>
                </div>

            </form>
        </div>
    </>
    )
}