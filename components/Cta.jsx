import AnimatedHeading from './AnimatedHeading';
import FadeUp from './FadeUp';

export default function Cta() {
  return (
    <section className="cta" id="help">
      <div className="cta-inner">
        <AnimatedHeading text="You Are Not Alone" />
        <FadeUp as="p" delay={0.25}>
          There are active laws and dedicated institutions in Pakistan built entirely to protect you from digital harm. If you are experiencing distress, blackmail, or harassment, please reach out to the relevant authorities. You do not have to navigate this digital landscape by yourself.
        </FadeUp>
      </div>
    </section>
  );
}
