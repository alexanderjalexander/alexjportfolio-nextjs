"use client"

import React, {useState} from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {parseEmail, parseString} from "@/src/auth/firebaseHelpers";
import {signInUser} from "@/src/auth/firebaseFunctions";
import {useRouter} from "next/navigation";
import {FirebaseError} from "@firebase/app";
import {ZodError} from "zod";

export default function LoginButtons() {

    const router = useRouter();

    const [info, setInfo] = useState({
        email: "",
        emailClicked: false,
        password: "",
        passwordClicked: false,

        invalidEmail: false,
        invalidPassword: false,
        loggingIn: false,
        loginError: ""
    })

    const handleEmailChange = (value: string) => {
        try {
            setInfo({...info, email: value, emailClicked: true, invalidEmail: false})
            parseEmail(info.email);
        } catch (e) {
            if (e instanceof ZodError) {
                setInfo({...info, email: value, emailClicked: true, invalidEmail: true})
            } else {
                Error();
            }
        }
    }

    const handlePasswordChange = (value: string) => {
        try {
            setInfo({...info, password:value, passwordClicked: true, invalidPassword: false})
            parseString(value);
        } catch (e) {
            if (e instanceof ZodError) {
                setInfo({...info, password:value, passwordClicked: true, invalidPassword: true})
            } else {
                Error();
            }
        }
    }

    async function handleLogin(e: React.SyntheticEvent) {
        e.preventDefault();
        try {
            setInfo((prevInfo) => ({ ...prevInfo, loginError: "", loggingIn: true }));
            await signInUser(info.email, info.password);
            router.push("/admin/");
        } catch (e) {
            if (e instanceof FirebaseError) {
                setInfo((prevInfo) => ({
                    ...prevInfo,
                    loginError: "Error: invalid email and password combination.",
                    loggingIn: false,
                }));
            } else {
                console.error(e);
                setInfo((prevInfo) => ({
                    ...prevInfo,
                    loginError: "Error: Something went wrong. :(",
                    loggingIn: false,
                }));
            }
        }
    }

    return (
        <form
            onSubmit={handleLogin}
            className="m-4 flex gap-2 flex-col"
        >
            <Input
                value={info.email}
                isInvalid={info.invalidEmail}
                onChange={(e) => handleEmailChange(e.target.value)}
                color={info.invalidEmail ? "danger" : "default"}
                errorMessage={info.invalidEmail && "Please enter a valid email."}
                isRequired
                variant="bordered"
                label="Email"
                type="email" />
            <Input
                value={info.password}
                isInvalid={info.invalidPassword}
                onChange={(e) => handlePasswordChange(e.target.value)}
                color={info.invalidPassword ? "danger" : "default"}
                errorMessage={info.invalidPassword && "Please enter a password."}
                isRequired
                variant="bordered"
                label="Password"
                type="password"/>
            <div>
                <p className={'text-danger'}>{info.loginError}</p>
            </div>
            <Button
                type={"submit"}
                isLoading={info.loggingIn}
                className="bg-primary-700 dark:bg-primary-500"
            >
                Sign In
            </Button>
        </form>
    )
}