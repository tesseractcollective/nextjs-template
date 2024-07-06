import type {
  BlogFieldsFragment,
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import Image from "next/image";
import parse from "html-react-parser";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import Blogs from "@/components/Blogs";
import { Fade } from "react-awesome-reveal";

export interface FooterProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigation: NavigationFieldsFragment;
  blogs: BlogFieldsFragment[];
  hideFooter?: boolean;
  pageNavigationSelection?: string;
}

function UniversalFooter({
  siteLibrary,
  navigation,
  hideFooter,
  blogs,
}: FooterProps) {
  if (!navigation || !siteLibrary || hideFooter) return null;

  const { isSpanish, title, secondaryLink, secondaryLogo, secondaryName } =
    siteLibrary;

  const { footerColumns, footerWrapperCssClass, footerItems } = navigation;

  const wideColumns = footerColumns.filter(
    (footerColumn) => footerColumn?.wideColumn === true
  );
  const regularColumns = footerColumns.filter(
    (footerColumn) => footerColumn?.wideColumn !== true
  );
  return (
    <footer
      aria-labelledby="footer-heading"
      className={`transition-all my-8 md:my-0 ${
        footerWrapperCssClass ? footerWrapperCssClass : ""
      }`}
    >
      <div className="fixed left-0 right-0 bg-bg max-w-max mx-auto bottom-[-1px] z-[500] overflow-hidden max-h-max">
        <SocialMediaIcons
          fadeDirection="up"
          siteLibrary={siteLibrary}
          cssClass="w-full flex flex-row social-icons-row items-center justify-center text-text-color flex-wrap divide-x divide-secondary border-secondary border"
          iconClass="!px-0 !mx-0"
        />
      </div>
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto px-4">
        {wideColumns?.length >= 1 && (
          <div className={`flex items-center justify-center w-full`}>
            <Fade direction="up" cascade damping={0.1} triggerOnce>
              {wideColumns.map((item, index) => (
                <div
                  key={`footer-col-${index++}`}
                  className={`flex items-center mx-auto justify-center text-center relative my-4 md:my-0 flex-col ${
                    item?.footerColumnCssWrapper || ""
                  }`}
                  id={`footer-col-${index + 1}`}
                >
                  {!!item.footerImage?.url && (
                    <Image
                      src={item.footerImage?.url}
                      className="h-20 w-full mb-4 object-contain max-w-max min-w-[120px] py-2"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100%"
                    />
                  )}
                  {!!item.footerTitle && (
                    <h3 className="text-xs font-bold text-text-color uppercase tracking-widest opacity-90 mb-2">
                      {item.footerTitle}
                    </h3>
                  )}
                  {!!item?.footerText?.html && (
                    <div className="text-xs font-medium text-text-color max-w-lg body-parsed-text leading-none ring-opacity-90 opacity-90">
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
                      <li
                        key={`footer-link-${index++}`}
                        className="text-sm max-w-max"
                      >
                        {!!linkItem.link && (
                          <div className="max-w-max">
                            <LinkItem
                              link={linkItem?.link}
                              cssClass={`text-text-color opacity-80 hover:opacity-100 transition-all hover:text-link relative ${linkItem?.cssClass}`}
                              sameTab={linkItem?.sameTab}
                            >
                              <>
                                {!!linkItem.image?.url && (
                                  <Image
                                    src={linkItem.image?.url}
                                    className="h-20 w-auto mb-4 object-contain max-w-max"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    style={{ width: "100%" }}
                                  />
                                )}
                                {!!linkItem?.label && (
                                  <>{parse(linkItem?.label)}</>
                                )}
                              </>
                            </LinkItem>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                  {!!item?.recentBlogByCategory && blogs && (
                    <Blogs
                      blogs={blogs}
                      blogCategory={item.recentBlogByCategory}
                      blogLayoutStyle={"compact"}
                    />
                  )}
                </div>
              ))}
            </Fade>
          </div>
        )}
        {regularColumns?.length >= 1 && (
          <div
            className={`grid place-content-between lg:grid-flow-col lg:auto-rows-min lg:grid-cols-${regularColumns.length} lg:gap-x-8 lg:gap-y-16`}
          >
            {regularColumns.map((item, index) => (
              <div
                key={`regular-column-${index++}`}
                className={`relative my-4 md:my-0 ${
                  item?.footerColumnCssWrapper || ""
                }`}
                id={`footer-col-${index++}`}
              >
                <Fade direction="up" cascade damping={0.1} triggerOnce>
                  {!!item.footerImage?.url && (
                    <Image
                      src={item.footerImage?.url}
                      className="h-16 w-full mb-4 object-contain max-w-max"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100%"
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
                      <li
                        key={`footer-link-col-item-${index++}`}
                        className="text-sm max-w-max"
                      >
                        {!!linkItem.link && (
                          <div className="max-w-max">
                            <LinkItem
                              link={linkItem?.link}
                              cssClass={`text-text-color opacity-80 hover:opacity-100 transition-all hover:text-link ${linkItem?.cssClass}`}
                              sameTab={linkItem?.sameTab}
                            >
                              <>
                                {!!linkItem.image?.url && (
                                  <Image
                                    src={linkItem.image?.url}
                                    className="h-20 w-auto mb-4 object-contain max-w-max"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    style={{ width: "100%" }}
                                  />
                                )}
                                {!!linkItem?.label && (
                                  <>{parse(linkItem?.label)}</>
                                )}
                              </>
                            </LinkItem>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                  {!!item?.recentBlogByCategory && blogs && (
                    <Blogs
                      blogs={blogs}
                      blogCategory={item.recentBlogByCategory}
                      blogLayoutStyle={"compact"}
                    />
                  )}
                </Fade>
              </div>
            ))}
          </div>
        )}
        {/* Bottom Footer */}
        <div className="my-0 flex flex-col flex-wrap justify-center w-full mx-auto py-8">
          {secondaryLogo?.url && secondaryLink && secondaryName && (
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

          <div className="flex flex-col md:flex-row justify-center md:justify-between w-full items-center my-0">
            <p className="text-xs text-text-color uppercase text-center md:text-left mx-auto md:ml-0 md:mr-auto opacity-70 flex items-center h-full text-[10px]">
              {`© ${new Date().getFullYear()} ${title || ""} ${
                isSpanish ? "Todos Derechos Reservados" : "All Rights Reserved"
              }.`}
            </p>
            <div className="flex flex-row items-center">
              {footerItems && (
                <div className="flex flex-row items-center justify-center slashes gap-x-2">
                  {footerItems.map((footerItem, index) => (
                    <LinkItem
                      key={`footer-items-${footerItem.link}-${index++}`}
                      label={footerItem.label}
                      link={footerItem.link}
                      cssClass={`footer-link-item max-w-max my-2 mx-0 text-[12px] text-color-secondary opacity-70 text-link uppercase text-center hover:opacity-100 ${
                        footerItem.cssClass ? footerItem.cssClass : ""
                      }`}
                      sameTab={footerItem.sameTab}
                    ></LinkItem>
                  ))}
                  <a
                    href={`https://lnza.me/?${encodeURIComponent(
                      title || "" + " fan"
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link-item max-w-max mx-0 !text-[12px] text-color-secondary opacity-70 text-link uppercase text-center hover:opacity-100"
                  >
                    CREDIT
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default UniversalFooter;
