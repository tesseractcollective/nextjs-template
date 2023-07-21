import LinkItem from "@/components/LinkItem";
import Image from "next/image";
import parse from "html-react-parser";
import type {
  BlogFieldsFragment,
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import Blogs from "@/components/Blogs";

export interface FooterProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigation: NavigationFieldsFragment;
  blogs: BlogFieldsFragment[];
  hideFooter?: boolean;
}

export default function Footer({
  siteLibrary,
  navigation,
  hideFooter,
  blogs,
}: FooterProps) {
  if (!navigation && !siteLibrary) return <></>;
  const { isSpanish, title } = siteLibrary;

  const { footerColumns } = navigation;
  if (hideFooter === true) return null;

  return (
    <footer aria-labelledby="footer-heading" className="bg-dark mt-16 mb-8">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {footerColumns && footerColumns?.length >= 1 && (
          <div
            className={`grid lg:grid-flow-col lg:auto-rows-min lg:grid-cols-${footerColumns.length} lg:gap-x-8 lg:gap-y-16`}
          >
            {footerColumns.map((item, index) => (
              <div
                key={index}
                id={`footer-col-${index + 1}`}
                className={`relative my-4 md:my-0 ${
                  item?.footerColumnCssWrapper || ""
                }`}
              >
                <div className="">
                  {!!item.footerImage?.url && (
                    <Image
                      src={item.footerImage?.url}
                      className="h-8 w-auto mb-4 object-cover max-w-max"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100%"
                      style={{ width: "100%" }}
                    />
                  )}
                  {!!item.footerTitle && (
                    <h3 className="text-xs font-bold text-white uppercase tracking-widest opacity-90">
                      {item.footerTitle}
                    </h3>
                  )}
                  {!!item?.footerText?.html && (
                    <div className="text-xs font-medium text-white max-w-max body-parsed-text leading-none ring-opacity-90 opacity-90">
                      {parse(item.footerText?.html)}
                    </div>
                  )}
                  {!!item?.footerIframe && (
                    <div className="text-sm font-medium text-white max-w-max">
                      {parse(item.footerIframe)}
                    </div>
                  )}
                  <ul className="mt-6 space-y-6 max-w-max">
                    {item.footerLink.map((linkItem, index) => (
                      <li key={index} className="text-sm max-w-max">
                        {!!linkItem.link && (
                          <div className="max-w-max">
                            <LinkItem
                              key={linkItem?.link}
                              link={linkItem?.link}
                              label={linkItem?.label}
                              cssClass={`text-white opacity-80 hover:opacity-100 transition-all hover:text-link ${linkItem?.cssClass}`}
                              sameTab={linkItem?.sameTab}
                            />
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                  {!!item?.recentBlogByCategory && blogs && (
                    <Blogs
                      blogs={blogs}
                      blogCategory={item.recentBlogByCategory}
                      listSummary
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="border-t border-primary-fade-opacity my-8 py-5 flex flex-col flex-wrap justify-center">
          <SocialMediaIcons siteLibrary={siteLibrary} />
          <p className="text-xs text-gray-400 uppercase text-center mb-8 opacity-70">
            {`© ${new Date().getFullYear()} ${!!title && title} ${
              isSpanish ? "Todos Derechos Reservados" : "All Rights Reserved"
            }.`}
          </p>
          <a
            href={`https://lnza.me/?${encodeURIComponent(
              title ?? "" + " fan"
            )}`}
            target="_blank"
            rel="noreferrer"
            className="max-w-max mb-4 mx-auto text-xs text-color-secondary opacity-60 text-link uppercase text-center hover:opacity-100"
          >
            {isSpanish
              ? "Hecho a mano por Ricardo Bautista"
              : "Hand crafted by Ricardo Bautista"}
          </a>
        </div>
      </div>
    </footer>
  );
}
