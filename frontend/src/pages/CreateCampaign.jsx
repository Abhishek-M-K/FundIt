import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import { ethers } from "ethers";
import { useStateContext } from "../context";
import { checkIfImage } from "../utils";
import Loader from "../components/Loader";

export default function CreateCampaign() {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const { createCampaign } = useStateContext();

  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleFormField = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const addCampaign = async (e) => {
    e.preventDefault();
    console.log(form);
    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setLoading(true);
        await createCampaign({
          ...form,
          target: ethers.utils.parseUnits(form.target, 18),
        });
        setLoading(false);
        setRedirect(true);
      } else {
        alert("Provide valid Img Url");
        setForm({ ...form, image: "" });
      }
    });
  };

  if (redirect) {
    return <Navigate to={"/campaigns"} />;
  }

  return (
    <div className="mt-5 bg-[#1c1c24] text-white flex  justify-center items-center flex-col rounded-lg sm:p-10 p-4">
      {loading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-lg">
        <h1 className="font-epilogue font-semibold sm:text-[25px] text-[18px] leading-[38px]">
          Create A Campaign
        </h1>
      </div>

      <form
        onSubmit={addCampaign}
        className="w-full mt-[65px] flex flex-col gap-4"
      >
        <div className="flex flex-wrap gap-6">
          <FormField
            labelName="Your Name *"
            placeholder="Napolean"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormField("name", e)}
          />

          <FormField
            labelName="Title *"
            placeholder="XYZ"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormField("title", e)}
          />
        </div>

        <FormField
          labelName="Description *"
          placeholder="Describe your campaign"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormField("description", e)}
        />

        <div className="flex flex-wrap gap-6">
          <FormField
            labelName="Target *"
            placeholder="ETH 0.5"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormField("target", e)}
          />

          <FormField
            labelName="Deadline *"
            placeholder="dd/mm/yyyy"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormField("deadline", e)}
          />
        </div>

        <FormField
          labelName="Image *"
          placeholder="Place Img Url"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormField("image", e)}
        />

        <button
          className="text-white bg-blue-700 hover:bg-blue-800 
                focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm 
                px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
                focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
