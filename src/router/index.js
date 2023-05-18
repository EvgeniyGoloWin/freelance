import React from "react";
import {createBrowserRouter} from 'react-router-dom';
import {Section} from "../page/section/Section";
import {Table} from "../page/table/Table";
import {Home} from "../page/home/Home";
import {Input} from "../page/input/input";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/table',
        element: <Table/>,
    },
    {
        path: '/input',
        element: <Input/>,
    },
    {
        path: '/section',
        element: <Section/>,
    }
]);