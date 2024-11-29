const PurposeModal = require("../../model/purpose"); 

const deletePurpose = async (req, res) => {
    try {
        const busId = req.params.id; 
        const deletedPurpose = await PurposeModal.findByIdAndDelete(busId); 
        if (!deletedPurpose) {
            return res.status(404).json({ error: "Employee not found", status: 404 });
        }
        return res.status(200).json({
            message: "Purpose deleted successfully",
            status: 200,
        });
    } catch (error) {
        return res.status(500).json({ error: "Failed to delete Employee", status: 500 });
    }
};

module.exports = { deletePurpose };
