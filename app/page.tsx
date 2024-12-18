import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LicenseApplication } from "@/components/license-application";
import { Procedure } from "@/components/procedure";
import { Solution } from "@/components/solution";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Solution />
      <Procedure />
      <LicenseApplication />
      <Footer />
    </main>
  );
}
