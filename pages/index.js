import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import FifthSection from "../Components/FifthSection";
import FourthIntro from "../Components/FourthIntro";
import FourthSection from "../Components/SixthSection";
import Header from "../Components/Header";
import Intro from "../Components/Intro";
import SecondaryIntro from "../Components/SecondaryIntro";
import ThirdIntro from "../Components/ThirdIntro";
import SixthSection from "../Components/SixthSection";
import SeventhSection from "../Components/SeventhSection";
import EightSection from "../Components/EightSection";
import NinthSection from "../Components/NinthSection";
import TenthSection from "../Components/TenthSection";
import EleventhSection from "../Components/EleventhSection";
import TwelvethSection from "../Components/TwelvethSection";
import ThirteenthSection from "../Components/ThirteenthSection";
import Footer from "../Components/Footer";

const mainStyles = {};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Morrison Developer Operations</title>
        <meta
          name="Morrison Developer Operations"
          content="Morrison Develop Operations. A Web Development company. Owned and Operated by Michael Morrison. We specialize in helping personal fitness coaches scale their business."
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Box component={"main"} sx={mainStyles}>
        <Intro />
        <SecondaryIntro />
        <ThirdIntro />
        <FourthIntro />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EightSection />
        <NinthSection />
        <TenthSection />
        <EleventhSection />
        <TwelvethSection />
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
