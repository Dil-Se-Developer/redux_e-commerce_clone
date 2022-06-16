import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';


export function ProtectedLogin() {
    const isLoggedOut = useSelector((state) => state.loginStatus.isLoggedOut)
    // console.log(isLoggedOut);
    return (
        isLoggedOut ? <Outlet /> : <Navigate to='/' />
    )
}

export function ProtectedHome() {
    const isLoggedIn = useSelector((state) => state.loginStatus.isLoggedIn)
    // console.log(isLoggedIn);
    return (
        isLoggedIn ? <Outlet /> : <Navigate to='/login' />
    )
}
