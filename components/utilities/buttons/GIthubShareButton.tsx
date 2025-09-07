import { shareToSocialMedia } from "@/function/client/shareToSocialMedia";
import { cn } from "@/lib/tailwind/cn";
import { CSSProperties, FC, MouseEventHandler, Ref } from "react";

interface Props {
  url?: string;
  quote?: string;
  className?: string;
  style?: CSSProperties;
  ref?: Ref<SVGSVGElement>;
  share?: boolean;
}

const GIthubShareButton: FC<Props> = ({
  className,
  url = "",
  quote,
  ref,
  style,
  share = false,
}) => {
  const handleOnClick: MouseEventHandler<SVGSVGElement> = () => {
    if (share) {
      shareToSocialMedia("github", {
        u: url,
        quote,
      });
    }
  };
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleOnClick}
      className={cn(
        "h-[20px] w-[20px] cursor-pointer hover:text-secondary ",
        className
      )}
      viewBox="0 0 135 134.18"
      style={{ transition: "color 0.2s linear", ...style }}
    >
      <path d="M27.106 0s-2.101 0-4.235 3.2c-1.056-1.057-4.267-1.067-5.331-1.067-1.068 0-4.277.01-5.334 1.067C10.072 0 7.976 0 7.976 0c-1.141 2.864-.248 4.807-.033 5.333C6.877 6.4 5.806 7.467 5.806 12.8s3.878 8.008 8.538 8.533c-.599.521-1.067 2.133-1.067 3.2-1.197.533-4.528 1.045-6.4-2.133 0 0-1.067-2.133-3.2-2.133 0 0-2.133-.201 0 1.067 0 0 1.067 1.067 2.133 3.2 0 0 1.629 4.456 7.467 3.2.012 1.735 0 4.267 0 4.267h8.528v-7.467c0-.844-.466-2.68-1.067-3.2 4.66-.525 8.533-3.2 8.533-8.533 0-5.333-1.067-6.4-2.133-7.467.217-.527 1.108-2.47-.032-5.334z"></path>
    </svg>
  );
};

export default GIthubShareButton;
