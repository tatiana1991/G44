module.exports = mongoose => {
  const Shopping = mongoose.model(
    "shopping",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean
      },
      { timestamps: true }
    )
  );

  return Shopping;
};