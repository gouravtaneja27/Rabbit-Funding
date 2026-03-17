import Hero from "../sections/Hero";
import BetterTech from "../sections/BetterTech";
import WhoBehind from "../sections/WhoBehind";

import WorkedRabbit from "../sections/WorkedRabbit";
import Testimonials from "../sections/Testimonials";
import RealFunding from "../sections/RealFunding";
import Footer from "../component/common/Footer";

const Home = () => {
    return (
        <>
            <Hero />
            <BetterTech />
            <WhoBehind />
            <Testimonials />
            <WorkedRabbit />
            <RealFunding />
            <Footer />

        </>
    );
};

export default Home;