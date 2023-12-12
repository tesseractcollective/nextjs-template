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
import MinimalFooter from "./FooterSections/MinimalFooter";
import UniversalFooter from "./FooterSections/UniversalFooter";

export interface FooterProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  blogs: BlogFieldsFragment[];
  hideFooter?: boolean;
  pageNavigationSelection?: string;
}

function Footer({
  siteLibrary,
  navigations,
  hideFooter,
  blogs,
  pageNavigationSelection,
}: FooterProps) {
  if (!navigations || !siteLibrary || hideFooter) return null;

  const { isSpanish, title, secondaryLink, secondaryLogo, secondaryName } =
    siteLibrary;

  const navigation =
    navigations.find(
      (navigationTemp) =>
        navigationTemp?.pageNavigationSelection &&
        pageNavigationSelection &&
        navigationTemp?.pageNavigationSelection.includes(
          pageNavigationSelection
        )
    ) || navigations[0];

  const { footerColumns, footerWrapperCssClass, footerItems } = navigation;

  const wideColumns = footerColumns.filter(
    (footerColumn) => footerColumn?.wideColumn === true
  );
  const regularColumns = footerColumns.filter(
    (footerColumn) => footerColumn?.wideColumn !== true
  );
  if (navigation.navigationLayoutStyle === "universal")
    return (
      <UniversalFooter
        siteLibrary={siteLibrary}
        navigation={navigation}
        blogs={blogs}
        hideFooter={hideFooter || undefined}
        pageNavigationSelection={pageNavigationSelection || undefined}
      />
    );
  if (navigation.navigationLayoutStyle !== "start")
    return (
      <MinimalFooter
        siteLibrary={siteLibrary}
        navigation={navigation}
        blogs={blogs}
        hideFooter={hideFooter || undefined}
        pageNavigationSelection={pageNavigationSelection || undefined}
      />
    );
  return (
    <footer
      aria-labelledby="footer-heading"
      className={`mt-16 mb-8 ${
        footerWrapperCssClass ? footerWrapperCssClass : ""
      }`}
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        {wideColumns?.length >= 1 && (
          <div className={`flex items-center justify-center w-full mb-16`}>
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
                      className="h-20 w-full mb-4 object-contain max-w-max min-w-[120px]"
                      alt=""
                      width={0}
                      height={0}
                      priority
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
                        key={`footer-link-${index++}`}
                        className="text-sm max-w-max"
                      >
                        {!!linkItem.link && (
                          <div className="max-w-max">
                            <LinkItem
                              key={`footer-link-item-${index++}`}
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
                      blogLayoutStyle="compact"
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
                className={`relative my-4 lg:my-0 ${
                  item?.footerColumnCssWrapper || ""
                }`}
                id={`footer-col-${index++}`}
              >
                <Fade direction="up" cascade damping={0.1} triggerOnce>
                  {!!item.footerImage?.url && (
                    <Image
                      src={item.footerImage?.url}
                      className="h-20 w-full mb-4 object-contain max-w-max min-w-[120px]"
                      alt=""
                      width={0}
                      height={0}
                      priority
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
                              key={`footer-link-column-item-${index++}`}
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
                      blogLayoutStyle="compact"
                    />
                  )}
                </Fade>
              </div>
            ))}
          </div>
        )}
        {/* Bottom Footer */}
        <div className="border-t border-primary-fade-opacity my-8 py-5 flex flex-col flex-wrap justify-center">
          <SocialMediaIcons
            fadeDirection="up"
            siteLibrary={siteLibrary}
            cssClass="mt-8 mb-4 w-full flex flex-row social-icons-row items-center justify-center text-text-color flex-wrap gap-x-2"
          />
          <p className="text-xs text-text-color uppercase text-center mb-4 opacity-70">
            {`© ${new Date().getFullYear()} ${title || ""} ${
              isSpanish ? "Todos Derechos Reservados" : "All Rights Reserved"
            }.`}
          </p>
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
          {footerItems && (
            <div className="flex flex-row items-center justify-center">
              {footerItems.map((footerItem, index) => (
                <LinkItem
                  key={`${footerItem.link}-${index++}`}
                  label={footerItem.label}
                  link={footerItem.link}
                  cssClass={`max-w-max mb-4 mx-4 text-[10px] text-color-secondary opacity-70 text-link uppercase text-center hover:opacity-100 ${
                    footerItem.cssClass ? footerItem.cssClass : ""
                  }`}
                  sameTab={footerItem.sameTab}
                ></LinkItem>
              ))}
            </div>
          )}
          <a
            href={`https://lnza.me/?${encodeURIComponent(
              title || "" + " fan"
            )}`}
            target="_blank"
            rel="noreferrer"
            className="max-w-max mb-4 mx-auto text-[10px] text-color-secondary opacity-70 text-link uppercase text-center hover:opacity-100"
          >
            {isSpanish ? "Hecho a mano por Ricardo" : "Hand crafted by Ricardo"}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
