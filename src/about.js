import { useState, useEffect } from "react";
export default function About() {
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('/about.txt')
            .then((res) => res.text())
            .then((data) => setText(data));
    }, []);

    const [team, setTeam] = useState("")

    useEffect(() => {
        fetch("/team.txt").then((res) => res.text()).then((data) => setTeam(data))
    })
    const [philiosophy, setPhilisophy] = useState("")

    useEffect(() => {
        fetch("/philiosophy.txt").then((res) => res.text()).then((data) => setPhilisophy(data))
    })
    const [join, setJoin] = useState("")

    useEffect(() => {
        fetch("/join.txt").then((res) => res.text()).then((data) => setJoin(data))
    })

    return (
        <>
            <div class="w-100 vh-100 d-flex align-items-center justify-content-center flex-column">
                <img src="https://images.unsplash.com/photo-1718985342149-7178154e0aee?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="h-100 w-100 position-fixed start-0 top-0"
                    style={{ zIndex: "-1" }} />
                <h1 className="text-center" style={{
                    color: "gold",
                    textShadow: "1px 1px 3px black",
                    fontFamily: "Berkshire Swash",
                    fontSize: "7vw"

                }}>About Us</h1>
                <div class="w-50 h-75 bg-light p-3" style={{ overflow: "hidden", overflowY: "scroll", borderRadius: "19px" }}>
                    <p style={{ fontSize: "2vw", fontFamily: "pt serif", textAlign: "center" }}>{text}</p>
                    <h1 className="text-center" style={{
                        color: "gold",
                        textShadow: "1px 1px 3px black",
                        fontFamily: "Berkshire Swash",
                        fontSize: "3vw"

                    }}>Our Philiosophy</h1>

                    <p style={{ fontSize: "2vw", fontFamily: "pt serif", textAlign: "center" }}>{philiosophy}</p>
                    <h1 className="text-center" style={{
                        color: "gold",
                        textShadow: "1px 1px 3px black",
                        fontFamily: "Berkshire Swash",
                        fontSize: "3vw"

                    }}>Our Team</h1>

                    <p style={{ fontSize: "2vw", fontFamily: "pt serif", textAlign: "center" }}>{team}</p>
                    <h1 className="text-center" style={{
                        color: "gold",
                        textShadow: "1px 1px 3px black",
                        fontFamily: "Berkshire Swash",
                        fontSize: "3vw"

                    }}>Join Our Journey</h1>

                    <p style={{ fontSize: "2vw", fontFamily: "pt serif", textAlign: "center" }}>{join}</p>
                    <div class="socialmedia d-flex align-items-center justify-content-center">
                        <a href="" style={{ color: "#44006eff" }}><i class="bi bi-facebook m-2"></i></a>
                        <a href="" style={{ color: "#44006eff" }}><i class="bi bi-twitter-x m-2"></i></a>
                        <a href="" style={{ color: "#44006eff" }}><i class="bi bi-tiktok m-2"></i></a>
                        <a href="" style={{ color: "#44006eff" }}><i class="bi bi-instagram m-2"></i></a>
                        <a href="" style={{ color: "#44006eff" }}><i class="bi bi-telegram m-2"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}