import { Link } from '../link/link';

export interface NavMapProps {
  className?: string
  data?: {
    text: string
    url?: string
  }[]
}

export function NavMap(props: NavMapProps) {
  const { className, data = [] } = props;

  return (
    <div className={`${className}`}>
      {
        data.map((item, index) => {
          return (
            <span key={index}>
              {index !== 0 && <span className="mx-3">{'>'}</span>}
              {
                item.url ? <Link href={item.url}>{item.text}</Link> : <span className="text-sm">{item.text}</span>
              }
            </span>
          )
        })
      }
    </div>
  );
}

export default NavMap;
