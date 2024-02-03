"use client"

import React, { useEffect } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function LoginButtons() {
    const [emailClicked, setEmailClicked] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const validateEmail = (value: string) => value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    const invalidEmail = React.useMemo(
        () => 
        {
            if (!emailClicked) return false;
            return (validateEmail(email)) ? false : true;
        }, [email, emailClicked]
    );

    const [passwordClicked, setPasswordClicked] = React.useState(false);
    const [password, setPassword] = React.useState("");
    const invalidPassword = React.useMemo(
        () =>
        {
            return ((password === "") && passwordClicked) ? true : false;
        }, [password, passwordClicked]
    );
    
    return (
        <div className="m-4 flex gap-2 flex-col">
            <Input 
                value={email}
                isInvalid={invalidEmail}
                onValueChange={(value:string) => {
                    setEmail(value);
                    setEmailClicked(true);
                }}
                color={invalidEmail ? "danger" : "default"}
                errorMessage={invalidEmail && "Please enter a valid email"}
                isRequired 
                variant="bordered" 
                label="Email" 
                type="email" />
            <Input 
                value={password}
                isInvalid={invalidPassword}
                onValueChange={(value:string) => {
                    setPassword(value);
                    setPasswordClicked(true);
                }}
                color={invalidPassword ? "danger" : "default"}
                errorMessage={invalidPassword && "Please enter a password"}
                isRequired 
                variant="bordered" 
                label="Password" 
                type="password"/>
            <div>
                {/* Error message space for API calls */}
            </div>
            <Button className="bg-primary-700 dark:bg-primary-500">Sign In</Button>
        </div>
    )
}