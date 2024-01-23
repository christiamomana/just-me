import { SvgIconComponent } from "@mui/icons-material";

export const LinkToSocial = ({ Icon }: { Icon: SvgIconComponent }) => {
  return (
    <a
      className="justify-center rounded-xl text-sm font-semibold py-3 px-4 bg-slate-900 text-green-400 hover:bg-slate-700"
      href="/components"
    >
      <span>
        <Icon />
      </span>
    </a>
  );
};
