import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Menu } from "@/components/menu";
import { Gallery } from "@/components/gallery";
import { About } from "@/components/about";
import { Reviews } from "@/components/reviews";
import { FindUs } from "@/components/find-us";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <Gallery />
      <About />
      <Reviews />
      <FindUs />
      <Contact />
      <Footer />
    </main>
  );
}
