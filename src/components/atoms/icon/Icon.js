import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

const Icons = (props) => {
    return (
        <Icon name={props.name} color={props.color} size={props.size} />
    );
};

export default Icons;