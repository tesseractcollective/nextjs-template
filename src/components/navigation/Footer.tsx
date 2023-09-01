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
import { Fade } from "react-awesome-reveal";

export interface FooterProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  blogs: BlogFieldsFragment[];
  hideFooter?: boolean;
  pageNavigationSelection?: string;
}

export default function Footer({
  siteLibrary,
  navigations,
  hideFooter,
  blogs,
  pageNavigationSelection,
}: FooterProps) {
  if (!navigations && !siteLibrary) return <></>;
  const { isSpanish, title, secondaryLink, secondaryLogo, secondaryName } =
    siteLibrary;

  const navigation =
    navigations?.find(
      (navigationTemp) =>
        navigationTemp?.pageNavigationSelection &&
        pageNavigationSelection &&
        navigationTemp?.pageNavigationSelection.includes(
          pageNavigationSelection
        )
    ) || navigations[0];

  const { footerColumns } = navigation;
  if (hideFooter === true) return null;

  return (
    <footer aria-labelledby="footer-heading" className="mt-16 mb-8">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        {footerColumns && footerColumns?.length >= 1 && (
          <div
            className={`grid place-content-between lg:grid-flow-col lg:auto-rows-min lg:grid-cols-${footerColumns.length} lg:gap-x-8 lg:gap-y-16`}
          >
            <Fade direction="up" cascade damping={0.1} triggerOnce>
              {footerColumns.map((item, index) => (
                <div
                  key={index}
                  className={`relative my-4 md:my-0 ${
                    item?.footerColumnCssWrapper || ""
                  }`}
                  id={`footer-col-${index + 1}`}
                >
                  {!!item.footerImage?.url && (
                    <Image
                      src={item.footerImage?.url}
                      className="h-8 w-auto mb-4 object-contain max-w-max"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100%"
                      style={{ width: "100%" }}
                    />
                  )}
                  {!!item.footerTitle && (
                    <h3 className="text-xs font-bold text-text-color uppercase tracking-widest opacity-90">
                      {item.footerTitle}
                    </h3>
                  )}
                  {!!item?.footerText?.html && (
                    <div className="text-xs font-medium text-text-color max-w-max body-parsed-text leading-none ring-opacity-90 opacity-80">
                      {parse(item.footerText?.html)}
                    </div>
                  )}
                  {!!item?.footerIframe && (
                    <div className="text-sm font-medium text-text-color max-w-max">
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
                              cssClass={`text-text-color opacity-80 hover:opacity-100 transition-all hover:text-link ${linkItem?.cssClass}`}
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
              ))}
            </Fade>
          </div>
        )}

        <div className="border-t border-primary-fade-opacity my-8 py-5 flex flex-col flex-wrap justify-center">
          <SocialMediaIcons
            siteLibrary={siteLibrary}
            cssClass="mt-8 mb-4 w-full flex flex-row social-icons-row items-center justify-center text-text-color gap-x-4"
          />
          <p className="text-xs text-text-color uppercase text-center mb-4 opacity-70">
            {`© ${new Date().getFullYear()} ${!!title && title} ${
              isSpanish ? "Todos Derechos Reservados" : "All Rights Reserved"
            }.`}
          </p>
          {!!secondaryLogo?.url && secondaryLink && secondaryName && (
            <a
              href={secondaryLink}
              title={secondaryName}
              target="_blank"
              rel="noreferrer"
              className="no-underline max-w-max mx-auto h-12 mb-4"
            >
              <Image
                src={secondaryLogo.url}
                className="h-full w-full mb-4 object-contain block"
                alt=""
                width={0}
                height={0}
                sizes="100%"
              />
              <span className="sr-only">{secondaryName}</span>
            </a>
          )}
          <a
            href={`https://lnza.me/?${encodeURIComponent(
              title ?? "" + " fan"
            )}`}
            target="_blank"
            rel="noreferrer"
            className="max-w-max mb-4 mx-auto text-[10px] text-color-secondary opacity-70 text-link uppercase text-center hover:opacity-100"
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
