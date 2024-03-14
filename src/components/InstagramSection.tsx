/* eslint-disable @next/next/no-img-element */
// components/InstagramFeed.tsx

import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface InstagramPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url: string;
  permalink: string;
  timestamp: string;
}

interface InstagramFeedProps {
  userToken: string;
  // appId: string;
  // appSecret: string;
  instagramLink?: string;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({
  userToken,
  instagramLink,
}) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response: AxiosResponse<{ data: InstagramPost[] }> =
          await axios.get(
            `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=15&access_token=${userToken}`
          );

        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };

    fetchInstagramPosts();
  }, [userToken]);
  const imagePosts = posts.filter(
    (tempPost) => tempPost.media_type === "IMAGE"
  );
  console.log("posts ", posts);
  console.log("image post", imagePosts);
  return (
    <div className="my-0 magic-grid block h-full py-16">
      <div className="block px-4 max-w-10xl mx-auto w-full">
        {instagramLink && (
          <a
            href={instagramLink}
            target="_blank"
            className="text-text-color text-center my-4 font-bold flex mx-auto max-w-max text-4xl hover:text-primary transition-all text-link"
          >
            {`@${instagramLink.replace("https://www.instagram.com/", "")}`}
          </a>
        )}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {imagePosts
            .map((post) => (
              <a
                key={post.id}
                target="_blank"
                href={post.permalink}
                className="aspect-1 block mx-auto overflow-hidden relative group"
              >
                <img
                  sizes="100%"
                  src={post.media_url}
                  alt={post.caption}
                  className="object-cover block mx-auto h-full w-full aspect-1 opacity-100 group-hover:opacity-50 group-focus:opacity-50 transition-all"
                />
                <div className="ml-auto group-hover:opacity-100 group-focus:opacity-100 opacity-0 transition-opacity absolute inset-0 z-10 flex items-center justify-center flex-col">
                  <p className="hidden md:flex text-md mt-2 line-clamp-2">
                    {post.caption}
                  </p>
                  <div className="flex items-center justify-center flex-row gap-x-4">
                    <FontAwesomeIcon
                      icon={faInstagram as IconProp}
                      className="fa-fw my-0 py-0 h-5 w-5 text-primary"
                    />
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare as IconProp}
                      className="fa-fw my-0 py-0 h-4 w-4 text-primary"
                    />
                  </div>
                </div>
              </a>
            ))
            .slice(0, 8)}
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
