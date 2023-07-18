/* eslint-disable require-jsdoc */
import React from 'react';
import {Area, XAxis, YAxis,
  CartesianGrid, Tooltip, ComposedChart, Scatter, Legend} from 'recharts';
import {LevelEvent, UserSummary} from '../../state/recoil';
import {getStartTimeOfSession} from './user-summary';
import _ from 'lodash';

export type UserGraphDataPoint = {
    timestamp: string,
    contribute: number,
    consume: number
    level1?: number
    level2?: number,
    level3?: number,
    level4?: number,
}
const getTimestamp = (date: number) => {
  const pad = (n: any, s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
  const d = new Date(date);
  // ${pad(d.getFullYear(), 4)}-${pad(d.getMonth()+1)}-${pad(d.getDate())}
  // eslint-disable-next-line max-len
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const emptySession: (timestamp: number) =>
UserGraphDataPoint = (timestamp: number) => ({
  timestamp: getTimestamp(timestamp),
  contribute: 0,
  consume: 0,
});

const msToMin = (n: number) => n / 60000;

export const userSummaryToData: (summary: UserSummary) =>
UserGraphDataPoint[] = (summary) => {
  const lastSession = getStartTimeOfSession(summary.startDate,
      summary.sessionLength,
      (new Date()).getTime());
  const hasLevelEvent = (levels: LevelEvent[],
      levelNum: number, time: number) =>
    levels.some((l) => getStartTimeOfSession(summary.startDate,
        summary.sessionLength,
        l.date) === time && levelNum === l.leveledUpTo);
  const numSessions = (lastSession - summary.startDate) / summary.sessionLength;
  const val = Array.from(Array(numSessions).keys());
  const res: UserGraphDataPoint[] = val.map((x, i) => {
    const sessionIdx = (i * summary.sessionLength) + summary.startDate;
    return summary.sessionData[sessionIdx] === undefined ?
      emptySession(sessionIdx) : {
        timestamp: getTimestamp(sessionIdx),
        contribute: msToMin(summary.sessionData[sessionIdx].timeContributing),
        consume: msToMin(summary.sessionData[sessionIdx].timeConsumingContent),
        level1: hasLevelEvent(summary.levels, 1, sessionIdx) ?
        msToMin(summary.sessionData[sessionIdx].timeConsumingContent +
          summary.sessionData[sessionIdx].timeContributing) : undefined,
        level2: hasLevelEvent(summary.levels, 2, sessionIdx) ?
        msToMin(summary.sessionData[sessionIdx].timeConsumingContent +
          summary.sessionData[sessionIdx].timeContributing) : undefined,
        level3: hasLevelEvent(summary.levels, 3, sessionIdx) ?
        msToMin(summary.sessionData[sessionIdx].timeConsumingContent +
          summary.sessionData[sessionIdx].timeContributing) : undefined,
        level4: hasLevelEvent(summary.levels, 4, sessionIdx) ?
        msToMin(summary.sessionData[sessionIdx].timeConsumingContent +
          summary.sessionData[sessionIdx].timeContributing) : undefined,
      };
  });
  return res;
};

type UserGraphProps = {
  data: UserGraphDataPoint[]
  percentStart: number,
  percentEnd: number,
}

export const UserGraph = (props: UserGraphProps) => {
  const endInd = _.round(props.data.length * props.percentEnd, 0);
  const startInd = _.round(props.data.length * props.percentStart, 0);
  const data = props.data.slice(startInd, endInd);
  return (
    <ComposedChart
      width={1000}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >


      <Scatter dataKey="level1" fill="green" />
      <Scatter dataKey="level2" fill="teal" />
      <Scatter dataKey="level3" fill="purple" />
      <Scatter dataKey="level4" fill="blue" />
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="timestamp"
        label={{value: 'Time of day',
          position: 'insideBottomRight', offset: -10}}
        angle={-10} offset={-25} />
      <YAxis label={{value: 'Engagement', angle: -90, position: 'insideLeft'}}/>
      <Tooltip />
      <Area type="monotone" dataKey="contribute"
        stackId="1" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="consume"
        stackId="1" stroke="#82ca9d" fill="#82ca9d" />
      <Legend margin={{top: 500}}/>
      {/* <Area type="monotone" dataKey="amt"
          stackId="1" stroke="#ffc658" fill="#ffc658" /> */}
    </ComposedChart>
  );
};
