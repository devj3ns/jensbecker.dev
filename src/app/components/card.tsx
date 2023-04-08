export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-5 py-5 transition duration-300 ease-in-out transform rounded-md shadow-lg bg-slate-50/50 hover:bg-slate-50 hover:-translate-y-2 hover:shadow-lg">
      {children}
    </div>
  );
}
