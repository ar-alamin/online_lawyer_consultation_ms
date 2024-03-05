import Booking from "../models/BookingSchema.js";
import Lawyer from "../models/LawyerSchema.js";

// update Lawyer
export const updateLawyer = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedLawyer = await Lawyer.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedLawyer,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};

// delete Lawyer
export const deleteLawyer = async (req, res) => {
  const id = req.params.id;

  try {
    await Lawyer.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

// getSingle Lawyer
export const getSingleLawyer = async (req, res) => {
  const id = req.params.id;

  try {
    const lawyer = await Lawyer.findById(id)
      .populate("reviews")
      .select("-password");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: lawyer,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

// getAll Lawyer
export const getAllLawyer = async (req, res) => {
  try {
    const { query } = req.query;
    let lawyers;

    if (query) {
      // Search based on lawyer name or specialization
      lawyers = await Lawyer.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } }, // Case-insensitive regex search on the name field
          { specialization: { $regex: query, $options: "i" } }, // Case-insensitive regex search on the specialization field
        ],
      }).select("-password");
    } else {
      // Get all approved lawyers
      lawyers = await Lawyer.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res.status(200).json({
      success: true,
      message: "Successful",
      data: lawyers,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

export const getLawyerProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await Lawyer.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    const appointments = await Booking.find({ lawyer: userId });

    const { password, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "Successfully ",
      data: { ...rest, appointments },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong! cannot get!" });
  }
};

// Define the controller function to fetch all lawyers
export const getAllLawyers = async (req, res) => {
  try {
    // Use the find method to retrieve all lawyers
    const lawyers = await Lawyer.find();

    return res.status(200).json(lawyers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Define the controller function to update the status
export const approveLawyer = async (req, res) => {
  try {
    const { id } = req.params; // Get the lawyer ID from the request parameters

    // Check if the lawyer with the given ID exists
    const lawyer = await Lawyer.findById(id);

    if (!lawyer) {
      return res.status(404).json({ message: 'Lawyer not found' });
    }

    // Update the lawyer's status to "approved"
    lawyer.isApproved = "approved";

    // Save the updated lawyer document
    await lawyer.save();

    return res.status(200).json({ message: 'Lawyer status updated to approved' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const deleteUnapprovedLawyers = async () => {
  const unapprovedLawyers = await Lawyer.find({
    isApproved: "pending",
    // createdAt: { $lte: new Date(Date.now() - timeThreshold) },
  });

  for (const lawyer of unapprovedLawyers) {
    // Delete the unapproved lawyer
    await Lawyer.findByIdAndDelete(lawyer._id);
  }
};
