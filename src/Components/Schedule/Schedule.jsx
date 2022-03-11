import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
import { useSelector } from 'react-redux'
const StyledSchedule = styled.div`
  width: 500px;
  heigth: 800px;
  background: white;
  border-radiuc: 100px;
`

const Schedule = (props) => {
  const weigthData = useSelector((store) => store.userReducer)

  const data = weigthData.userListOfWeifth
  return (
    <StyledSchedule>
      <LineChart width={400} height={300} data={data} margin={{ top: 30 }}>
        <Line type="monotone" dataKey="weigthValue" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="day" />
        <YAxis dataKey="weigthValue" />
      </LineChart>
    </StyledSchedule>
  )
}

export default Schedule
