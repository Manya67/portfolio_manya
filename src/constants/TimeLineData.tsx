export interface boxProps {
  heading: string;
}
export interface boxTimeline {
  name: string;
  date: string;
  active: boolean;
}
export const workExpTabs: boxTimeline[] = [
  {
    name: "Kursha",
    date: "May 23 - July 23",
    active: true,
  },
  {
    name: "Kursha",
    date: "May 23 - July 23",
    active: false,
  },
  {
    name: "Kursha",
    date: "May 23 - July 23",
    active: false,
  },
  {
    name: "Kursha",
    date: "May 23 - July 23",
    active: false,
  },
];
export const educationTabs: boxTimeline[] = [
  {
    name: "JEC",
    date: "May 23 - July 23",
    active: true,
  },
  {
    name: "NSSS",
    date: "May 23 - July 23",
    active: false,
  },
];
