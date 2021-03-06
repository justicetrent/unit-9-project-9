module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('course',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { msg: 'Course.title property is required' }
                },

            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notEmpty: { msg: 'Course.description property is required' }
                }
            },
            estimatedTime: {
                type: DataTypes.STRING,
                allowNull: true
            },
            materialsNeeded: {
                type: DataTypes.STRING,
                allowNull: true
            }
        })
    //Associations
    Course.associate = models => {
        Course.belongsTo(models.User, {
            as: 'user',
            foreignKey: {
                fieldName: 'userId',
                allowNull: false
            }
        })
    }
    return Course
}