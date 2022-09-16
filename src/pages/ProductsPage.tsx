import React from "react";
import { Product } from "../components/Product";
import { useProducts } from '../hooks/products'
import { Modal } from "../components/Modal"
import { CreateProduct } from "../components/CreateProduct";
import { useContext } from 'react'
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';


export function ProductsPage() {
	const { loading, error, products, addProduct } = useProducts()
	// const [modal, setModal] = useState(false)

	const { modal, open, close } = useContext(ModalContext)

	const createHandler = (product: IProduct) => {
		// setModal(false)
		close()

		addProduct(product)
	}

	return (
		<div className="text-xl font-bold">
			{loading && <p className="text-center">Loading...</p>}
			{error && <p className="text-red-500">{error}</p>}
			{products.map((product) => (<Product product={product} key={product.id} />))}


			{modal && <Modal title="Create new product" onClose={close}>
				{/* <CreateProduct onCreate={()=>setModal(false)}/> */}
				<CreateProduct onCreate={createHandler} />
			</Modal>}

			<button
				onClick={open}
				className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2 text-center">+</button>
		</div>
	)
}