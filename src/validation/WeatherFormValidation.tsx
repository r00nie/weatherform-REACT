import * as yup from 'yup';

export const weatherRaportSchema = yup.object().shape({
    id: yup.string(),
    temperature: yup.number().required("Please enter temperature"),
    unit: yup.string().required(),
    city: yup.string().required("Please enter city").matches(/^[A-Z]{1}[^0-9]+$/, "City should start with capital letter and should not contain any numbers"),
    date: yup.date().required("Please choose date").max(new Date(), "Choose right date").default(() => new Date())
})