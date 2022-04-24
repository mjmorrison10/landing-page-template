import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import FifthSection from "../Components/sections/FifthSection";
import FourthIntro from "../Components/sections/FourthIntro";
import FourthSection from "../Components/sections/SixthSection";
import Header from "../Components/Header";
import Intro from "../Components/sections/Intro";
import SecondaryIntro from "../Components/sections/SecondaryIntro";
import ThirdIntro from "../Components/sections/ThirdIntro";
import SixthSection from "../Components/sections/SixthSection";
import SeventhSection from "../Components/sections/SeventhSection";
import EightSection from "../Components/sections/EightSection";
import NinthSection from "../Components/sections/NinthSection";
import TenthSection from "../Components/sections/TenthSection";
import EleventhSection from "../Components/sections/EleventhSection";
import TwelvethSection from "../Components/sections/TwelvethSection";
import ThirteenthSection from "../Components/sections/ThirteenthSection";
import Footer from "../Components/Footer";
import { InView } from "react-intersection-observer";

const mainStyles = {
  maxWidth: "100vw",
  width: "100%",
  overflowX: "hidden",
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Morrison Developer Operations</title>
        <meta
          name="Morrison Developer Operations"
          content="Morrison Develop Operations. A Web Development company. Owned and Operated by Michael Morrison. We specialize in helping personal fitness coaches scale their business."
        />
        <meta
          name="google-site-verification"
          content="42BSty5U9tBdDZ3GrzylEghrlO548S3re6Xto-z-fB0"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Box component={"main"} sx={mainStyles}>
        <Intro />

        {/* Generate Leads banner */}
        <SecondaryIntro />

        {/* Services */}
        <ThirdIntro />

        {/* Systematize Banner */}
        <FourthIntro />

        {/* Free yourself from your business section */}
        <FifthSection />

        {/* Scale Banner */}
        <InView rootMargin="-20%" threshold={0.2}>
          {({ inView, ref, entry }) => (
            <div ref={ref}>
              <SixthSection view={inView} />
            </div>
          )}
        </InView>

        {/* Build Email List Section */}
        <SeventhSection />

        {/* Six Reasons to Hire banner */}
        <EightSection />
        {/* <InView rootMargin="-20%" threshold={0.2}>
          {({ inView, ref, entry }) => (
            <div ref={ref}>
              <EightSection view={inView} />
            </div>
          )}
        </InView> */}

        {/* Six Reasons */}
        <NinthSection />

        {/* Together we will double or triple banner */}
        <TenthSection />

        {/* Three Part Section */}
        <EleventhSection />

        {/* Testimonials section */}
        {/* <TwelvethSection /> */}

        {/* Social Media section */}
        <ThirteenthSection />
      </Box>

      <Footer />
    </div>
  );
}

// <main className={styles.main}>
//   <h1 className={styles.title}>
//     Welcome to <a href="https://nextjs.org">Next.js!</a>
//   </h1>

//   <p className={styles.description}>
//     Get started by editing{' '}
//     <code className={styles.code}>pages/index.js</code>
//   </p>

//   <div className={styles.grid}>
//     <a href="https://nextjs.org/docs" className={styles.card}>
//       <h2>Documentation &rarr;</h2>
//       <p>Find in-depth information about Next.js features and API.</p>
//     </a>

//     <a href="https://nextjs.org/learn" className={styles.card}>
//       <h2>Learn &rarr;</h2>
//       <p>Learn about Next.js in an interactive course with quizzes!</p>
//     </a>

//     <a
//       href="https://github.com/vercel/next.js/tree/canary/examples"
//       className={styles.card}
//     >
//       <h2>Examples &rarr;</h2>
//       <p>Discover and deploy boilerplate example Next.js projects.</p>
//     </a>

//     <a
//       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//       className={styles.card}
//     >
//       <h2>Deploy &rarr;</h2>
//       <p>
//         Instantly deploy your Next.js site to a public URL with Vercel.
//       </p>
//     </a>
//   </div>
// </main>

// <footer className={styles.footer}>
//   <a
//     href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Powered by{' '}
//     <span className={styles.logo}>
//       <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//     </span>
//   </a>
// </footer>
