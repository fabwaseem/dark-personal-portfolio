import { SocialLinksData } from "@/lib/data";


const SocialLinks = () => {
  return (
    <div className=" flex gap-2 md:gap-5">
      {SocialLinksData.map((link, index) => (
        <a
          key={index}
          href={link.link}
          target="_blank"
          className="w-8 md:w-10 h-8 md:h-10 border-2 flex items-center justify-center rounded-full text-grey-2 hover:text-foreground transition-colors "
        >
          <link.icon size={15} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
