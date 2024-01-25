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
    date: "April 2019 - March 2020",
    desc: "12th Standard",
    active: false,
  },
  {
    name: "Nachiketa Higher Secondary School",
    date: "April 2017 - March 2018",
    desc: "10th Standard",
    active: false,
  },
];
