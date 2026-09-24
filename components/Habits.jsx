import AnimatedHeading from './AnimatedHeading';
import FadeUp from './FadeUp';

const habits = [
  ['Secure Your Accounts', 'Stop reusing passwords across different sites. Use a decentralized password manager like Bitwarden or 1Password to auto-generate long, unique characters. Turn on Two-Factor Authentication (2FA) across every single profile with no exceptions.'],
  ['Protect Your Privacy', 'Adopt a strict "deny first" policy for applications. Thoroughly audit and restrict app permissions for your camera, microphone, and location tracking. Use a privacy-focused browser like Brave or Firefox equipped with uBlock Origin to clear out malicious background tracking scripts.'],
  ['Verify Intentions', 'Never click unexpected links or download files from strangers on platforms like Discord or WhatsApp. Establish a private "safe phrase" with your close family members to immediately verify their identity if you ever receive an urgent message requesting money.'],
];

export default function Habits() {
  return (
    <section className="section habits align-right" id="habits">
      <div className="section-block">
        <AnimatedHeading text="Habits to Secure Your Online Presence" />
        <div className="habits-list">
          {habits.map(([title, text], i) => (
            <FadeUp key={title} className="habit-item" delay={i * 0.2}>
              <h4>{title}</h4>
              <p>{text}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
