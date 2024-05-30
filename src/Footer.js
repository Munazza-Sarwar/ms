import "./Footer.css"

const Footer = () => {
    return(
        <div>
            <section className="footers">
                <h4>About SumUp</h4>
                <p>This is a fun side project. We are working to create a website that will benefit the people who visit. Enjoy!</p>
                <div className="icons">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-github"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-linkedin"></i>
                </div>
                <p className="last-line">Made with <i className="fa fa-heart-o"></i> by Munazza</p>
            </section>

        </div>
    )
}

export default Footer;