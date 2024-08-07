
import React from 'react';

export function Footer() {
    return (
      <footer className="bg-gray-100 box-border">
        <div className="p-10">
          <div className="flex gap-10 flex-wrap">
          
            <div className="flex-1 flex flex-col">
              <h3 className="mb-8 text-2xl">Funiro.</h3>
              <p className="w-72 text-gray-600 text-base">
                400 University Drive Suite 200 Coral Gables,<br /> FL 33134 USA
              </p>
            </div>
  
          
            <div className="flex-1 flex flex-col">
              <p className="mb-8 text-base text-gray-600">Links</p>
              <div>
                <h4 className="mb-4 text-base">Home</h4>
                <h4 className="mb-4 text-base">Shop</h4>
                <h4 className="mb-4 text-base">About</h4>
                <h4 className="mb-4 text-base">Contact</h4>
              </div>
            </div>
  
            
            <div className="flex-1 flex flex-col">
              <p className="mb-8 text-base text-gray-600">Help</p>
              <div>
                <h4 className="mb-4 text-base">Payment Options</h4>
                <h4 className="mb-4 text-base">Returns</h4>
                <h4 className="mb-4 text-base">Privacy Policies</h4>
              </div>
            </div>
  
            {/* Coluna 4 */}
            <div className="flex-1 flex flex-col">
              <p className="mb-8 text-base text-gray-600">Newsletter</p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="border-b-2 border-black px-2 py-1 text-sm focus:outline-none"
                />
                <button
                  className="border-b-2 border-black px-2 py-1 text-sm focus:outline-none"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-black text-left text-gray-800 py-8 text-base">
            <p className="m-0">2023 Funiro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  