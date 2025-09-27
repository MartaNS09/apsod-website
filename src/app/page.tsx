"use server";
import VCardSectionsLayout from 
"@/components/common/global/VCardSectionsLayout";
import Contact from "@/components/sections/Contact";
import Home from "@/components/sections/Home";
import About from "@/components/sections/v-card-sections/About";
import Services from 
"@/components/sections/v-card-sections/Services";
import Portfolio from 
"@/components/sections/v-card-sections/Portfolio";

const Page = () => {
  return (
    <>
      <Home />

      <VCardSectionsLayout>
        <About />
        <Services />
        <Portfolio />
      </VCardSectionsLayout>

      <Contact />
    </>
  );
};

export default Page;
