import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoDocument } from "react-icons/io5";

export interface linkDetails {
  name: string;
  link: string;
}
export const linksTabs = [
  {
    name: "Resume",
    link: "https://drive.google.com/drive/folders/1cZAuxu6KEuy9jdegU89Ju3qjEbBNFv0W?usp=drive_link",
  },
  {
    name: "LinkedIN",
    link: "https://www.linkedin.com/in/manya-jain62002/",
  },
  {
    name: "GitHub",
    link: "https://github.com/Manya67",
  },
  {
    name: "Leetcode",
    link: "https://leetcode.com/manyajain62002/",
  },
];

export const link_map: any = {
  Resume: IoDocument,
  LinkedIN: FaLinkedinIn,
  GitHub: TbBrandGithubFilled,
  Leetcode: SiLeetcode,
};
