import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { FullContext } from "../_app";

export default function Login({ setConnected, setToken }) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const { isConnected, token } = useContext(FullContext);
    const router = useRouter();
    const { code } = router.query;

    useEffect(() => {
        const fetchData = async () => {
            if (!code) {
                return;
            }

            if (typeof window !== 'undefined') {
                switch (code) {
                    case "02653854":
                        alert("Please connect using your credentials!");
                        break;
                    case "56932417":
                        alert("Something went wrong. Reconnect, please.");
                        break;
                    case "48593215":
                        try {
                            const form = new FormData();
                            form.append("token", token);

                            const response = await fetch(
                                `http://${process.env.NEXT_PUBLIC_BACKEND_IP_ADDR}:8000/users/logout/`,
                                {
                                    method: "POST",
                                    body: form,
                                }
                            );

                            if (response.ok) {
                                setConnected(false);
                                localStorage.setItem('isConnected', 'false');
                                setToken(0);
                                router.push('/');
                            } else {
                                const errorData = await response.json();
                                alert("Authentication failed: " + errorData.error);
                            }
                        } catch (error) {
                            console.error("Anauthorized");
                        }
                        break;
                    default:
                        break;
                }
            }
        };

        fetchData();
    }, [code, token, router]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleFormSubmit = async () => {


        if (email.length < 6 || email.indexOf("@") < 0 || password.length < 4) {
            alert("Please enter your information correctly!");
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("email", email);
            formDataToSend.append("password", password);

            const response = await fetch(
                "http://" + process.env.NEXT_PUBLIC_BACKEND_IP_ADDR + ":8000/users/verify/",
                {
                    method: "POST",
                    body: formDataToSend,
                }
            );

            if (response.ok) {
                const data = await response.json();
                setConnected(true);
                setToken(data.token);
                router.push('/home');
            } else {
                const errorData = await response.json();
                alert("Authentication failed: " + errorData.error);
            }
        } catch (error) {
            console.error("Error during authentication:", error.message);
        }

    };

    return (
        <div className="h-100vh d-flex align-items-center justify-content-center">
                    <div className="row d-flex justify-content-center align-items-center h-100 ">
                        <div className="col-lg-12 col-xl-11">
                            <div
                                className="bg-transparent text-light"
                                style={{ borderRadius: "25px" }}
                            >
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center d-flex justify-content-center align-items-center">
                                        <div className="col-md-8 col-lg-6 col-xl-3 col-sm-9  order-2 order-lg-1">
                                            <h2 className="text-center h2 mb-2 mx-1 mx-md-4">
                                                Let's Connect
                                            </h2>

                                            <form className="mx-1 mx-md-4">

                                                <label className="form-label" htmlFor="email">
                                                    Email
                                                    <i className="obligatory">*</i>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="form-control mb-4"
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                                <label className="form-label" htmlFor="password">
                                                    Password
                                                    <i className="obligatory">*</i>
                                                </label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    className="form-control mb-4"
                                                    onChange={handleInputChange}
                                                />

                                                <br />
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button
                                                        type="button"
                                                        className="btn border-light btn-lg inverse-hover"
                                                        onClick={handleFormSubmit}
                                                    >
                                                        Connect
                                                    </button>
                                                </div>
                                                <i className="obligatory">*&nbsp;</i>&nbsp;means obligatory field

                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid bg-transparent"
                                                alt="Sample image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
}
