import admin from '../../assets/admin.svg'
import genuine from '../../assets/genuine.svg'
import otp from '../../assets/otp.svg'

export default function Whyus() {
  const columns = [
    {
      img: genuine,
      name: 'Genuine Feedback',
      info: "Our advanced algorithm ensures authentic feedback for your institution's growth. No more fake feedback.",
    },
    {
      img: otp,
      name: 'OTP Security',
      info: "With OTP authentication, we ensure secure access to user accounts and keep your institution's data safe from breaches.",
    },
    {
      img: admin,
      name: 'Intuitive Dashboard',
      info: 'Manage and track all feedback in one place with our easy-to-use admin dashboard. Make informed decisions for your institution.',
    },
  ]

  return (
    <section className="whyus wrapper">
      <img className="whyus-mockup" src="/src/assets/mockup.png" alt="" />
      <h1 className="whyus-header">Why you should choose us??</h1>
      <div className="whyus-columnsWrapper">
        {columns.map((column, i) => (
          <div key={i} className="whyus-column">
            <img src={column.img} alt={column.name} />
            <p className="whyus-columnHeader">{column.name}</p>
            <p className="whyus-columnInfo">{column.info}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
