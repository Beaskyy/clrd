
import { Header } from "./header";
import { Button } from "./ui/button";

export const Hero = () => {

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Progress Border */}
      <div className="absolute top-0 left-0 h-[6.72px] w-full z-50 bg-[#00A54F] animate-border-progress"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/clrd.mp4"
        autoPlay
        loop
        muted
      />
      {/* Overlay Content */}
      <div className="relative z-10 h-full bg-[#00000085] lg:px-24 md:px-8 px-5 md:py-[30px] py-6">
        <Header />
        <div className="flex flex-col gap-6 max-w-[600px] text-white mt-[200px]">
          <h1 className="md:text-[57.5px] text-3xl font-semibold md:leading-[69px] leading-10">
            Ensuring Efficient & Reliable Logistics services
          </h1>
          <p className="md:text-[22px] text-xs tracking-[0.14%] md:leading-10 leading-6">
            Improving Courier Service Efficiency for Consistent and Dependable
            Deliveries
          </p>
          <div className="flex gap-2.5">
            <Button>Create account</Button>
            <Button variant="ghost">Download app</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
