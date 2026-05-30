export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  alertBanner,
  adminEmail,
  phoneNumber,
  schoolName,
  tagline
}`;

export const homePageQuery = `*[_type == "homePage"][0]{
  missionStatement,
  introLine
}`;

export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  pageTitle,
  introParagraph,
  missionStatement,
  sections[]{
    heading,
    body,
    images[]{
      alt,
      caption,
      "asset": image.asset->{ _id, url }
    }
  }
}`;

export const contactPageQuery = `*[_type == "contactPage"][0]{
  headline,
  bodyText
}`;

export const learningLifePageQuery = `*[_type == "learningLifePage"][0]{
  pageTitle,
  introText,
  sections[]{
    heading,
    body,
    images[]{
      alt,
      caption,
      "asset": image.asset->{ _id, url }
    }
  }
}`;

export const faqItemsQuery = `*[_type == "faqItem"] | order(sortOrder asc, _createdAt asc){
  _id,
  question,
  answer,
  isExample,
  sortOrder
}`;

export const calendarEventsQuery = `*[_type == "calendarEvent"] | order(date asc){
  _id,
  date,
  timeLabel,
  title,
  description,
  linkUrl,
  linkLabel
}`;

export const newsletterIssuesQuery = `*[_type == "newsletterIssue"] | order(weekOf desc){
  _id,
  title,
  weekOf,
  slug,
  publishedAt,
  "teaser": pt::text(body)[0..200]
}`;

export const newsletterIssueBySlugQuery = `*[_type == "newsletterIssue" && slug.current == $slug][0]{
  _id,
  title,
  weekOf,
  slug,
  body,
  publishedAt,
  images[]{
    alt,
    caption,
    "asset": image.asset->{ _id, url }
  }
}`;

export const newsletterSlugsQuery = `*[_type == "newsletterIssue" && defined(slug.current)]{ "slug": slug.current }`;

export const facultyQuery = `*[_type == "facultyMember"] | order(sortOrder asc, _createdAt asc) {
  _id, name, title, bio,
  "headshotUrl": headshot.asset->url
}`;

export const boardMembersQuery = `*[_type == "boardMember"] | order(sortOrder asc, _createdAt asc) {
  _id, name, title, bio,
  "headshotUrl": headshot.asset->url
}`;
