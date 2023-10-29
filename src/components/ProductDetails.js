import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { setApproved } from "../actions";
import {
    Button,
    Categories,
    Label,
    LeftCategory,
    PrinterButton,
    ProductsCategory,
    RightCategory,
    SearchCategory,
    SearchIcon,
    SearchInput,
    Wrapper,
} from "./styled/ProductDetailsStyles";
import ProductModal from "./ProductModal";
import ProductTableRow from "./ProductTableRow";

export default function ProductDetails() {
    // get products from redux store
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    // set up modal for missing urgent
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [currentProductId, setCurrentProductId] = React.useState(null);

    Modal.setAppElement("#root");

    const handleOpenModal = (id) => {
        setCurrentProductId(id);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setCurrentProductId(null);
    };

    const handleApprove = (id) => {
        dispatch(setApproved(id));
    };

    return (
        <Wrapper>
            <Categories>
                <SearchCategory>
                    <LeftCategory>
                        <Label htmlFor='search'>
                            <SearchIcon />
                            <SearchInput id='search' placeholder='Search...' />
                        </Label>
                    </LeftCategory>
                    <RightCategory>
                        <Button>Add Item</Button>
                        <PrinterButton />
                    </RightCategory>
                </SearchCategory>
                <ProductsCategory>
                    <table>
                        <thead>
                            <tr>
                                <th>Product name</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Iterate over products from the state */}
                            {products.map((product) => (
                                <ProductTableRow
                                    product={product}
                                    handleApprove={handleApprove}
                                    handleOpenModal={handleOpenModal}
                                    key={product.id}
                                />
                            ))}
                        </tbody>
                    </table>
                </ProductsCategory>
            </Categories>
            {/* Render the modal here */}
            <ProductModal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                currentProductId={currentProductId}
                dispatch={dispatch}
            />
        </Wrapper>
    );
}
