import PageContent from "./PageContent";

export default function SinglePage({ page, logs }) {
  const data = logs[page];

  if (!data) return <div className="page">To be continued...</div>;

  return (
    <div className="single-page">
      <PageContent data={data} />
    </div>
  );
}
