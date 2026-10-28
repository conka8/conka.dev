import { FC } from "react";
import HeadingThirdXl from "../headings/HeadingThirdXl";
import Image from "next/image";
import Arrow from "../svg/Arrow";
import Link from "next/link";
import ParagraphBase from "../paragraphs/ParagraphBase";

interface Props {
  index?: string;
  description?: string;
  languages?: string[];
  mediaSrc?: string;
  mediaType?: "image" | "video";
  projectLink: string;
}

const ProjectCard: FC<Props> = ({
  languages,
  index,
  description,
  mediaSrc = "",
  mediaType,
  projectLink,
}) => {
  return (
    <Link
      className="flex flex-col text-black w-full relative @container/project-card cursor-pointer"
      href={projectLink}
    >
      <div className=" w-full relative h-[calc(405/720*100cqw)]">
        {mediaSrc === "" ? (
          <></>
        ) : mediaType === "image" ? (
          <Image src={mediaSrc} alt={mediaSrc} fill className="object-cover" />
        ) : (
          <video
            muted
            playsInline
            src={mediaSrc}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div
        className="
                    py-4 
                    px-[clamp(16px,calc(((100cqw-460px)/260*32)+16px),48px)] 
                    min-h-[calc(3lh+16px)]
                    
                    flex 
                    gap-[clamp(28px,calc(((100cqw-460px)/260*12)+28px),40px)] 
                    justify-around 
                    bg-[#F2F2F2]

                    @max-[460px]/project-card:h-auto
                    @max-[460px]/project-card:flex-col
                    @max-[460px]/project-card:gap-4
                    @max-[460px]/project-card:relative
                "
      >
        <HeadingThirdXl>{index}</HeadingThirdXl>
        <div className="max-w-[465px] h-fit flex flex-col gap-3">
          <ParagraphBase className="leading-[1.3]">{description}</ParagraphBase>
          <div className="flex flex-wrap gap-2">
            {languages?.map((language, i) => (
              <span
                key={i}
                className="
                                  px-3 py-1
                                  border border-black/25
                                  text-black/70
                                  text-xs
                                  rounded-full
                                  tracking-wide
                              "
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        <div
          className="
                        
                        absolute 
                        right-0 
                        top-0 
                        
                        mt-[clamp(16px,calc(((100cqw-460px)/260*8)+16px),24px)] 
                        mr-[clamp(16px,calc(((100cqw-460px)/260*8)+16px),24px)]
                    
                    "
        >
          <Arrow className="@max-[460px]/project-card:text-black" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
