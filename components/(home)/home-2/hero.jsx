export default function Hero() {
    return (
        <>
            <div
                className="optech-hero-section2 bg-cover"
                style={{
                    backgroundImage: "url(assets/images/hero/psms.jpg)",
                }}
            >
                <div className="container">
                    <div className="optech-hero-content center">
                        <div className="optech-hero-power">
                            <img src="/assets/images/hero/power.svg" alt="" />
                        </div>
                        <h1>The best innovative technology solutions</h1>
                        <p>
                            We transform businesses of most major sectors with
                            powerful and adaptable digital solutions that
                            satisfy the needs of today.
                        </p>
                        <div
                            className="optech-extra-mt"
                            data-aos="fade-up"
                            data-aos-duration={800}
                        >
                            <a
                                className="optech-default-btn"
                                href="contact-us.html"
                                data-text="Work With Us"
                            >
                                <span className="btn-wraper">Work With Us</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
