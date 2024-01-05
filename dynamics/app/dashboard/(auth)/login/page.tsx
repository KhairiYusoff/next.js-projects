"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Login = () => {

    return (
        <div className={styles.container}>

            <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

            <form  className={styles.form}>
                <input
                    type="text"
                    placeholder="Email"
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className={styles.input}
                />
                <button className={styles.button}>Login</button>
            </form>
            <button
            >
                Login with Google
            </button>
            <span className={styles.or}>- OR -</span>
            <Link className={styles.link} href="/dashboard/register">
                Create new account
            </Link>
        </div>
    );
};

export default Login;