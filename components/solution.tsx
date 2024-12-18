import Image from "next/image";

export const Solution = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center mt-[90px] mb-[72px]">
      <h2 className="text-black md:text-[44px] text-2xl font-semibold text-center">
        The solutions we provide
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20.54px]">
        <div className="border border-[#DCF4F4] p-3 rounded-[24px] bg-[#F9FCF5]">
          <div className="flex flex-col justify-between gap-2">
            <div className="relative bg-neutral-50 rounded-[20px] w-full h-[354px]">
              <Image
                src="/images/img-1.jpeg"
                alt="image"
                fill
                className="rounded-[20px] object-cover object-right"
              />
            </div>
            <div className="flex flex-col gap-[10.27px] max-w-[348px]">
              <h6 className="text-[19px] text-[#252525] font-bold">
                Monitoring of courier operations
              </h6>
              <p className="text-base text-[#656565] leading-[26.7px]">
                We focus on thoroughly monitoring and managing all courier
                operations to ensure safe practices and maximize efficiency
              </p>
            </div>
          </div>
        </div>
        <div className="border border-[#D5E4FF] p-3 rounded-[24px] bg-[#F4F5FF]">
          <div className="flex flex-col justify-between gap-2">
            <div className="relative bg-neutral-50 rounded-[20px] w-full h-[354px]">
              <Image
                src="/images/img-2.jpeg"
                alt="image"
                fill
                className="rounded-[20px] object-cover object-right"
              />
            </div>
            <div className="flex flex-col gap-[10.27px] max-w-[348px]">
              <h6 className="text-[19px] text-[#252525] font-bold">
                Registration and licensing
              </h6>
              <p className="text-base text-[#656565] leading-[26.7px]">
                We oversee registration and licensing of all courier operators
                nationwide, promoting efficient courier services.
              </p>
            </div>
          </div>
        </div>
        <div className="border border-[#EEE0FF] p-3 rounded-[24px] bg-[#FBF8FF]">
          <div className="flex flex-col justify-between gap-2">
            <div className="relative bg-neutral-100 rounded-[20px] w-full h-[354px]">
              <Image
                src="/images/img-3.jpeg"
                alt="image"
                fill
                className="rounded-[20px] object-cover object-right"
              />
            </div>
            <div className="flex flex-col gap-[10.27px] max-w-[348px]">
              <h6 className="text-[19px] text-[#252525] font-bold">
                Setting standards for couriers
              </h6>
              <p className="text-base text-[#656565] leading-[26.7px]">
                We set standards for all courier operators, ensuring they adhere
                to guidelines that promote functionality and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
