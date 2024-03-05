import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    lawyer: {
      type: mongoose.Types.ObjectId,
      ref: "Lawyer",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketPrice: { type: String, required: true },

    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

bookingSchema.pre(/^find/, function (next) {
  this.populate("user").populate({
    path: "lawyer",
    select: "name",
  });

  next();
});

export default mongoose.model("Booking", bookingSchema);
