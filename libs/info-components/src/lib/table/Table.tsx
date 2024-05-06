export interface TableProps {
  className?: string
  data?: Record<string, string | JSX.Element | number | undefined>[]
}

export function Table(props: TableProps) {
  const { className, data = [] } = props;

  return (
    <table className={`table-auto border-collapse border-spacing-0 w-full rounded overflow-hidden shadow ${className}`}>
      <thead>
        <tr className="bg-primary-500">
          {
            (Array.isArray(data) && data.length > 0) && Object.keys(data[0]).map((item, index) => {
              return (
                <th className={`h-[60px] text-white text-center ${index === 0 ? '' : ''}`} key={index}>{item}</th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, index) => {
            return (
              <tr key={index}>
                {Object.keys(item).map((td, tdIndex) => {
                  return (
                    <td className={`h-[80px] text-center ${index % 2 === 1 ? 'bg-neutral-50' : ''}`} key={tdIndex}>{item[td]}</td>
                  )
                })}
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

export default Table;
