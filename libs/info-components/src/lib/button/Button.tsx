import { ComponentProps } from 'react';

export type ButtonProps = ComponentProps<'button'> & {
  className?: string
}

export function Button(props: ButtonProps) {
  const { className, ...otherProps } = props;

  return (
    <button className={`bg-primary-500 font-bold text-white py-2 px-6 rounded-lg ${className}`} {...otherProps} />
  );
}

export default Button;
