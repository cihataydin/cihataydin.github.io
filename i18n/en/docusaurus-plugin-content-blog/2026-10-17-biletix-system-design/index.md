---
slug: biletix-system-design
title: Biletix System Design
tags: [system-design]
---

### Introduction

During the system design process, we will proceed by using the following logical sequence.

![System Design Tools](/img/system-design-tools.svg)

### System Description

A system featuring various events where users can purchase one or more tickets for these events.

### Functional Requirements

- Users must be able to view upcoming events.
- Users must be able to purchase tickets for these events.
- Users must be able to search for events.

### Non-Functional Requirements

- Low latency search < 500ms
- Read operations outnumber write operations (Reads > Writes)
- Managing high-demand events
- `Consistency` in search, `Availability`, and ticket purchasing

### API Interface

```
GET /events/{eventId} => etkinlik, mekan, sanatçı, biletler[]

GET /search?keyword={keyword}&startDate={sDate}&endDate={eDate}&pageSize{}&pageNumber={} => etkinlik[]

POST /bookings/{eventId}
{
	ticketIds: [],
	paymentDetails: {}
}
```

### Data Model

```
events
- id
- venue_id
- performer_id
- tickets[]
- name
- description
- ...

venues
- id
- location
- seat_map

performers
- id
- ...

tickets
- id
- event_id
- seat
- price
- status {available, booked}
- user_id
  
bookings
- user_id
- tickets[]
```

### High-Level Architecture

![Biletix System Design](/img/biletix-system-design.svg)

### Bottleneck Analysis and Scaling

Let's consider an example scenario. Tarkan concert tickets go on sale, and thousands of requests hit the front-row seat within the exact same millisecond. If this load is sent directly to the database and a `row-level lock` is applied, the database `CPU` will instantly max out, and the entire system will lock up. Therefore, checking seat availability and handling the locking mechanism must be resolved in `RAM`—specifically using `Redis`—before hitting the database. `Redis`'s `single-threaded` architecture and the `SetNX` (Set If Not Exists) command solve this need. An important point here is using `TTL (Time to Live)`, so that even if the customer times out, the same ticket can return to an available status. Thanks to this simple logic, hundreds of thousands of requests are absorbed directly in `RAM` without any race conditions.

Now, let's suppose Tarkan concert tickets go on sale again on a Saturday at 10:00 AM. Millions of users refresh the page simultaneously. If these requests are answered directly, the Redis layer and load balancer won't be enough, and the backend service will crash due to the sudden spike in load. Users will start receiving 503 errors. A virtual waiting room is used. Users are let in according to system capacity while others are kept waiting. For example, an `API Gateway` and `Queue` combination can be envisioned. As system capacity becomes available, users in the waiting room are invited in via `SSE (Server Sent Events)`.

The logic behind the Queue:
- A queue number and a unique `token` are issued.
- Users are placed in the queue.
- Users are let in matching the system capacity (`throttling`).

Thanks to this architecture, the system (core backend, database) only deals with as many people as it can effectively serve.

### References

[5 major system designs](https://mvpakademi.com/course/5-buyuk-sistem-tasarimi)