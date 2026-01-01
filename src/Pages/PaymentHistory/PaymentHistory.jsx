import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure/useAxiosSecure';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: payments } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`);
            return res.data;
        }

    })
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-5">Payment History : {payments?.length}</h1>
            {
                payments && payments.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full border border-gray-300">
                            <thead >
                                <tr>
                                    <th className="text-center text-black">#</th>
                                    <th className="text-center text-black">Parcel Name</th>
                                    <th className="text-center text-black">Transaction ID</th>
                                    <th className="text-center text-black">Tracking ID</th>
                                    <th className="text-center text-black">Date</th>
                                    <th className="text-center text-black">Amount</th>
                                    <th className="text-center text-black">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    payments.map((payment, index) => (
                                        <tr key={payment._id}>
                                            <th className="text-center text-black">{index + 1}</th>
                                            <td className="text-center text-black">{payment.parcelName}</td>
                                            <td className="text-center text-black">{payment.transactionId}</td>
                                            <td className="text-center text-black">{payment.trackingId}</td>
                                            <td className="text-center text-black">{new Date(payment.paidAt).toLocaleDateString()}</td>
                                            <td className="text-center text-black">${payment.amount}</td>
                                            <td className="text-center text-black">{payment.paymentStatus}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center text-xl my-5">No payment history found.</p>
                )
            }
        </div>
    );
};

export default PaymentHistory;