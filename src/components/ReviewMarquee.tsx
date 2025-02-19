import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";


const reviews = [
  {
    name: "Fast-Paced Combat",
    username: "Action",
    body: "Dive into adrenaline-pumping battles where speed and reflexes are key to victory.",
    img: "https://avatar.vercel.sh/fastcombat", // You can change the image URL here.
  },
  {
    name: "Team Warfare",
    username: "Strategy",
    body: "Engage in thrilling Red vs Blue matches, where teamwork and tactics lead to success.",
    img: "https://avatar.vercel.sh/teamwarfare", // Update the image URL here.
  },
  {
    name: "Stunning Visuals",
    username: "Immersion",
    body: "Experience futuristic environments with high-quality graphics powered by Unreal Engine.",
    img: "https://avatar.vercel.sh/visuals", // Update the image URL accordingly.
  },
  {
    name: "Diverse Arsenal",
    username: "Variety",
    body: "Equip yourself with a wide range of customizable weapons to match your combat style.",
    img: "https://avatar.vercel.sh/arsenal", // Update image URL.
  },
  {
    name: "Dynamic Maps",
    username: "Exploration",
    body: "Fight across ever-changing, immersive maps designed for strategic gameplay and intense encounters.",
    img: "https://avatar.vercel.sh/maps", // Replace with your image.
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image 
          className="rounded-full" 
          width={32} 
          height={32} 
          alt={`${name}'s avatar`} 
          src={img}
          unoptimized // Since we're using Vercel's avatar service which is already optimized
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm dark:text-gray-200">{body}</blockquote>
    </figure>
  );
};

export function ReviewMarquee() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-[#EFE9D5]">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#EFE9D5]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#EFE9D5]"></div>
    </div>
  );
}