import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
  const {t} = useTranslation();
  return (
    <div className={classNames(styles.Navbar)}>
      <div className={classNames(styles.links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(styles.mainLink)} to="/">
          {t('Главная')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('О сайте')}</AppLink>
      </div>
    </div>
  );
};
