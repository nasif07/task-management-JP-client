// import { useFormik } from 'formik';

const AddATask = () => {
    return (
        <></>
        <>
            <Title subHeading={"Add Your Pet"}></Title>
            <div className="flex flex-col mx-auto">
                <form className="flex flex-col" onSubmit={formik.handleSubmit}>

                    <label className="label">
                        <span className="label-text font-medium text-xl">Add Photo</span>
                    </label>
                    <input
                        onChange={(event) => {
                            formik.setFieldValue("image", event.currentTarget.files[0]);
                        }}
                        name="image"
                        accept="image/*"
                        type="file"
                        className="file-input file-input-bordered w-full"
                    />



                    <label className="label">
                        <span className="label-text font-medium text-xl">Pet Name</span>
                    </label>
                    <input
                        required
                        id="petName"
                        className="input input-bordered w-full mb-4"
                        name="petName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.petName}
                    />
                    <label className="label">
                        <span className="label-text font-medium text-xl">Pet Age</span>
                    </label>
                    <input
                        required
                        id="petAge"
                        className="input input-bordered w-full mb-4"
                        name="petAge"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.petAge}
                    />
                    <label className="label">
                        <span className="label-text font-medium text-xl">Pet Location</span>
                    </label>
                    <input
                        required
                        id="petLocation"
                        className="input input-bordered w-full mb-4"
                        name="petLocation"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.petLocation}
                    />
                    <label className="label">
                        <span className="label-text font-medium text-xl">PetCategory</span>
                    </label>
                    <select
                        required name="category" onChange={formik.handleChange}
                        value={formik.values.category} className="select select-bordered w-full mb-4">
                        <option disabled selected>Select</option>
                        <option>dog</option>
                        <option>cet</option>
                        <option>rabbit</option>
                        <option>horse</option>
                    </select>
                    <label className="label">
                        <span className="label-text font-medium text-xl">Short Description</span>
                    </label>
                    <input
                        required
                        id="shortDescription"
                        className="input input-bordered w-full mb-4"
                        name="shortDescription"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.shortDescription}
                    />
                    <label className="label">
                        <span className="label-text font-medium text-xl">Long Description</span>
                    </label>
                    <input
                        required
                        id="longDescription"
                        className="input input-bordered w-full mb-4"
                        name="longDescription"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.longDescription}
                    />




                    <button className="btn btn-outline" type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default AddATask;