import { Helmet } from "react-helmet";

const SITE_URL = "https://gracemcclarin.com";

export default function Seo({ title, description, path = "" }) {
  const fullTitle = title
    ? `${title} | Grace McClarin`
    : "Grace McClarin — Software Engineer & Web Developer | Rochester, NY";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={`${SITE_URL}${path}`} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={`${SITE_URL}${path}`} />
    </Helmet>
  );
}
