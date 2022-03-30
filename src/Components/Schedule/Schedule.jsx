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
  ResponsiveContainer,
} from 'recharts'
import { useSelector } from 'react-redux'
import Server from 'api/server.instance'
const StyledSchedule = styled.div`
  background: #ffffff;

  height: 300px;

  @media (max-width: 620px) {
    height: 220px;
  }
`

const Schedule = (props) => {
  const weigthData = useSelector((store) => store.userReducer)
  const maxweigth = weigthData.userWeigth - 5
  const WeigthToda = props.weigthToday
  const dataMin = weigthData.userGoaldWeigth

  const data = weigthData.userListOfWeifth

  return (
    <StyledSchedule>
      <div style={{ width: '100%', height: '100%' }}>
        {' '}
        <ResponsiveContainer>
          <LineChart
            /*width={100}
        height={300}*/
            data={data}
            margin={{ top: 30, right: 20 }}
          >
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
                (dataMax) => (dataMax = maxweigth + 10.5),
              ]}
            />

            <Line type="monotone" dataKey="weigthValue" stroke="green" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* <LineChart
        width={100}
        height={300}
        data={data}
        margin={{ top: 30, right: 20 }}
      >
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
            (dataMax) => (dataMax = maxweigth + 10.5),
          ]}
        />

        <Line type="monotone" dataKey="weigthValue" stroke="green" />
      </LineChart>*/}
    </StyledSchedule>
  )
} //

export default Schedule
