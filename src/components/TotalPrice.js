import React from 'react'

const TotalPrice = (porps) => {
  // <h4 className="display-5">收入：41990   支出：89336</h4>
  return (
    <div className="row  ">
      <div className="col">
        <h4 className="income text-secondary">收入：<span>3333</span></h4>
      </div>
      <div className="col">
        <h4 className="outcome text-secondary">支出：<span>9999</span></h4>
      </div>
    </div>
  )
}

export default React.memo(TotalPrice)