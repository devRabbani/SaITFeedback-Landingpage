import laptop from '../../assets/laptop.png'

export default function FullDemo() {
  return (
    <section className="fullDemo">
      <div className="wrapper">
        <div className="laptop">
          <img src={laptop} alt="Demo Laptop" />
          <iframe
            src="https://www.youtube.com/embed/Gvp0FpMNtS0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
      <div className="fullDemo-darkBg">
        <div className="fullDemo-content wrapper">
          <h1>Here is the Full Demo of the App</h1>
          <p>
            The student feedback application has a dashboard for admins to
            analyze and view feedback data, with chart generation and data
            visualization. The app includes OTP authentication and an algorithm
            to prevent duplicate reviews and ensure fairness. The app also
            generates reports in PDF format and provides summaries of the data.
            Overall, this app is a useful tool for administrators to track and
            improve student experiences.
          </p>
        </div>
      </div>
    </section>
  )
}
