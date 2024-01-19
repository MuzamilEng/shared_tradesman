const TrademanSchema = require('../models/Tradesmen');
const cloudinary = require('../cloudinary.config')
// Function to update an existing trademan
const createTrademanProfile = async (req, res) => {
  try {
    const { occupation, username, email, ratings, hourlyRate, description, location, lat, lng, phoneNumber } = req.body;
    const parsedLat = Number(lat?.[1]);
    const parsedLng = Number(lng?.[1]);

    let mainImageURL;

    // Handle image updates
    if (req.file) {
      const mainImage = req.file;
      const mainImageResult = await cloudinary.uploader.upload(mainImage.path, {
        folder: 'Assets',
      });
      mainImageURL = mainImageResult.secure_url;
    }

    const newContent = new TrademanSchema({
      occupation, username, email, ratings, hourlyRate, description, location, image: mainImageURL, lat: parsedLat, lng: parsedLng, phoneNumber
    });

    const savedContent = await newContent.save();

    const responseObj = {
      ...savedContent._doc,
    };

    if (mainImageURL) {
      responseObj.mainImage = mainImageURL;
    }

    res.status(201).json(responseObj);
  } catch (error) {
    console.error('Error saving product:', error);
    res.status(500).json({ message: 'Error saving product' });
  }
};

const updateTrademanProfile = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id, 'idiuytrewqlkjhgfds');
    console.log(req.files, "files");

    const existingContent = await TrademanSchema.findById(id);

    if (!existingContent) {
      return res.status(404).json({ message: 'Content not found' });
    }

    const { occupation, username, email, ratings, hourlyRate, description, location, lat, lng, phoneNumber, gigTitle, gigDescription } = req.body;
    const parsedLat = Number(lat?.[1]);
    const parsedLng = Number(lng?.[1]);

    let mainImageURL = existingContent?.image;

    // Handle image updates
    if (req.file) {
      const mainImage = req.file;
      const mainImageResult = await cloudinary.uploader.upload(mainImage.path, {
        folder: 'Assets',
      });
      mainImageURL = mainImageResult.secure_url;
    }

    // Handle gigImage1 update
    let gigImage1URL = existingContent?.gigImage1;
    if (req.files && req.files.gigImage1) {
      console.log(req.files, "enfijsidjds");
      const gigImage1 = req.files.gigImage1[0];
      const gigImage1Result = await cloudinary.uploader.upload(gigImage1.path, {
        folder: 'Assets',
      });
      gigImage1URL = gigImage1Result.secure_url;
    }

    // Handle gigImage2 update
    let gigImage2URL = existingContent?.gigImage2;
    if (req.files && req.files.gigImage2) {
      const gigImage2 = req.files.gigImage2[0];
      const gigImage2Result = await cloudinary.uploader.upload(gigImage2.path, {
        folder: 'Assets',
      });
      gigImage2URL = gigImage2Result.secure_url;
    }

    // Handle gigImage3 update
    let gigImage3URL = existingContent?.gigImage3;
    if (req.files && req.files.gigImage3) {
      const gigImage3 = req.files.gigImage3[0];
      const gigImage3Result = await cloudinary.uploader.upload(gigImage3.path, {
        folder: 'Assets',
      });
      gigImage3URL = gigImage3Result.secure_url;
    }

    // Handle video update
    let videoURL = existingContent?.video;
    if (req.files && req.files.video) {
      console.log(req.files.video[0], "video file");
      const video = req.files.video[0];
      const videoResult = await cloudinary.uploader.upload(video.path, {
        folder: 'Assets',
        resource_type: 'video', // Ensure proper resource type for video uploads
      });
      videoURL = videoResult.secure_url;
    }

    const updateFields = {
      occupation: occupation || existingContent.occupation,
      username: username || existingContent.username,
      email: email || existingContent.email,
      ratings: ratings || existingContent.ratings,
      hourlyRate: hourlyRate || existingContent.hourlyRate,
      description: description || existingContent.description,
      location: location || existingContent.location,
      gigTitle: gigTitle || existingContent?.gigTitle,
      gigDescription: gigDescription || existingContent?.gigDescription,
      image: mainImageURL,
      gigImage1: gigImage1URL,
      gigImage2: gigImage2URL,
      gigImage3: gigImage3URL,
      video: videoURL,
      lat: parsedLat || existingContent.lat,
      lng: parsedLng || existingContent.lng,
      phoneNumber: phoneNumber || existingContent.phoneNumber,
    };

    const updatedContent = await TrademanSchema.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true }
    );

    if (!updatedContent) {
      return res.status(500).json({ message: 'Failed to update content' });
    }

    res.status(200).json(updatedContent);
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Error updating profile' });
  }
};

