const items = [
  "Structured engineering plans",
  "Ship without breaking prod",
  "Systems that scale",
  "Better developer experience",
  "AI · Web3 · Product",
];

export default function MarqueeSection() {
  const track = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {track.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
