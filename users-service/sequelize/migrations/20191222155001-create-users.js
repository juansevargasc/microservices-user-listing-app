module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable("users",{
        id: {
            allowull: false, 
            primaryKey: true,
            type: DataTypes.UUID,
        }, 
        email: {
            allowull: false, 
            type: DataTypes.STRING,
            unique: true
        }, 
        passwordHash: {
            allowull: false, 
            type: DataTypes.CHAR(64)
        },
        createdAt: {
            allowull: false, 
            type: DataTypes.DATE
        },
        updatedAt: {
            allowull: false, 
            type: DataTypes.DATE
        }, 
        deletedAt: {
            allowull: true, 
            type: DataTypes.DATE
        },
    }, 
    {
        charset: "utf8"
    }
    );
    
};

module.exports.down = queryInterface => queryInterface.dropTable("users");