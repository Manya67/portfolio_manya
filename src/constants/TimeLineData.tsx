export interface boxProps {
  heading: string;
}
export interface boxTimeline {
  name: string;
  date: string;
  desc: string;
  active: boolean;
}
export const workExpTabs: boxTimeline[] = [
  {
    name: "Kursha",
    date: "May 23 - July 23",
    desc: "Frontend developer Intern",
    active: false,
  },
];
export const educationTabs: boxTimeline[] = [
  {
    name: "Jabalpur Engineering College",
    date: "July 20 - Present",
    desc: "Btech - Computer Science",
    active: true,
  },
  {
    name: "Nachiketa Senior Secondary School",
    date: " - March 20",
    desc: "Schooling",
    active: false,
  },
];
