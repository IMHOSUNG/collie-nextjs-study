"use client"
import { FieldErrors, useForm } from "react-hook-form"
import { useState, useEffect } from 'react'

interface HookFormTypes {
    title: string
    content: string
}

const Pages = () => {

    const { register, handleSubmit, reset } = useForm<HookFormTypes>();
    const onInValid = (errors: FieldErrors) => console.log(errors);
    const onValid = (data: HookFormTypes) => {
        console.log(data);
        console.log(process.env.NEXT_PUBLIC_SERVER_PATH)
        reset()
        alert(data.content)
    }

    // useEffect(()=>{
    //     fetch(process.env.NEXT_PUBLIC_SERVER_PATH+"/api/v1/post/question")
    // },[])

    return (
        <>
            <div className="flex">
                <form onSubmit={handleSubmit(onValid, onInValid)}>
                    <div>
                        <input
                            {...register("title", { required: true, maxLength: 16 })}
                            placeholder="Write Question Title"
                        />
                    </div>

                    <div>
                        <textarea
                            {...register("content", { required: true, minLength: 8, maxLength: 400 })}
                            placeholder="Write Question Content"
                        />
                    </div>

                    <button type="submit" className="bg-gray-300">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Pages