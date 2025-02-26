import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CampCard = ({ blog }: any) => {
  const truncatedDescription =
    blog.Description[0].children[0].text.length > 350
      ? blog.Description[0].children[0].text.substring(0, 350) + "..."
      : blog.Description[0].children[0].text;

  const imageurl =
    `https://scintillating-adaptation-production.up.railway.app` +
    blog.Image.url;

  return (
    <div
      className={`h-full min-w-[90%] relative sm:min-w-[1100px] bg-cover bg-no-repeat rounded-lg lg:rounded-[50px] xl:rounded-5xl`}
    >
      <Image
        src={imageurl}
        alt="blog"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 rounded-3xl"
        priority
      />
      <div className="flex relative h-full flex-col items-start w-full justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-[#30AF5B] p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1 bg-[#292C27]/70 p-2 rounded-xl">
            <h4 className="text-[18px] font-[700] text-white">
              Children&apos;s Summer Camp
            </h4>
            <p className="text-[14px] font-[400] text-white">{blog.Date}</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="bg-[#292C27] bg-opacity-95 rounded-b-lg lg:rounded-b-[40px] h-[240px] lg:h-[250px] px-6 py-2 sm:px-20 sm:py-4 text-white flex flex-col">
              <h1 className="text-[24px] font-[700]">{blog.Title}</h1>
              <hr className="w-[35%] sm:w-[50%] py-2" />
              <p className="text-[14px] md:text-[16px] font-[400] w-full overflow-y-scroll hide-scrollbar">
                {truncatedDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampCard;
