"use client"

import {Header1Mono} from "@/components/headers";
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import {parseEmail, parseString} from "@/src/auth/firebaseHelpers";
import {ZodError} from "zod";
import {FirebaseError} from "@firebase/app";
import {PageWrapper} from "@/components/pagewrapper";
import * as fb from "@/src/auth/firebaseFunctions"
import LoginButtons from "@/src/app/admin/login/loginbuttons";

export default function AdminLogin() {
    // Redirection Controller
    const router = useRouter();

    // Errors State
    // Keeps easy track of errors, all within one state to prevent excessive refreshes
    const [info, setInfo] = useState({
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
        loginError: "",
    });

    /**
     * Checks a given email to ensure that it matches all the requirements.
     * Updates the given states in the page to reflect any errors.
     *
     * @param email
     */
    function emailInputChange(email: string) {
        try {
            parseEmail(email);
            setInfo((prevInfo) => ({ ...prevInfo, email: email, emailError: "" }));
        } catch (e) {
            if (e instanceof ZodError) {
                setInfo((prevInfo) => ({
                    ...prevInfo,
                    email: email,
                    emailError: e.issues[0].message,
                }));
            }
        }
    }

    /**
     * Checks a given password to ensure that it matches all the requirements.
     * Updates the given states in the page to reflect any errors.
     *
     * @param password
     */
    function passwordInputChange(password: string) {
        try {
            parseString(password);
            setInfo((prevInfo) => ({
                ...prevInfo,
                password: password,
                passwordError: "",
            }));
        } catch (e) {
            if (e instanceof ZodError) {
                setInfo((prevInfo) => ({
                    ...prevInfo,
                    password: password,
                    passwordError: e.issues[0].message,
                }));
            }
        }
    }

    /**
     * Handles email & password login, verifying input and updating states accordingly.
     * Propagates an error back to the user if something wrong happens.
     *
     * @param {React.SyntheticEvent} e the event from the HTML form
     */
    async function handleLogin(e: React.SyntheticEvent) {
        e.preventDefault();
        try {
            setInfo((prevInfo) => ({ ...prevInfo, loginError: "" }));
            await fb.signInUser(info.email, info.password);
            router.push("/");
        } catch (e) {
            if (e instanceof FirebaseError) {
                setInfo((prevInfo) => ({
                    ...prevInfo,
                    loginError:
                        "Error: cannot verify that combination of email and password.",
                }));
            } else {
                console.error(e);
                setInfo((prevInfo) => ({
                    ...prevInfo,
                    loginError: "Error: Something went wrong. :(",
                }));
            }
        }
    }

    return <PageWrapper>
        <div className="h-screen flex items-center">
            <div className="h-min m-auto w-1/3">
                <Header1Mono>Log In</Header1Mono>
                <LoginButtons />
            </div>
        </div>
    </PageWrapper>
}