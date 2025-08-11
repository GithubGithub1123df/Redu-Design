import { useState, useEffect } from "react";
export default function Home() {
    const texts = ["Imagination.", "Confidence.", "Brand.", "Luxury.", "Identity.", "Style.", "Fashion."];
    const [textIndex, setTextIndex] = useState(0);
    const [subText, setSubText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let typingSpeed = isDeleting ? 100 : 200;

        const timeout = setTimeout(() => {
            const updatedText = isDeleting
                ? currentText.substring(0, subText.length - 1)
                : currentText.substring(0, subText.length + 1);

            setSubText(updatedText);

            if (!isDeleting && updatedText === currentText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && updatedText === "") {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [subText, isDeleting, textIndex]);

    // contact nus page
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const res = await fetch("/api/sendEmail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            setStatus("Message sent!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setStatus("Failed to send message.");
        }
    };
    return (<>
        <div className="">
            <div className="vh-100 w-100 position-sticky bg-light top-0 d-flex justify-content-between p-5 overflow-hidden"
                style={{ zIndex: "1" }}>
                <img className="start-0 top-0 position-absolute w-100 vh-100"
                    style={{ zIndex: "-3", opacity: "0.8" }}
                    src="https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bg" />


                <div className="w-100 d-flex justify-content-center align-items-center flex-wrap">
                    <div className="text-center m-2">

                        <h1 className="shadow-md"
                            style={{
                                fontSize: "10vh",
                                fontFamily: "Playwrite HU",
                                textShadow: "1px 1px 16px #000000",
                                color: "gold"
                            }}>Redu Design</h1>

                        <h6 style={{
                            fontSize: "4vh",
                            fontFamily: "Pacifico",
                            marginTop: "20px",
                            color: "#44006eff",
                            zIndex: "2"
                        }}>Wear your Imagination.</h6>
                    </div>
                    <div>

                        <img
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=420&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="fashion"
                            style={{ zIndex: "-2" }} />
                    </div>

                </div>


            </div>
            <div className="vh-100 w-100 position-sticky bg-light top-0 d-flex justify-content-between p-5 overflow-hidden"
                style={{ zIndex: "2" }}>
                <img className="start-0 top-0 position-absolute w-100 vh-100"
                    style={{ zIndex: "-3", opacity: "0.8" }}
                    src="https://images.unsplash.com/photo-1630135485071-ecbd06865017?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bg" />


                <div className="w-100 d-flex justify-content-center align-items-center flex-wrap">

                    <div className="text-center m-2 p-2 d-flex align-items-center justify-content-center">

                        <h1 className="text-center" style={{
                            fontSize: "5vw",
                            fontFamily: "Playwrite HU",
                            textShadow: "1px 1px 16px #000000",
                            color: "gold", zIndex: "1"
                        }}>We design <br /> not only a Cloth <br /> But Your <br />{subText}</h1>
                    </div>
                    <div>

                        <img
                            src="https://images.unsplash.com/photo-1739773375426-880a10bea9a9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="fashion"
                            style={{ zIndex: "-2" }} />
                    </div>


                </div>


            </div>
            <div className="vh-100 w-100 position-sticky bg-light top-0 d-flex justify-content-between p-5 overflow-hidden"
                style={{ zIndex: "3" }}>
                <img className="start-0 top-0 position-absolute w-100 vh-100"
                    style={{ zIndex: "-3", opacity: "0.8" }}
                    src="https://images.unsplash.com/photo-1544957992-20514f595d6f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="bg" />


                <div className="w-100 d-flex justify-content-center align-items-center flex-wrap">

                    <div className="text-center m-2 p-2 d-flex align-items-center justify-content-center">

                        <h1 className="text-center" style={{
                            fontSize: "5.5vw",
                            fontFamily: "Prata",
                            textShadow: "1px 1px 16px #000000",
                            color: "gold", zIndex: "1"
                        }}>Bringup Your Idea. <br />We make it Possible.</h1>
                    </div>
                    <div>

                        <img
                            src="https://images.unsplash.com/photo-1564243760850-2b8b3e425ef3?q=80&w=358&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="fashion"
                            style={{ zIndex: "-2" }} />
                    </div>


                </div>


            </div>

            <div className="vh-100 w-100 position-sticky top-0 d-flex align-items-center justify-content-center p-5 flex-column" style={{ zIndex: "4", backdropFilter: 'blur(15px)' }}>
                <img className="position-absolute vw-100 vh-100" style={{ zIndex: "-3", opacity: "0.6" }} src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bg" />
                <h1 className="text-light" style={{ textShadow: "2px 2px 8px #000" }}>Contact Us</h1>
                <form className="bg-white d-flex align-items-center justify-content-center flex-column p-4 rounded-3 vw-50 vh-50">
                    {/* <label>Name</label>
                    <input className="form-control" type="email" placeholder="Full Name" />
                    <label>Email</label>
                    <input className="form-control" type="email" placeholder="Email" />
                    <label>Subject</label>
                    <input className="form-control" type="email" placeholder="Subject" />
                    <label>Message</label>
                    <textarea className="form-control" />

                    <button className="btn btn-success mt-3">Submit</button> */}
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" required />
                    <button type="submit">Send</button>
                </form>
                <p>{status}</p>
            </div>
        </div>
    </>)
}