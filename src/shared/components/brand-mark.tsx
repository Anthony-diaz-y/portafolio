type BrandMarkProps = {
  className?: string;
};

/** A custom AD monogram: the shared stroke hints at a path from idea to interface. */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.5 28 15 10l7.5 18M10.5 21h9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
      <path d="M21.5 12h2.8a7 8 0 0 1 0 16h-2.8V12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
      <path d="m31 7 .9 2.1L34 10l-2.1.9L31 13l-.9-2.1L28 10l2.1-.9L31 7Z" fill="var(--accent)" />
    </svg>
  );
}
