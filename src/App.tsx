import React, {createRef, useCallback, useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './style.css';
import Grid, { dataObj } from '@source/grid';
import dataList from '@source/data/data.json';
import styles from '@source/styles/global.module.scss'
import { datediff } from './utils/utils';

export default function App() {
  const [limit, setLimit] = useState<number>();
  const tableRef = createRef<HTMLTableElement>()
  const [invalidFieldsLength,setInvalidFieldsLength] = useState<number>(0);
  const [currentDate, setCurrentDate] = useState<Date>();
  let sourceProp: dataObj[] = dataList;

  const _handleOnClick = () => {
    if (Number.isNaN(limit)  || !currentDate) {
      let errMessage = ""
      Number.isNaN(limit) && ( errMessage += "Limit field is invalid or missing" )
      !currentDate && (errMessage += ", Date field is also missing.")
      alert(errMessage)
      return
    }

    setInvalidFieldsLength(control(currentDate, limit))
  }

  const control = (today: Date, limit: number) => {
    let invalidFieldsLength = 0

    const tableRows = tableRef.current.rows
    for (var i = 1, row; row = tableRows[i]; i++) {
      row.style.border = ""
      let isBackgroundColorRed = row.className ? true : false

      const cells = row.cells

      let caseDate = cells.item(1).textContent
      let deliveryDate = cells.item(2).textContent

      caseDate && (caseDate = new Date(caseDate))
      deliveryDate ? deliveryDate = new Date(deliveryDate) : deliveryDate = today
      const dateDiffInDays = datediff(caseDate, deliveryDate)
      if (dateDiffInDays > limit && !isBackgroundColorRed) { //Check if Delivery date is passed,but its not marked.
        row.style.border = "solid thick blue"
        invalidFieldsLength++
      } else if (dateDiffInDays <= limit && isBackgroundColorRed) { // Check if Delivery date is not passed, but its marked.
        row.style.border = "solid thick blue"
        invalidFieldsLength++
      }
    }

    return invalidFieldsLength
  }

  return (
    <div>
      <h1>Dgpays Case Study </h1>
      <div className={styles.appContainer}>
        <Grid ref={tableRef} source={sourceProp}/> 
        <div className={styles.rightContentContainer}>
          <div className={styles.inputContainer}>
            <label>Date: 
            </label>
            <DatePicker selected={currentDate} onChange={(date:Date) => setCurrentDate(date)} />
            <label>Limit:
            </label>
            <input type="text" 
            onChange={(e) => setLimit(parseInt(e.target.value))}/>
          </div>
        <div>
          <button onClick={_handleOnClick}>Check</button>
        </div>
        <label className={styles.invalidFieldLabel}>Invalid Fields Length: {invalidFieldsLength}</label>
        </div>
      </div>
    </div>
  );
}
