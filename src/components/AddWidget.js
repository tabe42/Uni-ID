import React from "react";
import { useState, useEffect } from "react";

export const AddWidget = ({ name, admno, card1, card2, card3 }) => {
  return (
    <>
      <p>{name}</p>
      <p>{admno}</p>
      <div className="flex flex-row justify-between items-center space-x-4">
        <p>CARD 1</p>
        <p className="bg-green-500 p-4 rounded-md shadow-md text-white">
          {card1}
        </p>
      </div>
      <div className="flex flex-row justify-between items-center space-x-4">
        <p>CARD 2</p>
        <p className="bg-green-500 p-4 rounded-md shadow-md text-white">
          {card2}
        </p>
      </div>
      <div className="flex flex-row justify-between items-center space-x-4">
        <p>CARD 3</p>
        <p className="bg-green-500 p-4 rounded-md shadow-md text-white">
          {card3}
        </p>
      </div>
    </>
  );
};
