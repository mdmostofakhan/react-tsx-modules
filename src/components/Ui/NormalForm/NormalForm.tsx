import { useForm } from "react-hook-form";
import cn from "../../../utils/cn";


const NormalForm = () => {

    const {register, handleSubmit} = useForm();

   const onSubmit = (data) =>{
    console.log(data)
   }

   const double = false;

    return (
       <form  onSubmit={handleSubmit(onSubmit)}
         className={cn("border border-red-600 w-full p-4 mx-auto", {
             'max-w-5xl': double,
             'max-w-md': !double,
         })}>
        <div className={cn("border border-blue-500 grid-cols-1 grid justify-items-center gap-5",
         {
            'md:grid-cols-2': double,
        })}>
            <div className="w-full max-w-md">
                <label  className="block mb-2" htmlFor="name">Name</label>
                <input className="w-full border border-gray-400 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                 type="text"
                 id="name"
                  {...register("name")} />
            </div>
            <div className="w-full max-w-md">
                <label className="block mb-2" htmlFor="email">Email</label>
                <input className="w-full border border-gray-500 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                 type="email" id="email"
                  {...register("email")} />
            </div>
            <div className="w-full max-w-md">
                <label className="block mb-2"  htmlFor="password">password</label>
                <input className="w-full" type="text" id="password" {...register("password")} />
            </div>
        </div>
        
       </form>
    )
}

export default NormalForm;
