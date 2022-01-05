import ChartBar from './ChartBar';
import './Charts.css';

const Charts = (props) => {

    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const TotalMaximum = Math.max(...dataPointsValue);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={TotalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Charts;