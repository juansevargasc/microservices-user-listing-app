module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable("userSessions",{
        id: {
            allowull: false, 
            primaryKey: true,
            type: DataTypes.UUID,
        }, 
        userId: {
            allowull: false, 
            references: {
                key: "id",
                model: "users"
            },
            type: DataTypes.UUID
        }, 
        expiresAt: {
            allowull: false, 
            type: DataTypes.DATE
        },
        createdAt: {
            allowull: false, 
            type: DataTypes.DATE
        },
    }, 
    {
        charset: "utf8"
    }
    );
    
};

module.exports.down = queryInterface => queryInterface.dropTable("userSessions");