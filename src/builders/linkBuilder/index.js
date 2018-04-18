import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => <Link to={props.to} key={props.text}>{props.text}</Link>;