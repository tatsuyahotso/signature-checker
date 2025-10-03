import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSection from "@/sections/Info";
import SearchSection from "@/sections/Search";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col max-w-4xl mx-auto">
      <Header />
      <SearchSection />
      <InfoSection />
      <Footer />
    </main>
  );
}
