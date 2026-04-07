interface DividerProps {
  width?: number;
}

export default function Divider({ width = 60 }: DividerProps) {
  return <div className="sand-divider" style={{ width }} />;
}