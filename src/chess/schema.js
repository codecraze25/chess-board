
import { object, number } from 'yup';

const StartFormSchema = object().shape({
  boardSize: number().required('Please enter your chess board size!'),
  steps: number().required('Please enter number of available steps!')
});

export default StartFormSchema;

