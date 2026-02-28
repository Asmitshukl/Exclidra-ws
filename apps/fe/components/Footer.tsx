import Logo from "./Logo";

const FOOTER_LINKS = {
  Product: ["Features", "Changelog", "Integrations"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "API Reference", "Community", "Status"],
  Legal: ["Privacy", "Terms", "Security", "GDPR"],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#f0f0f0] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-[#6b7280]">
              The collaborative editor built for teams who ship fast.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                <path key="tw" d="M22 4.01C21 4.5 20.02 4.69 19 5C17.89 3.86 16.02 3.73 14.76 4.73C13.51 5.72 13.04 7.41 13.56 8.93C10.06 8.75 6.82 7.07 4.64 4.29C3.42 6.45 4.05 9.16 6.03 10.54C5.22 10.52 4.43 10.29 3.73 9.88C3.73 9.9 3.73 9.92 3.73 9.94C3.73 12.19 5.26 14.09 7.36 14.57C6.61 14.76 5.82 14.8 5.06 14.67C5.68 16.58 7.41 17.87 9.37 17.91C7.72 19.2 5.66 19.92 3.54 19.91C3.03 19.91 2.53 19.88 2.02 19.82C4.19 21.19 6.7 21.92 9.27 21.91C16.97 21.91 21.15 14.84 21.15 8.69C21.15 8.49 21.15 8.29 21.14 8.09C22.07 7.41 22.87 6.57 23.5 5.59C22.64 5.97 21.72 6.22 20.77 6.33C21.76 5.73 22.49 4.78 22.87 3.68" fill="currentColor" />,
                <path key="gh" d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor" />,
                <path key="li" d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z M2 9H6V21H2V9Z M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor" />,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-[#9ca3af] transition-colors hover:bg-[#f5f5f5] hover:text-[#171717]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-[#171717]">{category}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#6b7280] transition-colors hover:text-[#171717]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#f0f0f0] pt-8 sm:flex-row">
          <p className="text-sm text-[#9ca3af]">
            &copy; {new Date().getFullYear()} Exaclidra-ws. All rights reserved.
          </p>
          <p className="text-sm text-[#9ca3af]">
            Crafted with care for teams everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
