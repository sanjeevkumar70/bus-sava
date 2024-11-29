const PurposeModal = require("../../model/purpose");

const editPurpose = async (req, res) => {
    try {
        const id = req.params.id;
        const { purpose_name } = req.body;

        if (!purpose_name) {
            return res.status(400).json({ error: "Purpose name are required", status: 400 });
        }
        const updatedData = await PurposeModal.findByIdAndUpdate(
            id,
            { purpose_name },
            { new: true }
        );
        if (!updatedData) {
            return res.status(404).json({ error: "Purpose not found", status: 404 });
        }
        return res.status(200).json({
            message: "Purpose updated successfully",
            status: 200,
            bus: updatedData,
        });
    } catch (error) {
        console.error("Error updating bus:", error);
        return res.status(500).json({ error: "Failed to update bus", status: 500 });
    }
};

module.exports = { editPurpose };
