import { link_map, linksTabs } from "../../constants/LinkData";

const Links = () => {
  return (
    <div className="pt-5 w-full flex items-center justify-start gap-5">
      {linksTabs.map(({ name, link }, index) => {
        const LinkLogo = link_map[name];
        return (
          <span
            key={index}
            className="h-[2.85em] w-[2.85em] bg-cream rounded-full flex justify-center items-center"
          >
            <LinkLogo size="1.85em" color="#0b2545" />
          </span>
        );
      })}
    </div>
  );
};

export default Links;
