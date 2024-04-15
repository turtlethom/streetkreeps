import EmailSignup from "@components/EmailSignup/EmailSignup";
import HeroSlider from "@components/HeroSlider/HeroSlider";
import Socials from "@components/Socials/Socials";
// import TestButton from "../../components/TestButton/TestButton";
// import SUPABASE from "../../config/supabaseClient";

export default function Home() {
    // console.log(SUPABASE);
    return (
        <>
            {/* <TestButton/> */}
            <HeroSlider/>
            <EmailSignup/>
            <Socials/>
        </>
    )
}