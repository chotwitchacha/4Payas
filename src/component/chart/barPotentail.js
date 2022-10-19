import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import groupBy from "lodash/groupBy";
import sumBy from "lodash/sumBy";

const PotentailBar = ({result}) => {

    const list = []
    const mapName = [];
    const value = [];
    const valueMax = []
    const sumArray = [];
    const numberSum = []
    

    result.map((item) => {
        return item.score.map((index) => {
            list.push({name: index.name, score: index.score})
            valueMax.push(index.score)
        })
    })

    const scoreMax = Math.max(...valueMax)


    const groupArrayResult = groupBy(list, "name");
    Object.entries(groupArrayResult).map(([key, values]) => {
        value.push({ key: key, scores: values });
      });
    

      Object.entries(groupArrayResult).map(([key, values]) => {
        sumArray.push(((((sumBy(values, "score")/scoreMax) *100) /800) *100).toFixed(0));
        mapName.push(key)
      });
      
      sumArray.map((item) => {
        numberSum.push(Number(item))
      })

      const [data, setData] = useState([{ data: numberSum}])
    

    const option = {
        colors : ['#FFB574'],
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                borderRadius: 1,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: true
        },
        xaxis: {
            categories: mapName,
        }
    }


    return (
        <div>
            <Chart series={data} options={option} type="bar" height={250} className="table"/>
        </div>
    )
}

export default PotentailBar