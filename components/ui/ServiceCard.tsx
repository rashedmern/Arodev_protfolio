"use client";

type Props = {
  number: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  number,
  title,
  description,
}: Props) {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-8 rounded-[32px] bg-[#101010] p-6 sm:p-8 md:p-10 lg:p-14">
        {/* Number */}

        <span className="text-sm text-white/40">
          {number}
        </span>

        {/* Content */}

        <div>
          <h3
            className="
              text-3xl
              font-semibold
              tracking-[-0.04em]
              text-white
              sm:text-4xl
              md:text-[42px]
              lg:text-5xl
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-white/60
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}