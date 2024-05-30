import { useNavigate } from "react-router-dom";
import "./Main.css"

const Main = () => {
    const navigate = useNavigate();
    return(
        <div>
            <section className="hero">
                <div className="text-box">
                    <h1>Videos and more</h1>
                    <p>A side project that contains links that don't work yet. Use the navigation bar to navigate. <br/>To become ... a website that creates custom exam papers using AI technology ... haha not really (sounds fancy though!)</p>
                    <div className="hero-btn" onClick={() => {navigate("/reviews")}}>CLICK ME</div>
                </div>    

            </section>

            {/* <!--Modules--> */}

            <section className="modules">
                <h1>MATH questions</h1>
                <p>A range of questions from pure maths, mechanics and Statistics</p>

                <div className="row">
                    <div className="module-col">
                        <h3>Pure</h3>
                        <p>This includes but is not limited to Algebra and functions, Coordinate Geometry, Trigonometry, Sequences and Series, Proofs, Exponentials and Logarithms, Differentiation, Integration, Numerical Methods, Vectors </p>
                    </div>
                    <div className="module-col">
                        <h3>Mechanics</h3>
                        <p>This includes but is not limited to Kinematics, Forces and Newton's Laws, Moments and Projectiles</p>
                    </div>
                    <div className="module-col">
                        <h3>Statistics</h3>
                        <p>This includes but is not limited to Sampling, Data Presentation and Interpretation, Probability, Statistical Distributions and Hypothesis Testing </p>
                    </div>
                </div>
            </section>

            {/* <!--TUTORING--> */}

            <section className="videos">
                    <h1>Learn through videos</h1>
                    <p>Find a collection of short videos on a range of topics</p>
                <div className="row">

                    <div className="video-col" onClick={() => {navigate("/videos")}}>
                        <video src="media/long_division.mp4" muted className="vid" loop></video>
                    </div>

                    <div className="video-col" onClick={() => {navigate("/videos")}}>
                        <video src="media/tan_inverse.mp4" muted className="vid" loop></video>
                    </div>

                    <div className="video-col" onClick={() => {navigate("/videos")}}>
                        <video src="media/domain_range_composite_functions.mp4" muted className="vid" loop></video>
                    </div>

                </div>
            </section>

            {/* <!--TESTIMONIALS--> */}

            <section className="testimonials">
                <h1>Testimonials</h1>
                <p>This is what our clients think of this service</p>

                <div className="row">
                <div className="testimonials-col">
                    <img src="media/r.png"/>
                    <div>
                        <p>This is a great website! Would recommend 100% hahahaha</p>
                        <h3>Rehan</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                </div>
                    <div className="testimonials-col">
                        <img src="media/f.png"/>
                        <div>
                            <p>This is a great website! Would recommend 100% hahahaha</p>
                            <h3>Faran</h3>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--Call to action--> */}

            <section className="cta">
                <h1>Create a personalised paper <br/> anywhere from the world</h1>
                <div className="hero-btn">CONTACT US</div>
            </section>

        </div>
    )
}

export default Main;