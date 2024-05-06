import { ComponentProps } from 'react';

export type FormProps = ComponentProps<'form'> & {
  title?: string
  className?: string
}

export function Form(props: FormProps) {
  const { className, title, children, ...otherProps } = props;

  return (
    <form className={`border-1 border-t-8 border-t-primary-500 shadow rounded-lg p-6 ${className}`} {...otherProps} >
      <div className="text-3xl text-primary-700 text-center">{title}</div>
      {children}
    </form>
  );
}

export default Form;
