import { siteConfig } from "@/lib/site";

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SocialLinks({ size = "lg" }: { size?: "sm" | "lg" }) {
  const box = size === "lg" ? "h-14 w-14" : "h-11 w-11";
  const icon = size === "lg" ? "h-6 w-6" : "h-5 w-5";
  const base = `${box} inline-flex items-center justify-center rounded-full border border-gold/50 text-gold transition hover:border-gold-bright hover:bg-gold hover:text-midnight`;
  return (
    <ul className="flex items-center gap-4">
      <li>
        <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Valadez Audio Stories on Facebook" className={base}>
          <FacebookIcon className={icon} />
        </a>
      </li>
      <li>
        <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Valadez Audio Stories on Instagram" className={base}>
          <InstagramIcon className={icon} />
        </a>
      </li>
    </ul>
  );
}
