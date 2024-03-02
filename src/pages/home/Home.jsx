import EmailSignup from "../../components/EmailSignup/EmailSignup";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Socials from "../../components/Socials/Socials";

export default function Home() {
    return (
        <>
            <div className="container">
                <ImageSlider/>
                <EmailSignup/>
            </div>
            <Socials/>
        </>
    )
}