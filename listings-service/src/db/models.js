 import { DataTypes, Model } from "sequelize";  

 import sequelize from "#root/db/connection";

export class Listing extends Model {}
Listing.init(
    {
        title: {
            allowNull: false,
            type: DataTypes.STRING
        }, 
        description: {
            allowNull: false, 
            type: DataTypes.TEXT
        }
    },
    {
        modelName: "listings",
        sequelize
    }
);
