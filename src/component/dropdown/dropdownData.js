import React, { useState, useEffect } from 'react'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios'
import { Select } from 'antd';

const friendOptions = [
  {
    key: '1',
    text: 'ต้นสน',
    value: 'ต้นสน'
  }
]

const DropdownExampleSelection = () => {
  const [project, setProject] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8090/api/project').
      then((res) => {
          setProject(res.data)
      })
    }, []);

    // const children = [];
    // project.map((item,index) => {
    //   children.push(<Option key={index}> {item.project_name} </Option>)
    // })

    const dataprovider = project.map(object => {
      return {
        key: object.project_id,
        text: object.project_name,
        value: object
      }
    })

    const handleChange = (value) => {
      console.log(`selected ${value}`);
    }

    return(
      // <Dropdown
      //   placeholder='ชื่อโปรเจค'
      //   fluid
      //   selection
      //   options={dataprovider}
      //   onChange={onChange}
      // />

      <Select
        style={{ width: "100%" }}
        placeholder="Please select"
        defaultValue="a1"
        onChange={handleChange}
      >
          {project}
      </Select>
    )

  }

export default DropdownExampleSelection