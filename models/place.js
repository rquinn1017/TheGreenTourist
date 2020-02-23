

module.exports = function(sequelize, DataTypes) {
 var Place = sequelize.define("Place", {
    Type:  {type: DataTypes.TEXT},
     Facility: {type: DataTypes.TEXT},
     Contact: {type: DataTypes.TEXT},
     Address: {type: DataTypes.TEXT},
     City: {type: DataTypes.TEXT},
     Zip: {type: DataTypes.INTEGER},
     Phone: {type: DataTypes.TEXT},
     Email: {type: DataTypes.TEXT},
     Website: {type: DataTypes.TEXT},
     Latitude: {type: DataTypes.DOUBLE},
     Longitude: {type: DataTypes.DOUBLE},

 });
 return Place;
};