import Logo from '../assets/logo.svg'
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { useAuth } from '../auth/AuthProvider';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { loginInstance } from '../connection/loginAxios';
import { useNavigate } from 'react-router-dom';
import { userInstance } from '../connection/userAxios';

interface UserCredentials {
    email: string;
    password: string;
}

const initialValues: UserCredentials = {
    password: "",
    email: ""
};

const validationSchema = Yup.object({
    password: Yup.string()
        .strict(true)
        .min(3, 'Password is too short!')
        .max(32, 'Password is too long!')
        .required("Password is required!"),
    email: Yup.string()
        .strict(true)
        .email("Invalid Email Address!")
        .required("Email Address is required!"),
});

function Login() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        userInstance.get("profile/").then((_) => {
            navigate("/");
        }).catch(() => { });
    }, []);

    const onSubmit = async (values: UserCredentials) => {
        toggleVisibility();

        const response = await loginInstance.post("login/", values);

        login(
            response.data.tokens.access,
            response.data.tokens.refresh
        );
    };

    const formik = useFormik({
        validationSchema,
        initialValues,
        onSubmit
    });

    return (
        <motion.div className="h-screen w-screen bg-[#FAFAFA] flex flex-col items-center justify-center
                                max-xl:landscape:h-[100vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }}

        >
            <Card height="h-[534px]" width="w-[438px]"
                boxShadow="shadow-[0_0_64px_0#00000040]" bgColor="bg-[#FFFFFF]">
                <img src={Logo}
                    className='px-11 xxs:max-xs:px-2 w-full mb-6'
                />
                <form onSubmit={formik.handleSubmit} className='grid grid-rows-3 gap-4 w-full px-6'>
                    <div>
                        <p className='text-lg font-bold text-[#262626]'>
                            E-mail
                        </p>
                        <input className='p-4 mt-2 h-[54px] w-full bg-[#F1F1F1] rounded-[9px]'
                            id="email"
                            type="text"
                            placeholder="@gmail.com"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div id='emailErrorFeedback' className='text-red-600'>
                                {formik.errors.email}
                            </div>
                        ) : null}
                    </div>
                    <div>
                        <p className='text-lg font-bold text-[#262626]'>
                            Password
                        </p>
                        <input className='font-black p-4 mt-2 h-[54px] w-full bg-[#F1F1F1] rounded-[9px]'
                            id="password"
                            type='password'
                            placeholder='****************'
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div id='passwordErrorFeedback' className='text-red-600'>
                                {formik.errors.password}
                            </div>
                        ) : null}
                    </div>
                    <button className='text-lg font-bold h-[54px] bg-[#02274F] text-[#FAFAFA] 
                    rounded-[9px] self-center transition duration-300 ease-in-out hover:scale-105'
                        type="submit"
                    >
                        Sign In
                    </button>
                </form>
            </Card>
        </motion.div >
    )
}


export default Login