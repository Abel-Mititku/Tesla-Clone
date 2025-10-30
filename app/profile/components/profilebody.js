"use client";
import { supabase } from "@/app/lib/supabaseClient";
import { Home, ListOrdered, X } from "lucide-react";
import { UserCircle } from "lucide-react";
import { CreditCard } from "lucide-react";
import { Share } from "lucide-react";
import { History } from "lucide-react";
import { LogOut } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { routerServerGlobal } from "next/dist/server/lib/router-utils/router-server-context";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfileBody() {
  const [list, setList] = useState(false);
  const [myProducts, setMyProducts] = useState(true);
  const [account, setAccount] = useState(false);
  const [payment, setPayment] = useState(false);
  const [refer, setRefer] = useState(false);
  const [history, setHistory] = useState(false);
  const [signout, setSingout] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    if (window.confirm("Log Out?")) {
      const { error } = await supabase.auth.signOut();
      if (error) {
        window.alert(error.message);
      }
      router.replace("/");
    }
  };

  return (
    <div className="pt-16 [@media(min-width:950px)]:pt-25 flex [@media(max-width:950px)]:flex-col relative">
      {list && (
        <div className="w-screen h-[200vh] backdrop-blur [@media(min-width:950px)]:hidden flex absolute top-0 left-0 z-10"></div>
      )}
      <div className="ml-8 mt-4 [@media(min-width:950px)]:mt-16">
        <div className="flex flex-col relative z-10 [@media(min-width:950px)]:hidden">
          {list && (
            <X
              className="absolute top-0 right-5 cursor-pointer"
              onClick={() => setList(false)}
            />
          )}
          {!list && (
            <div
              className={`flex cursor-pointer mb-6 mt-16 text-xl font-bold opacity-[0.8]opacity-[1] items-center`}
              onClick={() => {
                setList(true);
              }}
            >
              <div
                className={`bg-gray-100 rounded-full flex items-center justify-center w-8 h-8 mr-2`}
              >
                {myProducts && <Home className="opacity-[0.8]" />}{" "}
                {account && <UserCircle className="opacity-[0.8]" />}{" "}
                {payment && <CreditCard className="opacity-[0.8]" />}{" "}
                {refer && <Share className="opacity-[0.8]" />}{" "}
                {history && <History className="opacity-[0.8]" />}{" "}
                {signout && <LogOut className="opacity-[0.8]" />}
              </div>
              <p>
                {myProducts && `My Products`} {account && `Account Settings`}{" "}
                {payment && `Payment Method`} {refer && `Refer and Earn`}{" "}
                {history && `Order History`} {signout && `Sign Out`}{" "}
              </p>
              {!list && <ChevronDown className="ml-2" />}
            </div>
          )}

          {list && (
            <div className="flex flex-col space-y-6">
              <div
                className={`flex mb-6 mt-16 text-xl font-bold opacity-[0.8] hover:opacity-[1] cursor-pointer ${
                  myProducts && `opacity-[1]`
                } items-center`}
                onClick={() => {
                  setList(false);
                  setMyProducts(true);
                  setAccount(false);
                  setHistory(false);
                  setPayment(false);
                  setRefer(false);
                  setSingout(false);
                }}
              >
                <div
                  className={`${
                    myProducts && `bg-gray-100 rounded-full`
                  } flex items-center justify-center w-8 h-8 mr-2`}
                >
                  <Home className="opacity-[0.8]" />
                </div>
                <p>My Products</p>
              </div>
              <div
                className={`flex text-xl font-bold opacity-[0.8] hover:opacity-[1] cursor-pointer ${
                  account && `opacity-[1]`
                } items-center`}
                onClick={() => {
                  setList(false);
                  setMyProducts(false);
                  setAccount(true);
                  setHistory(false);
                  setPayment(false);
                  setRefer(false);
                  setSingout(false);
                }}
              >
                <div
                  className={`${
                    account && `bg-gray-100 rounded-full`
                  } flex items-center justify-center w-8 h-8 mr-2`}
                >
                  <UserCircle className="opacity-[0.8]" />
                </div>
                <p>Account Settings</p>
              </div>
              <div
                className={`flex text-xl font-bold opacity-[0.8] hover:opacity-[1] cursor-pointer ${
                  payment && `opacity-[1]`
                } items-center`}
                onClick={() => {
                  setList(false);
                  setMyProducts(false);
                  setAccount(false);
                  setHistory(false);
                  setPayment(true);
                  setRefer(false);
                  setSingout(false);
                }}
              >
                <div
                  className={`${
                    payment && `bg-gray-100 rounded-full`
                  } flex items-center justify-center w-8 h-8 mr-2`}
                >
                  <CreditCard className="opacity-[0.8]" />
                </div>
                <p>Payment Method</p>
              </div>
              <div
                className={`flex text-xl font-bold opacity-[0.8] hover:opacity-[1] cursor-pointer ${
                  refer && `opacity-[1]`
                } items-center`}
                onClick={() => {
                  setList(false);
                  setMyProducts(false);
                  setAccount(false);
                  setHistory(false);
                  setPayment(false);
                  setRefer(true);
                  setSingout(false);
                }}
              >
                <div
                  className={`${
                    refer && `bg-gray-100 rounded-full`
                  } flex items-center justify-center w-8 h-8 mr-2`}
                >
                  <Share className="opacity-[0.8]" />
                </div>
                <p>Refer and Earn</p>
              </div>
              <div
                className={`flex text-xl font-bold opacity-[0.8] hover:opacity-[1] cursor-pointer ${
                  history && `opacity-[1]`
                } items-center`}
                onClick={() => {
                  setList(false);
                  setMyProducts(false);
                  setAccount(false);
                  setHistory(true);
                  setPayment(false);
                  setRefer(false);
                  setSingout(false);
                }}
              >
                <div
                  className={`${
                    history && `bg-gray-100 rounded-full`
                  } flex items-center justify-center w-8 h-8 mr-2`}
                >
                  <History className="opacity-[0.8]" />
                </div>
                <p>Order History</p>
              </div>
              <div
                className={`flex text-xl font-bold opacity-[0.8] hover:opacity-[1] cursor-pointer ${
                  signout && `opacity-[1]`
                } items-center`}
                onClick={() => {
                  setList(false);
                  setMyProducts(false);
                  setAccount(false);
                  setHistory(false);
                  setPayment(false);
                  setRefer(false);
                  setSingout(true);
                  handleLogout();
                }}
              >
                <div
                  className={`${
                    signout && `bg-gray-100 rounded-full`
                  } flex items-center justify-center w-8 h-8 mr-2`}
                >
                  <LogOut className="opacity-[0.8]" />
                </div>
                <p>Sign Out</p>
              </div>
            </div>
          )}
        </div>
        <ul className="flex flex-col font-bold space-y-6 hidden [@media(min-width:950px)]:flex">
          <li
            className={`flex items-center cursor-pointer hover:opacity-[1] ${
              myProducts && `opacity-[1]`
            } opacity-[0.8]`}
            onClick={() => {
              setMyProducts(true);
              setAccount(false);
              setHistory(false);
              setPayment(false);
              setRefer(false);
              setSingout(false);
            }}
          >
            <div
              className={`${
                myProducts && `bg-gray-100 rounded-full`
              } flex items-center justify-center w-8 h-8 mr-2`}
            >
              <Home className="w-5 h-5 opacity-[0.8]" />
            </div>
            <p>My Products</p>
          </li>
          <li
            className={`flex items-center cursor-pointer hover:opacity-[1] ${
              account && `opacity-[1]`
            } opacity-[0.8]`}
            onClick={() => {
              setMyProducts(false);
              setAccount(true);
              setHistory(false);
              setPayment(false);
              setRefer(false);
              setSingout(false);
            }}
          >
            <div
              className={`${
                account && `bg-gray-100 rounded-full`
              } flex items-center justify-center w-8 h-8 mr-2`}
            >
              <UserCircle className="w-5 h-5" />
            </div>
            <p>Account Settings</p>
          </li>
          <li
            className={`flex items-center cursor-pointer hover:opacity-[1] ${
              payment && `opacity-[1]`
            } opacity-[0.8]`}
            onClick={() => {
              setMyProducts(false);
              setAccount(false);
              setHistory(false);
              setPayment(true);
              setRefer(false);
              setSingout(false);
            }}
          >
            <div
              className={`${
                payment && `bg-gray-100 rounded-full`
              } flex items-center justify-center w-8 h-8 mr-2`}
            >
              <CreditCard className="w-5 h-5" />
            </div>
            <p>Payment Method</p>
          </li>
          <li
            className={`flex items-center cursor-pointer hover:opacity-[1] ${
              refer && `opacity-[1]`
            } opacity-[0.8]`}
            onClick={() => {
              setMyProducts(false);
              setAccount(false);
              setHistory(false);
              setPayment(false);
              setRefer(true);
              setSingout(false);
            }}
          >
            <div
              className={`${
                refer && `bg-gray-100 rounded-full`
              } flex items-center justify-center w-8 h-8 mr-2`}
            >
              <Share className="w-5 h-5" />
            </div>
            <p>Refer and Earn</p>
          </li>
          <li
            className={`flex items-center cursor-pointer hover:opacity-[1] ${
              history && `opacity-[1]`
            } opacity-[0.8]`}
            onClick={() => {
              setMyProducts(false);
              setAccount(false);
              setHistory(true);
              setPayment(false);
              setRefer(false);
              setSingout(false);
            }}
          >
            <div
              className={`${
                history && `bg-gray-100 rounded-full`
              } flex items-center justify-center w-8 h-8 mr-2`}
            >
              <History className="w-5 h-5" />
            </div>
            <p>Order History</p>
          </li>
          <li
            className={`flex items-center cursor-pointer hover:opacity-[1] ${
              signout && `opacity-[1]`
            } opacity-[0.8]`}
            onClick={() => {
              setMyProducts(false);
              setAccount(false);
              setHistory(false);
              setPayment(false);
              setRefer(false);
              setSingout(true);
              handleLogout();
            }}
          >
            <div
              className={`${
                signout && `bg-gray-100 rounded-full`
              } flex items-center justify-center w-8 h-8 mr-2`}
            >
              <LogOut className="w-5 h-5" />
            </div>
            <p>Sign Out</p>
          </li>
        </ul>
      </div>
      <div className="ml-8 [@media(min-width:950px)]:ml-30">
        <div className="hidden [@media(min-width:950px)]:flex">
          <p className="text-3xl font-bold hidden [@media(min-width:950px)]:flex">
            {myProducts && `My Products`} {account && `Account Settings`}{" "}
            {payment && `Payment Method`} {refer && `Refer and Earn`}{" "}
            {history && `Order History`} {signout && `Signing Out`}{" "}
          </p>
        </div>
        <div className="flex justify-center w-[90%]">
          {myProducts && (
            <div className="grid [@media(min-width:600px)]:grid-cols-2 grid-cols-1">
              <div className="border rounded border-gray-600/50 h-[180px] mr-4 mt-4 mb-4">
                <img
                  src="/assets/profile/solar-marketing_636x300_4bd7119e4705e.jpg"
                  className="w-[300px] h-[120px] rounded"
                />
                <div className="ml-4 mt-4 text-xs">
                  <p>Order Tesla Solar</p>
                  <p className="opacity-[0.8]">
                    Produce energy to power your Tesla life
                  </p>
                </div>
              </div>
              <div className="border rounded border-gray-600/50 h-[180px] mr-4 mt-4 mb-4">
                <img
                  src="/assets/profile/Family_b9d3b7c65fa26.jpg"
                  className="w-[300px] h-[120px] rounded"
                />
                <div className="ml-4 mt-4 text-xs">
                  <p> Reserve a Car</p>
                  <p className="opacity-[0.8]">Browse our models</p>
                </div>
              </div>
              <div className="border rounded border-gray-600/50 h-[180px] mr-4 mb-4">
                <img
                  src="/assets/profile/third-party-car_636x300_ed18888cb5f98.jpg"
                  className="w-[300px] h-[150px] rounded"
                />
                <div className="ml-4 mt-4 text-xs">
                  <p className="mb-4">Purchased a car from a third party?</p>
                </div>
              </div>
            </div>
          )}
          {(payment || account || refer || history) && (
            <div className="w-full flex justify-center items-center">
              <p>This section is under maintenance please comeback later</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
