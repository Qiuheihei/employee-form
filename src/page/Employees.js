import React from 'react';
import PageHeader from '../PageHeader';
import { Paper,makeStyles } from '@material-ui/core';
import EmployeeForm from '../EmployeesForm';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Employees() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="Employer Form"
            />
            <Paper className={classes.pageContent}>
                <EmployeeForm />
            </Paper>
        </>
    )
}
