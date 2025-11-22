import { fetchNewsletters } from "@/lib/newsletters";
import NewslettersClient from "./newsletters-client";

export default async function Page() {
  const newsletters = await fetchNewsletters();

  return <NewslettersClient newsletters={newsletters} />;
}
