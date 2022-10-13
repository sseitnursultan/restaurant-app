import React from 'react'
import {ChevronRightRounded} from "@mui/icons-material";

const SubMenuContainer = (props) => {
    return <div className={'subMenuContainer'}>
        <h3>{props.name}</h3>
        <div className={'viewAll'}>
            <p>View All</p>
            <i><ChevronRightRounded/></i>
        </div>
    </div>
}

export default SubMenuContainer