import { Button } from "./ui/button";

export const Procedure = () => {
  return (
    <div className="bg-[#F7FDFD] lg:py-24 lg:pl-24 md:py-8 md:pl-5 py-5 pl-5 flex md:flex-row flex-col gap-[80px]">
      <div className="flex flex-col gap-[66px] max-w-[355px]">
        <div className="flex flex-col gap-8">
          <h2 className="text-black text-[48px] font-semibold">
            Procedure for Registration
          </h2>
          <p className="text-[#5E6068] md:text-[19px] text-base leading-[31px]">
            Learn how our customers are using CLRD to create better sales and
            onboarding experiences
          </p>
        </div>
        <div className="flex gap-2.5">
          <Button>Create account</Button>
          <Button variant="ghost">Download app</Button>
        </div>
      </div>
      <div className="p-2.5 overflow-x-auto no-scrollbar">
        <div className="flex md:gap-[39px] gap-6">
          <div className="bg-[#00A54F] md:h-[385px] h-[250px] md:min-w-[297px] min-w-[200px] rounded-[24px] md:py-10 py-5 md:px-8 px-4 flex flex-col justify-between">
            <p className="text-white md:text-2xl text-lg font-semibold">1</p>
            <h6 className="text-white md:text-lg text-xs md:font-semibold max-w-[231px]">
              Payment for Regulatory Guideline and Application and Requirement
              Forms
            </h6>
          </div>
          <div className="bg-[#00A54F] md:h-[385px] h-[250px] md:min-w-[297px] min-w-[200px] rounded-[24px] md:py-10 py-5 md:px-8 px-4 flex flex-col justify-between">
            <p className="text-white md:text-2xl text-lg font-semibold">2</p>
            <h6 className="text-white md:text-lg text-xs md:font-semibold max-w-[231px]">
              Submission Application Forms with an Application letter on Company
              Letter Headed Paper
            </h6>
          </div>
          <div className="bg-[#00A54F] md:h-[416px] h-[300px] md:min-w-[297px] min-w-[200px] rounded-[24px] md:py-10 py-5 md:px-8 px-4 flex flex-col justify-between">
            <p className="text-white md:text-2xl text-lg font-semibold">3</p>
            <h6 className="text-white md:text-lg text-xs md:font-semibold max-w-[231px]">
              Submission Application Forms with an Application letter on Company
              Letter Headed Paper
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
