import { useState, useEffect } from "react"

export default function Footer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let timerId;

        const updateClock = () => {

            setTime(new Date());
            timerId = setTimeout(updateClock, 1000);
        };

        updateClock();

        return () => clearTimeout(timerId);
    }, []);

    const commitHash = process.env.REACT_APP_GIT_HASH || '1.0.0.1';
    return (<>
        <div className="w-100 position-static bottom-0 d-flex justify-content-center align-items-center p-3 shadow-md overflow-hidden"
            style={{ zIndex: "1", height: "20vh" }}>
            <div className="w-100 bg-light p-3" style={{ borderRadius: "21px" }}>

                <div class="name" style={{ color: "gold", fontSize: "1.2vw" }}><h4>Redu Design</h4></div>
                <div class="socialmedia">
                    <a href="" style={{ color: "#44006eff" }}><i class="bi bi-facebook m-2"></i></a>
                    <a href="" style={{ color: "#44006eff" }}><i class="bi bi-twitter-x m-2"></i></a>
                    <a href="" style={{ color: "#44006eff" }}><i class="bi bi-tiktok m-2"></i></a>
                    <a href="" style={{ color: "#44006eff" }}><i class="bi bi-instagram m-2"></i></a>
                    <a href="" style={{ color: "#44006eff" }}><i class="bi bi-telegram m-2"></i></a>
                </div>
                <div class="credentials">

                    <div class="date">
                        <p>&copy; {time.getFullYear()} Redu Design. All Rights Reserved &reg;</p>
                        Version: {commitHash}
                    </div>
                </div>
            </div>

        </div >
    </>)
}