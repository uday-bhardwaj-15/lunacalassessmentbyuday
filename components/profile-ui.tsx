"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "lucide-react";

export function ProfileUi() {
  const [activeTab, setActiveTab] = useState("About Me");
  const tabs = ["About Me", "Experiences", "Recommended"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#373E44] to-[#191B1F] p-8 flex justify-end">
      <div className="w-full max-w-2xl space-y-6">
        <div className="bg-[#363C43] rounded-lg p-6 space-y-4 ">
          <div className="tab-container  justify-stretch">
            <input type="radio" name="tab" id="tab1" className="tab tab--1" />
            <label className="tab_label " htmlFor="tab1">
              About Me
            </label>

            <input type="radio" name="tab" id="tab2" className="tab tab--2" />
            <label className="tab_label" htmlFor="tab2">
              Experiences
            </label>

            <input type="radio" name="tab" id="tab3" className="tab tab--3" />
            <label className="tab_label" htmlFor="tab3">
              Recommended
            </label>

            <div className="indicator"></div>
          </div>
          <div className="text-gray-300 text-sm">
            <p>
              Hello! I'm Dave, your sales rep here from Salesforce. I've been
              working at this awesome company for 3 years now.
            </p>
            <p className="mt-2">
              I was born and raised in Albany, NY & have been living in Santa
              Carla for the past 10 years my wife Tiffany and my 4 year old twin
              daughters - Emma and Ella. Both of them are just starting school,
              so my calender is usually blocked between 9-10 AM. This is a...
            </p>
          </div>
        </div>
        <div className="bg-[#363C43] rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div className="px-4 py-2 w-[149px] h-[62px] bg-[#171717] text-white rounded-full text-[20px] font-medium mt-8 inline-flex items-center justify-center ">
              Gallery
            </div>
            <div className="flex items-center space-x-2">
              <button className="btn-addimg bg-[#363C43] ">
                <a className=" w-[9.58px] h-[9.58px] pr-1">+</a>
                <span className="text-[12px] ">ADD IMAGE</span>
              </button>

              <div className="button-container">
                <button className="button-3d">
                  <div className="button-top">
                    <span className="material-icons">❮</span>
                  </div>
                  <div className="button-bottom"></div>
                  <div className="button-base"></div>
                </button>
                <button className="button-3d">
                  <div className="button-top">
                    <span className="material-icons">❯</span>
                  </div>
                  <div className="button-bottom"></div>
                  <div className="button-base"></div>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-700 rounded-lg overflow-hidden"
              >
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt={`Gallery image ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
