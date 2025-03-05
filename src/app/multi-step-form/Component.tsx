"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Thanks from "./Thanks";
import InputField from "./InputField";
import CodedBy from "@/components/CodedBy";

type BillingType = "monthly" | "yearly";

interface Plan {
  name: string;
  price: { monthly: number; yearly: number };
}

interface Addon {
  name: string;
  price: { monthly: number; yearly: number };
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  plan: string;
  billing: BillingType;
  addons: string[];
}

const steps: string[] = ["Your Info", "Select Plan", "Add-Ons", "Summary"];
const plans: Plan[] = [
  { name: "Arcade", price: { monthly: 9, yearly: 90 } },
  { name: "Advance", price: { monthly: 12, yearly: 120 } },
  { name: "Pro", price: { monthly: 15, yearly: 150 } },
];
const addons: Addon[] = [
  { name: "Online Service", price: { monthly: 1, yearly: 10 } },
  { name: "Large Storage", price: { monthly: 2, yearly: 20 } },
  { name: "Custom Profile", price: { monthly: 2, yearly: 20 } },
];

export default function Home() {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    plan: "Arcade",
    billing: "monthly",
    addons: [],
  });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
  const [confirmed, setConfirmed] = useState(false);

  const validate = () => {
    const newErrors = { name: "", email: "", phone: "" };
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    setErrors(newErrors);
    return !Object.values(newErrors).some((err) => err);
  };

  const handleNext = () => {
    if (step === 0 && !validate()) return;
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    setFormData((prev) => ({ ...prev, [name]: value }));
  
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  
  

  const handleConfirm = () => setConfirmed(true);

  const handleAddonChange = (addon: string) => {
    setFormData((prev) => {
      const newAddons = new Set(prev.addons);
      if (newAddons.has(addon)) {
        newAddons.delete(addon);
      } else {
        newAddons.add(addon);
      }
      return { ...prev, addons: Array.from(newAddons) };
    });
  };
  

  const getTotal = (): number => {
    const plan = plans.find((p) => p.name === formData.plan);
    const totalPlan = plan ? plan.price[formData.billing] : 0;
    const totalAddons = formData.addons.reduce((sum, addon) => {
      const add = addons.find((a) => a.name === addon);
      return sum + (add ? add.price[formData.billing] : 0);
    }, 0);
    return totalPlan + totalAddons;
  };

  return (
    <div className="w-full min-h-screen flex sm:flex-col justify-center sm:items-center px-4 pb-28 sm:py-4">
      <div className="sm:bg-white w-full max-w-4xl pt-28 sm:p-4 rounded-xl sm:rounded-3xl flex items-stretch gap-10 sm:shadow">
        {!confirmed && (
          <div className="sm:w-1/3 bg-[url(/multi-step-form/images/bg-sidebar-mobile.svg)] sm:bg-[url(/multi-step-form/images/bg-sidebar-desktop.svg)] h-auto absolute sm:relative top-0 left-0 right-0 flex justify-center sm:justify-start sm:flex-col sm:space-y-6 py-6 px-6 bg-no-repeat bg-bottom bg-cover sm:rounded-xl min-h-40">
            {steps.map((s, index) => (
              <div key={s} className="flex space-x-3 items-center">
                <div
                  className={`border-2 border-white w-9 h-9 aspect-square rounded-full flex justify-center items-center duration-200 ease-in-out ${
                    index === step
                      ? "bg-white text-balance"
                      : "bg-transparent text-white"
                  }`}
                >
                  {index + 1}
                </div>
                <div className="hidden sm:block">
                  <p className=" text-slate-300 text-xs uppercase text-nowrap">
                    STEP {index + 1}
                  </p>
                  <p className="text-base text-white uppercase text-nowrap">
                    {s}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="w-full sm:w-2/3 rounded-xl sm:max-w-md sm:col-span-2 mx-auto bg-white h-min sm:h-auto z-10 shadow sm:shadow-none space-y-4 py-10 px-6 sm:px-0 sm:pt-10 sm:pb-0 flex flex-col justify-between sm:min-h-[400px]">
          {confirmed ? (
            <Thanks />
          ) : (
            <>
              {step === 0 && (
                <>
                  <h1 className="text-3xl sm:text-4xl font-semibold text-indigo-950">
                    Personal Info
                  </h1>
                  <p className="text-sm text-slate-500">
                    Please provide your name, email address and phone number.
                  </p>
                  <InputField
                    name="name"
                    title="Name"
                    value={formData.name}
                    error={errors.name}
                    type="text"
                    placeholder="John Doe"
                    handleChange={handleChange}
                    />
                  <InputField
                    name="email"
                    title="Email Address"
                    value={formData.email}
                    error={errors.email}
                    type="email"
                    placeholder="johndoe@info.com"
                    handleChange={handleChange}
                    />
                  <InputField
                    name="phone"
                    title="Phone Number"
                    value={formData.phone}
                    error={errors.phone}
                    type="tel"
                    placeholder="+92 300 1234567"
                    handleChange={handleChange}
                  />
                </>
              )}
              {step === 1 && (
                <>
                  <h1 className="text-4xl text-indigo-950">Select your plan</h1>
                  <p className="text-sm text-slate-500">
                    Your have the option fo monthly or yearly billing.
                  </p>
                  <ul className="space-y-4">
                    {plans.map((plan) => (
                      <li key={plan.name}>
                        <label
                          htmlFor={plan.name.toLowerCase()}
                          className={`flex items-center space-x-4 border-2 p-4 rounded-md cursor-pointer ${
                            formData.plan === plan.name
                              ? "border-indigo-950 bg-indigo-50"
                              : "border-gray-300"
                          }`}
                          onClick={() =>
                            setFormData({ ...formData, plan: plan.name })
                          }
                        >
                          <input
                            id={plan.name.toLowerCase()}
                            type="radio"
                            name="plan"
                            value={plan.name}
                            checked={formData.plan === plan.name}
                            onChange={handleChange}
                            className="hidden"
                          />
                          <Image
                            width={50}
                            height={50}
                            src={`/multi-step-form/images/icon-${plan.name.toLowerCase()}.svg`}
                            alt={`${plan.name} image`}
                          />
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {plan.name}
                            </h3>
                            <p className="text-gray-400 text-xs font-medium">
                              ${plan.price[formData.billing]}/
                              {formData.billing === "monthly" ? "mo" : "yr"}
                            </p>
                          </div>
                        </label>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-center space-x-4 bg-gray-100 rounded-md py-2 px-6">
                    <span
                      className={`font-semibold ${
                        formData.billing === "monthly"
                          ? "text-indigo-950"
                          : "text-gray-500"
                      }`}
                    >
                      Monthly
                    </span>
                    <div
                      className={`relative w-14 h-7  rounded-full cursor-pointer transition-all duration-300 ${
                        formData.billing === "monthly"
                          ? "bg-indigo-950"
                          : "bg-green-500"
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          billing:
                            prev.billing === "monthly" ? "yearly" : "monthly",
                        }))
                      }
                    >
                      <div
                        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                          formData.billing === "yearly" ? "translate-x-7" : ""
                        }`}
                      />
                    </div>
                    <span
                      className={`font-semibold ${
                        formData.billing === "yearly"
                          ? "text-green-700"
                          : "text-gray-500"
                      }`}
                    >
                      Yearly
                    </span>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <h1 className="text-4xl text-indigo-950"> Pick add-ons </h1>
                  <p className="text-sm text-slate-500">
                    Add-ons help enchace your gaming experince.
                  </p>
                  <ul className="space-y-4">
                    {addons.map((addon) => (
                      <li key={addon.name}>
                        <label
                          htmlFor={addon.name.toLowerCase()}
                          className={`flex items-center space-x-4 border-2 py-2 px-4 rounded-md cursor-pointer ${
                            formData.addons.includes(addon.name)
                              ? "border-indigo-950 bg-indigo-50"
                              : "border-gray-300"
                          }`}
                          onClick={() => handleAddonChange(addon.name)}
                        >
                          <input
                            id={addon.name.toLowerCase()}
                            type="checkbox"
                            name="addons"
                            value={addon.name}
                            checked={formData.addons.includes(addon.name)}
                            onChange={() => handleAddonChange(addon.name)}
                            className="hidden"
                          />
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {addon.name}
                            </h3>
                            <p className="text-gray-400 text-xs font-medium">
                              ${addon.price[formData.billing]}/
                              {formData.billing === "monthly" ? "mo" : "yr"}
                            </p>
                          </div>
                        </label>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {step === 3 && (
                <>
                  <h1 className="text-4xl text-indigo-950">Finishing up</h1>
                  <p className="text-sm text-slate-500">
                    Double-check everything looks OK before confirming
                  </p>

                  <div className="mt-4 p-4 border-2 border-y-indigo-950 bg-indigo-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {formData.plan} ({formData.billing})
                        </h3>
                      </div>
                      <p className="font-semibold text-gray-900">
                        $
                        {
                          plans.find((p) => p.name === formData.plan)?.price[
                            formData.billing
                          ]
                        }
                        /{formData.billing === "monthly" ? "mo" : "yr"}
                      </p>
                    </div>
                    {formData.addons.length > 0 && (
                      <>
                        <hr className="my-6 border-gray-300" />
                        <ul className="mt-2 space-y-2">
                          {formData.addons.map((addonName) => {
                            const addon = addons.find(
                              (a) => a.name === addonName
                            );
                            return addon ? (
                              <li
                                key={addon.name}
                                className="flex justify-between text-gray-700"
                              >
                                <span>{addon.name}</span>
                                <span className="font-medium">
                                  +${addon.price[formData.billing]}/
                                  {formData.billing === "monthly" ? "mo" : "yr"}
                                </span>
                              </li>
                            ) : null;
                          })}
                        </ul>
                      </>
                    )}
                  </div>
                  <div className="mt-6 flex justify-between items-center font-semibold text-gray-900 px-4">
                    <span>
                      Total (
                      {formData.billing === "monthly"
                        ? "per month"
                        : "per year"}
                      )
                    </span>
                    <span className="text-indigo-500 text-lg">
                      ${getTotal()}/
                      {formData.billing === "monthly" ? "mo" : "yr"}
                    </span>
                  </div>
                </>
              )}
            </>
          )}
          <div className="fixed bottom-0 left-0 right-0 bg-white sm:relative flex justify-between items-center py-4 px-6 sm:px-0">
            {confirmed ? (
              <>
                <button
                  onClick={() => {
                    window.location.reload();
                  }}
                  className="py-2 px-6 bg-indigo-950 text-white rounded-sm cursor-pointer mx-auto"
                >
                  Reload
                </button>
              </>
            ) : (
              <>
                <div>
                  {step > 0 && (
                    <button
                      onClick={handleBack}
                      className="py-2 px-6 text-slate-500 rounded-sm cursor-pointer"
                    >
                      {" "}
                      Go Back{" "}
                    </button>
                  )}
                </div>
                <div>
                  {step < 3 ? (
                    <button
                      onClick={handleNext}
                      className="py-2 px-6 disabled:bg-indigo-200 bg-indigo-950 text-white rounded-sm cursor-pointer"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleConfirm}
                      className="py-2 px-6 bg-indigo-950 text-white rounded-sm cursor-pointer"
                    >
                      Confirm
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="fixed sm:relative bottom-16 sm:bottom-0 left-0 right-0 py-4 text-center text-xs text-gray-500">
        <CodedBy />
      </div>
    </div>
  );
}
