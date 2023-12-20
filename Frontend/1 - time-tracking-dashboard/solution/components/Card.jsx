
export const Card = ({data}) => {
  return (
    <>
      <h3>{data?.title}</h3>
      <p>{data?.timeframes.daily.current} hrs</p>
      <p>Previous - {data?.timeframes.daily.previous}hrs</p>
    </>
  )
}
