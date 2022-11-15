import React, {FC} from 'react'
import FormBox from '../components/FormBox'
import Navbar from '../components/Navbar'


const CreateReportPg: FC<{}> = () => {
    return (
        <div>
            <Navbar linkTo="/reports" buttonText="Reports"/>
            <FormBox />
        </div>
    )
  }
  
  export default CreateReportPg;