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

const MailShareButton: FC<Props> = ({
  className,
  url = "",
  quote,
  ref,
  style,
  share = false,
}) => {
  const handleOnClick: MouseEventHandler<SVGSVGElement> = () => {
    if (share) {
      shareToSocialMedia("mail", {
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
      <g>
        <g>
          <path d="M1.574 5.286l7.5 4.029c.252.135.578.199.906.199.328 0 .654-.064.906-.199l7.5-4.029c.489-.263.951-1.286.054-1.286H1.521c-.897 0-.435 1.023.053 1.286zm17.039 2.203l-7.727 4.027c-.34.178-.578.199-.906.199s-.566-.021-.906-.199-7.133-3.739-7.688-4.028C.996 7.284 1 7.523 1 7.707V15c0 .42.566 1 1 1h16c.434 0 1-.58 1-1V7.708c0-.184.004-.423-.387-.219z"></path>
        </g>
      </g>
    </svg>
  );
};

export default MailShareButton;
