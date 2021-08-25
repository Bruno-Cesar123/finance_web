import { TextField, TextFieldProps } from '@material-ui/core';

export default function Input({ ...props }: TextFieldProps) {
  return <TextField {...props} />;
}
