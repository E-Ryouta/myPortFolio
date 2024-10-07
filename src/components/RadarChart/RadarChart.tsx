import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export type ReaderChartProps = {
  title: string;
  data: {
    skill: string;
    level: number;
    fullMark: 3;
  }[];
};

export const RadarChart = ({ title, data }: ReaderChartProps) => {
  return (
    <div>
      <h3 className="text-center font-bold text-secondary">{title}</h3>
      <ResponsiveContainer width={400} height={300}>
        <RechartsRadarChart outerRadius={90} width={730} height={250} data={data}>
          <PolarGrid stroke="#143838" />
          <PolarAngleAxis dataKey="skill" stroke="#143838" />
          <PolarRadiusAxis radius={30} domain={[0, 3]} tickCount={4} stroke="#143838" />
          <Radar
            dataKey="level"
            stroke="#143838"
            fill="#143838"
            dot={{ r: 5, fill: '#143838' }}
            fillOpacity={0.7}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
};
