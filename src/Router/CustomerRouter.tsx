import { Route, Routes } from "react-router-dom";

import { NotFound } from "../components";
import {
  Blogs,
  BookingList,
  Contacts,
  DetailServices,
  EditBooking,
  EditProfile,
  Services
} from "../features/customer";

import { BookingStatusPage } from "../features/customer/pages/BookingStatusPage";
import CheckoutError from "../features/customer/pages/CheckoutError";
import CheckoutRemainSuccess from "../features/customer/pages/CheckoutRemainSuccess";
import CheckoutSuccess from "../features/customer/pages/CheckoutSuccess";


export default function CustomerRouter() {
  return (
    <div className="flex-1">
      <Routes>
        
        <Route path="/booking-status/:id" element={<BookingStatusPage />} />
        <Route path="/edit-booking/:id" element={<EditBooking />} />
        <Route path="/booking-list" element={<BookingList />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="/checkout-remainsucess" element={<CheckoutRemainSuccess />} />
        <Route path="/checkout-error" element={<CheckoutError />} />
        {/* Not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
