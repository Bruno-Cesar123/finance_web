import { TextField, TextFieldProps } from '@material-ui/core';

// type InputProps = TextFieldProps & {
//   id: string;
//   label: string;
//   name: string;
//   autoComplete: string;
// };

export default function Input({ ...props }: TextFieldProps) {
  return <TextField {...props} />;
}
