import React from 'react'
import {LoginForm} from "@/components/LoginForm";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import logo from "@/public/foundation_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"

function Login() {
    return (
        <div className="flex-center w-full h-screen">
            <div>
                <Card className="w-75  border-primary">
                    <CardHeader>
                        <CardTitle className="flex flex-col items-center gap-2">
                            <Image src={logo} alt="logo" width="50" height="50"/>
                            <h1 className="text-center">EAS Construction</h1>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <LoginForm />
                    </CardContent>
                </Card>
            </div>

            <div></div>
        </div>
    )
}

export default Login
