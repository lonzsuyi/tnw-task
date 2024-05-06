export interface TagProps {
  className?: string
  text?: string
  color?: 'default' | 'status-ontime' | 'status-late' | 'status-early' | 'status-unknown'
}

export function Tag(props: TagProps) {
  const { className, text, color } = props;

  const colors: Record<Exclude<TagProps['color'], undefined>, string> = {
    'default': 'text-neutral-500 border-neutral-500',
    'status-ontime': 'text-status-ontime border-status-ontime',
    'status-late': 'text-status-late border-status-late',
    'status-early': 'text-status-early border-status-early',
    'status-unknown': 'text-status-unknown border-status-unknown'
  };

  return (
    <span className={`border rounded-lg py-1 px-3 font-bold ${colors[color ? color : 'default']} ${className}`}>{text}</span>
  );
}

export default Tag;
