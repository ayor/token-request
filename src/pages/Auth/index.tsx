import SamsInput from '../../components/Input';
import CustomButton from '../../components/Buttons';
import CustomNav from '../../components/NavBar';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FORM_DATA } from './data';
import Modal from '@mui/material/Modal';
import classes from '../../components/index.module.css';
import { OtpInput } from '@/src/components/Input/OtpInput';
import Button from '../../components/Buttons';


interface UserData {
    [index: string]: string;
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
}

export default function Auth() {

    const [data, setData] = useState<UserData>({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
    })
    const [otp, setOtp] = useState<string>("")

    const [showError, setShowError] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState<boolean>(false)

    async function handleClick(event: FormEvent) {
        try {
            event?.preventDefault()
            const res = await fetch('/api/token', {
                method: "POST",
                body: JSON.stringify(data)
            }) as Response;
            const response = await res.json();

            if (response.error) {
                return;
            }
            setOpenModal(true);
        } catch (error) {
            setShowError(true);
        }

    }
    async function handleVerify() {
        try {
            const res = await fetch('/api/verify', {
                method: "POST",
                body: otp
            }) as Response;
            const response = await res.json();

            if (response.error) {
                return;
            }
            setOpenModal(true);
        } catch (error) {
            setShowError(true);
        }

    }


    const handleChange = (event: ChangeEvent, type: string) => {
        const target = event.target as HTMLInputElement;
        const value = target.value;

        setData({
            ...data,
            [type]: value
        })
    }

    const handleOtpInputChange = (event: ChangeEvent, index: number) => {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        const otpInputs = document.querySelectorAll(`.${target.className}`) as NodeListOf<HTMLInputElement>
        let newOtp = otp;
        newOtp+= value; 
        let length = newOtp.length; 

            otpInputs[length - 1].value = value; 

            if(otpInputs.length > length){ otpInputs[length].focus(); }

        
        setOtp(newOtp)

    }
    return (
        <div>
            <CustomNav />
            <form onSubmit={handleClick} className="flex bg-white min-h-screen flex-col items-center p-10 w-100">

                {FORM_DATA.map((form_data) => {
                    return (<SamsInput
                        key={form_data.id}
                        showLabel
                        inputClassName={classes.Input}
                        labelClassName={classes.Label}
                        type={form_data.type}
                        value={data[form_data.handleChangeKey]} // 
                        placeholder={form_data.placeholder}
                        label={form_data.label}
                        onChange={(ev: ChangeEvent) => handleChange(ev, form_data.handleChangeKey)}
                    />)
                })}

                <CustomButton title="Send OTP" type="submit" />
            </form>

            <Modal open={openModal} onClose={() => setOpenModal(false)} className={classes.ModalContainer} >
                <div className={classes.ModalContent}>
                    <div className={classes.ModalHeader}>
                    <h3 className={classes.h3}>Verify your OTP</h3>
                    </div>
                    <div className={classes.OtpContainer}>
                        {new Array(6).fill("")
                            .map((element, index) => (
                                <OtpInput inputClassName={`otp-input`} type="text" key={index} value={otp[index]} onChange={(ev) => handleOtpInputChange(ev, index)} />
                            ))
                        }
                    </div>
                    <div className={classes.ModalBtnContainer}>
                        <Button onClick={handleVerify} type='button' title='Verify' />,
                        <Button onClick={() => setOpenModal(false)} type='button' title='Resend' />

                    </div>
                </div>
            </Modal>

        </div>
    )
}

