import Image from "next/image";
import { Button } from "./ui/button";

export const LicenseApplication = () => {
  return (
    <div className="flex md:flex-row flex-col gap-12 justify-between my-12 lg:mx-[109px] md:mx-10 bg-[#F5FCFC] border border-[#EAF5F5] rounded-[32px] py-[22px] lg:pl-[50px] pl-[30px] pr-[22px] p-5">
      <div className="flex flex-col gap-[88px]">
        <div className="flex flex-col gap-[22px]">
          <h2 className="text-black text-[40px] leading-[52px] max-w-[372px] font-bold">
            Courier license application form
          </h2>
          <div className="flex flex-col gap-[18px] max-w-[532px]">
            <p className="text-sm text-[#666666]">
              This form is for companies applying for New Courier License.
            </p>
            <p className="text-sm text-[#666666]">
              To have access to the online Courier Application form you must
              have paid the application fee on remita, you will submit the
              payment details, which will be verified before you are sent the
              logIn information to access the portal
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-2.5">
          <Button className="bg-[#00A54F]">New license form</Button>
          <Button variant="ghost">License renewal form</Button>
        </div>
      </div>
      <div className="relative w-full lg:w-[561px] md:h-[432px] h-[240px] rounded-[18px]">
        <Image
          src="/images/img-form.jpeg"
          alt="image"
          fill
          className="rounded-[20px] object-cover"
        />
      </div>
    </div>
  );
};
