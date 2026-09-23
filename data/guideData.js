const NCCIA = 'https://complaint.nccia.gov.pk/';

export const guideData = {
  threats: {
    label: 'Someone is threatening me',
    title: 'Start by staying safe and preserving proof.',
    subtitle: 'Keep the messages, identify the account, and avoid negotiating alone. Use this checklist before reporting to the relevant platform or NCCIA.',
    steps: [
      ['Do not delete messages', 'Retain the full thread context; do not delete or alter any threatening texts, voice notes, or media.'],
      ['Screenshot the full conversation', "Capture clear screenshots showing the offender's profile details, phone numbers, timestamps, and full message content."],
      ['Save profile URLs and usernames', 'Copy the exact web address or handle of the profile rather than just their display name.'],
      ['Secure your account and seek support', 'Lock down your privacy settings immediately, notify trusted family or peers, and do not confront the sender.'],
    ],
    cta: 'Report Threat to NCCIA Portal',
    ctaHref: NCCIA,
  },
  harassment: {
    label: 'I am being harassed or blackmailed',
    title: 'You do not have to handle online abuse alone.',
    subtitle: 'Your priority is safety. Preserve core evidence, tighten your privacy settings, and move to official reporting channels when you are ready.',
    steps: [
      ['Do not pay or promise anything', 'Complying with blackmail demands does not stop extortionists; it invites further demands.'],
      ['Save screenshots, dates, and URLs', 'Systematically log all communication, demands, dates, and source links.'],
      ['Block and report to the platform', "Use the platform's reporting tools, but only after you've safely saved your own evidence."],
      ['File an official complaint', 'Submit your records through the official NCCIA cyber harassment reporting channel.'],
    ],
    cta: 'File Secure NCCIA Harassment Report',
    ctaHref: NCCIA,
  },
  hacking: {
    label: 'My account was hacked',
    title: 'Recover access, then close the security gaps.',
    subtitle: 'Move quickly: recover the account, remove unauthorized sessions, and turn on stronger protection before warning your contacts.',
    steps: [
      ['Change passwords from a safe device', 'Access your account from an uncompromised device and set a long, fresh password.'],
      ['Sign out unknown sessions', "Go to your account's activity page and sign out of all unfamiliar devices."],
      ['Turn on Two-Factor Authentication (2FA)', 'Enable app-based 2FA to block further unauthorized access attempts.'],
      ['Warn your contacts', 'Let friends and colleagues know your account was compromised, so they can watch for scams sent in your name.'],
    ],
  },
  fraud: {
    label: 'I faced online financial fraud',
    title: 'Act instantly to secure accounts and track records.',
    subtitle: 'Speed matters. Cut off further transactions with your bank, gather transaction details, and file a formal complaint.',
    steps: [
      ['Contact your bank or wallet provider', 'Call your bank, mobile wallet, or card issuer immediately to report unauthorized activity.'],
      ['Freeze or lock affected accounts', 'Block your cards and digital banking channels to limit further losses.'],
      ['Gather transaction details', 'Save digital receipts, exact transaction reference numbers, and the recipient account details.'],
      ['Escalate to national authorities', 'Bring your evidence to the NCCIA financial crimes division to start a formal investigation.'],
    ],
    cta: 'Report Financial Fraud to NCCIA',
    ctaHref: NCCIA,
  },
  'fake-account': {
    label: 'A fake account was made in my name',
    title: 'Document the impersonation before reporting it.',
    subtitle: 'Capture clear evidence of the fake profile, then submit a takedown request to the platform.',
    steps: [
      ['Screenshot the profile and posts', 'Capture the full appearance of the fake page and anything it has posted.'],
      ['Copy the profile link', 'Save the exact URL of the fake account rather than just its display name.'],
      ['Report impersonation to the platform', "Use the platform's dedicated impersonation reporting tool to request removal."],
      ['Alert your contacts', "Post a short warning on your real profile so people don't engage with the fake one."],
    ],
  },
  privacy: {
    label: 'My privacy was violated',
    title: 'Regain firm control over what is visible about you.',
    subtitle: 'Limit your exposure, audit app permissions, remove location data, and document what happened.',
    steps: [
      ['Review your privacy settings', 'Set your profile to private and limit visibility to people you actually know.'],
      ['Revoke risky app permissions', "Remove app access to your camera, microphone, and location where it isn't needed."],
      ['Document the disclosure', 'Screenshot any private data or images that were shared without your consent.'],
      ['Seek support before responding', 'Talk to a trusted digital rights organization before contacting the person involved.'],
    ],
  },
};
