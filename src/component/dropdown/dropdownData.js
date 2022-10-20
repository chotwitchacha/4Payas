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
      axios.get('http://59be-2405-9800-b641-124a-987f-1d6b-45e9-2d1d.ngrok.io/api/project').
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