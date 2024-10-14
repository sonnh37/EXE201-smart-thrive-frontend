"use client";
import React, {useState} from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
import {IconBrandGithub, IconBrandGoogle} from "@tabler/icons-react";
import Register from "@/components/auth/register/register";
import AuthService from "@/services/auth-service";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import {GoogleLogin} from "@react-oauth/google";
import {loginByGoogle} from "@/services/login-by-gmail-service";

export function Login() {
    const {push} = useRouter();
    const handleSuccess = async (response: any) => {
        console.log("check_gg", response);
        const _response = await loginByGoogle(response.credential);
        if (_response.status != 1) {
            return toast.error(_response.message);
        }

        const isLogin = await loginByGoogle(_response);
        if (isLogin) return;
        push("/auth");
    };

    const handleError = () => {
        console.log("Google login failed");
    };

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const login = async () => {
            if (username && password) {
                const result = await AuthService.login(username, password);
                if (result.data.status != -2) {
                    const decodeResult = await AuthService.decodeToken(
                        result.data.data.token
                    );
                    console.log(decodeResult);
                    localStorage.setItem("accessToken", result.data.data.token);
                    localStorage.setItem("userId", decodeResult.data.data.id);
                    localStorage.setItem("userName", decodeResult.data.data.name);
                    localStorage.setItem("role", decodeResult.data.data.role);
                    // const decoded = await jwtDecode<CustomJwtPayload>(
                    //   result.data.data.token
                    // );
                    // console.log(decoded);
                    // localStorage.setItem("accessToken", result.data.data.token);
                    // localStorage.setItem("userId", decoded.id);
                    toast.success("Login success !", {
                        richColors: true,
                    });
                    push("/student");
                } else {
                    toast.error("Login fail", {
                        richColors: true,
                    });
                }
            }
        };
        login();
    };

    return (
        <div
            className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
                Chào mừng tới với SmartThrive
            </h2>

            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Tài khoản</Label>
                    <Input
                        id="email"
                        placeholder="projectmayhem@fc.com"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Mật khẩu</Label>
                    <Input
                        id="password"
                        placeholder="••••••••"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Đăng nhập
                    <BottomGradient/>
                </button>

                <div
                    className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"/>

                <div className="flex flex-col space-y-4">
                    <button
                        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="submit"
                    >
                        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
                        <BottomGradient/>
                    </button>
                    <button
                        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="submit"
                    >
                        <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              <GoogleLogin onSuccess={handleSuccess} onError={handleError}/>
            </span>
                        <BottomGradient/>
                    </button>
                </div>
            </form>
            <Register/>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span
                className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"/>
            <span
                className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"/>
        </>
    );
};

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
