import Link from 'next/link';

export default function Breadcrumb({ breadcrumbTitle, eyebrow }) {
  return (
    <section className="breadcrumb__area motta-breadcrumb" aria-label="Page header">
      <div className="motta-breadcrumb__grid" aria-hidden="true" />
      <div className="motta-breadcrumb__glow" aria-hidden="true" />
      <div className="motta-breadcrumb__rule" aria-hidden="true" />
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="breadcrumb__content motta-breadcrumb__content">
              {eyebrow ? (
                <span className="motta-breadcrumb__eyebrow">
                  <span className="motta-breadcrumb__eyebrow-dot" aria-hidden="true" />
                  {eyebrow}
                </span>
              ) : null}
              <h1 className="title motta-breadcrumb__title">{breadcrumbTitle}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb motta-breadcrumb__crumbs">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    className="breadcrumb-item active"
                    aria-current="page"
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
