import axios from 'axios';
import React from 'react';
import { Await } from 'react-router-dom';
import Swal from 'sweetalert2';

const CaseFile = () => {

    const handelCase=async(e)=>{
       
        e.preventDefault()
        const image_hosting_key = 'bf5fd93f65d5d0710adea1df2c70d5e3';
        const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
        const imageField = new FormData();
        imageField.append('image', e.target.photo.files[0]);

        try {
            const imgbbResponse = await axios.post(image_hosting_api, imageField, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

          
            const name = e.target.name.value;
            const caseId = e.target.caseId.value;
            const location = e.target.location.value;
            const photoUrl = imgbbResponse.data.data.url; 

            const caseList = {
                name,
                caseId,
                location,
                photo: photoUrl,
            };

            console.log(caseList);
            axios.post('https://personal123-blond.vercel.app/criminal', caseList)
            .then(response => {
                
                console.log('Data sent successfully:', response.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully added Criminal",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
        } catch (error) {
            console.error('Error uploading image:', error);
        }


        
        
      
    }


    return (
        <div className='bg-[#F4F3F0] p-24  '>
        <h2 className='text-3xl text-center font-bold'>Entity <span className='text-purple-600'>Case File</span></h2>
        <p className='mb-4 text-center'>An "entity case file" typically refers to a comprehensive record or documentation related to a specific entity, such as an individual, organization, or object, that is subject to investigation, analysis, or scrutiny.  </p>
        <form  onSubmit={handelCase}>
            {/* Form row */}
            <div  className='md:flex gap-4'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Criminal Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='name' placeholder="Enter car name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Case-ID</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='caseId' placeholder="Enter price" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Form row */}
            <div className=' md:flex gap-4'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='location' placeholder="Enter location" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Criminal Photo</span>
                    </label>
                    <label className="input-group">

                    <input type="file" name='photo' className="file-input w-full max-w-xs" />
                      
                    </label>
                </div>
            </div>
           
            <button className="btn mt-4 btn-block bg-[#D2B48C]">Add Criminal Details</button>
        </form>
    </div>
    
    );
};

export default CaseFile;