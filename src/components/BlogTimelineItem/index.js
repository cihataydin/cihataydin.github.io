import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';
import { translate } from '@docusaurus/Translate';

function formatDate(dateString) {
  return new Intl.DateTimeFormat('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString));
}

export default function BlogTimelineItem({ post, position }) {
  const { title, permalink, date, description, tags, readingTime } = post;
  const isLeft = position === 'left';

  const card = (
    <div className={clsx(styles.card, isLeft ? styles.cardLeft : styles.cardRight)}>
      <div className={styles.cardInner}>
        <div className={styles.meta}>
          <time dateTime={date} className={styles.date}>
            {formatDate(date)}
          </time>
          {readingTime !== undefined && (
            <span className={styles.readingTime}>{translate(
                {
                  id: 'theme.blog.post.readingTime.plurals',
                },
                { readingTime: Math.ceil(readingTime) }
              )}
            </span>
          )}
        </div>
        <h3 className={styles.title}>
          <Link to={permalink}>{title}</Link>
        </h3>
        {description && <p className={styles.description}>{description}</p>}
        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Link key={tag.permalink} to={tag.permalink} className={styles.tag}>
                {tag.label}
              </Link>
            ))}
          </div>
        )}
        <Link to={permalink} className={styles.readMore}>
          <Translate id="theme.blog.post.readMore"></Translate>
        </Link>
      </div>
      <div className={clsx(styles.connector, isLeft ? styles.connectorLeft : styles.connectorRight)} />
    </div>
  );

  return (
    <div className={clsx(styles.item, isLeft ? styles.itemLeft : styles.itemRight)}>
      {isLeft && card}
      <div className={styles.dotWrapper}>
        <div className={styles.dot} />
      </div>
      {!isLeft && card}
    </div>
  );
}
