import "./About.css"
import Footer from "./Footer";
import Header from "./Header";

const About = () => {
    return(
        <div>
            <Header/>
            <section className="about-us">
                <div className="row">
                    <div className="about-col">
                        <h1>Mathematician / Teacher</h1>
                        <p>I have an MSci Mathematics degree from Imperial College London and currently I teach mathematics at a sixth form</p>
                    </div>
                    <div className="about-col">
                        <img src="media/math1.jpg"/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default About;