import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import groupBy from "lodash/groupBy";
import sumBy from "lodash/sumBy";
import _ from "lodash";
import { ItemMeta } from 'semantic-ui-react';
import './chart.css'


const PerformanceBar = ({result}) => {


    const list = []
    const valueMax = []
    const valueAdded = [];
    const valueRadtio = [];
    const valueWaste = [];
    const value = []
    const sumArray = [];
    const mapName = [];
    const filterData = []
    const mapfilterData = []


    result.map((item) => {
        list.push({name: item.name, value_added: item.value_added, perform_radtio: item.perform_radtio, waste: item.waste })
        valueMax.push(item.value_added)
        value.push({name: item.name ,value_added: item.value_added})
    })

    const scoreMax = Math.max(...valueMax)
    

    const groupArrayResult = groupBy(list, "name");
    Object.entries(groupArrayResult).map(([key, values]) => {
        const mapValue = [] 
        values.map(item => mapValue.push({value_added: item.value_added, perform_radtio: item.perform_radtio, waste: item.waste }))
        
        const valuesAdd = mapValue.map(index => index.value_added)
        valueAdded.push({name: key, valueAdded: Number((((valuesAdd/scoreMax)* 0.5) * 100).toFixed(0))})
        
        const valuesRadtio = mapValue.map(index => index.perform_radtio)
        valueRadtio.push({name: key, valueRadtio: Number((valuesRadtio * 0.35).toFixed(0))})

        const valuesWaste = mapValue.map(index => index.waste)
        valueWaste.push({name: key, valueWaste: Number(((100-valuesWaste) *0.15).toFixed(0))})
      });

    const concat = valueAdded.concat(valueRadtio,valueWaste);


    const groupArrayConcat = groupBy(concat, "name");
    Object.entries(groupArrayConcat).map(([key, values]) => {
        const mapValue = [] 
        
        values.map((item) =>  { return mapValue.push({added: item.valueAdded, radtio: item.valueRadtio, waste: item.valueWaste})})
        const dataAdded = mapValue.map(item => item.added)
        const dataRadtio = mapValue.map(item => item.radtio)
        const dataWaste = mapValue.map(item => item.waste)

        const concat = dataAdded.concat(dataRadtio,dataWaste);
        // concat.map((item) => {
        //     mapfilterData.push(Number(item))
        // })
        const filter = concat.filter(element => {return element !== undefined})
        filterData.push({name: key, data: filter})
        mapfilterData.push(filter)
        mapName.push(key)
      });

        mapfilterData.map((item) => {
                return sumArray.push(_.sumBy(item))
        })

        
    

    
    const [data, setData] = useState([{ data: sumArray}])


    const option = {
        colors : ['#56CCF2'],
        fontColor: ['#000000'],
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
            style: {
                fontSize: '12px',
                fontFamily: 'Prompt',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    }


    return (
        <div>
            <Chart series={data} options={option} type="bar" height={250}/>
        </div>
    )
}

export default PerformanceBar