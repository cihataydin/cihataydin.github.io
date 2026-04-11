import React from 'react';
import Link from '@docusaurus/Link';
// @generated alias points to .docusaurus/ build artifacts
import recentPostsData from '@generated/docusaurus-plugin-content-blog/default/blog-post-list-prop-default';
import styles from './index.module.css';

function formatDate(dateString) {
  return new Intl.DateTimeFormat('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString));
}

export default function MiniTimeline() {
  const posts = recentPostsData?.items?.slice(0, 5) ?? [];

  if (!posts.length) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Knock, knock, Geo.</h2>
        <div className={styles.timeline}>
          {posts.map((post) => {
            const { title, permalink, date } = post;
            return (
              <div key={permalink} className={styles.item}>
                <div className={styles.dotCol}>
                  <div className={styles.dot} />
                  <div className={styles.line} />
                </div>
                <div className={styles.content}>
                  <time className={styles.date}>{formatDate(date)}</time>
                  <h3 className={styles.title}>
                    <Link to={permalink}>{title}</Link>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.viewAll}>
          <Link to="/blog" className="button button--outline button--primary">
            all articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
