import {  FieldValues, useForm } from "react-hook-form";
import cn from "../../../utils/cn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpSchema = z.object({
    name: z.string().min(1, {message: 'Name is required'}),
    email: z.string().email().min(1, {message: 'Email is required'}),
    password: z.string().min(8, "password too short")
})

type TNormalForm = z.infer<typeof SignUpSchema>

const NormalForm = () => {

    const {register, handleSubmit, formState : {errors}, } = useForm<TNormalForm>({
       resolver : zodResolver(SignUpSchema)
    });




   const onSubmit = (data : FieldValues) =>{
    console.log(data)
   }

   const double = true ;

    return (
       <form  onSubmit={handleSubmit(onSubmit)}
         className={cn("border border-gray-400 rounded-lg shadow-sm mt-6 w-full p-4 mx-auto", {
             'max-w-5xl': double,
             'max-w-md': !double,
         })}>
        <div className={cn(" grid-cols-1 grid justify-items-center gap-5", {
            'md:grid-cols-2': double,
        })}>
            <div className="w-full max-w-md">
                <label  className="block mb-2" htmlFor="name">Name</label>
                <input className="w-full border border-gray-400 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                 type="text"
                 id="name"
                  {...register("name", {required: true})} />
                  {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
            </div>
            <div className="w-full max-w-md">
                <label className="block mb-2" htmlFor="email">Email</label>
                <input className="w-full"
                 type="email"
                  id="email"
                  {...register("email")} />
                  {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
            </div>
            <div className="w-full max-w-md"  >
                <label className="block mb-2"  htmlFor="password">password</label>
                <input className="w-full mb-4"
                 type="password"
                 id="password"
                 {...register("password",{minLength: 8})} />
                  {errors.password && <span className="text-xs text-red-500">{errors.password.message}</span>}
            </div>
        </div>

        <div className={cn(" grid-cols-1 grid justify-items-center gap-5 my-6", {
            'md:grid-cols-2': double,
        })}>
            <div className=" w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
            <button className=" w-full md:w-fit px-8 py-2 bg-blue-600  text-white ">
                Submit
           </button>
            </div>
            
        </div>
       </form>
    )
}

export default NormalForm;
