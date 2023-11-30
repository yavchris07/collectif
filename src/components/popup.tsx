import React from 'react'

function Popup(props:any) {
  return (props.trigger)?(
    <div className='popup'>
        <div className='popup-inner'>
            <button>X</button>
            { props.children }
        </div>
    </div>
  ):(<div>{}</div>);
}

export default Popup