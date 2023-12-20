import './Control.css'

export const Control = () => {
  return (
    <div className='control__card title'>
      <p>Report for</p>
      <h1>Jeremy Robson</h1>
      <div className="control__buttonContainer">
        <button>Daily</button>
        <button>Weekly</button>
        <button>Monthly</button>
      </div>

    </div>
  )
}
