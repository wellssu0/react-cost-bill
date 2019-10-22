import React from 'react'
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts'
import { Colors } from '../constants'

const DetailFigure = props => {
  
  const ColorsArr = Object.keys(Colors).map(key => Colors[key])

  const { categoryData , title} = props
  
  if(categoryData.length === 0) {
  return <h3 style={{textAlign: 'center'}} className="mx-3 font-weight-light">{title}没有数据</h3>
  }
  
  return (
    <div className="pie-chart-component">
      <h3 style={{textAlign: 'center'}} className="mt-3 font-weight-light">{title}:</h3>
      <ResponsiveContainer width={'100%'} height={300}>
        <PieChart>
          <Pie 
            isAnimationActive={true} 
            data={categoryData}
            dataKey="value"
            cx='50%' cy='50%' 
            outerRadius={100} fill={Colors.blue} label
          >
          {
            categoryData.map((entry, index) => <Cell 
              key={index} 
              fill={ColorsArr[index % ColorsArr.length]}
              />)
          }
          </Pie>
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default React.memo(DetailFigure)