import { PROFILE } from '../data';

export function Footer() {
  return (
    <footer className="footer">
      <span><span className="led">●</span>&nbsp; STATUS: OPERATIONAL · ALL QUEUES NOMINAL</span>
      <span>{PROFILE.coords} — KARACHI, PK</span>
      <span>© {new Date().getFullYear()} MUHAMMAD HASEEB · BUILT WITH INTENT, NOT TEMPLATES</span>
    </footer>
  );
}
