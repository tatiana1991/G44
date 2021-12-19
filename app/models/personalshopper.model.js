module.exports = mongoose => {
  const PersonalShopper = mongoose.model(
    "personalShopper",
    mongoose.Schema(
      {
        id: Number,
        Name: String,
        LLocation: String,
        valuation: Number
      },
      { timestamps: true }
    )
  );

  return PersonalShopper;
};