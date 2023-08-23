import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/light-theme.svg';
import DarkIcon from 'shared/assets/icons/dark-theme.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
    >
      {
        theme === Theme.LIGHT
          ? <LightIcon color="#0aff0a" width={30} height={30} />
          : <DarkIcon color="#102355" width={30} height={30} />
      }
    </Button>
  );
};
