import React from 'react';
import { useForm } from 'react-hook-form';
import rideImg from '../../assets/agent-pending.png'
const BeRider = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    return (
        <div className='w-11/12 mx-auto'>
            <div className='w-1/2'>
                <h1 className="text-4xl my-5 
font-bold">Be a Rider</h1>
                <p>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Tempore
                    minus beatae cupiditate esse
                    consequuntur nesciunt porro. Corporis,
                    totam sint nobis optio pariatur sit
                    repudiandae ad quae possimus labore,
                    tempore quia culpa dolor exercitationem
                    inventore cupiditate cum sed provident
                    quas tenetur beatae voluptates? Commodi
                    voluptate vel similique vitae odio non.
                    Blanditiis.
                </p>
            </div>
            <div>
                
                <div className='flex gap-2 items-center justify-between my-10'>
                    <form >
                        <h1 className="text-2xl font-bold my-4">Tell Us About yourself</h1>
                        <div className='flex gap-3'>
                            <div className='w-1/2 my-1'>
                                <label className="label text-black font-semibold">Your Name</label>
                                <input type="text" {...register('name', { required: true })} className="input" placeholder="Your Name" />
                            </div>
                            <div className='w-1/2 my-1'>
                                <label className="label text-black font-semibold">Your Age</label>
                                <input type="number" {...register('age', { required: true })} className="input" placeholder="Your Age" />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='w-1/2 my-1'>
                                <label className="label text-black font-semibold">Your Email</label>
                                <input type="email" {...register('email', { required: true })} className="input" placeholder="Your Email" />
                            </div>
                            <div className='w-1/2 my-1'>
                                <label className="label text-black font-semibold">Your Region</label>
                                <input type="text" {...register('region', { required: true })} className="input" placeholder="Your Region" />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='w-1/2 my-1'>
                                <label className="label text-black font-semibold">NID No</label>
                                <input type="text" {...register('name', { required: true })} className="input" placeholder="Your Name" />
                            </div>
                            <div className='w-1/2 my-1'>
                                <label className="label text-black font-semibold">Your Age</label>
                                <input type="number" {...register('age', { required: true })} className="input" placeholder="Your Age" />
                            </div>
                        </div>
                    </form>
                    <div >
                        <img src={rideImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeRider;