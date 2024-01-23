import { SvgIconProps } from "@material-ui/core/SvgIcon";

export const LinkToSocial = ({
  Icon,
}: {
  Icon: React.ComponentType<SvgIconProps>;
}) => {
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
