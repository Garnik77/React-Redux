import React from 'react';
import {useState,useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {
  let [editMode,setEditMode] = useState(false);//hook
  let [status,setStatus] = useState(props.status);

  useEffect( () =>{//hook ամեն նոր պրոպս գալուց նոր փոխվում է
      setStatus(props.status)
  },[props.status]);

  const activateEditMode = () =>{
      setEditMode(true);
  }

   const deactivateEditMode = () => {
       setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) =>{
       setStatus(e.currentTarget.value);
    }

    return (
        <div>
            { !editMode &&
            <div>
             <b>Status:</b>   <span onDoubleClick={activateEditMode}>{props.status || "====="} </span>
            </div>
            }
            { editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;