import React from "react";
import { ListItem } from "../../../components/ListItem";

const TypeItem = ({data}) => {
    return (
        <ListItem action>
            <h3 className="lead">{data?.typeName}</h3>
        </ListItem>
    )
}

export default React.memo(TypeItem);