import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import ActionButton from "@/shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 py-10 md:h-full md:pb-0 bg-gray-20">
      {/* image and main header */}
      <motion.div
        className="md:flex item-center mx-auto w-5/6 justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* heading */}
          <motion.div
            className="md:mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div
                className="before:absolute 
              before:-top-20
              before:-left-20
              before:z-[-1] md:before:content-evolvetext
              "
              >
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <div>
              <p className="pt-8 text-small">
                Unrivaled Gym. Unparalleled Training Fitness Classes. World
                Class Studios to get the Body Shapes That you Dream of.. Get
                Your Dream Body Now.
              </p>
            </div>
            <motion.div
              className="mt-10"
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink
                className="ml-2 font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                Learn More
              </AnchorLink>
            </motion.div>
          </motion.div>
        </div>
        <div>
          <img src={HomePageGraphic} />
        </div>
      </motion.div>
      {isAboveMediumScreen ? (
        <div className="h-[150px] py-10 px-5 bg-primary-100 my-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-4/5 items-center justify-between gap-8">
              <img src={SponsorForbes} />
              <img src={SponsorFortune} />
              <img src={SponsorRedBull} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Home;
