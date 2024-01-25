export interface headerTabsDetails {
  name: string;
  navigateTo: string;
}

export const headerTabs: headerTabsDetails[] = [
  {
    name: "Home",
    navigateTo: "/",
  },
  // {
  //   name: "Skills",
  //   navigateTo: "#skills",
  // },
  // {
  //   name: "Work",
  //   navigateTo: "#work",
  // },
  {
    name: "Project",
    navigateTo: "#projects",
  },
  {
    name: "Contact",
    navigateTo: "#contact",
  },
];
