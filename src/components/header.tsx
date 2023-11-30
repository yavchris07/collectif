import React, { useCallback, useState, useRef, useContext, FC, HtmlHTMLAttributes } from 'react';
import { LangContext } from '../context/lang';

interface HeaderProps {
  fixed?: boolean;
  transparent?: boolean;
}

const Header: FC<HeaderProps> = ({ fixed, transparent }:HeaderProps) => {
  const { state: { language}, dispatch: { setLanguage, translate } } = useContext(LangContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownEl = useRef<HTMLUListElement>(null);

  let headerClass = 'header';

  if(fixed) {
    headerClass += ' header--fixed';
  }

  if(transparent) {
    headerClass += ' header--transparent';
  }

  const handleClickOutside = useCallback((e:any) => {
    if(showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
      setShowDropdown(true);
    }
  }, [showDropdown, setShowDropdown, dropdownEl]);

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [handleClickOutside]);

  const chooseLanguageHandler = (value: string) => {
    setShowDropdown(false);
    setLanguage(value);
  }

  return(
    <header className={headerClass}>
        <div className="header__nav_lang">
            <p className="selected" onClick={() => setShowDropdown(!showDropdown)}>{language}</p>
            {showDropdown && <ul className="dropdown" ref={dropdownEl}>
                <li onClick={() => chooseLanguageHandler('FR')}>FR</li>
                <li onClick={() => chooseLanguageHandler('EN')}>EN</li> 
              </ul>
            }
        </div>
    </header>
  );
}

export default Header;