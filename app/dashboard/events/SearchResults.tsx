export default function SearchResults({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-row justify-between items-center pb-2 mb-2 border-b border-light-100 mt-4">
        <h2 className="text-lg my-2">Search Results</h2>
        {/* <ListGridToggle value={view} onChange={setView} /> */}
      </div>
      <div className="grid gap-4 mt-4 grid-cols-eventGridSm sm:grid-cols-eventGrid">
        {children}
      </div>
    </>
  );
}
