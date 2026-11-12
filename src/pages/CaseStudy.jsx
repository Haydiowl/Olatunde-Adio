import { Fragment } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import SiteNav from '@/components/navigation/SiteNav.jsx';
import SiteFooter from '@/components/footer/SiteFooter.jsx';
import SectionLabel from '@/components/sections/SectionLabel.jsx';
import Rule from '@/components/sections/Rule.jsx';
import ArrowIcon from '@/components/buttons/ArrowIcon.jsx';
import { imageUrl } from '@/data/projects.js';
import { getCaseStudy } from '@/data/caseStudies.js';

function MetaRow({ items }) {
  return (
    <div className="cs-meta">
      {items.map((item, i) => (
        <Fragment key={i}>
          {i > 0 ? <span className="cs-meta__dot" aria-hidden="true" /> : null}
          <p className="cs-meta__item">{item}</p>
        </Fragment>
      ))}
    </div>
  );
}

function Facts({ facts }) {
  return (
    <div className="cs-facts">
      <Rule tone="light" />
      <div className="cs-facts__row">
        {facts.map((f, i) => (
          <Fragment key={f.label}>
            <div className="cs-fact">
              <p className="cs-fact__label">{f.label}</p>
              {f.href ? (
                <a className="cs-fact__link" href={f.href} target="_blank" rel="noreferrer">
                  <span className="cs-fact__link-text">{f.value}</span>
                  <ArrowIcon className="cs-fact__arrow" size={11} />
                </a>
              ) : (
                <p className="cs-fact__value">{f.value}</p>
              )}
            </div>
            {i < facts.length - 1 ? <Rule orientation="v" tone="light" className="cs-fact__v" /> : null}
          </Fragment>
        ))}
      </div>
      <Rule tone="light" />
    </div>
  );
}

function Hero({ cs }) {
  return (
    <section className="cs-hero">
      <MetaRow items={cs.meta || []} />
      <div className="cs-hero__heading">
        <h1 className="cs-title">{cs.title}</h1>
        {cs.lede ? <p className="cs-lede">{cs.lede}</p> : null}
      </div>
      <Facts facts={cs.facts || []} />
      {cs.heroImage ? <img className="cs-hero__img" src={imageUrl(cs.heroImage)} alt="" /> : null}
    </section>
  );
}

