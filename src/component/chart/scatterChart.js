import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import _ from "lodash";
import groupBy from "lodash/groupBy";
import sumBy from "lodash/sumBy";

const ScatterChart = ({resultPerform, resultPoten}) => {

    //// Data Perform ////////
    const listPerform = []
    const valueMaxPerform = []
    const valueAdded = [];
    const valueRadtio = [];
    const valueWaste = [];
    const valuePerform = []
    const sumArrayPerform = [];
    const mapNamePerform = [];
    const filterDataPerform = []
    const mapfilterDataPerform = []
    const ResultPerformTotal = []
    

    resultPerform.map((item) => {
        listPerform.push({name: item.name, value_added: item.value_added, perform_radtio: item.perform_radtio, waste: item.waste })
        valueMaxPerform.push(item.value_added)
        valuePerform.push({name: item.name ,value_added: item.value_added})
    })

    const scoreMaxPerform = Math.max(...valueMaxPerform)
    const groupArrayResultPerform = groupBy(listPerform, "name");
    Object.entries(groupArrayResultPerform).map(([key, values]) => {
        const mapValue = [] 
        values.map(item => mapValue.push({value_added: item.value_added, perform_radtio: item.perform_radtio, waste: item.waste }))
        
        const valuesAdd = mapValue.map(index => index.value_added)
        valueAdded.push({name: key, valueAdded: Number((((valuesAdd/scoreMaxPerform)* 0.5) * 100).toFixed(0))})
        
        const valuesRadtio = mapValue.map(index => index.perform_radtio)
        valueRadtio.push({name: key, valueRadtio: Number((valuesRadtio * 0.35).toFixed(0))})

        const valuesWaste = mapValue.map(index => index.waste)
        valueWaste.push({name: key, valueWaste: Number(((100-valuesWaste) *0.15).toFixed(0))})
      });

    const concatPerform = valueAdded.concat(valueRadtio,valueWaste);
    const groupArrayConcatPerform = groupBy(concatPerform, "name");
    Object.entries(groupArrayConcatPerform).map(([key, values]) => {
        const mapValue = [] 
        values.map((item) =>  { return mapValue.push({added: item.valueAdded, radtio: item.valueRadtio, waste: item.valueWaste})})
        const dataAdded = mapValue.map(item => item.added)
        const dataRadtio = mapValue.map(item => item.radtio)
        const dataWaste = mapValue.map(item => item.waste)
        const concat = dataAdded.concat(dataRadtio,dataWaste);
        const filter = concat.filter(element => {return element !== undefined})
        filterDataPerform.push({name: key, data: filter})
        mapfilterDataPerform.push(filter)
        mapNamePerform.push({name: key})
        
    });

    mapfilterDataPerform.map((item) => {
        return sumArrayPerform.push({data: _.sumBy(item)})
    })

    for (let i = 0; i < mapNamePerform.length; i++) {
        ResultPerformTotal.push({
            name: `${mapNamePerform[i].name}`,
            data: Number(`${sumArrayPerform[i].data}`)
        }) 
    }
    
    ////// Data Potentail ////////
    
    const listPotentail = []
    const mapNamePotentail = []
    const valuePotentail = []
    const valueMaxPotentail = []
    const sumArrayPotentail = []
    const numberSumPotentail = []
    const ResultPotentailTotail = []

    resultPoten.map((item) => {
        return item.score.map((index) => {
            listPotentail.push({name: index.name, score: index.score})
            valueMaxPotentail.push(index.score)
        })
    })

    const scoreMaxPotentail = Math.max(...valueMaxPotentail)
    const groupArrayResultPotentail = groupBy(listPotentail, "name");
    Object.entries(groupArrayResultPotentail).map(([key, values]) => {
        sumArrayPotentail.push(((((sumBy(values, "score")/scoreMaxPotentail) *100) /800) *100).toFixed(0));
        mapNamePotentail.push(key)
    });

    sumArrayPotentail.map((item) => {
        numberSumPotentail.push(Number(item))    
    })

    for (let i = 0; i < mapNamePotentail.length; i++) {
        ResultPotentailTotail.push({
            name: `${mapNamePotentail[i]}`,
            data: Number(`${numberSumPotentail[i]}`)
        }) 
    }


    /////////////// Scatter ///////////////////////
    const SortDataPerform = ResultPerformTotal.sort((a,b) => (a.name > b.name ? 1 : -1))
    const SortDataPotentail = ResultPotentailTotail.sort((a,b) => (a.name > b.name ? 1 : -1));

    const resultData = []
    const concat = SortDataPerform.concat(SortDataPotentail)
    const groupArray = groupBy(concat, "name");
    Object.entries(groupArray).map(([key, values]) => {
        resultData.push({name: key, data: [values.map(item => item.data)]})
    })

    console.log("resultData", resultData);

    const [data, setData] = useState(resultData)




    const option = {
        chart: {
            height: 500,
            type: 'scatter',
            zoom: {
                enabled: false,
                type: 'xy'
            }
        },
        xaxis: {
            tickAmount: 10,
            labels: {
                formatter: function (val) {
                    return parseFloat(val).toFixed(1)
                }
            }
        },
        yaxis: {
            tickAmount: 10
        }
    }

    return (
        <div>
            <Chart series={data} options={option} type="scatter" height={350}  />
        </div>
    )
}

export default ScatterChart