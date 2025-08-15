import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const TourApplication = () => {
  return (
    <section id="prijava" className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[450px]">
            Učlanite Vaše Dijete sad!
          </h2>
          <p className="regular-16 text-gray-10 w-[80%]">
            Osigurajte mjesto za svoje dijete još danas! Prijavite se sada i
            omogućite svom djetetu nezaboravno ljeto puno zabave, učenja i novih
            prijateljstava.
          </p>

          <Link href="/prijava">
            <Button
              type="button"
              title="Prijavi turu!"
              icon="/user.svg"
              variant="btn_green"
            />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image
            className="rounded-full"
            src="/campingbuddies.svg"
            alt="prijava u turu"
            width={550}
            height={870}
          />
        </div>
      </div>
    </section>
  );
};

export default TourApplication;