// Get all trademans
const getAllTradesmenProfiles = async (req, res) => {
  try {
    const profiles = await TrademanSchema.find();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Get a single trademan by ID
const getTrademanProfileById = async (req, res) => {
  try {
    const profile = await TrademanSchema.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ error: 'profile not found' });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getTrademanProfileByEmail = async (req, res) => {
  const {email} = req.query;
  console.log(req.query, 'req.query');
  try {
    const profile = await TrademanSchema.findOne({email: email});
    if (!profile) {
      return res.status(404).json({ error: 'profile not found' });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Delete a trademan by ID
const deleteTrademanProfile = async (req, res) => {
  try {
    const profile = await TrademanSchema.findByIdAndRemove(req.params.id);
    if (!profile) {
      return res.status(404).json({ error: 'profile not found' });
    }
    res.status(200).json(profile);
    // console.log("Successfully deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const allTradesMen = async (req, res) => {
  console.log(req.query, 'query');
  const keyword = req.query.search ? 
  {
    $or : [
      { username: {$regex : req.query.search, $options: "i"}},
      { email: {$regex : req.query.search, $options: "i"}},
    ]
  } : {};

  try {
    const profiles = await TrademanSchema.find(keyword).find({ _id: { $ne: req.user._id } });
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const advancedSearch = async (req, res) => {
  const { price, availability, occupation, distanceRadius } = req.query;
  const parseMinPrice = parseInt(minPrice);
  const parseMaxPrice = parseInt(maxPrice);
  const parseBedrooms = parseInt(bedrooms);
  const parseBathrooms = parseInt(bathrooms);
  console.log(req.query, 'query');

  // Define an array to store the conditions for the $and operator
  const andConditions = [];

  // Check and add conditions based on the provided query parameters
  if (minPrice) {
    andConditions.push({ pricePerWeek: { $gte: parseMinPrice } });
  }
  if (maxPrice) {
    andConditions.push({ pricePerMonth: { $lte: parseMaxPrice } });
  }
  if (bedrooms) {
    andConditions.push({ bedrooms: parseBedrooms });
  }
  if (bathrooms) {
    andConditions.push({ bathrooms: parseBathrooms });
  }
  if (propertyType) {
    andConditions.push({ propertyType });
  }
  if (location) {
    andConditions.push({ location });
  }

  // Build the final search query
  const searchQuery = andConditions.length > 0 ? { $and: andConditions } : {};

  try {
    const searchResults = await TrademanSchema.find(searchQuery);
    res.status(200).json(searchResults);
  } catch (error) {
    console.error('Error during search:', error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};
const searchTrademan = async(req,res)=>{
  console.log(req.query, "Search here ");
  try{
    const query = req.query;
    console.log(query,"search")
    const searchQuery = {};
    // search by name 
    if (query.username) {
      searchQuery.username = { $regex: new RegExp(query.username, 'i') };
    }
    // search by gategory 
    if (query.occupation) {
      searchQuery.occupation = { $regex: new RegExp(query.occupation, 'i') };
    }
    // search by price
    if (query.minhourlyRate && query.maxhourlyRate) {
     searchQuery.hourlyRate = { $lte: parseFloat(query.maxhourlyRate), $gte: parseFloat(query.minhourlyRate) };
    }
    const results = await TrademanSchema.find(searchQuery);
    res.status(200).json({
      success:true,
      data: results
    });
  }catch(err){
    res.status(500).json({
      error: 'Internal server error',
    })
  }
}
module.exports = {
  createTrademanProfile,
  updateTrademanProfile,
  getAllTradesmenProfiles,
  getTrademanProfileById,
  deleteTrademanProfile,
  getTrademanProfileByEmail,
  allTradesMen,
  searchTrademan
};