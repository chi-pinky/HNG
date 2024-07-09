import React from 'react';

const CheckOut = () => {
    return (
        <main className="container mx-auto p-4">
            <nav className="breadcrumb mb-4 text-sm text-gray-500">
                Home &gt; Cart &gt; Checkout
            </nav>
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
            <h2 className="text-xl font-bold mb-4">Paystack</h2>
        </main>
    )

}

export default CheckOut;
