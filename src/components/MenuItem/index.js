import React from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import { LinkArea, LinkIcon } from './styles';

function MenuItem({title, icon, link}) {
   const history = useHistory();
   const location = useLocation();

   let isActive = location.pathname == link;
    
   const HandleLinkClick = (e) => {
      e.preventDefault();
      history.push(link)
   }

  return (
    <LinkArea data-tip={title} data-for='tip-right' active={isActive} href={link} onClick={HandleLinkClick}>
        <LinkIcon src={icon} />
    </LinkArea>
  );
}

export default MenuItem;