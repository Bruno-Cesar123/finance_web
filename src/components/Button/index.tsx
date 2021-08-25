import { Button as ButtonUI, ButtonProps } from '@material-ui/core';

export default function Button({ ...props }: ButtonProps) {
  return <ButtonUI {...props} />;
}
