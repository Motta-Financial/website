import { redirect } from 'next/navigation';

// Bookkeeping for Small Business has been merged into the main Bookkeeping
// page. Preserve any inbound links by redirecting to the canonical URL.
export default function BookkeepingSmallBusinessRedirect() {
  redirect('/services/accounting/bookkeeping');
}
