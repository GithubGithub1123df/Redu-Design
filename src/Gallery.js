export default function Gallery() {
    return (<>
        <div class="m-2 h-100 vw-100">
            <img src="https://images.unsplash.com/photo-1550344071-13ecada2a91d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="vw-100 vh-100 position-fixed top-0 start-0"
                style={{ zIndex: "-1", opacity: "0.6" }} />
            <h1 className="text-center"
                style={{
                    color: "gold",
                    textShadow: "1px 1px 3px black",
                    fontFamily: "Berkshire Swash",


                }}>Gallery</h1>
            <div class="accordion">
                <div class="accordion-item" style={{ background: "transparent", backdropFilter: "blur(15px)" }}>

                    <h1>

                        <button className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#CollapseOne"
                            style={{
                                color: "#44006eff",

                                fontFamily: "Berkshire Swash",
                            }}>
                            Traditional Habeshan Dress
                        </button>
                    </h1>

                    <div id="CollapseOne" className="accordion-collapse" style={{ background: "transparent" }}>

                        <div class="carousel slide" id="photoCarousel1" data-bs-ride="carousel">
                            <div class="carousel-inner" style={{ background: "transparent" }}>
                                <div class="carousel-item active">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/736x/d8/d2/b0/d8d2b02ff0596d1b98cc0e0c9ac87ff1.jpg" alt="" />
                                    </div></div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/1200x/64/60/bc/6460bce7cf4f0f6f873e8615836da5c9.jpg"
                                            alt="" />
                                    </div></div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/1200x/b5/60/c8/b560c822105ef69d5f9f473d8fe9911e.jpg"
                                            alt="" />
                                    </div></div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/1200x/34/e1/c0/34e1c031783f99811b45db8ce3d8bcb9.jpg"
                                            alt="" />
                                    </div></div>
                                <button class="carousel-control-prev bg-dark " data-bs-slide="prev" data-bs-target="#photoCarousel1"
                                    aria-controls="carousel">
                                    <span class="carousel-control-prev-icon rounded-2"></span>
                                </button>
                                <button class="carousel-control-next bg-dark " data-bs-slide="next" data-bs-target="#photoCarousel1" aria-controls="carousel">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item" style={{ background: "transparent", backdropFilter: "blur(15px)" }}>
                    <h1>
                        <button className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#CollapseTwo"
                            style={{
                                color: "#44006eff",

                                fontFamily: "Berkshire Swash",
                            }}>
                            Traditional Habeshan Men's Cloth
                        </button>
                    </h1>

                    <div className="accordion-collapse" id="CollapseTwo">
                        <div id="photoCarousel2" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">

                                <div class="carousel-item active">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img className="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/736x/04/03/fd/0403fd68425689ec28d6447040384bc0.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img className="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/736x/a5/dd/fb/a5ddfb8e32d948df9e41134256abb1fb.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img className="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/1200x/22/3c/53/223c53c2d598be02ed2655304a4d6c59.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img className="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/1200x/76/0f/b1/760fb1a9440900cb33175e79f487dd14.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img className="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/1200x/51/21/14/51211414c67c7d98a4b6c98fadc32fa2.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img className="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/736x/c9/56/9f/c9569f7271eb7feb091eb5f23804ae16.jpg" alt="" />
                                    </div>
                                </div>

                            </div>
                            <button className="carousel-control-prev bg-dark " data-bs-slide="prev" aria-controls="carousel" data-bs-target="#photoCarousel2"><span className="carousel-control-prev-icon"></span></button>
                            <button className="carousel-control-next bg-dark " data-bs-slide="next" aria-controls="carousel" data-bs-target="#photoCarousel2"><span className="carousel-control-next-icon"></span></button>
                        </div>
                    </div>
                </div>

                <div class="accordion-item" style={{ background: "transparent", backdropFilter: "blur(15px)" }}>
                    <h1>
                        <button className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#CollapseThree"
                            style={{
                                color: "#44006eff",

                                fontFamily: "Berkshire Swash",
                            }}>
                            Casual Women's</button>
                    </h1>
                    <div className="accordion-collapse" id="CollapseThree">

                        <div class="carousel slide" id="photoCarousel3" data-bs-ride="carousel">
                            <div class="carousel-inner">

                                <div class="carousel-item active">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%" }}
                                            src="https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    </div></div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }} src="https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    </div></div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }} src="https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    </div></div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }} src="https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    </div></div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }} src="https://images.unsplash.com/photo-1632149877166-f75d49000351?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="" /></div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_1280.jpg"
                                            alt="" /></div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://cdn.pixabay.com/photo/2024/11/05/20/59/artistic-9176859_1280.jpg"
                                            alt="" /></div>
                                </div>

                                <button class="carousel-control-prev bg-dark " data-bs-slide="prev" data-bs-target="#photoCarousel3" aria-controls="photoCarousel3">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next bg-dark " data-bs-slide="next" data-bs-target="#photoCarousel3" aria-controls="photoCarousel3">
                                    <span class="carousel-control-next-icon"></span>
                                </button>

                            </div>
                        </div>
                    </div>

                </div>

                <div class="accordion-item" style={{ background: "transparent", backdropFilter: "blur(15px)" }}>
                    <h1>
                        <button class="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            style={{
                                color: "#44006eff",
                                fontFamily: "Berkshire Swash",
                            }}>
                            Casual Men's</button></h1>

                    <div className="accordion-collapse" id="collapseFour">
                        <div class="carousel slide" id="photoCarousel4" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://images.unsplash.com/photo-1619603364937-8d7af41ef206?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    </div></div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    </div></div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://images.unsplash.com/photo-1674352917425-5cbbe7db943d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    </div></div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://images.unsplash.com/photo-1540924782561-3fc182603b86?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    </div></div>

                            </div>
                            <button class="carousel-control-prev bg-dark " data-bs-slide="prev" data-bs-target="#photoCarousel4" aria-controls="photoCarousel4">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next bg-dark " data-bs-slide="next" data-bs-target="#photoCarousel4" aria-controls="photoCarousel4">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="accordion-item" style={{ background: "transparent", backdropFilter: "blur(15px)" }}>
                    <h1>
                        <button class="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            style={{
                                color: "#44006eff",
                                fontFamily: "Berkshire Swash",
                            }}>Kid's Traditional Wear</button>
                    </h1>

                    <div id="collapseFive" className="accordion-collapse">
                        <div class="carousel slide" data-bs-ride="carousel" id="photoCarousel5">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/1200x/1f/35/7e/1f357e8d6be7d1ca5c1a504bc7131fef.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/1200x/27/69/a4/2769a4f8a0284812955268529e02da82.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/736x/ff/2d/75/ff2d75612d3bc0dd4095c76e5134a94a.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/1200x/a5/5a/13/a55a13063d34b776082f06d5ef3a7190.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/736x/69/b1/e7/69b1e7e89f06f98ef30590342cb9db3d.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/1200x/59/ad/c3/59adc36f37d5a81e2f63bf3a78ad0eea.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/1200x/d5/ea/df/d5eadf3d0491a7e7fa5a95474775b0e8.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/736x/c2/f2/e4/c2f2e4eba1a9db9ece92b0fc9cf48296.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/736x/b5/77/fa/b577fa240e61d98f40deb9895b0c693d.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/736x/be/c2/da/bec2dad27e50205a3073d1807d948459.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center" style={{ height: "75vh" }}>
                                        <img class="carousel-img mx-2" style={{ maxHeight: "100%", maxWidth: "100%" }}
                                            src="https://i.pinimg.com/736x/17/0e/26/170e26671e27a3eb5563bb4e9197596b.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev"
                                data-bs-slide="prev"
                                data-bs-target="#photoCarousel5"
                                aria-controls="photoCarousel5">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next"
                                data-bs-slide="next"
                                data-bs-target="#photoCarousel5"
                                aria-controls="photoCarousel5">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>)
}