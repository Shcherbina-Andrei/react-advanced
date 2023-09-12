import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.Navbar)}>
      <div className={classNames(styles.links)}>
        /
      </div>
    </div>
  );
};
