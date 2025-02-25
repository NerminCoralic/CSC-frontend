/* eslint-disable @typescript-eslint/no-explicit-any */
import CampCard from "./CampCard";
import Empty from "./Empty"; // Importuj Empty komponentu

const Camp = ({ blogs }: any) => {
  return (
    <section
      id="blog"
      className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20"
    >
      {blogs?.data?.length > 0 ? (
        <div className="hide-scrollbar px-4 flex h-[470px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
          {blogs.data.reverse().map((blog: any) => (
            <CampCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <Empty
          title="Trenutno nema blogova dostupnih"
          description="Ne brini, trenutno nema dostupnih, blogovi uskoro stižu!"
        />
      )}
    </section>
  );
};

export default Camp;
