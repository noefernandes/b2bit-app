import Header from "../components/Header"
import Card from "../components/Card"
import ProfilePic from "../assets/profilepic.png"
import { motion } from "framer-motion"
import { useAuth } from "../auth/AuthProvider"
import { useEffect, useState } from "react"
import { userInstance } from "../connection/userAxios"

function Home() {
    const { logout } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleLogout = () => {
        logout();
    };

    useEffect(() => {
        userInstance.get("profile/").then((response) => {
            setName(response.data.name);
            setEmail(response.data.email);
        })
    }, [])

    return (
        <motion.div className="w-screen h-screen bg-[#F1F5F9] flex flex-col max-xl:landscape:h-[100vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }}
        >
            <Header>
                <button
                    className="text-lg font-bold h-[44px] w-[272px] bg-[#02274F]
                            text-[#FAFAFA] rounded-[9px] self-end mr-10 
                            xxs:max-xs:w-4/5 xxs:max-md:mr-0 xxs:max-md:self-center"
                    onMouseUp={handleLogout}
                >
                    Logout
                </button>
            </Header>
            <Card height="h-[315px]" width="w-[356px]" margin="m-[150px_0]"
                boxShadow="shadow-[0_2px_10px_0_#0000001A]">
                <div className="w-full">
                    <p className="font-semibold text-center text-[12px]/[12px] text-[#2F2F2F]">
                        Profile picture
                    </p>
                    <img src={ProfilePic} className='mx-auto mt-2 mb-5 h-[56px] w-[58px] rounded-[11px]' />
                    <div className="grid grid-rows-2 gap-2 px-7">
                        <div className="mb-2">
                            <p className='text-[14px]/[12px] inline-block font-normal text-[#262626]'>
                                Your
                                <span className="text-[#2F2F2F] font-bold"> Name</span>
                            </p>
                            <input className='text-[12px]/[12px] font-normal p-4 mt-1 h-[44px] w-full 
                                            bg-[#F1F1F1] rounded-[9px]'
                                type="text"
                                placeholder="Christine James"
                                value={name}
                                readOnly
                            />
                        </div>
                        <div>
                            <p className='text-[14px]/[12px] inline-block font-normal text-[#262626]'>
                                Your
                                <span className="text-[#2F2F2F] font-bold"> E-mail</span>
                            </p>
                            <input className='text-[12px]/[12px] font-normal p-4 mt-1 h-[44px] w-full 
                                            bg-[#F1F1F1] rounded-[9px] focus:outline-none'
                                type='text' placeholder='christinejames@mail.com'
                                value={email}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}

export default Home