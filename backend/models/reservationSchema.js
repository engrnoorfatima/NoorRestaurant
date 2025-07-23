import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: [true, "First name is required"],
        minLength: [3, "first name must contain at least 3 characters"],
        maxLength: [30, "first name cannot exceed 30 characters"]
    },
    lastName : {
        type: String,
        required: [true, "Last name is required"],
        minLength: [3, "last name must contain at least 3 characters"],
        maxLength: [30, "last name cannot exceed 30 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Provide a valid Email"]
    },
    phone :{
        type: String,
        required: [true, "Phone number is required"],
        validate:{
            validator: function(v) {
                return /^\d{11}$/.test(v); //only 11 digits
            },
            message: "Phone number must be exactly 11 digits."
        }
    },
    time: {
        type: String,
        required: [true, "time is required"]
    },

    date: {
        type: String,
        required: [true, "date is required"]
    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema);