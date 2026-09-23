import FadeUp from './FadeUp';

export default function LegalQuote() {
  return (
    <section className="quote-wrap">
      <div className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="quote-block">
          <FadeUp as="p" className="legal-intro">
            The Prevention of Electronic Crimes Act (PECA) 2016 provides the explicit legal mechanism for the investigation and prosecution of digital offences in Pakistan.
          </FadeUp>
          <FadeUp className="legal-item" delay={0.1}>
            <h4>Section 20 — Offences Against Dignity of a Natural Person</h4>
            <p>Protects citizens against online defamation, character assassination, and the intentional public display of false information that harms a person's reputation or privacy.</p>
          </FadeUp>
          <FadeUp className="legal-item" delay={0.2}>
            <h4>Section 21 — Offences Against Modesty of a Natural Person / Minor</h4>
            <p>Expressly criminalizes photo blackmail, video blackmail, deepfake manipulation, sextortion, and the transmission of explicit imagery without explicit consent.</p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
