import { PROTOCOLS } from '../data';

export function Skills() {
  return (
    <section id="protocols" className="section">
      <div className="container">
        <div className="node-head" data-reveal="clip">
          <span className="node-id">NODE_03 — PROTOCOLS</span>
        </div>
        <p className="node-sub" data-reveal>SUPPORTED FORMATS &amp; HANDLERS · HOVER TO INSPECT</p>

        <div className="proto-table">
          {PROTOCOLS.map((row) => (
            <div className="proto-row" key={row.id} data-hover data-reveal>
              <span className="proto-id">{row.id}</span>
              <span className="proto-cat">{row.category}</span>
              <span className="proto-skills">
                {row.skills.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
