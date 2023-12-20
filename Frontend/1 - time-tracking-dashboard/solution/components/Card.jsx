import './Card.css'

export const Card = ({data}) => {
  return (
    <div className="card">
      <h3 className="title">{data?.title}</h3>
      <p>{data?.timeframes.daily.current} hrs</p>
      <p>Previous - {data?.timeframes.daily.previous}hrs</p>
    </div>
  )
}
