export default function HeroSection() {
  return (
    <section className="heroSection">
      <div className="heroSection-body wrapper">
        <h4>SaITFeedback is only for SaIT College Students</h4>
        <h1>All in one student's feedback application</h1>
        <p className="heroSection-para">
          Our feedback app bridges communication gaps in education. Features
          include anonymous feedback, OTP verification, admin dashboard,
          easy-to-read charts. Enhance communication channels and improve
          education with our feedback app.
        </p>
        <button className="btn-getStarted">Get Started for a Demo</button>
      </div>
      <img className="waveBg" src="/src/assets/wave.svg" alt="" />
    </section>
  )
}