function SeeAlso({ seeAlso }) {
  if (!seeAlso) return null;
  return (
    <section className="cs-seealso">
      <SectionLabel number={seeAlso.number || '02'} text={seeAlso.label || 'See Also'} divider />
      <div className="cs-seealso__rows">
        {(seeAlso.items || []).map((item) => (
          <Link key={item.slug} to={`/work/${item.slug}`} className="cs-seealso__row">
            <div className="cs-seealso__inner">
              <div className="cs-seealso__titlewrap">
                <h6 className="cs-seealso__title">{item.title}</h6>
              </div>
              <div className="cs-seealso__meta">
                {item.year ? <p className="cs-seealso__year">{item.year}</p> : null}
                <p className="cs-seealso__cat">{item.category}</p>
              </div>
              <div className="cs-seealso__arrow" aria-hidden="true">
                <ArrowIcon size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ---------- Detailed rail renderer (no-code-data-builder) ---------- */
function Rail({ section }) {
  const links = section.railLinks || [];
  const slots = Array.from({ length: 6 }, (_, i) => links[i] || null);
  return (
    <aside className="cs-rail">
      <div className="cs-rail__head">
        <h4 className="cs-rail__number">{section.number}</h4>
      </div>
      <div className="cs-rail__labelwrap">
        <p className="cs-rail__label">{section.label}</p>
      </div>
      <div className="cs-rail__links">
        {slots.map((s, i) => (
          <Fragment key={i}>
            {(i === 0 || i === 1) ? <Rule tone="light" /> : null}
            {s ? (
              <p className="cs-rail__linkwrap">
                <a className="cs-rail__link" href={s.href}>
                  {s.label}
                </a>
              </p>
            ) : (
              <p className="cs-rail__linkwrap cs-rail__linkwrap--empty" aria-hidden="true" />
            )}
          </Fragment>
        ))}
      </div>
    </aside>
  );
}

function NumberedList({ list, variant = 'default' }) {
  const {
    items = [],
    padLeft = 0,
    gap = 16,
    badgeWidth = 60,
    badgePad = '6px',
    rowGap = 24,
    titleTag = 'h5',
    descSize = '14',
    trailingRule = false,
  } = list || {};
  const TitleTag = titleTag;
  return (
    <div
      className={`cs-list cs-list--${variant}`}
      style={{ '--cs-list-padl': `${padLeft}px`, '--cs-list-gap': `${gap}px` }}
    >
      {items.map((item, i) => (
        <Fragment key={i}>
          <div
            className="cs-list__row"
            style={{
              '--cs-badge-w': `${badgeWidth}px`,
              '--cs-badge-pad': badgePad,
              '--cs-row-gap': `${rowGap}px`,
            }}
          >
            <div className="cs-badge">
              <p className="cs-badge__text">{item.n}</p>
            </div>
            <div className="cs-list__body">
              <div className="cs-list__titlewrap">
                <TitleTag className="cs-list__title">{item.title}</TitleTag>
              </div>
              <div className="cs-list__descwrap">
                <p className={`cs-list__desc cs-list__desc--${descSize}`}>{item.desc}</p>
              </div>
              {item.image ? <img className="cs-list__image" src={imageUrl(item.image)} alt="" /> : null}
            </div>
          </div>
          {(trailingRule ? true : i < items.length - 1) ? <Rule tone="light" /> : null}
        </Fragment>
      ))}
    </div>
  );
}

function Block({ block }) {
  switch (block.type) {
    case 'paragraphs':
      return (
        <div className="cs-paragraphs" style={block.maxWidth ? { maxWidth: block.maxWidth } : undefined}>
          {(block.paragraphs || []).map((p, i) => (
            <p key={i} className="cs-p">{p}</p>
          ))}
        </div>
      );
    case 'quote':
      return (
        <div className="cs-quote">
          <div className="cs-quote__label" aria-hidden="true" />
          <h4 className="cs-quote__text">{block.text}</h4>
        </div>
      );
    case 'subhead-block':
      return (
        <div className="cs-subhead-block">
          <div className="cs-subhead-block__head">
            <div className="cs-subhead-block__titles">
              <h3 className="cs-h3">{block.title}</h3>
              {block.intro ? (
                <div className="cs-subhead-block__intro" style={block.introMaxWidth ? { maxWidth: block.introMaxWidth } : undefined}>
                  <p className="cs-p">{block.intro}</p>
                </div>
              ) : null}
            </div>
            {block.afterIntroRule ? <Rule tone={block.afterIntroRule} /> : null}
          </div>
          {block.list ? <NumberedList list={block.list} /> : null}
        </div>
      );
    case 'heading': {
      const Tag = block.tag || 'h2';
      return (
        <div className="cs-heading-block" style={block.maxWidth ? { maxWidth: block.maxWidth } : undefined}>
          <Tag className={`cs-${Tag}`}>{block.text}</Tag>
        </div>
      );
    }
    case 'rule':
      return <Rule tone={block.tone || 'light'} className={block.className} />;
    case 'intro':
      return (
        <div className="cs-intro" style={block.maxWidth ? { maxWidth: block.maxWidth } : undefined}>
          <h3 className="cs-h3">{block.title}</h3>
          {block.body ? <p className="cs-p">{block.body}</p> : null}
        </div>
      );
    case 'image':
      return <img className="cs-image" src={imageUrl(block.src)} alt="" />;
    case 'list':
      return <NumberedList list={block} />;
    case 'challenges':
      return (
        <div className="cs-challenges">
          <h3 className="cs-h3">{block.title}</h3>
          <Rule tone="light" />
          <NumberedList list={block.list} />
        </div>
      );
    case 'header-block':
      return (
        <div className="cs-header-block" style={{ '--cs-hb-gap': `${block.titleBodyGap || 8}px` }}>
          <div className="cs-header-block__head" style={block.titleMaxWidth ? { maxWidth: block.titleMaxWidth } : undefined}>
            <h2 className="cs-h2">{block.title}</h2>
            {block.body ? (
              <div className={block.bodyNested ? 'cs-header-block__body cs-header-block__body--nested' : 'cs-header-block__body'} style={block.bodyMaxWidth ? { maxWidth: block.bodyMaxWidth } : undefined}>
                <p className="cs-p">{block.body}</p>
              </div>
            ) : null}
          </div>
          {block.afterRule ? <Rule tone={block.afterRule} /> : null}
        </div>
      );
    case 'spacer':
      return <div className="cs-spacer" style={{ height: `${block.size}px` }} aria-hidden="true" />;
    case 'image-block':
      return (
        <div className="cs-image-block" style={{ gap: `${block.gap ?? 20}px` }}>
          {block.topSpacer ? <div className="cs-image-block__spacer" style={{ height: `${block.topSpacer}px` }} aria-hidden="true" /> : null}
          <img className="cs-image" src={imageUrl(block.src)} alt="" />
        </div>
      );
    case 'group': {
      const items = block.items || [];
      const flow = block.name === 'flow';
      return (
        <div className={`cs-group cs-group--${block.name}`}>
          <div className="cs-group__head">
            <div className="cs-group__badge"><p className="cs-group__badge-text">{block.badge}</p></div>
            <div className="cs-group__headcopy">
              <h4 className="cs-group__title">{block.title}</h4>
              <p className="cs-p">{block.intro}</p>
            </div>
          </div>
          {block.image ? <img className="cs-image" src={imageUrl(block.image)} alt="" /> : null}
          <div className="cs-group__listwrap" style={{ '--cs-gpadl': `${block.listPadLeft || 0}px` }}>
            {block.listLeadingSpacer ? <div className="cs-group__leadspacer" style={{ height: `${block.listLeadingSpacer}px` }} aria-hidden="true" /> : null}
            <div className={`cs-glist ${flow ? 'cs-glist--flow' : 'cs-glist--workspace'}`}>
              {items.map((item, i) => (
                <Fragment key={i}>
                  <div className="cs-gitem">
                    <div className="cs-gbadge"><p className="cs-badge__text">{item.n}</p></div>
                    <div className="cs-gitem__body">
                      <div className="cs-gitem__text">
                        <h6 className="cs-gitem__title">{item.title}</h6>
                        <p className="cs-gitem__desc">{item.desc}</p>
                      </div>
                      {item.image ? <img className="cs-gitem__image" src={imageUrl(item.image)} alt="" /> : null}
                    </div>
                  </div>
                  {i < items.length - 1 ? <Rule tone="light" /> : null}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      );
    }
    case 'impact-block':
      return (
        <div className="cs-impact">
          <h3 className="cs-h3">{block.title}</h3>
          <div className="cs-impact__cards">
            {block.cards.map((c, i) => (
              <Fragment key={i}>
                <div className="cs-impact__card">
                  <p className="cs-impact__label">{c.label}</p>
                  <div className="cs-impact__copy">
                    <h5 className="cs-impact__heading">{c.heading}</h5>
                    <p className="cs-impact__body">{c.body}</p>
                  </div>
                </div>
                {i < block.cards.length - 1 ? <Rule orientation="v" tone="dark" className="cs-impact__v" /> : null}
              </Fragment>
            ))}
          </div>
        </div>
      );
    case 'learnings-block':
      return (
        <div className="cs-learnings">
          <div className="cs-learnings__head">
            <h3 className="cs-h3">{block.title}</h3>
            {block.afterTitleRule ? <Rule tone={block.afterTitleRule} /> : null}
          </div>
          <div className="cs-learnings__list">
            {block.items.map((it, i) => (
              <Fragment key={i}>
                <div className="cs-learning">
                  <p className="cs-learning__n">{it.n}</p>
                  <div className="cs-learning__copy">
                    <h5 className="cs-learning__title">{it.title}</h5>
                    <p className="cs-learning__desc">{it.desc}</p>
                  </div>
                </div>
                {i < block.items.length - 1 ? <Rule tone="light" /> : null}
              </Fragment>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

function BodySection({ section, index }) {
  const afterDividerClass =
    index === 0 || index === 2
      ? 'cs-root-divider cs-root-divider--hide-base'
      : index === 1 || index === 3
      ? 'cs-root-divider'
      : null;

  return (
    <>
      <section className="cs-section" id={section.id}>
        <Rail section={section} />
        <div className="cs-section__content">
          {(section.content || []).map((b, i) => (
            <Block block={b} key={i} />
          ))}
        </div>
      </section>
      {afterDividerClass ? (
        <div className={afterDividerClass} aria-hidden="true">
          <Rule tone="dark" />
        </div>
      ) : null}
    </>
  );
}

function DetailedCase({ cs }) {
  return (
    <>
      {cs.sections.map((section, i) => (
        <BodySection section={section} index={i} key={section.id || i} />
      ))}
      <div className="cs-spacer-before-seealso" aria-hidden="true" />
      <SeeAlso seeAlso={cs.seeAlso} />
    </>
  );
}

/* ---------- Simple / generic layouts ---------- */
function SimpleBody({ cs }) {
  const intro = cs.introParagraphs || [];
  const images = cs.contentImages || [];
  const items = cs.bodyItems || [];
  return (
    <section className="cs-simple">
      <div className="cs-simple__content">
        {intro.length ? (
          <div className="cs-simple__intro">
            {intro.map((p, i) => <p key={i} className="cs-p">{p}</p>)}
          </div>
        ) : null}
        {items.length ? (
          <div className="cs-simple__items">
            {items.map((it, i) => {
              const Tag = (it.tag && /^h[2-6]$/.test(it.tag)) ? it.tag : 'p';
              const cls = Tag === 'p' ? 'cs-simple__label' : `cs-simple__${Tag}`;
              return <Tag key={i} className={cls}>{it.text}</Tag>;
            })}
          </div>
        ) : null}
        {images.length ? (
          <div className="cs-simple__gallery">
            {images.map((img, i) => (
              <img key={i} className="cs-image" src={imageUrl(img)} alt="" />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = getCaseStudy(slug);
  if (!cs) return <Navigate to="/work" replace />;

  const detailed = Array.isArray(cs.sections) && cs.sections.length > 0;

  return (
    <>
      <SiteNav />
      <main className="case-study">
        <Hero cs={cs} />
        {detailed ? <DetailedCase cs={cs} /> : <SimpleBody cs={cs} />}
        {!detailed ? (
          <>
            <div className="cs-spacer-before-seealso" aria-hidden="true" />
            <SeeAlso seeAlso={cs.seeAlso} />
          </>
        ) : null}
        <SiteFooter />
      </main>
    </>
  );
}
