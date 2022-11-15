import React, {FC} from 'react'

export interface ReportProps{
    id?: string;
    temperature: number;
    unit: string;
    date: string;
    city: string;
} 

function unitToKelvin(unit: string){
    if(unit === "K") return unit;
    else return "K";
}

function tempToKelvin(props: ReportProps){
    if(props.unit === "K") return props.temperature;
    else if (props.unit === "C") {
        return (Number(props.temperature) + 273.15).toFixed(2);
    }else if(props.unit === "F"){
        return (5/9*(Number(props.temperature) + 459.67)).toFixed(2);
    }
}

const Report : FC<ReportProps> = (props : ReportProps) => {

    return (
        <div className="report-container">
            <p><span className="font-bold">Temp: </span> {tempToKelvin(props)}</p>
            <p><span className="font-bold ">Unit: </span> {unitToKelvin(props.unit)}</p>
            <p><span className="font-bold ">City: </span> {props.city}</p>
            <p><span className="font-bold ">Date: </span> {props.date}</p>
        </div>
    )
  }
  
  export default Report;