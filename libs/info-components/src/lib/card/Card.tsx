export interface CardProps {
  className?: string
  data?: {
    url?: string
    title?: string
    date?: string
  }
}

export function Card(props: CardProps) {
  const { className, data } = props;

  return (
    <a className={`w-full min-h-[200px] flex flex-col rounded shadow border-t-4 border-t-primary-500 items-center justify-center hover:border-l hover:border-r hover:border-b hover:border-l-neutral-300 hover:border-r-neutral-300 hover:border-b-neutral-300 ${className}`} href={data?.url ? data?.url : ''}>
        <div><strong className="text-primary-700 text-2xl">{data?.title}</strong></div>
        <div className="text-neutral-500 text-lg mt-4">{data?.date}</div>
    </a>
  );
}

export default Card;
