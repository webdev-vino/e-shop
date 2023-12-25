import React from "react";
import "./services.css";


const Services = () => {

    const data = [
        {
            title: "FREE SHIPPING",
            content: "Free shipping on all orders over ₹499",
            icon: "fa-solid fa-truck-fast fa-3x"
        },
        {
            title: "7 DAYS RETURN",
            content: "Returning your order for free is easy: just send us an email",
            icon: "fa-solid fa-box-open fa-3x"
        },
        {
            title: "GIFT CARD",
            content: "Give something extraordinary with our gift cards",
            icon: "fa-solid fa-gift fa-3x"
        },
        {
            title: "NEED ADVICE? ASK US!",
            content: "Call us at anytime you want:+91 00000 00000",
            icon: "fa-regular fa-handshake fa-3x"
        }
    ]


    return (
        <div className="service"> 
        {data.map((data) => (
            
            <div className="truck">
                <i class= {data.icon}></i>
                <h3>{data.title}</h3>
                <p>{data.content}</p>
            </div>
            ))}
        </div>
    );
}

export default Services;