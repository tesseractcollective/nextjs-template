import React, { useEffect, useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

export default function SocialShare() {
  const [shareLink, setShareLink] = useState("");

  useEffect(() => {
    // Check if 'window' is defined (only available on the client-side)
    if (typeof window !== "undefined") {
      setShareLink(window.location.href);
    }
  }, []);

  return (
    <div className="flex flex-row items-center justify-center my-8 gap-x-4 social-share-icons max-w-max mx-auto border border-opacity-5 border-[gray]/50 p-4 rounded">
      <FontAwesomeIcon
        icon={faShareNodes as IconProp}
        className="fa-fw h-4 w-4 mr-2 text-text-color"
      />
      <FacebookShareButton url={shareLink}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <PinterestShareButton url={shareLink} media={""}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <RedditShareButton url={shareLink}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton url={shareLink}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={shareLink}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
}
