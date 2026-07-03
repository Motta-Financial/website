import Link from 'next/link';

/**
 * Breadcrumb — page header with the same look as the homepage hero:
 * a photograph behind a sage-green wash, an optional eyebrow tag, the
 * page title, and breadcrumb crumbs. Pages can pass their own image
 * via `backgroundImage`; otherwise we fall back to the shared brand
 * shot used on the homepage hero.
 */
export default function Breadcrumb({
  breadcrumbTitle,
  eyebrow,
  tagline,
  backgroundImage,
  backHref = '/',
  backLabel = 'Home',
}) {
  const bg = backgroundImage || '/assets/img/slider/slider_bg01.jpg';

  return (
    <section
      className="breadcrumb__area motta-breadcrumb"
      aria-label="Page header"
    >
      <div
        className="motta-breadcrumb__photo"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden="true"
      />
      <div className="motta-breadcrumb__wash" aria-hidden="true" />
      <div className="motta-breadcrumb__rule" aria-hidden="true" />
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="breadcrumb__content motta-breadcrumb__content">
              {eyebrow ? (
                <span className="motta-breadcrumb__eyebrow">
                  <span
                    className="motta-breadcrumb__eyebrow-dot"
                    aria-hidden="true"
                  />
                  {eyebrow}
                </span>
              ) : null}
              <h1 className="title motta-breadcrumb__title">
                {breadcrumbTitle}
              </h1>
              {tagline ? (
                <p className="motta-breadcrumb__tagline">{tagline}</p>
              ) : null}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb motta-breadcrumb__crumbs" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0, gap: 0 }}>
                  <li className="breadcrumb-item" style={{ display: 'flex', alignItems: 'center' }}>
                    <Link href={backHref}>{backLabel}</Link>
                  </li>
                  <li
                    className="breadcrumb-item active"
                    aria-current="page"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    {breadcrumbTitle}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
