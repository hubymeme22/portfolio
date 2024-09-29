import { MenuButtonProps } from "../../interfaces/props";

const MenuButton: React.FC<MenuButtonProps> = ({
  active,
  label,
  style,
  to,
  onClick,
}) => {
  return (
    <span
      style={style}
      className={`menuButton ${active ? "menuButtonActive" : ""}`}
      onClick={
        to
          ? () => {
              window.location.href = to;
            }
          : onClick
      }
    >
      {label}
    </span>
  );
};

export default MenuButton;
