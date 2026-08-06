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
    <div className="service-card border-b border-white/10 py-24">
      <div className="flex gap-8">

        <span className="text-sm text-white/40">
          {number}
        </span>

        <div>

          <h3 className="text-5xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
            {description}
          </p>

        </div>

      </div>
    </div>
  );
}