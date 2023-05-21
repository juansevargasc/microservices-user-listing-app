module. exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable("listings",{
        id: {
            allowull: false, 
            autoIncrement: true, 
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED
        }, 
        title: {
            allowull: false, 
            type: DataTypes.STRING
        }, 
        description: {
            allowull: false, 
            type: DataTypes.TEXT
        },
        createdAt: {
            allowull: false, 
            type: DataTypes.DATE
        },
        updatedAt: {
            allowull: false, 
            type: DataTypes.DATE
        }, deletedAt: {
            allowull: true, 
            type: DataTypes.DATE
        },
    }, 
    {
        charset: "utf8"
    }
    );
    
};
        