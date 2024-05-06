import { ComponentProps } from 'react';

export type InputProps = ComponentProps<'input'> & {
  className?: string
}

export function Input(props: InputProps) {

  const { className, ...otherProps } = props;

  return (
    <input className={`border rounded-lg shadow min-w-[250px] min-h-[40px] pl-2 ${className}`} {...otherProps} />
  );
}

export default Input;
