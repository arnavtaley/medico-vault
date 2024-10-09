import React, { useState } from 'react';

interface ConfirmActionDialogProps {

}

const ConfirmActionDialog: React.FC<ConfirmActionDialogProps> = () => {
  return(
    <div className="bg-white w-full p-4 rounded-md border border-stone-400">
      <p className="text-lg text-black font-regular mb-4">Are you sure?</p>
      <div className="flex flex-row space-x-4 w-full">
        <button className="flex flex-row justify-center items-center w-96 md:w-1/2 bg-green-200 border border-green-700 text-lg text-green-700 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-white">Continue</button>
        <button className="bg-red-200 border border-red-700 text-lg text-red-700 px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white">Return</button>
      </div>
    </div>
  );
}

export default ConfirmActionDialog;