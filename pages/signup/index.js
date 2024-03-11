import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { Dropdown } from "react-bootstrap";

export default function Signup({ setConnected }) {
    var popup = useRef(null);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password_init, setPasswordInit] = useState("");
    const [answer, setAnswer] = useState("");
    const [selectedQuestion, setSelectedQuestion] = useState("Select you question");
    const router = useRouter();

    const success = (<div className="h-25 w-25 bg-light rounded border-light d-flex flex-column justify-content-center align-items-center"><p className="text-success font-weight-bold h4"></p>Saved Successfully ✅<button type="button" onClick={() => close_popup(true)} className="btn btn-success mt-4" > close</button></div>);
    const failed = (<div className="h-25 w-25 bg-light rounded border-light d-flex flex-column justify-content-center align-items-center"><p className="text-danger font-weight-bold h4"></p>User Already Exist ⛔<button type="button" onClick={() => close_popup(false)} className="btn btn-danger mt-4" > close</button></div>);


    const [messageOfRegistration, setMessageOfRegistration] = useState(success)

    const handleSelect = (question) => {
        setSelectedQuestion(question);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "fname":
                setFname(value);
                break;
            case "lname":
                setLname(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password_init":
                setPasswordInit(value);
                break;
            case "answer":
                setAnswer(value);
                break; // Don't forget to add break here
            default:
                break;
        }
    };


    const handleFormSubmit = async () => {

        let name = `${fname} ${lname}`;

        if (name.length < 5 || email.length < 3 || email.indexOf("@") < 0 || password_init.length < 4 || answer.length < 3) {
            alert("please, enter your informations correctly !");
            return 0;
        }
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", name);
            formDataToSend.append("email", email);
            formDataToSend.append("password", password_init);
            formDataToSend.append("recovery", answer);

            const response = await fetch(
                "http://" + process.env.NEXT_PUBLIC_BACKEND_IP_ADDR + ":8000/users/add/",
                {
                    method: "POST",
                    body: formDataToSend,
                }
            );

            response.status != 200 ? setMessageOfRegistration(failed) : setMessageOfRegistration(success);
            popup.current.classList.remove("d-none");
            popup.current.classList.add("d-flex");

        } catch (error) {
            console.error("Error during registration:", error.message);
        }
    };

    function close_popup(connect) {
        if (popup.current) {
            popup.current.classList.remove("d-flex");
            popup.current.classList.add("d-none");
        }
        if (connect) {
            router.push('/login?code=02653854');
        } else {
            alert("votre mot de passe et/ou mail est incorrect !")
        }
    }

    return (
        <div className="h-100vh d-flex align-items-center justify-content-center">
        <div>
            <div
                ref={popup}
                style={{ zIndex: "10", backdropFilter: "blur(10px)" }}
                className="w-100 h-100 position-absolute top-0 z-4 content d-none justify-content-center align-items-center"
            >
                {/* Your content goes here */}
                {messageOfRegistration}

            </div>

            <div className="row  d-flex justify-content-center h-50">
                <div className="col-lg-12 col-xl-11">
                    <div
                        className="bg-transparent text-light"
                        style={{ borderRadius: "25px" }}
                    >
                        <div className="card-body p-md-5 ">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 d-flex align-items-center justify-content-center">

                                    <form className="mx-1 mx-md-4">
                                    <h2 className="text-center h2 mb-2 mx-1 mx-md-4">
                                        Let's Connect
                                    </h2>
                                        <div className="row">
                                            <div className="col">
                                                <label className="form-label" htmlFor="fname">
                                                    First name
                                                    <i className="obligatory">*</i>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="fname"
                                                    name="fname"
                                                    className="form-control"
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label className="form-label" htmlFor="lname">
                                                    Last name
                                                    <i className="obligatory">*</i>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lname"
                                                    name="lname"
                                                    className="form-control"
                                                    onChange={handleInputChange}
                                                    required />
                                            </div>
                                        </div>

                                        <label className="form-label" htmlFor="email">
                                            Email
                                            <i className="obligatory">*</i>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <label className="form-label" htmlFor="password_init">
                                            Password
                                            <i className="obligatory">*</i>
                                        </label>
                                        <input
                                            type="password"
                                            id="password_init"
                                            name="password_init"
                                            className="form-control"
                                            onChange={handleInputChange}
                                        />

                                        <label className="form-label" htmlFor="password_conf">
                                            Recovery question
                                            <i className="obligatory">*</i>
                                        </label>
                                        <Dropdown className="bg-primary mb-2" onSelect={(eventKey) => handleSelect(eventKey)}>
                                            <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100 text-start">
                                                {selectedQuestion}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="w-100">
                                                <Dropdown.Item eventKey="What was my best fruit ?">
                                                    What was my best fruit ?
                                                </Dropdown.Item>
                                                <Dropdown.Item eventKey="Where my father had born ?">
                                                    Where my father had born ?
                                                </Dropdown.Item>
                                                <Dropdown.Item eventKey="When have i worked ever ?">
                                                    When have i worked ever ?
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <input
                                            type="text"
                                            id="answer"
                                            name="answer"
                                            placeholder="Your answer"
                                            className="form-control"
                                            onChange={handleInputChange}
                                        />

                                        <br />
                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button
                                                type="button"
                                                className="btn border-light btn-lg inverse-hover"
                                                onClick={handleFormSubmit}
                                            >
                                                Register
                                            </button>
                                        </div>
                                        <i className="obligatory">*</i>&nbsp;means obligatory field

                                    </form>
                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
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
        </div>
    );
}
