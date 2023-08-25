import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import styles from './ErrorScreen.module.scss';

interface ErrorScreenProps {
  className?: string;
}

export const ErrorScreen = ({ className }: ErrorScreenProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(styles.ErrorScreen, {}, [className])}>
      <p>
        {t('Произошла непредвиденная ошибка')}
      </p>
      <Button onClick={reloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
