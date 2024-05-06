import { ComponentProps } from 'react';

export type LinkProps = ComponentProps<'a'> & {
  className?: string
}

export function Link(props: LinkProps) {
  const { className, children, ...otherProps } = props;

  return (
    <a className={`text-primary-500 underline underline-offset-4 text-sm ${className}`} {...otherProps} >
      {children}
    </a>
  );
}

export default Link;
