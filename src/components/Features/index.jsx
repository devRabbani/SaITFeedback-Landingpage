import otp from '../../assets/otp.png'
import review from '../../assets/review.png'
import dashboard from '../../assets/dashboard.png'

export default function Features() {
  return (
    <section className="features">
      <div className="snap-bgWrapper">
        <div className="wrapper feature-row">
          <div className="snap">
            <img src={otp} alt="" />
          </div>

          <div className="snap-content">
            <h2>Signing In</h2>
            <p>
              Enter USN and get an OTP automatically sent to your registered
              mobile number for secure authentication.
            </p>
          </div>
        </div>
      </div>

      <div className="snap-bgWrapper">
        <div className="wrapper feature-row">
          <div className="snap">
            <img src={review} alt="" />
          </div>

          <div className="snap-content">
            <h2>Review</h2>
            <p>
              Algorithm prevents duplicate reviews, ensures fairness & accurate
              feedback with outliers, aiding data-driven decisions.
            </p>
          </div>
        </div>
      </div>
      <div className="snap-bgWrapper">
        <div className="wrapper feature-row">
          <div className="snap">
            <img src={dashboard} alt="" />
          </div>

          <div className="snap-content">
            <h2>Admin Panel</h2>
            <p>
              Admin dashboard with chart generation and edit features makes data
              visualization and decision-making easy for organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
