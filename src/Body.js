import React, { useState } from 'react';
import { styled } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StaffListUpload from './StaffListUpload';
import StaffList from './StaffList';
import StaffStatus from './StaffStatus';
import Schedule from './Schedule';
import TopNavBar from './TopNavBar';

const BodyRouter = styled(Router)({
    content: {
        display: 'flex',
        flexGrow: 1,
        padding: theme.spacing.unit * 4,
        justifyContent: 'center',
    },
    toolbar: theme.mixins.toolbar,
  });