import { useState } from 'react';
import AnimatedHeading from './AnimatedHeading';
import FadeUp from './FadeUp';
import { guideData } from '../data/guideData';

export default function Guide() {
  const [active, setActive] = useState('threats');
  const d = guideData[active];

  return (
    <section className="section guide" id="guide">
      <div className="guide-header">
        <AnimatedHeading text="Find Your Next Steps" />
        <FadeUp as="h3" className="kicker" delay={0.4}>
          Select the situation closest to yours for a clear, actionable checklist.
        </FadeUp>
      </div>

      <FadeUp className="drp-container">
        <div className="drp-button-pane" role="tablist" aria-label="Digital safety situations">
          {Object.entries(guideData).map(([key, item]) => (
            <button
              key={key}
              type="button"
              className={`drp-tab-btn${active === key ? ' active' : ''}`}
              role="tab"
              aria-selected={active === key}
              aria-controls="guide-content-display"
              onClick={() => setActive(key)}
            >
              <span>{item.label}</span>
              <svg className="chevron" width="16" height="16" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </button>
          ))}
          <p className="helpline-note">
            <strong>Official cybercrime helpline — <span className="tel">1799</span> NCCIA</strong>
          </p>
        </div>

        <div className="drp-content-pane" id="guide-content-display" role="tabpanel">
          <h2>{d.title}</h2>
          <h3 className="kicker">{d.subtitle}</h3>
          <ol className="drp-steps">
            {d.steps.map(([title, text]) => (
              <li key={title}>
                <strong>{title}:</strong> <span>{text}</span>
              </li>
            ))}
          </ol>
          {d.cta && (
            <a href={d.ctaHref} target="_blank" rel="noopener noreferrer" className="drp-cta-btn">
              {d.cta}
            </a>
          )}
        </div>
      </FadeUp>
    </section>
  );
}
