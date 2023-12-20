import { timeData } from "../data/data"
import { Card } from "./Card"
import { Control } from "./Control"
import './Dashboard.css'

export const Dashboard = () => {
  return (
    <>
      <Control />
      <div className="dashboard__cardContainer">
        {timeData.map((item) => <Card data={item} key={item.title} />)}
      </div>

    </>
  )
}
