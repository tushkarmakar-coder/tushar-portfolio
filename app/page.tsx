import { redirect } from "next/navigation";

// Server-side redirect — runs on the server before any HTML is sent.
// This is the fallback for edge cases where the next.config redirect
// is bypassed (e.g., direct server rendering). No client JS, no flicker.
export default function RootPage() {
  redirect("/entry");
}
