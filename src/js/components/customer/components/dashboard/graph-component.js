import React from 'react';
import { Bar } from 'react-chartjs-2';
import { values } from 'lodash';


export const GraphComponent = (props) => {
    const state = {
        labels: ['January', 'February', 'March',
            'April', 'May', 'June', 'July', 'August', 'Septmeber', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Revenue',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: values(props.graph_data)
            }
        ]
    }
    return (
        <div>
            <Bar
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'Sales Graph',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }}
            />
        </div>
    );
}