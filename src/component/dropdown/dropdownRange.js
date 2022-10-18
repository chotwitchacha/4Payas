import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
  {
    key: 'date1',
    text: 'รายวัน',
    value: 'Jenny Hess'
  },
  {
    key: 'date2',
    text: 'รายสัปดาห์',
    value: 'Elliot Fu'
  },
  {
    key: 'date2',
    text: 'รายเดือน',
    value: 'Elliot Fu'
  }
]

const DropdownRangeSelection = () => (
  <Dropdown
    placeholder='ความถี่ในการประเมิน'
    fluid
    selection
    options={friendOptions}
  />
)

export default DropdownRangeSelection;