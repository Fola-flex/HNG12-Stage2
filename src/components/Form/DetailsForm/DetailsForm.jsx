import React, { useContext, useRef, useState } from "react";
import { FormButton, FormTitle } from "../shared";
import "../shared/form.css";
import "./detailsform.css";
import { StepContext } from "../../../Context";
import { download, mail, ticket_reg } from "../../../assets";
import { useFormContext } from "react-hook-form";

const DetailsForm = () => {    
    const { handlePreviousStep, handleNextStep } = useContext(StepContext);    
    const fileInputRef = useRef(null);
    const { register, setValue, watch, handleSubmit, formState: { errors } } = useFormContext();
    const file = watch("file");
    const filePreview = watch("filePreview"); 

    const selectFiles = () => {
        fileInputRef.current.click();
    };

    const onFileSelect = (event) => {
        const files = event.target.files;
        console.log(files);
        if (files[0]) {
            setValue("file", files[0]);
            setValue("filePreview", URL.createObjectURL(files[0]));
        }
    };

    const onDragOver = (event) => {
        event.preventDefault()
        setIsDragging(true)
        event.dataTransfer.dropEffect = "copy";
    }

    const onDragLeave = (event) => {
        event.preventDefault();
        setIsDragging(false);
    }

    const onDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;
        if (files[0]) {
            setValue("file", files[0]);
            setValue("filePreview", URL.createObjectURL(files[0]));
        }
    }

    return (
        <>
            <div className="show_header">
                <FormTitle title="Attendee Details" />
            </div>
            <fieldset className="form_fieldset">
                <div className="show_second_header">
                    <FormTitle title="Attendee Details" />
                </div>
                <div className="form_image_upload">
                    <div className="form_fields">
                        <label htmlFor="file">Upload Profile Photo</label>
                        <div
                            className="image_upload_container"
                            onDragOver={onDragOver}
                            onDragLeave={onDragLeave}
                            onDrop={onDrop}
                        >
                            <input
                                {...register("file", { required: "Please upload a file", onChange: (event) => onFileSelect(event) })}
                                type="file"
                                id="file"
                                name="file"
                                className="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={onFileSelect}
                            />
                            <div
                                className="image_dropbox"
                                role="button"
                                onClick={selectFiles}
                            >
                                {filePreview ? (
                                    <img
                                        className="user_avatar"
                                        src={filePreview}
                                        alt="User Avatar"
                                    />
                                ) : (
                                    <></>
                                )}
                                <div className="image_upload_text">
                                    <div className="icon">
                                        <img
                                            src={download}
                                            alt="Download icon"
                                        />
                                    </div>
                                    <div className="text">
                                        <p>Drag & drop or click to upload</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {errors.file && <p className="error">{errors.file.message}</p>}
                <div className="form_fields">
                    <label htmlFor="name">Enter your name</label>
                    <input {...register("name", { required: "Please put in your name" })} type="text" id="name" name="name" />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>
                <div className="form_fields">
                    <label htmlFor="email">Enter your email*</label>
                    <div className="email_container">
                        <input {...register("email", { required: "Please put in your email" })} id="email" type="email" name="email" />
                        <img src={mail} alt="Mail icon" />
                    </div>
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>
                <div className="form_fields">
                    <label htmlFor="textarea">About the project</label>
                    <textarea
                        {...register("textarea", { required: "This field is required" })}
                        type="textarea"
                        name="textarea"
                        id="textarea"
                        placeholder="About project"
                    ></textarea>
                    {errors.textarea && <p className="error">{errors.textarea.message}</p>}
                </div>
                <div className="form_details_buttons">
                    <FormButton
                        background="transparent"
                        color="#24A0B5"
                        text="Back"
                        handleClick={handlePreviousStep}
                    />
                    <FormButton
                        background="#24A0B5"
                        color="#FFFFFF"
                        text="Get My Free Ticket"
                        handleClick={handleSubmit((data) => {
                            console.log("Form Data:", data);
                            handleNextStep();} )}
                    />
                </div>
            </fieldset>
        </>
    );
};

export default DetailsForm;
