import {useAppSelector} from "../../app/hooks";
import {SubmitHandler, useForm} from "react-hook-form";
import {selectCartItems} from "../../features/cart/cartSlice";
import s from './OrderForm.module.css'

export const OrderForm = () => {
    const items = useAppSelector(selectCartItems);
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => {
        const orderData = JSON.stringify({
            customerData: data,
            cart: items
        })
        console.log(orderData);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.orderForm}>
            <label>First Name</label>
            <input {...register('firstName', {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i
            })} />
            {errors?.firstName?.type === "required" && <p>This field is required</p>}
            {errors?.firstName?.type === "maxLength" && (
                <p>First name cannot exceed 20 characters</p>
            )}
            {errors?.firstName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
            )}
            <label>Last Name</label>
            <input {...register('lastName', {
                required: true,
                maxLength: 70,
                pattern: /^[A-Za-z]+$/i
            })} />
            {errors?.lastName?.type === "required" && <p>This field is required</p>}
            {errors?.lastName?.type === "maxLength" && (
                <p>Last name cannot exceed 70 characters</p>
            )}
            {errors?.lastName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
            )}
            <label>Address</label>
            <input {...register('address', {required: true, maxLength: 200})} />
            {errors?.address?.type === "required" && <p>This field is required</p>}
            {errors?.address?.type === "maxLength" && (
                <p>Address cannot exceed 200 characters</p>
            )}
            <label>Phone</label>
            <input {...register('phone', {
                required: true,
                maxLength: 13,
                pattern: /^\d+$/
            })} />
            {errors?.phone?.type === "required" && <p>This field is required</p>}
            {errors?.phone?.type === "pattern" && (
                <p>Digits only</p>
            )}
            <input type='submit'/>
        </form>
    )
}

interface IFormInput {
    firstName: string
    lastName: string
    address: string
    phone: number
}
