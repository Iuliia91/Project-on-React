import React, { useEffect } from 'react'
import styled from 'styled-components'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
  Scatter,
} from 'recharts'
import { useSelector } from 'react-redux'
import Server from 'api/server.instance'
const StyledSchedule = styled.div`
  width: 500px;
  heigth: 800px;
  background: white;
  border-radius: 20px;
`

const Schedule = (props) => {
  const weigthData = useSelector((store) => store.userReducer)
  const maxweigth = weigthData.userWeigth
  const WeigthToda = props.weigthToday
  const dataMin = weigthData.userGoaldWeigth

  const data = weigthData.userListOfWeifth

  console.log(data)
  return (
    <StyledSchedule>
      <LineChart width={400} height={400} data={data} margin={{ top: 30 }}>
        <ReferenceLine y={dataMin} label="Goal " stroke="red" />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          type="number"
          padding={{ left: 30, right: 30 }}
          domain={[(dataMin) => (dataMin = 3), (dataMax) => (dataMax = 30)]}
        />
        <YAxis
          dataKey={maxweigth}
          type="number"
          domain={[
            (dataMin) => (dataMin = weigthData.userGoaldWeigth - 3),
            (dataMax) => (dataMax = maxweigth),
          ]}
        />

        <Line
          type="monotone"
          dataKey="weigthValue"
          stroke="#8884d8"
          height={300}
          width={400}
        />
      </LineChart>
    </StyledSchedule>
  )
} //

export default Schedule
