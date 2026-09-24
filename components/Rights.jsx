import AnimatedHeading from './AnimatedHeading';
import FadeUp from './FadeUp';

const items = [
  ['Prevention of Electronic Crimes Act (PECA)', 'This law protects you against online harassment, identity theft, stalking, and financial fraud by setting clear legal penalties for offenders.'],
  ['National Cyber Crime Investigation Agency (NCCIA)', 'This official agency investigates cybercrimes and provides a dedicated online portal and helpline to handle complaints directly.'],
  ['Federal Investigation Agency (FIA)', 'This agency handles broader, historical institutional legal mandates and coordinates infrastructure transitions with the NCCIA.'],
  ['Pakistan Telecommunication Authority (PTA)', 'This authority regulates your digital services, manages telecom complaints, and handles the blocking or removal of unlawful online content.'],
];

export default function Rights() {
  return (
    <section className="section rights align-left" id="rights">
      <div className="rights-header">
        <AnimatedHeading text="Your Rights in Simple Terms" />
        <FadeUp as="h3" className="kicker" delay={0.4}>
          Digital Rights guidance should not depend on how comfortable you are with legal and technical English.
        </FadeUp>
      </div>
      <div className="rights-grid">
        {items.map(([title, text], i) => (
          <FadeUp key={title} className="rights-item" delay={(i % 2) * 0.2}>
            <h4>{title}</h4>
            <p>{text}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
