import React, {FC} from 'react'
import Navbar from '../components/Navbar'
import ReportsList from '../components/ReportsList'


const ListReportsPg: FC<{}> = () => {
    return (
        <div>
            <Navbar linkTo="/" buttonText="Create report"/>
            <ReportsList/>
        </div>
    )
  }
  
  export default ListReportsPg;