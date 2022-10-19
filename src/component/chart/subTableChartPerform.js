import React, { useState, useEffect } from "react";
import { Header, Table, Rating ,Progress, TableHeader, Tab} from 'semantic-ui-react'
import _ from "lodash";
import groupBy from "lodash/groupBy";
import sumBy from "lodash/sumBy";

const SubTableChartPerform = ({result,subResult}) => {

    //// part perform หัวหน้า //////
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

    result.map((item) => {
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

    //// Part Perform ลูกน้อง /////
    const sublistPerform = []
    const subvalueMaxPerform = []
    const subvalueAdded = [];
    const subvalueRadtio = [];
    const subvalueWaste = [];
    const subvaluePerform = []
    const subsumArrayPerform = [];
    const submapNamePerform = [];
    const subfilterDataPerform = []
    const submapfilterDataPerform = []
    const subResultPerformTotal = []

    subResult.map((item) => {
        sublistPerform.push({name: item.name, value_added: item.value_added, perform_radtio: item.perform_radtio, waste: item.waste })
        subvalueMaxPerform.push(item.value_added)
        subvaluePerform.push({name: item.name ,value_added: item.value_added})
    })

    const scoreMaxPerformSub = Math.max(...subvalueMaxPerform)
    const groupArraySubResultPerform = groupBy(sublistPerform, "name");
    Object.entries(groupArraySubResultPerform).map(([key, values]) => {
        const mapValue = [] 
        values.map(item => mapValue.push({value_added: item.value_added, perform_radtio: item.perform_radtio, waste: item.waste }))
        
        const valuesAdd = mapValue.map(index => index.value_added)
        subvalueAdded.push({name: key, valueAdded: Number((((valuesAdd/scoreMaxPerformSub)* 0.5) * 100).toFixed(0))})
        
        const valuesRadtio = mapValue.map(index => index.perform_radtio)
        subvalueRadtio.push({name: key, valueRadtio: Number((valuesRadtio * 0.35).toFixed(0))})

        const valuesWaste = mapValue.map(index => index.waste)
        subvalueWaste.push({name: key, valueWaste: Number(((100-valuesWaste) *0.15).toFixed(0))})
    });

    const concatPerformSub = subvalueAdded.concat(subvalueRadtio,subvalueWaste);
    const groupArrayConcatPerformSub = groupBy(concatPerformSub, "name");
    Object.entries(groupArrayConcatPerformSub).map(([key, values]) => {
        const mapValue = [] 
        values.map((item) =>  { return mapValue.push({added: item.valueAdded, radtio: item.valueRadtio, waste: item.valueWaste})})
        const dataAdded = mapValue.map(item => item.added)
        const dataRadtio = mapValue.map(item => item.radtio)
        const dataWaste = mapValue.map(item => item.waste)
        const concat = dataAdded.concat(dataRadtio,dataWaste);
        const filter = concat.filter(element => {return element !== undefined})
        subfilterDataPerform.push({name: key, data: filter})
        submapfilterDataPerform.push(filter)
        submapNamePerform.push({name: key})
        
    });

    submapfilterDataPerform.map((item) => {
        return subsumArrayPerform.push({data: _.sumBy(item)})
    })

    for (let i = 0; i < submapNamePerform.length; i++) {
        subResultPerformTotal.push({
            name: `${submapNamePerform[i].name}`,
            data: Number(`${subsumArrayPerform[i].data}`)
        }) 
    }

    //// Sort Data /////

    const resultData = []
    const SortDataPerform = ResultPerformTotal.sort((a,b) => (a.name > b.name ? 1 : -1))
    const SortDataSubPerform = subResultPerformTotal.sort((a,b) => (a.name > b.name ? 1 : -1))
    const concat = SortDataPerform.concat(SortDataSubPerform)
    const groupArray = groupBy(concat, "name");
    Object.entries(groupArray).map(([key, values]) => {
        resultData.push({
            name: key, 
            data: values.map(item => item.data)})
    })

    console.log('resultData', resultData);
    return (
        <Table definition celled fixed className="table">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>ผลการประเมินโดยหัวหน้า</Table.HeaderCell>
                    <Table.HeaderCell>ผลการประเมินตนเอง</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    resultData.map((item) => (
                        <Table.Row key={item}>
                            <Table.Cell>{item.name}</Table.Cell>
                            {
                                item.data.map((index) => (
                                    <>
                                    <Table.Cell><Progress  percent={index} progress color='pink'  size="medium"/></Table.Cell>
                                    </>
                                ))
                            }
                        </Table.Row>
                    ))
                }
            </Table.Body>

        </Table>
    )
}

export default SubTableChartPerform