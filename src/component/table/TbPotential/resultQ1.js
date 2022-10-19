import React, { useState, useEffect} from "react";
import { CCard, CCardHeader, CCardBody, CCardText } from "@coreui/react";
import axios from "axios";
import jQuery from "jquery";
import $ from "jquery";
import groupBy from "lodash/groupBy";
import sumBy from "lodash/sumBy";

const ResultOne = ({data, projectid, timeline}) => {
    const [project_id,setProject_id] = useState();
    const [datas, setDatas] = useState(data)
    const totals = []
    const dataMap = [];
    const num1 = [];
    const arr1 = [];
    const arrl2 = [];
    const arrl1 = [];
    const vertName1 = [];
    const vertName2 = [];
    const dataA = [];
    const dataB = [];
    const sum = [];
    const sumTotal = [];
    const check = [];

    console.log('datas1', datas);

    if (datas.length !== 0){
      datas.map((item) => {
        return item.detail.map((i) => {
            return i.name.map((n) => {
                dataMap.push({ name: n.name, checked: n.checked })
                totals.push({ name: n.name, checked: n.checked })
            })
        })
      })

        const Sort = totals.sort((a, b) => (a.name > b.name ? 1 : -1));
        Sort.map((item) => {
          return sum.push(item.checked);
        });

        let grouppedArray = groupBy(Sort, "name");
        Object.entries(grouppedArray).map(([key, values]) => {
          check.push({key: key, checked: sumBy(values, "checked")})
        })

        check.map((item) => {
          return sumTotal.push(item.checked)
        })


        for (let i = 0; i < dataMap.length; i++) {
            if (i % 2 === 0) {
              arrl2.push(dataMap[i]);
            } else {
              arrl1.push(dataMap[i]);
            }
          }

        arrl1.map((item) => {
            dataA.push({ name: item.name, checked: item.checked });
        });
        
        arrl2.map((item) => {
            dataB.push({ name: item.name, checked: item.checked });
        });

        for (var i = 0; i < dataA.length; i++) {
            vertName1.push([
              `${dataB[i].name}`,
              `${dataA[i].name}`,
              `${dataA[i].checked}`
            ]);
          }
        
            for (var i = 0; i < dataA.length; i++) {
                vertName2.push([
                `${dataA[i].name}`,
                `${dataB[i].name}`,
                `${dataB[i].checked}`
                ]);
            }
        
        
    }


    const concat = vertName1.concat(vertName2);

    const getPivotArray = (
        dataArray,
        rowIndex,
        colIndex,
        dataIndex,
        dataIndexTwo
      ) => {
        //Code from https://techbrij.com
        var result = {},
          ret = [];
        var newCols = [];
        for (var i = 0; i < dataArray.length; i++) {
          if (!result[dataArray[i][rowIndex]]) {
            result[dataArray[i][rowIndex]] = {};
          }
          result[dataArray[i][rowIndex]][dataArray[i][colIndex]] =
            dataArray[i][dataIndex];
    
          //To get column names
          if (newCols.indexOf(dataArray[i][colIndex]) === -1) {
            newCols.push(dataArray[i][colIndex]);
          }
        }
    
        newCols.sort();
        var item = [];
    
        //Add Header Row
        item.push("รายชื่อ");
        item.push.apply(item, newCols);
        ret.push(item);
    
        //Add content
        for (var key in result) {
          item = [];
          item.push(key);
          for (var i = 0; i < newCols.length; i++) {
            item.push(result[key][newCols[i]] || "-");
          }
          ret.push(item);
        }
        return ret;
      };
    
    const arrayToHTMLTable = (myArray) => {
      var result = "<table border='1' cellpadding='7' cellspacing='0' style='font-family: Prompt ;font-size: 12.5px;' >"
      for (var i = 0; i < myArray.length; i++) {
          result += "<tr background-color: '#f2f2f2'>";
          for (var j = 0; j < myArray[i].length; j++) {
          result += "<td width='500px' height='50' >" + myArray[i][j] + "</td>";
          }
          result += "</tr>";
      }
      result += "<tr >";
        result += "<td width='auto' height='50'>" + "สรุปคะแนน" + "</td>"
        for (var index = 0; index < sumTotal.length; index++) {
          result += "<td width='500px' height='50'>" + sumTotal[index] + "</td>";
        }
      result += "</tr>";
      result += "</table>";

      return result;
    };

    $(function () {
        var output = getPivotArray(concat, 0, 1, 2, 3);
        $("#pivotTable2").html(arrayToHTMLTable( output)).css({"background-color": "#F5F5F5"},{ 'font-family':'sans-serif'});
    });



    return(
        <>
        {
                datas.length !== 0 ? (
                  <>
            <CCardText style={{ lineHeight: 2, fontSize: 18, fontFamily: 'Prompt', textAlign: 'left', marginBottom: '20px' }}>
                1. คุณภาพ : ผลงาน หรืองานที่ทำ มีความละเอียด ถูกต้องครบถ้วน ได้ตามมาตรฐาน ไม่มีการแก้ไขหรือปรับปรุง
            </CCardText> 
                    <div style={{marginBottom: '20px'}} id="pivotTable2"></div>
                    </>
                ) : null
            }

        </> 
    )
}
export default ResultOne;