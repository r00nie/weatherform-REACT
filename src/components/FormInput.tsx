import { useField} from "formik";
import React, {FC} from 'react'

interface InputFormProps{
    label: string,
    name: string,
    type: string,
    step?: string,
    placeholder?: string,
} 

const FormInput: FC<InputFormProps> = ({label, ...props} : InputFormProps) => {
    const [field, meta] = useField(props);
    
    return (
        <div>
            <label className="form-input-label">{label}</label>
            <input className={ meta.touched && meta.error ? "form-input-error" : "form-input"} {...field} {...props}/>
            {meta.touched && meta.error && <p className="form-input-error-text">{meta.error}</p>}
        </div>
    )
  }
  
  export default FormInput;