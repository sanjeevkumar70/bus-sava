const RatesModal = require("../../model/rates"); 

const rateList = async (req, res) => {
    try {
        const data = await RatesModal.find();
        return res.status(200).json({ data: data,count:data.length, status: 200 });
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch bus list", status: 500 });
    }
};

module.exports = { rateList };
