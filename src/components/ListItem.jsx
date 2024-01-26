import React from 'react'

function ListItem(props) {

    const { icon: Icon, href } = props;

  return (
    
        <li>
            <a target="_blank" rel="noreferrer" href={props.href}>
                 <Icon size={80}/>
            </a>
        </li>
    
  )

}

export default ListItem