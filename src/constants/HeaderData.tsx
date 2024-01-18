export interface headerTabsDetails {
  name: string;
  navigateTo: string;
}

export const headerTabs: headerTabsDetails[] = [
  {
    name: "Home",
    navigateTo: "/",
  },
  {
    name: "Project",
    navigateTo: "/project",
  },
  {
    name: "Contact",
    navigateTo: "/contact",
  },
];
