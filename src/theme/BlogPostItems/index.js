import React from 'react';
import BlogTimeline from '@site/src/components/BlogTimeline';

export default function BlogPostItemsWrapper({ items, ...props }) {
  return <BlogTimeline items={items} />;
}
