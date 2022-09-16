import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? "bg-orange-400" : "bg-gray-900";

	const btnClasses = ["px-2 py-2 border text-white rounded-md", btnBgClassName];

  return (
		<div className="flex justify-between container border-gray-600 border-2 border-solid py-2 my-6 text-center">
      <img src={product.image} className="w-1/4" />
			<div className="flex flex-col justify-center">
				<p>{product.title}</p>
				<p>{product.price}</p>
			</div>
      <button
        onClick={() => setDetails((prev) => !prev)}
        className={btnClasses.join(' ')}
      >
        {details ? "Hide details" : "Show details"}
      </button>

      {details && 
        <div>
					<p>{product.description}</p>
					<p>Rate: <span style={{ color: 'red'}}>{product?.rating?.rate}</span></p>
				</div>
			}
      {/* <p className="font-bold">{product.price}</p> */}
		</div>
		
  );
}
