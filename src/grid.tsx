import React, {forwardRef, ReactNode, useEffect} from 'react';
import styles from '@source/styles/grid.module.scss'

export interface dataObj {
    name: string,
    mailReceivedDate: string,
    solutionSentDate? : string,
    isBackgroundColorRed?: boolean
}

interface Props {
    children?: ReactNode;
    source: dataObj[]
}

export type Ref = HTMLTableElement;

const Grid = forwardRef<Ref, Props>((props,ref) => {
    const sourceData = props.source 

    return <table id="sourceData" ref={ref}>
                <tbody>
                    <tr key="columnNames">
                        <td>Name:</td>
                        <td>Case Date:</td>
                        <td>Delivery Date:</td>
                    </tr>
                    {sourceData.map( (el, index) => {
                        return <tr className={el.isBackgroundColorRed ? styles.bgColorRed : ''} key={el.name+ "_" + index}>
                            <td>
                                {el.name}
                            </td>
                            <td>
                                {el.mailReceivedDate}
                            </td>
                            <td>
                                {el.solutionSentDate}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
})

export  default Grid