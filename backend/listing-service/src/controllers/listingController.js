const Listing = require('../models/Listing');

const getListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createListing = async (req, res) => {
  const { title, description, price } = req.body;
  try {
    const listing = new Listing({ title, description, price });
    const savedListing = await listing.save();
    res.status(201).json(savedListing);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateListing = async (req, res) => {
  const { id } = req.params;
  const { title, description, price } = req.body;
  try {
    const updatedListing = await Listing.findByIdAndUpdate(id, { title, description, price }, { new: true });
    res.json(updatedListing);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteListing = async (req, res) => {
  const { id } = req.params;
  try {
    await Listing.findByIdAndDelete(id);
    res.json({ message: 'Listing deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getListings, createListing, updateListing, deleteListing };
