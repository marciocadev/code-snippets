import { BsSun, BsMoonStars } from 'react-icons/bs';
import { useDarkMode } from '../../hooks/UseDarkMode';

export const ThemeIconOld = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <BsSun size='20' className='theme-icon-old' />
      ) : (
        <BsMoonStars size='20' className='theme-icon-old' />
      )}
    </span>
  );
}