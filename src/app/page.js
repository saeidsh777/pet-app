import Activities from "@/Components/Activities/Activities";
import Animals from "@/Components/Animals/Animals";
import Banner from "@/Components/Banner/Banner";
import CardServices from "@/Components/CardServices/CardServices";
import CatBoarding from "@/Components/CatBoarding/CatBoarding";
import CheckInTime from "@/Components/CheckInTime/CheckInTime";
import Comments from "@/Components/Comments/Comments";
import ContactUs from "@/Components/ContactUs/ContactUs";
import DogBoarding from "@/Components/DogBoarding/DogBoarding";
import LocMap from "@/Components/LocMap/LocMap";
import OurFeature from "@/Components/OurFeature/OurFeature";
import PetBoardingOff from "@/Components/PetBoardingOff/PetBoardingOff";
import PetCare from "@/Components/PetCare/PetCare";
import WeCan from "@/Components/WeCan/WeCan";
import WeStand from "@/Components/WeStand/WeStand";

export default function Home() {
  return (
    <main>
      <Banner/>
      <OurFeature />
      <WeCan />
      <section className="services mb-5 overflow-x-hidden">
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-12 col-md-6 col-xl-3 d-flex mt-3 mt-xl-0">
              <CardServices
                icon="house"
                title="Pets Boarding"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam nisi sunt assumenda quasi ipsa excepturi aperiam at in rem?"
              />
            </div>
            <div className="col-12 col-md-6 col-xl-3 d-flex mt-3 mt-xl-0">
              <CardServices
                icon="apple"
                title="Healthy Meals"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam nisi sunt assumenda quasi ipsa excepturi aperiam at in rem?"
              />
            </div>
            <div className="col-12 col-md-6 col-xl-3 d-flex mt-3 mt-xl-0">
              <CardServices
                icon="global"
                title="Activity Games"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam nisi sunt assumenda quasi ipsa excepturi aperiam at in rem?"
              />
            </div>
            <div className="col-12 col-md-6 col-xl-3 d-flex mt-3 mt-xl-0">
              <CardServices
                icon="github"
                title="Pet Taxi"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam nisi sunt assumenda quasi ipsa excepturi aperiam at in rem?"
              />
            </div>
          </div>
        </div>
      </section>
      <Activities />
      <Animals />
      <Comments />
      <PetCare />
      <CheckInTime />
      <WeStand />
      <DogBoarding />
      <CatBoarding />
      <PetBoardingOff />
      <ContactUs />
      <LocMap />
    </main>
  );
}
