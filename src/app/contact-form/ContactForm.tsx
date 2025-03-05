"use client";

import CodedBy from "@/components/CodedBy";
import { CircleCheck } from "lucide-react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  queryType: "general" | "support" | "";
  message: string;
  consent: boolean;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  queryType?: string;
  message?: string;
  consent?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked =
      target instanceof HTMLInputElement && type === "checkbox"
        ? target.checked
        : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: checked !== undefined ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.queryType) newErrors.queryType = "Please select a query type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.consent)
      newErrors.consent =
        "To submit this form, please consent to being contacted";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted Successfully!", formData);
      toast.success(
        <div className="bg-teal-950/90 text-green-lighter p-5 rounded-lg space-y-3">
          <div className="flex gap-3">
            <CircleCheck strokeWidth={1.5} />
            <h3 className="font-semibold tracking-wider">Message Send!</h3>
          </div>
          <p className="text-xs">
            Thanks for completing the form. We&apos;ll be in touch soon!
          </p>
        </div>
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        consent: false,
      });
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className="contact-form bg-green-lighter w-full min-h-svh flex flex-col justify-center items-center px-2 py-6">
      <Toaster position="top-center" />
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-8 w-full max-w-2xl rounded-2xl"
      >
        <h2 className="text-3xl font-semibold mb-4 ">Contact Us</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <InputField
            label="First Name"
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <InputField
            label="Last Name"
            required
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>
        <InputField
          label="Email Address"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
          <label htmlFor="queryType" className="sm:col-span-2">
            Query Type <span className="text-green-medium">*</span>
          </label>

          <label
            className={`flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-lg cursor-pointer transition-colors ${
              formData.queryType === "general"
                ? "bg-green-medium/15 border-green-medium"
                : "bg-white"
            }`}
          >
            <input
              name="queryType"
              type="radio"
              value="general"
              checked={formData.queryType === "general"}
              onChange={handleChange}
              className="accent-green-medium w-4 h-4"
            />
            General Enquiry
          </label>

          <label
            className={`flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-lg cursor-pointer transition-colors ${
              formData.queryType === "support"
                ? "bg-green-medium/15 border-green-medium"
                : "bg-white"
            }`}
          >
            <input
              name="queryType"
              type="radio"
              value="support"
              checked={formData.queryType === "support"}
              onChange={handleChange}
              className="accent-green-medium w-4 h-4"
            />
            Support Request
          </label>
        </div>
        {errors.queryType && (
          <p className="text-red-500 text-sm px-2">{errors.queryType}</p>
        )}

        <InputField
          label="Message"
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          textarea
          error={errors.message}
        />
        <div className="flex gap-4">
          <input
            name="consent"
            id="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={handleChange}
            className="w-4 h-4 accent-green-medium mt-1"
          />
          <label htmlFor="consent" className="cursor-pointer w-fit">
            I consent to being contacted by the team *
          </label>
        </div>
        {errors.consent && (
          <p className="text-red-500 text-sm pl-8 -mt-4">{errors.consent}</p>
        )}
        <button
          type="submit"
          className="w-full bg-green-medium text-white p-2 rounded border-2 border-green-medium hover:bg-green-lighter active:bg-green-lighter hover:text-green-medium active:text-green-medium cursor-pointer duration-200 ease-in-out"
        >
          Submit
        </button>
      </form>
      <div className="flex py-4 text-center text-xs">
      <CodedBy />
      </div>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  required: boolean;
  type?: string;
  name: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textarea?: boolean;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  required,
  type = "text",
  name,
  value,
  onChange,
  textarea = false,
  error,
}) => {
  return (
    <div>
      <label htmlFor={name}>
        {label} {required && <span className="text-green-medium">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          className={`border py-2 px-4 focus:outline-none rounded-lg w-full mt-1 resize-none ${
            error
              ? "border-red"
              : "border-gray-300 focus:border-green-medium hover:border-green-medium"
          }`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={`border py-2 px-4 focus:outline-none rounded-lg w-full mt-1 ${
            error
              ? "border-red"
              : "border-gray-300 focus:border-green-medium hover:border-green-medium"
          }`}
        />
      )}
      {error && <p className="text-red-500 text-sm px-2">{error}</p>}
    </div>
  );
};
