import EmailSignup from "../../components/EmailSignup/EmailSignup";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Socials from "../../components/Socials/Socials";

export default function Home() {
    return (
        <>
            <div className="container">
                {/* <ImageSlider/> */}
                <HeroSlider/>
                <EmailSignup/>
            </div>
            <Socials/>
        </>
    )
}