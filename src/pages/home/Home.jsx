import EmailSignup from "../../components/EmailSignup/EmailSignup";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import Socials from "../../components/Socials/Socials";

export default function Home() {
    return (
        <>
            <HeroSlider/>
            <div className="container">
                {/* <ImageSlider/> */}
                <EmailSignup/>
            </div>
            <Socials/>
        </>
    )
}