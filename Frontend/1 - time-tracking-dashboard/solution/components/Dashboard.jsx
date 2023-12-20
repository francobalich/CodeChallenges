import { timeData } from "../data/data"
import { Card } from "./Card"

export const Dashboard = () => {
  return (
    <>
      Report for
      Jeremy Robson

      Daily
      Weekly
      Monthly

      {timeData.map((item) =><Card data={item}/>)}

    </>
  )
}
