
import { object, number } from 'yup';

const StartFormSchema = object().shape({
  boardSize: number()
    .min(5, 'Board size should be greater than or equal to than 5!')
    .max(100, 'Board size should be less than or equal to 100!')
    .required('Please enter your chess board size!'),
  steps: number()
    .min(1, 'Steps should be greater than or equal to than 1!')
    .max(100, 'Steps should be less than or equal to 100!')
    .required('Please enter number of available steps!')
});

export default StartFormSchema;

