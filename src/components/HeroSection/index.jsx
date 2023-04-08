import mockup from '../../assets/mockup.png'
import { BsArrowRight } from 'react-icons/bs'

export default function HeroSection({ targetRef }) {
  return (
    <section className="heroSection">
      <div className="heroSection-body">
        <div className="heroSection-content">
          <h4>SaITFeedback is only for SaIT College Students</h4>
          <h1>All In One Student's Feedback Application</h1>
          <p className="heroSection-para">
            Our feedback app bridges communication gaps in education. Features
            include anonymous feedback, OTP verification, admin dashboard,
            easy-to-read charts. Enhance communication channels and improve
            education with our feedback app.
          </p>
          <div className="btnDiv">
            <a
              className="btn-getStarted"
              href="https://www.canwebe.in/form/contact?refer=https://cwbedufeedback.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us <BsArrowRight />
            </a>

            <button
              className="btn-knowMore"
              onClick={() => targetRef.current.scrollIntoView()}
            >
              See Features
            </button>
          </div>
        </div>
        <div className="imgDiv">
          <img
            className="heroSection-image"
            src={mockup}
            alt="Mockup of SaitFeedback"
          />
        </div>
      </div>
    </section>
  )
}
