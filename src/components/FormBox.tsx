import React, {FC} from 'react'
import FormInput from './FormInput'
import { weatherRaportSchema } from '../validation/WeatherFormValidation'
import { Form, Formik, Field } from "formik"

const onSubmit = async (values: any , actions: any) => {
    const url = 'http://localhost:8000/api/reports'
    const otherParam = {
        headers: {
            "content-type":"application/json; charset=UTF-8",
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(values),
        method: "POST"
    };

    fetch(url, otherParam)
        .then(data => {return data.json() })
        .then(res => {console.log(res)})
        .catch(error => {console.log(error)});
    actions.resetForm();
}


const FormBox : FC<{}> = () => {
    return (
        <div className="form-box-container">
            <Formik initialValues={{temperature: 0, unit: "", city:"", date:"",}} validationSchema={weatherRaportSchema} onSubmit={onSubmit}>
            {({isSubmitting}) => (
                <Form className="form-container">
                    <FormInput label="Temperature" name="temperature" type="number" step="0.1"/>
                    <Field as="select" name="unit" className="form-input">
                        <option value="K">Kelvin</option>
                        <option value="C">Celcius</option>
                        <option value="F">Fahrenheit</option>
                    </Field>
                    <FormInput label="City" name="city" type="text" placeholder="Enter city..."/>
                    <FormInput label="Date" name="date" type="date"/>
                    <button disabled={isSubmitting} type="submit" className="btn-submit">Submit</button>
                </Form>
            )}  
            </Formik>
        </div>
    )
}

export default FormBox;