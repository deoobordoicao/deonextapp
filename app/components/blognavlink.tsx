"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

// This *client* component will be imported into a blog layout
export default function BlogNavLink({href, children }: { href: string; children: React.ReactNode }) {
  // Navigating to `/blog/hello-world` will return 'hello-world'
  // for the selected layout segment
  const segment = useSelectedLayoutSegment();
  const isActive = segment;

  return (
    <Link
      href={""}
      // Change style depending on whether the link is active
      style={{ fontWeight: isActive ? "bold" : "normal" }}
    >
      {children}
    </Link>
  );
}
