import React from 'react';
import BlogTimelineItem from '@site/src/components/BlogTimelineItem';
import styles from './index.module.css';

function groupByYear(items) {
  const sorted = [...items].sort(
    (a, b) => new Date(b.content.metadata.date) - new Date(a.content.metadata.date)
  );

  return sorted.reduce((groups, item) => {
    const year = new Date(item.content.metadata.date).getFullYear();
    if (!groups[year]) groups[year] = [];
    groups[year].push(item);
    return groups;
  }, {});
}

export default function BlogTimeline({ items }) {
  if (!items || items.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Henüz blog yazısı yok.</p>
      </div>
    );
  }

  const grouped = groupByYear(items);
  const years = Object.keys(grouped).sort((a, b) => b - a);

  let globalIndex = 0;

  return (
    <div className={styles.timeline}>
      {years.map((year) => (
        <div key={year} className={styles.yearGroup}>
          <div className={styles.yearMarker}>
            <span className={styles.yearLabel}>{year}</span>
          </div>
          {grouped[year].map((item) => {
            const position = globalIndex % 2 === 0 ? 'left' : 'right';
            globalIndex++;
            return (
              <BlogTimelineItem
                key={item.content.metadata.permalink}
                post={item.content.metadata}
                position={position}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
