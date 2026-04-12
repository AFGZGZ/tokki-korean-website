type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`border rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition ${className}`}
    >
      {children}
    </div>
  );
}
