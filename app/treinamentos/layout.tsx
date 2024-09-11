export default function TreinamentosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center gap-4 py-8">
      <div className="inline-block text-center">
        {children}
      </div>
    </section>
  );
}