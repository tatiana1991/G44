module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        id: Number,
        Name: String,
        Location: String,
        Evaluation: Number
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const PersonalShopper = mongoose.model(
        "personalshopper", schema);
    return PersonalShopper;
  };
