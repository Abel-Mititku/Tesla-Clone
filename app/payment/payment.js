"use client";
import { useState } from "react";

export default function Payment() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireMonth, setExpireMonth] = useState("");
  const [expireYear, setExpireYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [billingZipCode, setBillingZipCode] = useState("");
  const [deliveryZipCode, setDeliveryZipCode] = useState("");
  const [submitOrder, setSubmitOrder] = useState(false);
  const [errorOnOrder, setErrorOnOrder] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorOnOrder(null);
    setSubmitOrder(true);
    let hasError = false;

    if (!firstName?.trim()) {
      setErrorOnOrder("First name is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!lastName?.trim()) {
      setErrorOnOrder("Last name is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!email?.trim()) {
      setErrorOnOrder("Email is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (email !== confirmEmail) {
      setErrorOnOrder("Emails do not match.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!phone?.trim()) {
      setErrorOnOrder("Emails do not match.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!cardName?.trim()) {
      setErrorOnOrder("Cardholder name is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!cardNumber?.trim()) {
      setErrorOnOrder("Card number is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!expireMonth) {
      setErrorOnOrder("Expiration month is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!expireYear) {
      setErrorOnOrder("Expiration year is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!securityCode?.trim()) {
      setErrorOnOrder("Security code is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!billingZipCode?.trim()) {
      setErrorOnOrder("Billing ZIP code is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!deliveryZipCode?.trim()) {
      setErrorOnOrder("Delivery ZIP code is required.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorOnOrder("Please enter a valid email address.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!/^\d{16}$/.test(cardNumber)) {
      setErrorOnOrder("Card number must be 16 digits.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!/^\d{3,4}$/.test(securityCode)) {
      setErrorOnOrder("Invalid security code.");
      hasError = true;
      setSubmitOrder(false);
    }
    if (!/^\d{5}$/.test(billingZipCode)) {
      setErrorOnOrder("Invalid ZIP code.");
      hasError = true;
      setSubmitOrder(false);
    }

    if (!hasError) {
      setTimeout(() => {
        setSubmitOrder(false);
        alert("✅ Order placed successfully!");
      }, 500);
    }
  };

  return (
    <form className="flex flex-col items-start w-[80%]" onSubmit={handleSubmit}>
      <p className="mt-4 font-bold mb-4">Enter Account Details</p>
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        id="first-name"
        className="mt-2 w-full dark:text-black dark:focus:border-black-600  bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        className="mt-2 w-full dark:text-black dark:focus:border-black-600  bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        className="mt-2 w-full dark:text-black dark:focus:border-black-600  bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="confirm-email">Confirm Email</label>
      <input
        type="email"
        id="confirm-email"
        className="mt-2 w-full dark:text-black dark:focus:border-black-600  bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
        onChange={(e) => setConfirmEmail(e.target.value)}
      />
      <label htmlFor="mobile">Mobile Number</label>
      <input
        type="phone"
        id="mobile"
        className="mt-2 w-full dark:text-black dark:focus:border-black-600  bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
        onChange={(e) => phone(e.target.value)}
      />
      <p className="text-xs">
        By proceeding, I authorize Tesla to contact me about this request as
        well as with more information about Tesla products, services and
        regional events via the contact information I provide. I understand
        calls or texts may use automatic or computer-assisted dialing or
        pre-recorded messages. Normal message and data rates apply. I can opt
        out at any time in the Tesla app or by unsubscribing. This is not
        required for purchase.
      </p>
      <p className="mt-4 font-bold mb-4">Card</p>
      <label htmlFor="card-name">Name on Card</label>
      <input
        type="text"
        id="card-name"
        className="mt-2 w-full dark:text-black dark:focus:border-black-600  bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
        onChange={(e) => setCardName(e.target.value)}
      />
      <label htmlFor="card-number">Card Number</label>
      <input
        type="text"
        id="card-number"
        className="mt-2 w-full dark:text-black dark:focus:border-black-600  bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <label htmlFor="expiration-month">Expiration Month</label>
      <input
        type="text"
        id="expiration-month"
        className="mt-2 w-full dark:text-black dark:focus:border-black-600  bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
        onChange={(e) => setExpireMonth(e.target.value)}
      />
      <label htmlFor="expiration-year">Expiration Year</label>
      <input
        type="text"
        id="expiration-year"
        className="mt-2 w-full dark:text-black dark:focus:border-black-600  bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
        onChange={(e) => setExpireYear(e.target.value)}
      />
      <label htmlFor="security-code">Security Code</label>
      <input
        type="text"
        id="security-code"
        className="mt-2 w-full dark:text-black dark:focus:border-black-600  bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
        onChange={(e) => setSecurityCode(e.target.value)}
      />

      <label htmlFor="billing-zip-code">Billing ZIP Code</label>
      <input
        type="text"
        id="billing-zip-code"
        className="mt-2 w-full dark:text-black dark:focus:border-black-600  bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
        onChange={(e) => setBillingZipCode(e.target.value)}
      />
      <label htmlFor="delivery-zip">Delivery ZIP</label>
      <input
        type="text"
        id="delivery-zip"
        placeholder="Enter ZIP Code"
        className="mt-2 w-full dark:text-black dark:focus:border-black-600  bg-gray-100 h-10 mb-4 focus:border-gray-600/80 focus:ring-1 focus:ring-gray-400 outline-none transition-all duration-300 rounded p-2 "
        onChange={(e) => setDeliveryZipCode(e.target.value)}
      />
      <p className="text-xs">
        By placing this order, I agree to the Model 3 Order Agreement, Terms of
        Use, and Privacy Notice.
      </p>
      {errorOnOrder && <p className="text-xs text-red-500">{errorOnOrder}</p>}
      <button
        type="submit"
        className={`bg-blue-800/50 w-full mb-8 mt-4 h-10 text-white font-bold hover:bg-blue-800/80 ${
          submitOrder && `bg-blue-800/80 border-2 border-black`
        }`}
      >
        {submitOrder ? `Placing order` : `Place Order`}
      </button>
    </form>
  );
}
