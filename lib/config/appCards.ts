import { AppCard } from "../models/AppCard";

export const appCards: AppCard[] = [
  new AppCard(
    1,
    "TripBook: Country Tracker",
    "A beautiful, private space to document your journey across the globe, turning your past adventures into a stunning visual atlas.",
    "/tripbook-cover.png",
    "TripBook iOS app screenshots",
    "/tripbook",
    "/tripbook-icon.svg",
  ),
  new AppCard(
    2,
    "Overlap: What to Watch",
    "Find the Overlap between your friends' tastes and unlock personalized Movie and TV Show recommendations. Coming soon.",
    "/overlap-cover.png",
    "Overlap App Cover Image",
    "/overlap",
    "/overlap-icon.svg",
  ),
  new AppCard(
    3,
    "More Apps Coming Soon",
    "A new collection of thoughtfully designed iOS experiences is in development.",
    "/future.png",
    "Future apps preview image",
  ),
];
