import bottomSvg from '../../assets/heroBottom.svg'

export default function HeroSection() {
  return (
    <section className="heroSection">
      <div className="heroSection-body wrapper">
        <div className="heroSection-content">
          <h4>SaITFeedback is only for SaIT College Students</h4>
          <h1>All in one student's feedback application</h1>
          <p className="heroSection-para">
            Our feedback app bridges communication gaps in education. Features
            include anonymous feedback, OTP verification, admin dashboard,
            easy-to-read charts. Enhance communication channels and improve
            education with our feedback app.
          </p>
          <div className="btnDiv">
            <button className="btn-getStarted">Get Started</button>
            <button className="btn-knowMore">See Features</button>
          </div>
          {/* <img src={bottomSvg} alt="" className="bottomSvg" /> */}
        </div>

        <img
          className="heroSection-image"
          src="/src/assets/mockup.png"
          alt=""
        />
      </div>
    </section>
  )
}
