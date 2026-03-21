import PageContent from "./PageContent";

export default function Spread({ page, rightRef, logs }) {
  const left = logs[page];
  const right = logs[page + 1] || null;

  return (
    <div className="spread">
      <div className="page left">{left && <PageContent data={left} />}</div>

      <div className="page right" ref={rightRef}>
        {right && <PageContent data={right} flip />}
      </div>
    </div>
  );
}
