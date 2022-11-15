import React, {FC, useState, useEffect} from 'react'
import Report from './Report'

function getReports() {
    return fetch('http://localhost:8000/api/reports').then(data => data.json())
}

type ReportFieldsValues = {
  id?: string;
  temperature: number;
  unit: string;
  date: string;
  city: string;
} 

const ReportsList: FC<{}> = () => {

    const [reports, setReports] = useState<ReportFieldsValues[]>([]);

    useEffect(() => {
        let mounted = true;
        getReports()
          .then(raports => {
            if(mounted) {
              setReports(raports)
            }
          })
        return;
      }, []);


    return(
        <div className="report-list-pg">
          <div className="report-list-container">
            <h1 className="header-report-list">Reports List</h1>
            <ul className="lg: max-h-[400px] overflow-y-scroll m-5">
              {reports.map(report => <Report id={report.id} temperature={report.temperature} unit={report.unit} city={report.city} date={report.date}/>)}
            </ul>
          </div>
        </div>
    )
}

export default ReportsList;