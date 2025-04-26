import { BLOG_DATA } from "./blog-data";

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  description: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Moody AI',
    description:
      'AI powered mood tracker to help you monitor your emotional patterns.',
    link: 'https:moody-ai.onrender.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'SyncPost',
    description: 'Sync your blog posts across all your social media accounts with AI.',
    link: 'https://sync-post.vercel.app/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
    {
    company: 'DeepReel AI, 🇬🇧',
    title: 'Software Engineer, Full Stack & AI',
    start: 'April 2024',
    end: 'Present',
    link: 'https://deepreel.com',
    description: 'Building the future of AI powered video generation platform. Deepreel helps u generate videos from just a single prompt',
    id: 'work1',
  },
  {
    company: 'Ekarth Ventures, 🇮🇳',
    title: 'Full Stack Software Engr',
    start: 'September 2024',
    end: 'April 2024',
    link: 'https://nahar.om/',
    description: 'lead end to end development of their fintech product',
    id: 'work2',
  },
  {
    company: 'CalmEmail, 🇮🇳',
    title: 'Founder & Head of everything',
    start: 'March 2024',
    end: 'August 2024',
    link: 'https://calmemail.xyz',
    description: 'AI powered email assistant for founders. Grew to 100+ users + won $2.5k worth of OpenAI credits from microsoft.',
    id: 'work3',
  },
  {
    company: 'Buildspace (yc s20 & a16z) 🇺🇸',
    title: 'AI software engr (fellow)',
    start: 'June 2024',
    end: 'August 2024',
    link: 'https://ibelick.com',
    description: 'Selected from amongst 60000 applicants worldwide to work on my ideas.',
    id: 'work4',
  },
  {
    company: 'ScaleVision',
    title: 'Founder',
    start: 'February 2023',
    end: 'November 2024',
    description: 'Started this video prod agency and worked with saas companies in usa/canada.',
    link: 'https://linkedin.com/company/scalevision',
    id: 'work5',
  },
  {
    company: 'SecureSnap',
    title: 'Founder',
    start: 'June 2022',
    end: 'December 2022',
    description: 'Trustpilot but for course creators (this kind of failed)',
    link: 'https://linkedin.com/company/securesnap',
    id: 'work6',
  },
]

export const BLOG_POSTS: BlogPost[] = BLOG_DATA;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/crackedresearcher',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/0xayush1',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ayushfrs',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/zuck',
  },
]

export const EMAIL = 'ayushkv10204@gmail.com'
